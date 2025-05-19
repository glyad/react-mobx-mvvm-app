// src/autoViewRegistry.ts
import React from "react";

// Find all ViewModels and Views
const viewModelModules = import.meta.glob('./**/viewmodels/**/*ViewModel.ts', { eager: true });
const viewModules = import.meta.glob('./**/views/**/*View.tsx', { eager: true });

// Build registry: Map<VM constructor, View component>
const registry = new Map<Function, React.ComponentType<{ viewModel: any }>>();

// Helper: Get "Counter" from "CounterViewModel.ts"
function baseName(filename: string, suffix: string) {
  return filename.replace(/^.*\/|\..*$/g, '').replace(suffix, '');
}

Object.entries(viewModelModules).forEach(([vmPath, vmModule]) => {
  // Get the default or named export for the VM class
  const vmClass = (<any>vmModule).default ?? Object.values(<any>vmModule)[0];
  const vmName = baseName(vmPath, "ViewModel");

  // Find matching View
  const viewEntry = Object.entries(viewModules).find(([viewPath, _]) =>
    baseName(viewPath, "View") === vmName
  );
  if (viewEntry) {
    const [_, viewModule] = viewEntry;
    const viewComp = (<any>viewModule).default ?? Object.values(<any>viewModule)[0];
    //alert(typeof vmClass + " " + typeof viewComp);
    if (typeof vmClass === "function" && (typeof viewComp === "object" || typeof viewComp === "function")) {
      registry.set(vmClass, viewComp as React.ComponentType<{ viewModel: any }>);
    }
  }
});

export const viewRegistry = registry;
