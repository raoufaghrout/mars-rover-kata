interface Coordinates {
  x: number;
  y: number;
}

export interface Direction {
  turnRight(): Direction;
  turnLeft(): Direction;
  moveForward(coordinates: Coordinates): Coordinates;
  toString(): string;
}

export class WestDirection implements Direction {
  moveForward(coordinates: Coordinates): Coordinates {
    return { x: coordinates.x - 1, y: coordinates.y };
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
  moveForward(coordinates: Coordinates): Coordinates {
    return { x: coordinates.x, y: coordinates.y - 1 };
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
  moveForward(coordinates: Coordinates): Coordinates {
    return { x: coordinates.x + 1, y: coordinates.y };
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
  moveForward(coordinates: Coordinates): Coordinates {
    return { x: coordinates.x, y: coordinates.y + 1 };
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
  constructor(private coordinates: Coordinates, private direction: Direction) {}

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
    this.coordinates = this.direction.moveForward(this.coordinates);
  }

  toString(): string {
    return `${this.coordinates.x} ${this.coordinates.y} ${this.direction}`;
  }
}
