import React from "react";

/**
 * Registry shape:
 *  Map<ViewModelCtor, Map<contextName, ViewComponent>>
 *
 *  The empty string ("") is reserved for the *default* (non-contextual) view.
 */
type ViewMap = Map<string, React.ComponentType<{ viewModel: unknown }>>;
const registry = new Map<Function, ViewMap>();

// ❶  Grab every TSX file sitting somewhere under /views
//     This includes default views (…View.tsx) *and* contextual ones
//     (e.g. views/Counter/full.tsx).
const viewModules = import.meta.glob("./**/views/**/*.tsx", { eager: true });

// ❷  Grab every ViewModel class so we know which base name we’re matching.
const viewModelModules = import.meta.glob(
  "./**/viewmodels/**/*ViewModel.ts",
  { eager: true },
);

/**
 * Utility: "src/viewmodels/CounterViewModel.ts"  →  "Counter"
 *          "src/views/CounterView.tsx"          →  "Counter"
 *          "src/views/Counter/full.tsx"         →  { base:"Counter", ctx:"full" }
 */
function parseViewPath(path: string): {
  base: string;
  context: string; // "" for default
} {
  // strip leading folders
  const afterViews = path.split("/views/")[1]!;
  // default view?
  if (afterViews.endsWith("View.tsx")) {
    return { base: afterViews.replace(/View\.tsx$/, ""), context: "" };
  }

  // contextual view: "<Base>/<ctx>.tsx"
  const [base, file] = afterViews.split("/");
  return { base, context: file.replace(/\.tsx$/, "") };
}

function getExport(module: unknown) {
  // allow both `export default` and `export class …`
  return (module as any).default ?? Object.values(module as any)[0];
}

// ❸  Build <VM-ctor → ViewMap>
Object.entries(viewModelModules).forEach(([vmPath, vmModule]) => {
  const vmCtor = getExport(vmModule);
  const baseName = vmPath
    .split("/")
    .pop()!
    .replace(/ViewModel\.ts$/, "");

  const viewMap: ViewMap = new Map();
  // iterate over *all* view files once; pick those whose base matches
  Object.entries(viewModules).forEach(([viewPath, viewModule]) => {
    const { base, context } = parseViewPath(viewPath);
    if (base === baseName) {
      const viewComp = getExport(viewModule);
      viewMap.set(context, viewComp);
    }
  });

  // Only register VMs that have at least one view
  if (viewMap.size > 0 && typeof vmCtor === "function") {
    registry.set(vmCtor, viewMap);
  }
});

export const viewRegistry = registry;
