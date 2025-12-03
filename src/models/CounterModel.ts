import { Max, Min } from "class-validator";
import { Model } from "../framework";

@Model()
export class CounterModel {

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
  
  reset() {
    this.value = 0;
  }
    
  @Min(-3)
  @Max(3)
  public value: number = 0;
 
}


