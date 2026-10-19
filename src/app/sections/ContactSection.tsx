import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { FadeUp, SectionLabel } from "./helpers";
const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  details: ""
};
export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const update = (name: string, value: string) => {
    setForm(previous => ({
      ...previous,
      [name]: value
    }));
    setErrors(previous => ({
      ...previous,
      [name]: ""
    }));
    if (status !== "loading") setStatus("idle");
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (!form.details.trim()) nextErrors.details = "Tell us a little about your project.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error("Message could not be sent");
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };
  return <section id="contact" className="contact-section">
    <div className="site-container">
      <FadeUp>
        <div className="contact-top">
          <SectionLabel number="07">Something in mind?</SectionLabel>
          <span className="eyebrow"><span className="status-dot" />Open to good conversations</span>
        </div>
        <h2 className="contact-title">Let’s make<br /><span>something matter.</span><ArrowUpRight aria-hidden="true" /></h2>
      </FadeUp>
      <div className="contact-grid">
        <FadeUp className="contact-copy">
          <h3>It starts with a conversation.</h3>
          <p>A new idea, a fresh perspective, or a problem worth solving. Tell us what you’re thinking.</p>
          <a href="mailto:hello@haikal.agency" className="contact-email">hello@haikal.agency <ArrowUpRight size={20} /></a>
          <div className="contact-footnote">
            <span className="eyebrow">A thoughtful response.<br />A real person on the other side.</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.12}>
          <form ref={formRef} onSubmit={submit} className="contact-form" noValidate>
            <div className="form-row">
              {[{
                name: "name",
                label: "Your name",
                placeholder: "Alex Morgan",
                required: true
              }, {
                name: "email",
                label: "Email address",
                placeholder: "alex@company.com",
                required: true
              }].map(field => <div className="form-field" key={field.name}>
                <label htmlFor={`contact-${field.name}`}>
                  {field.label}
                  {" "}
                  <span>*</span>
                </label>
                <input id={`contact-${field.name}`} name={field.name} type={field.name === "email" ? "email" : "text"} autoComplete={field.name} value={form[field.name as "name" | "email"]} onChange={e => update(field.name, e.target.value)} placeholder={field.placeholder} maxLength={field.name === "name" ? 100 : 254} required aria-invalid={!!errors[field.name]} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />
                {errors[field.name] && <span id={`${field.name}-error`} className="field-error">{errors[field.name]}</span>}
              </div>)}
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-company">Company <span>(optional)</span></label>
                <input id="contact-company" name="company" autoComplete="organization" value={form.company} onChange={e => update("company", e.target.value)} placeholder="Your company or brand" maxLength={150} />
              </div>
              <div className="form-field">
                <label htmlFor="contact-service">What do you need?</label>
                <Select value={form.service} onValueChange={value => update("service", value)}>
                  <SelectTrigger id="contact-service" className="contact-select">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="contact-select-options">
                    {[{
                      value: "web",
                      label: "Website & digital experience"
                    }, {
                      value: "desktop",
                      label: "Software & desktop application"
                    }, {
                      value: "mobile",
                      label: "Mobile application"
                    }, {
                      value: "video",
                      label: "Video & motion design"
                    }, {
                      value: "other",
                      label: "Let’s figure it out together"
                    }].map(option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="contact-phone">Phone <span>(optional)</span></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="Your phone number" maxLength={30} />
            </div>
            <div className="form-field">
              <label htmlFor="contact-details">A little about your project <span>*</span></label>
              <textarea id="contact-details" name="details" value={form.details} onChange={e => update("details", e.target.value)} placeholder="The idea, the ambition, the challenge…" rows={3} maxLength={5000} required aria-invalid={!!errors.details} aria-describedby={errors.details ? "details-error" : undefined} />
              {errors.details && <span id="details-error" className="field-error">{errors.details}</span>}
            </div>
            <div className="form-submit">
              <span>Good things start here.</span>
              <button type="submit" disabled={status === "loading"} className="button button-dark">
                {status === "loading" ? <>Sending <LoaderCircle className="animate-spin" size={17} /></> : <>Send your inquiry <ArrowUpRight size={18} /></>}
              </button>
            </div>
            <div className={`form-status ${status}`} role="status" aria-live="polite">
              {status === "success" && <><Check size={18} /> Thanks for reaching out. We’ll be in touch soon.</>}
              {status === "error" && <>Your message couldn’t be sent. Please try again or email <a href="mailto:hello@haikal.agency">hello@haikal.agency</a>.</>}
            </div>
          </form>
        </FadeUp>
      </div>
    </div>
  </section>;
}
