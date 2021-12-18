import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "csv-string";
import { BinaryDiagnostic } from "./binary-diagnostic";

test("example", () => {
  //@ts-ignore
  let res = parse(
    readFileSync(join(__dirname, "sample-data", "example.txt")).toString()
  );
  let binaryDiagnostic = new BinaryDiagnostic(res.flat());

  expect(binaryDiagnostic.powerConsumption).toBe(198);
});

test("data", () => {
  //@ts-ignore
  let res = parse(
    readFileSync(join(__dirname, "sample-data", "data.txt")).toString()
  );
  let binaryDiagnostic = new BinaryDiagnostic(res.flat());

  expect(binaryDiagnostic.powerConsumption).toBe(2972336);
});
