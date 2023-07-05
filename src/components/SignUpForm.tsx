"use client";
import React, { useReducer } from "react";
import { ActionType, reducer } from "@/app/utils/reducer";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const SignUpForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { firstName, lastName, email, password } = state;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log(
      `Form submitted: ${firstName}, ${lastName}, ${email}, ${password}`
    );
  };

  // type ActionTypeStrings = keyof typeof ActionType;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const type = `CHANGE_${name.toUpperCase()}` as ActionType;
    const load: { type: ActionType; payload: string } = {
      type: type,
      payload: value,
    };

    dispatch(load);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="first name"
        type="text"
        id="first_name"
        name="first_name"
        value={firstName}
        onChange={handleChange}
        required
      />
      <br />

      <input
        placeholder="last name"
        type="text"
        id="last_name"
        name="last_name"
        value={lastName}
        onChange={handleChange}
        required
      />
      <br />

      <input
        placeholder="email address"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <br />

      <input
        placeholder="password"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <br />

      <input type="submit" value="Claim your free trial" />
    </form>
  );
};

export default SignUpForm;
