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

  it("should turn right from N to E", () => {
    const marsRover = new MarsRover(0, 0, "N");
    marsRover.execute("R");

    const position = marsRover.toString();
    expect(position).toBe("0 0 E");
  });

  it("should turn right from E to S", () => {
    const marsRover = new MarsRover(0, 0, "E");
    marsRover.execute("R");

    const position = marsRover.toString();
    expect(position).toBe("0 0 S");
  });
});
