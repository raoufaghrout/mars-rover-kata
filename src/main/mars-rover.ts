export interface Direction {
  turnRight(): Direction;
  turnLeft(): Direction;
  moveForward(xCoordinate: number, yCoordinate: number): [number, number];
  toString(): string;
}

export class WestDirection implements Direction {
  moveForward(xCoordinate: number, yCoordinate: number): [number, number] {
    return [xCoordinate - 1, yCoordinate];
  }

  turnLeft(): Direction {
    return new SouthDirection();
  }

  turnRight(): Direction {
    return new NorthDirection();
  }

  toString(): string {
    return "W";
  }
}

export class SouthDirection implements Direction {
  moveForward(xCoordinate: number, yCoordinate: number): [number, number] {
    return [xCoordinate, yCoordinate - 1];
  }

  turnLeft(): Direction {
    return new EastDirection();
  }

  turnRight(): Direction {
    return new WestDirection();
  }

  toString(): string {
    return "S";
  }
}

export class EastDirection implements Direction {
  moveForward(xCoordinate: number, yCoordinate: number): [number, number] {
    return [xCoordinate + 1, yCoordinate];
  }

  turnLeft(): Direction {
    return new NorthDirection();
  }

  turnRight(): Direction {
    return new SouthDirection();
  }

  toString(): string {
    return "E";
  }
}

export class NorthDirection implements Direction {
  moveForward(xCoordinate: number, yCoordinate: number): [number, number] {
    return [xCoordinate, yCoordinate + 1];
  }

  turnLeft(): Direction {
    return new WestDirection();
  }

  turnRight(): Direction {
    return new EastDirection();
  }

  toString(): string {
    return "N";
  }
}

export class MarsRover {
  constructor(
    private xCoordinate: number,
    private yCoordinate: number,
    private direction: Direction,
  ) {}

  execute(commands: string) {
    if (commands === "R") {
      this.turnRight();
    }

    if (commands === "L") {
      this.turnLeft();
    }

    if (commands === "M") {
      this.moveForward();
    }
  }

  private turnRight() {
    this.direction = this.direction.turnRight();
  }

  private turnLeft() {
    this.direction = this.direction.turnLeft();
  }

  private moveForward() {
    const coordinates = this.direction.moveForward(this.xCoordinate, this.yCoordinate);
    this.xCoordinate = coordinates[0]
    this.yCoordinate = coordinates[1]
  }

  toString(): string {
    return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`;
  }
}
