import { visit } from "../../../helpers";
import { checkSelect } from "../view/behavior/select";
import { checkTitle } from "../view/behavior/title";

export const rewardsUI = () => {
  visit("/rewards");
  checkSelect({ value: "All", visible: true });
  checkTitle({ title: "Rewards", visible: true, color: "black" });
};
