import { Max, Min } from "class-validator";
import { Model } from "../framework";

@Model()
export class CounterModel {
    
  @Min(-3)
  @Max(3)
  public value: number = 0;
 
}


