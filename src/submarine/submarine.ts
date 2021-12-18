import { SubmarineDirection } from "./submarine-direction";

export class Submarine {
  constructor(
    public horizontalPosition: number = 0,
    public depthPosition: number = 0,
    public aimPosition: number = 0
  ) {}

  public move(direction: SubmarineDirection, distance: number) {
      
    switch (direction) {
      case SubmarineDirection.Forward:
        this.horizontalPosition += distance;
        this.depthPosition += this.aimPosition * distance;
        break;
      case SubmarineDirection.Backward:
        this.horizontalPosition -= distance;
        break;
      case SubmarineDirection.Down:
        this.aimPosition += distance;
        break;
      case SubmarineDirection.Up:
        this.aimPosition -= distance;
        break;
    }

    return this;
  }

  get positionProduct(): number {
    return this.horizontalPosition * this.depthPosition;
  }
}
