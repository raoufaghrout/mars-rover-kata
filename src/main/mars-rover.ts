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
  private lastPosition: string;
  constructor(private coordinates: Coordinates, private direction: Direction) {
    this.lastPosition = "";
  }

  execute(commands: string) {
    commands.split("").forEach((command: string) => {
      this.manageRoverCommand(command);
      this.lastPosition = command;
    });
  }

  private manageRoverCommand(command: string) {
    if (this.shouldTurnRight(command)) {
      this.turnRight();
    }

    if (this.shouldTurnLeft(command)) {
      this.turnLeft();
    }

    if (this.shouldMoveForward(command)) {
      this.moveForward();
    }

    if (command === "U" && this.lastPosition === "L") {
      this.turnRight();
    }

    if (command === "U" && this.lastPosition === "R") {
      this.turnLeft();
    }
  }

  private shouldTurnRight(command: string) {
    return command === "R";
  }

  private turnRight() {
    this.direction = this.direction.turnRight();
  }

  private shouldTurnLeft(command: string) {
    return command === "L";
  }

  private turnLeft() {
    this.direction = this.direction.turnLeft();
  }

  private shouldMoveForward(command: string) {
    return command === "M";
  }

  private moveForward() {
    this.coordinates = this.direction.moveForward(this.coordinates);
  }

  toString(): string {
    return `${this.coordinates.x} ${this.coordinates.y} ${this.direction}`;
  }
}
