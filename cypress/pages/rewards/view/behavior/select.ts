import { CheckSelectProps } from "../../interfaces";

export const checkSelect = (props: CheckSelectProps) => {
  cy.get("select").should("have.value", props.value);
};
