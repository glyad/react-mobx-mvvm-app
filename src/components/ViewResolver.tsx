import { viewRegistry } from "../autoViewRegistry";

export function ViewResolver({ viewModel }: { viewModel: object }) {
  const ctor = viewModel.constructor;
  const View = viewRegistry.get(ctor);
  if (!View) return <div>View not found for VM: {ctor.name}</div>;
  return <View viewModel={viewModel} />;
}
