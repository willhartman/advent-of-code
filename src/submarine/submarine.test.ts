import { Submarine } from "./submarine";
import { SubmarineDirection } from "./submarine-direction";

test("positionProduct to be calculated", () => {
  let submarine = new Submarine()
    .move(SubmarineDirection.Forward, 5)
    .move(SubmarineDirection.Down, 5)
    .move(SubmarineDirection.Forward, 8)
    .move(SubmarineDirection.Up, 3)
    .move(SubmarineDirection.Down, 8)
    .move(SubmarineDirection.Forward, 2);
  
  expect(submarine.positionProduct).toBe(900);
});
