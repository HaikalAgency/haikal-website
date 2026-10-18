import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Portfolio } from "./PortfolioSection";
import { ProjectDetail } from "./ProjectDetail";
import { Route, Routes } from "react-router";

describe("Project discovery", () => {
  it("expands from four selected projects to all eight existing case studies", () => {
    render(<MemoryRouter><Portfolio /></MemoryRouter>);
    expect(screen.getAllByRole("link")).toHaveLength(4);
    fireEvent.click(screen.getByRole("button", { name: "Discover all 8 projects" }));
    expect(screen.getAllByRole("link")).toHaveLength(8);
    expect(screen.getByRole("link", { name: /Apex Showroom/ })).toHaveAttribute("href", "/project/7");
    fireEvent.click(screen.getByRole("button", { name: "Show selected projects" }));
    expect(screen.getAllByRole("link")).toHaveLength(4);
  });

  it("supports keyboard focus and the application filter", () => {
    render(<MemoryRouter><Portfolio /></MemoryRouter>);
    const tab = screen.getByRole("tab", { name: /Applications/ });
    fireEvent.focus(tab);
    expect(tab).toHaveAttribute("aria-selected", "true");
    expect(screen.getAllByRole("link")).toHaveLength(4);
    expect(screen.getByRole("link", { name: /Clothing Store POS/ })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Al Yasmin Pastry/ })).not.toBeInTheDocument();
  });

  it("shows a missing project state instead of an unrelated case study", () => {
    render(<MemoryRouter initialEntries={["/project/999"]}><Routes><Route path="/project/:id" element={<ProjectDetail />} /></Routes></MemoryRouter>);
    expect(screen.getByText("404 / Project not found")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Explore the work/ })).toHaveAttribute("href", "/#portfolio");
  });

  it("does not present local development URLs as public demos", () => {
    render(<MemoryRouter initialEntries={["/project/2"]}><Routes><Route path="/project/:id" element={<ProjectDetail />} /></Routes></MemoryRouter>);
    expect(screen.getByRole("heading", { name: "BIS Incubator Platform." })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Visit website/ })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Explore the code/ })).toHaveAttribute("href", "https://github.com/Abdobaki/bis-incubator");
  });
});
