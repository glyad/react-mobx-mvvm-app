import { Max, Min, validateOrReject, ValidationError } from "class-validator";
import { IModel } from "../framework";
import { IObjectDidChange, makeAutoObservable, observe } from "mobx";

export class CounterModel implements IModel {
  
  constructor() {
    makeAutoObservable(this);
    observe(this, (change: IObjectDidChange) => {
      if (change.type === "update" && change.newValue !== change.oldValue) {
        this.validate();
      }
    });
  }
  
  public readonly errors: ValidationError[] = [];
  
  @Min(-3)
  @Max(3)
  public value: number = 0;
 
  private validate() {
      this.errors.splice(0, this.errors.length);
      validateOrReject(this).catch((errors: ValidationError[]) => {
        this.errors.push(...errors);
        console.error(errors);
      });
    }
}
