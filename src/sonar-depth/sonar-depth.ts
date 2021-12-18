export class SonarDepth {
  constructor(public value: number, public next?: SonarDepth) {}

  sumWithNextN(quantity: number = 2): number {
    return (
      this.value +
      +(
        quantity &&
        this.next !== undefined &&
        this.next?.sumWithNextN(quantity - 1)
      )
    );
  }

  get threeMeasurementWindow(): number {
    return this.sumWithNextN(2);
  }

  get threeMeasurementWindowIncreases(): number {
    return (
      +this.threeMeasurementWindowIncreasingNext + +(this.next !== undefined && this.next?.threeMeasurementWindowIncreases)
    );
  }

  get threeMeasurementWindowIncreasingNext(): boolean {
    return this.next !== undefined && this.next.threeMeasurementWindow > this.threeMeasurementWindow;
  }

  get increases(): number {
    return (
      +this.increasingNext + +(this.next !== undefined && this.next?.increases)
    );
  }

  get increasingNext(): boolean {
    return this.next !== undefined && this.next.value > this.value;
  }
}
