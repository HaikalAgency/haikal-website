import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email format";
    if (!form.details.trim()) errs.details = "Project details are required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          details: "",
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#737373]/60 focus:outline-none focus:border-[#8B5CF6]/60 transition-colors duration-200";

  const contacts = [
    { icon: Mail, label: "Email", value: "hello@Haikal.agency" },
    { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
    { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 000-0000" },
    { icon: Instagram, label: "Instagram", value: "@Haikalagency" },
    { icon: Facebook, label: "Facebook", value: "Haikal Agency" },
    { icon: Linkedin, label: "LinkedIn", value: "Haikal Agency" },
  ];

  return (
    <section id="contact" className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-7">
          <SectionLabel>Get in Touch</SectionLabel>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-10">
          <FadeUp className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0A0A0A] border border-white/6 rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClass}
                    style={BODY}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1" style={BODY}>{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={inputClass}
                    style={BODY}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClass}
                    style={BODY}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1" style={BODY}>{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 555 000 0000"
                    className={inputClass}
                    style={BODY}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Service
                  </label>
                  <Select
                    value={form.service}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-[20px] text-white text-sm hover:bg-[#111111] focus:ring-0 focus-visible:ring-0 focus:outline-none focus:border-[#8B5CF6]/60 transition-colors duration-200">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111111] border-white/8 text-white rounded-xl">
                      <SelectItem
                        value="web"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem
                        value="desktop"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Desktop Software
                      </SelectItem>
                      <SelectItem
                        value="mobile"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Mobile App
                      </SelectItem>
                      <SelectItem
                        value="video"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Video Editing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                  style={BODY}
                >
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className={`${inputClass} resize-none`}
                  style={BODY}
                  aria-invalid={!!errors.details}
                />
                {errors.details && (
                  <p className="text-red-400 text-xs mt-1" style={BODY}>{errors.details}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full flex items-center justify-center gap-2 font-semibold py-4 rounded-xl transition-all duration-200 ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#8B5CF6] hover:bg-[#9D71FB] text-white hover:shadow-xl hover:shadow-[#8B5CF6]/30 hover:-translate-y-0.5"
                }`}
                style={BODY}
              >
                {status === "loading" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message Sent!"
                ) : status === "error" ? (
                  "Error! Try Again"
                ) : (
                  <>
                    <>Send Message</> <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#0A0A0A] border border-white/6 rounded-2xl px-5 py-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <c.icon size={16} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p
                      className="text-[#737373] text-[10px] uppercase font-semibold tracking-widest"
                      style={BODY}
                    >
                      {c.label}
                    </p>
                    <p className="text-white text-sm" style={BODY}>
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
