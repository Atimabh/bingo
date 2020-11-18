import React from "react";
import style from "../stylesheets/Welcome.module.css";
import doggo from "../images/dog.webp";

const Welcome = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>Woof! You are a part of something special!</p>
      <p className={style.info}>
        Thank you for signing up with Bingo and protecting your pup. If you need any help, please contact us at:
        <span> support@joinbingo.co</span>
      </p>
      <p>
        As a reminder, your coverage takes effect after a 3 day waiting period. When a claim does arrise, please email
        the vet bill to: <span>claims@joinbingo.co</span>
      </p>
      <p>Don’t worry, we will send your policy document, claims instructions, and more to the email you provided us.</p>

      <div className={style.image}>
        <img src={doggo} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
