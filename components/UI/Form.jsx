import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          setShowModal(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <>
      <SectionSubtitle subtitle="Message me" className='mb-4'/>
      {isLoading && <div className={`${classes.spinner}`}></div>}
      <form className={`${classes.form}`} onSubmit={submitHandler}>
        <div className={`${classes.form__group}`}>
          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isLoading}
          />
        </div>
        <div className={`${classes.form__group}`}>
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
          />
        </div>
        <div className={`${classes.form__group}`}>
          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            disabled={isLoading}
          />
        </div>

        <button className="primary__btn" type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
      <div className={`${classes.modal__container}`}>
        <Modal
          isOpen={showModal}
          centered
          className={`${classes.modal__container}`}
        >
          <ModalHeader>Hey!</ModalHeader>
          <ModalBody>The form was submitted!</ModalBody>
          <ModalFooter style={{ borderTop: "solid 1px white" }}>
            <Button
              style={{ backgroundColor: "#9a894f" }}
              onClick={() => {
                setShowModal(false);
              }}
            >
              Great!
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Form;
