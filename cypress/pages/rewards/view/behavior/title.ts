import { CheckTitleProps } from "../../interfaces";

export const checkTitle = (props: CheckTitleProps) => {
  cy.contains(props.title);
};
