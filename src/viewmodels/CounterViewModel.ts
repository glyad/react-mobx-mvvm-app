import { makeAutoObservable } from "mobx";
import { CounterModel } from "../models/CounterModel";

export class CounterViewModel {
  model: CounterModel;

  constructor(model: CounterModel) {
    this.model = model;
    makeAutoObservable(this);
  }

  increment() {
    this.model.increment();
  }

  decrement() {
    this.model.decrement();
  }

  reset() {
    this.model.reset();
  }
}
