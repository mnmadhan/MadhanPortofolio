import { useRef, useState, useId } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "../hooks/useInView";
import { CONTACT, EMAILJS } from "../data/portfolioData";
import "../styles/Contact.css";

function validate(form) {
  const errors = {};
  if (!form.from_name?.trim())   errors.from_name  = "Name is required";
  if (!form.from_email?.trim())  errors.from_email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email))
    errors.from_email = "Enter a valid email address";
  if (!form.reason)              errors.reason  = "Please select a reason";
  if (!form.subject?.trim())     errors.subject = "Subject is required";
  if (!form.message?.trim())     errors.message = "Message cannot be empty";
  return errors;
}

function Field({ label, id, error, required, children }) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={id}>
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <span className="form__error" role="alert" aria-live="polite" id={`${id}-err`}>
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const formRef            = useRef(null);
  const [ref, inView]      = useInView(0.1);
  const [status, setStatus]= useState("idle");
  const [errors, setErrors]= useState({});
  const uid                = useId();

  const getField = (name) => formRef.current?.elements[name]?.value ?? "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vals = {
      from_name:  getField("from_name"),
      from_email: getField("from_email"),
      reason:     getField("reason"),
      subject:    getField("subject"),
      message:    getField("message"),
    };

    const errs = validate(vals);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current,
        { publicKey: EMAILJS.publicKey }
      );
      setStatus("success");
      formRef.current.reset();
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const id = (name) => `${uid}-${name}`;

  return (
    <>
      <section id="contact" className="contact section" aria-labelledby="contact-title">
        <div className={`contact__grid reveal ${inView ? "in" : ""}`} ref={ref}>

          <div>
            <p className="section__label">Get in touch</p>
            <h2 className="contact__info-title" id="contact-title">Let's talk</h2>
            <p className="contact__info-desc">
              I'm looking for full-time full-stack or backend roles, ideally in
              Bengaluru. If you've got an opening, or just want to ask about
              something I built, send a note — I read these myself and usually
              reply within a day.
            </p>

            <address className="contact__links">
              {[
                { label:"Email",    value: CONTACT.email,     href:`mailto:${CONTACT.email}` },
                { label:"Phone",    value: CONTACT.phone,     href:`tel:${CONTACT.phone}` },
                { label:"LinkedIn", value:"linkedin.com/in/madhan-raj-r", href: CONTACT.linkedin },
                { label:"GitHub",   value:"github.com/mnmadhan", href: CONTACT.github },
              ].map(({ label, value, href }) => (
                <a
                  key={label}
                  className="contact__link"
                  href={href || undefined}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ cursor: href ? "pointer" : "default" }}
                >
                  <span className="contact__link-label mono">{label}</span>
                  <span>{value}</span>
                </a>
              ))}
            </address>
          </div>

          <div className="contact__form" role="region" aria-label="Contact form">
            <p className="form__title">Send a message</p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form__row">
                <Field label="Your Name" id={id("name")} error={errors.from_name} required>
                  <input
                    id={id("name")} name="from_name" type="text"
                    className={`form__input ${errors.from_name ? "form__input--error" : ""}`}
                    placeholder="e.g. Ravi Kumar"
                    aria-required="true"
                    aria-describedby={errors.from_name ? `${id("name")}-err` : undefined}
                    autoComplete="name"
                  />
                </Field>

                <Field label="Your Email" id={id("email")} error={errors.from_email} required>
                  <input
                    id={id("email")} name="from_email" type="email"
                    className={`form__input ${errors.from_email ? "form__input--error" : ""}`}
                    placeholder="ravi@company.com"
                    aria-required="true"
                    aria-describedby={errors.from_email ? `${id("email")}-err` : undefined}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <div className="form__row">
                <Field label="Phone" id={id("phone")}>
                  <input
                    id={id("phone")} name="from_phone" type="tel"
                    className="form__input"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </Field>

                <Field label="Reason" id={id("reason")} error={errors.reason} required>
                  <select
                    id={id("reason")} name="reason"
                    className={`form__select ${errors.reason ? "form__input--error" : ""}`}
                    aria-required="true"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a reason</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Internship">Internship</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Just Saying Hi">Just Saying Hi</option>
                  </select>
                </Field>
              </div>

              <Field label="Subject" id={id("subject")} error={errors.subject} required>
                <input
                  id={id("subject")} name="subject" type="text"
                  className={`form__input ${errors.subject ? "form__input--error" : ""}`}
                  placeholder="e.g. Full Stack Developer Opening at XYZ"
                  aria-required="true"
                  aria-describedby={errors.subject ? `${id("subject")}-err` : undefined}
                />
              </Field>

              <Field label="Message" id={id("message")} error={errors.message} required>
                <textarea
                  id={id("message")} name="message"
                  className={`form__textarea ${errors.message ? "form__input--error" : ""}`}
                  placeholder="Tell me about the role, project, or anything you'd like to discuss..."
                  aria-required="true"
                  aria-describedby={errors.message ? `${id("message")}-err` : undefined}
                />
              </Field>

              <button
                type="submit"
                className="btn btn-primary form__submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p className="form__status form__status--success" role="status">
                  Sent — I'll reply within a day.
                </p>
              )}
              {status === "error" && (
                <p className="form__status form__status--error" role="alert">
                  Something went wrong. Email me directly at{" "}
                  <a href={`mailto:${CONTACT.email}`} style={{ color: "inherit", textDecoration: "underline" }}>
                    {CONTACT.email}
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer__left">Madhan Raj R — {new Date().getFullYear()}</span>
        <span className="footer__right">Built with React &amp; Vite</span>
      </footer>
    </>
  );
}
