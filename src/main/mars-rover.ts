const turnRight = new Map<string, string>([
  ["N", "E"],
  ["E", "S"],
  ["S", "W"],
  ["W", "N"],
]);

const turnLeft = new Map<string, string>([
  ["N", "W"],
  ["E", "N"],
  ["S", "E"],
  ["W", "S"],
]);

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

    if (commands === "L") {
      this.turnLeft();
    }
  }

  private turnRight() {
    const direction = turnRight.get(this.direction);

    if (direction) {
      this.direction = direction;
    }
  }

  private turnLeft() {
    const direction = turnLeft.get(this.direction);

    if (direction) {
      this.direction = direction;
    }
  }

  toString(): string {
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }
}
