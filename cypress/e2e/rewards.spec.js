/// <reference types="cypress" />
import { rewardsUI } from "../pages/rewards";

describe("Rewards dashboard", () => {
  it("should render the UI", () => {
    rewardsUI();
  });
});
