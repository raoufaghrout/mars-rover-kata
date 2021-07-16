import { MarsRover } from "../main/mars-rover";

describe("MarsRover", () => {
  xit("should move first Rover", () => {
    const marsRover = new MarsRover(1, 2, "N");
    marsRover.execute("LMLMLMLMM");

    const position = marsRover.toString();
    expect(position).toBe("1 3 N");
  });

  xit("should move second Rover", () => {
    const marsRover = new MarsRover(3, 3, "E");
    marsRover.execute("MMRMMRMRRM");

    const position = marsRover.toString();
    expect(position).toBe("5 1 E");
  });

  it.each([
    ["N", "0 0 E"],
    ["E", "0 0 S"],
    ["S", "0 0 W"],
    ["W", "0 0 N"],
  ])("should turn right", (initialDirection, expectedPosition) => {
    const marsRover = new MarsRover(0, 0, initialDirection);
    marsRover.execute("R");

    const position = marsRover.toString();
    expect(position).toBe(expectedPosition);
  });

  it.each([["N", "0 0 W"]])(
    "should turn left",
    (initialDirection, expectedPosition) => {
      const marsRover = new MarsRover(0, 0, initialDirection);
      marsRover.execute("L");

      const position = marsRover.toString();
      expect(position).toBe(expectedPosition);
    }
  );
});
