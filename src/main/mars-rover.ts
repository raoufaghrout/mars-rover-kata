export class MarsRover {
  constructor(
    private xCoordinate: number,
    private yCoordinate: number,
    private direction: string
  ) {}

  execute(commands: string) {
    if (commands === "R") {
      this.turnRight();
    }
  }

  private turnRight() {
    if (this.direction === "N") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "S";
    }
  }

  toString(): string {
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }
}
