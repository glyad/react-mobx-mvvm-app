import React from "react";
import { CounterModel } from "./models/CounterModel";
import { CounterViewModel } from "./viewmodels/CounterViewModel";
import { CounterView } from "./views/CounterView";
import { ViewResolver } from "./components/ViewResolver";

const counterModel = new CounterModel();
const counterVM = new CounterViewModel(counterModel);

export default function App() {
  return (
    <main>
      <CounterView viewModel={new CounterViewModel(new CounterModel())} />      
      <ViewResolver viewModel={counterVM} />
    </main>
  );
}
