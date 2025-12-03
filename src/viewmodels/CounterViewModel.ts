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
