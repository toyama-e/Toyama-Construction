import { render, screen } from "@testing-library/react";
import { COMPANY } from "@/constants/company";
import Contact from "./Contact";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("Contact", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("LINE通話リンクのhrefがlineUrlである", () => {
    const link = screen.getByText("LINE通話をかける").closest("a");

    expect(link).toHaveAttribute("href", COMPANY.lineUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("友だち追加リンクのhrefがlineAddUrlである", () => {
    const link = screen.getByText("友だち追加").closest("a");

    expect(link).toHaveAttribute("href", COMPANY.lineAddUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("メールリンクはContactに表示しない", () => {
    expect(screen.queryByText("メールで問い合わせる")).not.toBeInTheDocument();
  });
});
