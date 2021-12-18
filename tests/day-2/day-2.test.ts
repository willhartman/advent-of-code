import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "csv-string";
import { Submarine } from "../../src/submarine/submarine";
import { SubmarineDirection } from "../../src/submarine/submarine-direction";

test("example", () => {
  //@ts-ignore
  let res = parse(readFileSync(join(__dirname, "example.txt")).toString(), " ");
  let submarine = new Submarine();

  res.forEach(
    (x) => (submarine = submarine.move(x[0] as SubmarineDirection, +x[1]))
  );

  expect(submarine.positionProduct).toBe(900);
});

test("data", () => {
  //@ts-ignore
  let res = parse(readFileSync(join(__dirname, "data.txt")).toString(), " ");
  let submarine = new Submarine();

  res.forEach(
    (x) => (submarine = submarine.move(x[0] as SubmarineDirection, +x[1]))
  );

  console.log(submarine.positionProduct)

  expect(submarine.positionProduct).toBe(1739283308);
});
