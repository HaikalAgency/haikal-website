import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Contact } from "./ContactSection";

afterEach(() => vi.unstubAllGlobals());

function fillInquiry() {
  fireEvent.change(screen.getByLabelText(/Your name/), { target: { value: "Alex Morgan" } });
  fireEvent.change(screen.getByLabelText(/Email address/), { target: { value: "alex@example.com" } });
  fireEvent.change(screen.getByLabelText(/A little about your project/), { target: { value: "A considered website for our studio." } });
}

describe("Contact inquiry", () => {
  it("validates required fields and focuses the first error without making a request", () => {
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    render(<Contact />);
    fireEvent.click(screen.getByRole("button", { name: /Send your inquiry/ }));
    expect(screen.getByText("Please tell us your name.")).toBeInTheDocument();
    expect(screen.getByLabelText(/Your name/)).toHaveFocus();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("preserves the contact API contract and announces a successful submission", async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetch);
    render(<Contact />);
    fillInquiry();
    fireEvent.click(screen.getByRole("button", { name: /Send your inquiry/ }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Thanks for reaching out"));
    expect(fetch).toHaveBeenCalledWith("/api/contact", expect.objectContaining({ method: "POST", body: JSON.stringify({ name: "Alex Morgan", company: "", email: "alex@example.com", phone: "", service: "", details: "A considered website for our studio." }) }));
    expect(screen.getByLabelText(/Your name/)).toHaveValue("");
  });

  it("retains the inquiry on a failed request so the visitor can retry", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    render(<Contact />);
    fillInquiry();
    fireEvent.click(screen.getByRole("button", { name: /Send your inquiry/ }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("couldn’t be sent"));
    expect(screen.getByLabelText(/Your name/)).toHaveValue("Alex Morgan");
    expect(screen.getByRole("button", { name: /Send your inquiry/ })).toBeEnabled();
  });
});
