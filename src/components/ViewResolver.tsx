import { viewRegistry } from "../autoViewRegistry";

interface ViewResolverProps {
  viewModel: object;
  /** Name of the contextual view to render – e.g. "full", "mini" … */
  viewContext?: string;
}

export const ViewResolver: React.FC<ViewResolverProps> = ({
  viewModel,
  viewContext = "",
}) => {
  const ctor = viewModel.constructor;
  const views = viewRegistry.get(ctor);

  if (!views) {
    return (
      <div style={{ color: "crimson" }}>
        No view is found for VM: <b>{ctor.name}</b>
      </div>
    );
  }

  const View = views.get(viewContext) ?? views.get("");

  if (!View) {
    return (
      <div style={{ color: "crimson" }}>
        {viewContext && viewContext !== "" ? (
          <>
            View context <code>{viewContext}</code> not found for VM: <b>{ctor.name}</b>
          </>
        ) : (
          <>
            No view is found for VM: <b>{ctor.name}</b>
          </>
        )}
      </div>
    );
  }

  return <View viewModel={viewModel} />;
};
