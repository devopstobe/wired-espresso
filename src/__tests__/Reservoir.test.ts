import { getWaterLevel, setWaterLevel, validate } from "../Reservoir";
import { WATER_ABOVE_THRESHOLD_ERROR } from "../constants";

describe("Reservoir", () => {
  it("should set water level to value", () => {
    setWaterLevel(60);
    expect(getWaterLevel()).toBe(60);
  });

  it(`should throw error code ${WATER_ABOVE_THRESHOLD_ERROR} if above threshold when validated`, () => {
    setWaterLevel(101);
    expect(() => validate()).toThrowError(
      `Code: ${WATER_ABOVE_THRESHOLD_ERROR}`
    );
  });
  
  it('should validate water is 0 or above', () => {
    setWaterLevel(0)
    expect(validate()).toBe(true);

    setWaterLevel(-1)
    expect(validate()).toBe(false);
  })
});
