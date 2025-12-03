import { ErrorMessages } from "../../components/error-messages";
import { observer } from "mobx-react";
import { CounterViewModel } from "viewmodels/CounterViewModel";

interface Props {
  viewModel: CounterViewModel;
}

export const CounterView: React.FC<Props> = observer(({ viewModel }) => 
    <div>
      <h1 style={{ color: "blue" }} data-testid="counter-value">Counter: {viewModel.value}</h1>
      <ErrorMessages property="value" viewModel={viewModel} />
      <br></br>
      <button onClick={() => viewModel.increment()}>Increment</button>
      <button onClick={() => viewModel.decrement()}>Decrement</button>
      <button onClick={() => viewModel.reset()}>Reset</button>
    </div>
  );
