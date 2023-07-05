import React, { useReducer } from "react";
import { ActionType, reducer } from "@/app/utils/reducer";
import styles from "./SignUpForm.module.css";

const SignUpForm = ({setIsSubmitted}: {setIsSubmitted: (value: boolean) => void}) => {
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
    setIsSubmitted(true);
    console.log(
      `Form submitted: ${firstName}, ${lastName}, ${email}, ${password}`
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const type = `CHANGE_${name.toUpperCase()}` as ActionType;
    const load: { type: ActionType; payload: string } = {
      type: type,
      payload: value,
    };

    dispatch(load);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { valueMissing, patternMismatch } = e.target.validity;
    const span = e.target.nextElementSibling;
    if (valueMissing || patternMismatch) {
      // Add styles to indicate validity error
      span?.classList.add(styles.input_errorspan_show);
      e.target.classList.add(styles.input_invalid);
    } else if (
      span?.classList.contains(styles.input_errorspan_show) ||
      e.target.classList.contains(styles.input_invalid)
    ) {
      // else, remove them
      span?.classList.remove(styles.input_errorspan_show);
      e.target.classList.remove(styles.input_invalid);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SignUpForm}>
      <div className={styles.wrapper_input}>
        <input
          className={`${styles.input} ${styles.formElement}`}
          placeholder="First Name"
          aria-label="first name"
          type="text"
          id="first_name"
          name="first_name"
          value={firstName}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        <span className={styles.input_error}>First name cannot be empty</span>
      </div>

      <div className={styles.wrapper_input}>
        <input
          className={`${styles.input} ${styles.formElement}`}
          placeholder="Last Name"
          aria-label="last name"
          type="text"
          id="last_name"
          name="last_name"
          value={lastName}
          onBlur={handleBlur}
          onChange={handleChange}
          required
        />
        <span className={styles.input_error}>Last name cannot be empty</span>
      </div>

      <div className={styles.wrapper_input}>
        <input
          className={`${styles.input} ${styles.formElement}`}
          placeholder="Email Address"
          aria-label="email address"
          type="email"
          id="email"
          name="email"
          value={email}
          onBlur={handleBlur}
          pattern="^[\w\-\.]+@(?![^@]*@)([\w-]+\.?)+[\w-]{2,4}$"
          onChange={handleChange}
          required
        />
        <span className={styles.input_error}>
          Looks like this isn&apos;t a proper email
        </span>
      </div>

      <div className={styles.wrapper_input}>
        <input
          className={`${styles.input} ${styles.formElement}`}
          placeholder="Password"
          aria-label="password"
          type="password"
          id="password"
          name="password"
          onBlur={handleBlur}
          value={password}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$"
          onChange={handleChange}
          required
        />
        <span className={styles.input_error}>
          Password must have upper and lower case letters, and at least one
          number.
        </span>
      </div>

      <input
        type="submit"
        value="Claim your free trial"
        className={`${styles.formElement} ${styles.submitBtn} btn`}
        tabIndex={0}
      />
      <p className={styles.text_terms}>
        By clicking the button, you are agreeing to our{" "}
        <a
          style={{ color: "hsl(var(--clr-red))", fontWeight: 600 }}
          // @ts-ignore
          href={null}
          tabIndex={0}
        >
          Terms and Services
        </a>
      </p>
    </form>
  );
};

export default SignUpForm;
