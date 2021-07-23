import {
  Direction,
  EastDirection,
  MarsRover,
  NorthDirection,
  SouthDirection,
  WestDirection,
} from "../main/mars-rover";

describe("MarsRover", () => {
  it("should move first Rover", () => {
    const marsRover = new MarsRover({ x: 1, y: 2 }, new NorthDirection());
    marsRover.execute("LMLMLMLMM");

    const position = marsRover.toString();
    expect(position).toBe("1 3 N");
  });

  it("should move second Rover", () => {
    const marsRover = new MarsRover({ x: 3, y: 3 }, new EastDirection());
    marsRover.execute("MMRMMRMRRM");

    const position = marsRover.toString();
    expect(position).toBe("5 1 E");
  });

  it.each([
    [new NorthDirection(), "0 0 E"],
    [new EastDirection(), "0 0 S"],
    [new SouthDirection(), "0 0 W"],
    [new WestDirection(), "0 0 N"],
  ])(
    "should turn right when facing %s",
    (initialDirection, expectedPosition) => {
      const marsRover = new MarsRover({ x: 0, y: 0 }, initialDirection);
      marsRover.execute("R");

      const position = marsRover.toString();
      expect(position).toBe(expectedPosition);
    }
  );

  it.each([
    [new NorthDirection(), "0 0 W"],
    [new EastDirection(), "0 0 N"],
    [new SouthDirection(), "0 0 E"],
    [new WestDirection(), "0 0 S"],
  ])(
    "should turn left when facing %s",
    (initialDirection, expectedPosition) => {
      const marsRover = new MarsRover({ x: 0, y: 0 }, initialDirection);
      marsRover.execute("L");

      const position = marsRover.toString();
      expect(position).toBe(expectedPosition);
    }
  );

  it.each([
    [new NorthDirection(), "1 2 N"],
    [new EastDirection(), "2 1 E"],
    [new SouthDirection(), "1 0 S"],
    [new WestDirection(), "0 1 W"],
  ])(
    "should move forward when facing %s",
    (initialDirection, expectedPosition) => {
      const marsRover = new MarsRover({ x: 1, y: 1 }, initialDirection);
      marsRover.execute("M");

      const position = marsRover.toString();
      expect(position).toBe(expectedPosition);
    }
  );

    it("should undo the move left command ", () => {
        const marsRover = new MarsRover({ x: 0, y: 0 }, new NorthDirection());
        marsRover.execute("LU");

        const position = marsRover.toString();
        expect(position).toBe("0 0 N");
    });

});
