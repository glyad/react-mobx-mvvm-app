import { ValidationError } from "class-validator";
import { makeAutoObservable } from "mobx";

export interface IModel {
  errors: ValidationError[];
}

export abstract class Model {
  public readonly errors: ValidationError[] = [];

  
}
