import { COMPANY } from "./company";

describe("COMPANY定数", () => {
  it("faxが電話番号形式である", () => {
    expect(COMPANY.fax).toMatch(/^\d{2,4}-\d{2,4}-\d{3,4}$/);
  });

  it("emailが正しい形式である", () => {
    expect(COMPANY.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("lineUrlが https:// で始まる", () => {
    expect(COMPANY.lineUrl).toMatch(/^https:\/\//);
  });

  it("lineAddUrlが https:// で始まる", () => {
    expect(COMPANY.lineAddUrl).toMatch(/^https:\/\//);
  });
});
