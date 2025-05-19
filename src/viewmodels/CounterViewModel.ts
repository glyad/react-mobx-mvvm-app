import { makeAutoObservable } from "mobx";
import { CounterModel } from "../models/CounterModel";

export class CounterViewModel {
  model: CounterModel;

  constructor(model: CounterModel) {
    this.model = model;
    makeAutoObservable(this);
  }

  get value() {
    return this.model.value;
  }

  increment() {
    this.model.value++;
  }

  decrement() {
    this.model.value--;
  }

  reset() {
    this.model.value = 0;
  }
}
