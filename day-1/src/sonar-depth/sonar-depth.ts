export class SonarDepth {
  constructor(public value: number, public next?: SonarDepth) {}

  get increases(): number {
    return (
      +this.increasingNext + +(this.next !== undefined && this.next?.increases)
    );
  }

  get increasingNext(): boolean {
    return this.next !== undefined && this.next.value > this.value;
  }
}
