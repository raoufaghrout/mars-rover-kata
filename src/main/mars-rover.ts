export const rightDirection = new Map<string, string>([
  ["N", "E"],
  ["E", "S"],
  ["S", "W"],
  ["W", "N"],
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
  }

  private turnRight() {
    const direction = rightDirection.get(this.direction);
    if (direction) {
      this.direction = direction;
    }
  }

  toString(): string {
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }
}
