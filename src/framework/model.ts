import { validateOrReject, ValidationError } from "class-validator";
import { makeAutoObservable, observe, IObjectDidChange } from "mobx";

export function Model() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // Store the original constructor 
    const original = constructor;

    // Create new constructor function
    const newConstructor: any = function (...args: any[]) {
      const instance = new original(...args);
      
      // Add observe logic to constructor
      makeAutoObservable(instance);
      observe(instance, (change: IObjectDidChange) => {
        if (change.type === "update" && change.newValue !== change.oldValue) {
          (instance as any).validate();
        }
      });
      
      return instance;
    }

    // Copy prototype
    newConstructor.prototype = original.prototype;

    // Add validate method to prototype 
    newConstructor.prototype.validate = function() {
      this.errors.splice(0, this.errors.length);
      validateOrReject(this).catch((errors: ValidationError[]) => {
        this.errors.push(...errors);
      });
    }

    newConstructor.prototype.errors = [];

    return newConstructor;
  }
}
