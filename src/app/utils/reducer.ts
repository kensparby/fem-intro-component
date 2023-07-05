import { useReducer } from "react";

type State = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export enum ActionType {
  CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME",
  CHANGE_LAST_NAME = "CHANGE_LAST_NAME",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
}

type Action = { type: ActionType; payload: string };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ActionType.CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload };
    case ActionType.CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case ActionType.CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};