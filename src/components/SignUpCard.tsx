import React from 'react';
import SignUpForm from "./SignUpForm";
import styles from './SignUpCard.module.css'

const CTAButton = () => {
  return (
    <button className={styles.CTAButton}>
      <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
    </button>
  )
}

export default function SignUpCard() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Learn to code by watching others</h1>
      <CTAButton />
      <p className={styles.body}></p>
      <SignUpForm />
    </div>
  )
}