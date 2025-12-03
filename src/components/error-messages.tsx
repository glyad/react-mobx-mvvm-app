import { ValidationError } from "class-validator";
import { observer } from "mobx-react";

export const ErrorMessages: React.FC<{ property: string; viewModel: any }> = observer(({ property, viewModel }) => (
  <>
    {viewModel.model.errors.filter((error: ValidationError) => error.property === property).map((error: ValidationError) => (
      // The 'key' prop is crucial for performance and stability
      <div key={viewModel.model.errors.indexOf(error)} style={{ color: "purple" }}>{error.toString()}</div>
    ))}
  </>
));
