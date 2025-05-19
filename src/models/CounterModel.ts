import { makeAutoObservable } from "mobx";

export class CounterModel {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }
}
