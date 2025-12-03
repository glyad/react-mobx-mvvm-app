import { observer } from "mobx-react";
import { CounterViewModel } from "../viewmodels/CounterViewModel";
import { ErrorMessages } from "../components/error-messages";

interface Props {
  viewModel: CounterViewModel;
}

export const CounterView: React.FC<Props> = observer(({ viewModel }) => 
    <div>
      <h1 data-testid="counter-value">Counter: {viewModel.model.value}</h1>
      <ErrorMessages property="value" viewModel={viewModel} />
      <button onClick={() => viewModel.increment()}>Increment</button>
      <button onClick={() => viewModel.decrement()}>Decrement</button>
      <button onClick={() => viewModel.reset()}>Reset</button>
    </div>
  );
