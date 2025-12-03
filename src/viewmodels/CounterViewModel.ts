import { action, autorun, computed, IObjectDidChange, makeAutoObservable, makeObservable, observable, observe } from "mobx";
import { CounterModel } from "../models/CounterModel";
import { validateOrReject, ValidationError } from "class-validator";

export class CounterViewModel {
  model: CounterModel;
  errors: ValidationError[] = [];

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
