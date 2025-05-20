import { observer } from "mobx-react";
import { CounterViewModel } from "viewmodels/CounterViewModel";

interface Props {
  viewModel: CounterViewModel;
}

export const CounterView: React.FC<Props> = observer(({ viewModel }) => 
    <div>
      <h1 style={{ color: "red" }} data-testid="counter-value">Counter: {viewModel.model.value}</h1>
      <button onClick={() => viewModel.increment()}>Increment</button>
      <button onClick={() => viewModel.decrement()}>Decrement</button>
      <button onClick={() => viewModel.reset()}>Reset</button>
    </div>
  );
