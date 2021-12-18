import { SonarDepth } from "./sonar-depth";

export abstract class SonarDepthBuilder {
  static fromNumberArray = (values: number[]): SonarDepth =>
    values.reduceRight(
      (next, value) => new SonarDepth(value, next),
      new SonarDepth(0)
    );
}
