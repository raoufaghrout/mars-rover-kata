export class MarsRover {
  constructor(
    private xCoordinate: number,
    private yCoordinate: number,
    private direction: string
  ) {}

  execute(commands: string) {
    if (commands === "R") {
      this.direction = "E";
    }
  }

  toString(): string {
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }
}
