export class MarsRover {
    constructor(
        private xCoordinate: number,
        private yCoordinate: number,
        private direction: string) {}

    execute(commands: string) {

    }

    toString(): string {
        return `${this.xCoordinate} ${this.yCoordinate} ${this.direction}`
    }
}