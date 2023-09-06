import React, { useRef } from "react";
import { useForm } from '@formspree/react';

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xaygjaqv");
  if (state.succeeded) {
    return (
      <center style={{ padding: '10px' }}>
        <p data-aos="fade-up" >Thanks for Contacting Me!</p>
      </center>
    )
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p data-aos="fade-right" className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p data-aos="fade-down" className="text-lg">
          Let's Discuss and Solve Problems!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label data-aos="fade-right" data-aos-delay="100" htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label data-aos="fade-right" htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label data-aos="fade-left" htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label data-aos="fade-down" htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>

        </div>
        <label data-aos="fade-up" htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" disabled={state.submitting}>Submit</button>
        </div>
      </form>
    </section>
  );
}
