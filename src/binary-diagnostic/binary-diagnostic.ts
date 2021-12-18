export class BinaryDiagnostic {
  constructor(public strings: string[]) {}

  get matrix(): number[][] {
    return this.strings.map((x) => x.split("").map((y) => +y));
  }

  get matrixTotals(): number[] {
    return this.matrix.reduce((curr, next) => {
      next.forEach((x, i) => {
        curr[i] += x;
      });
      return curr;
    });
  }

  get gammaBinary(): number[] {
    return this.matrixTotals.map((x) => +(this.strings.length - x < x));
  }

  get epsilonBinary(): number[] {
    return this.gammaBinary.map((x) => +!x);
  }

  get gammaRate(): number {
    return parseInt(this.gammaBinary.join(""), 2);
  }

  get epsilonRate(): number {
    return parseInt(this.epsilonBinary.join(""), 2);
  }

  get powerConsumption(): number {
    return this.gammaRate * this.epsilonRate;
  }
}
