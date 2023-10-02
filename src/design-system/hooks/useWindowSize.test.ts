import { waitFor, act, renderHook } from "@testing-library/react";
import { useWindowSize } from "./useWindowSize";

describe("useWindowSize", () => {
  const actualWindowResize = window.resizeTo;

  beforeAll(() => {
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });

  afterAll(() => {
    window.resizeTo = actualWindowResize;
  });

  test("should return initial Infinity values", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(Infinity);
    expect(result.current.height).toBe(Infinity);
  });

  test("should return current viewport sizes on window resize", async () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.resizeTo(500, 600);
    });

    await waitFor(() => {
      expect(result.current.width).toEqual(500);
      expect(result.current.height).toEqual(600);
    });
  });
});
