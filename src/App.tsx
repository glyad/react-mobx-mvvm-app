import { CounterModel } from "./models/CounterModel";
import { CounterViewModel } from "./viewmodels/CounterViewModel";
import { SimplestViewModel } from "./viewmodels/SimplestViewModel";
import { CounterView } from "./views/CounterView";
import { ViewResolver } from "./components/ViewResolver";

export default function App() {
  return (
    <main>
      <CounterView viewModel={new CounterViewModel(new CounterModel())} />      
      <ViewResolver viewModel={new CounterViewModel(new CounterModel())} />
      <ViewResolver viewModel={new CounterViewModel(new CounterModel())} viewContext="blue"/>
      <ViewResolver viewModel={new CounterViewModel(new CounterModel())} viewContext="red"/>
      <ViewResolver viewModel={new SimplestViewModel()} />
      <ViewResolver viewModel={new SimplestViewModel()} viewContext="blue"/>
      <ViewResolver viewModel={new SimplestViewModel()} viewContext="green" />

    </main>
  );
}
