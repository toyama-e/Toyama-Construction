import { RECRUITMENT } from "./recruitment";

describe("RECRUITMENT定数", () => {
  it("募集要項の必須項目を保持する", () => {
    const labels = RECRUITMENT.specs.map((spec) => spec.label);

    expect(labels).toEqual([
      "仕事内容",
      "勤務地",
      "勤務時間",
      "給与",
      "昇給",
      "休日",
      "会社都合休み",
      "応募資格",
      "待遇",
      "応募方法",
    ]);
  });

  it("確定した給与と勤務時間を表示する", () => {
    expect(RECRUITMENT.summary).toContainEqual({ label: "給与", value: "月給22万円〜" });
    expect(RECRUITMENT.summary).toContainEqual({ label: "勤務時間", value: "7:30〜17:30" });
  });

  it("確定した補償と資格支援を保持する", () => {
    expect(RECRUITMENT.specs).toContainEqual({
      label: "会社都合休み",
      value: "6日/月まで補償",
    });
    expect(RECRUITMENT.specs.find((spec) => spec.label === "待遇")?.value).toContain(
      "資格取得費用全額会社負担"
    );
  });
});
