"use client";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import styles from "./SignUpCard.module.css";
import ConfettiExplosion from "react-confetti-explosion";

const confettiProps = {
  force: 1,
  height: '200vh',
  duration: 4000,
  particleCount: 200
}

const CTAButton = () => {
  return (
    // @ts-ignore
    <a href={null} className={`${styles.CTAButton} btn`} tabIndex={0}>
      <span className={styles.buttonspan}>Try it free 7 days</span> then $20/mo.
      thereafter
    </a>
  );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default function SignUpCard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.copy}>
        <h1 className={styles.title}>Learn to code by watching others</h1>
        <p className={styles.text_body}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <CTAButton />
      <CardContainer>
        <SignUpForm setIsSubmitted={setIsSubmitted} />
      </CardContainer>
      {isSubmitted && <ConfettiExplosion style={{marginInline: 'auto'}} {...confettiProps} />}
    </div>
  );
}
