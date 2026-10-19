import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { getAssetUrl } from "./helpers";
import { Navbar } from "./NavbarSection";
import { Footer } from "./FooterSection";
import { Portfolio } from "./PortfolioSection";
import { FeaturedEditsSection } from "./FeaturedEditsSection";

afterEach(() => vi.unstubAllEnvs());

describe("Merged deployment path compatibility", () => {
  it("keeps root deployments and external images working", () => {
    vi.stubEnv("BASE_URL", "/");
    expect(getAssetUrl("/pictures/project.png")).toBe("/pictures/project.png");
    expect(getAssetUrl("https://images.example.com/project.png")).toBe("https://images.example.com/project.png");
  });

  it("prefixes gallery images and films for GitHub Pages", () => {
    vi.stubEnv("BASE_URL", "/Agency_portfolio/");
    const { container } = render(<MemoryRouter><Portfolio /><FeaturedEditsSection /></MemoryRouter>);
    expect(screen.getByAltText("Al Yasmin Pastry interface design")).toHaveAttribute("src", "/Agency_portfolio/pictures/gen_alyasmine_main.jpg");
    expect(container.querySelector("video source")).toHaveAttribute("src", "/Agency_portfolio/ai tools.mp4#t=0.1");
  });

  it("keeps navigation inside the deployment base when leaving a case study", () => {
    vi.stubEnv("BASE_URL", "/Agency_portfolio/");
    render(<MemoryRouter initialEntries={["/project/3"]}><Navbar /></MemoryRouter>);
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "/Agency_portfolio/#portfolio");
    expect(screen.getByRole("link", { name: "Let’s talk" })).toHaveAttribute("href", "/Agency_portfolio/#contact");
  });

  it("keeps footer navigation inside the deployment base", () => {
    vi.stubEnv("BASE_URL", "/Agency_portfolio/");
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Haikal Agency home" })).toHaveAttribute("href", "/Agency_portfolio/");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/Agency_portfolio/#contact");
  });
});
