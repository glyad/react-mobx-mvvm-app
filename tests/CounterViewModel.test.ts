import { CounterModel } from "../src/models/CounterModel";
import { CounterViewModel } from "../src/viewmodels/CounterViewModel";

describe("CounterViewModel", () => {
  let vm: CounterViewModel;

  beforeEach(() => {
    vm = new CounterViewModel(new CounterModel());
  });

  it("starts at zero", () => {
    expect(vm.model.value).toBe(0);
  });

  it("increments", () => {
    vm.increment();
    expect(vm.model.value).toBe(1);
  });

  it("decrements", () => {
    vm.decrement();
    expect(vm.model.value).toBe(-1);
  });

  it("resets", () => {
    vm.increment();
    vm.reset();
    expect(vm.model.value).toBe(0);
  });
});
