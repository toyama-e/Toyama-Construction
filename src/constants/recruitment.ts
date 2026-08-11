import { COMPANY } from "@/constants/company";

export type RecruitmentSpec = {
  label: string;
  value: string;
  mobileLines?: string[];
};

export const RECRUITMENT = {
  summary: [
    { label: "給与", value: "月給22万円〜" },
    { label: "勤務地", value: "新潟県央地区" },
    { label: "経験", value: "未経験歓迎" },
    { label: "勤務時間", value: "7:30〜17:30" },
  ],
  tags: ["未経験OK", "資格取得支援あり", "正社員雇用"],
  specs: [
    {
      label: "仕事内容",
      value: "土木工事の現場作業・補助（道路・水路・外構など）",
      mobileLines: ["土木工事の現場作業・補助", "（道路・水路・外構など）"],
    },
    { label: "勤務地", value: COMPANY.area },
    {
      label: "勤務時間",
      value: "7:30〜17:30（実働8時間・休憩1時間）",
      mobileLines: ["7:30〜17:30", "（実働8時間・休憩1時間）"],
    },
    {
      label: "給与",
      value: "月給220,000円〜（経験・能力を考慮）",
      mobileLines: ["月給220,000円〜", "（経験・能力を考慮）"],
    },
    { label: "昇給", value: "年1回（実績・資格取得を評価）" },
    {
      label: "休日",
      value: COMPANY.holiday,
      mobileLines: ["毎週日曜日、第2・第4土曜日、", "祝日、年末年始"],
    },
    { label: "会社都合休み", value: "6日/月まで補償" },
    {
      label: "応募資格",
      value: "普通自動車免許（AT可）/未経験可",
      mobileLines: ["普通自動車免許（AT可）", "未経験可"],
    },
    {
      label: "待遇",
      value: "社会保険完備・資格取得費用全額会社負担",
      mobileLines: ["社会保険完備", "資格取得費用全額会社負担"],
    },
    {
      label: "応募方法",
      value: "LINE通話・LINEチャット・メールにてご連絡ください",
      mobileLines: ["LINE通話・LINEチャット", "メールにてご連絡ください"],
    },
  ] satisfies RecruitmentSpec[],
  promises: [
    {
      num: "01",
      title: "資格取得は会社が全力サポート",
      descLines: ["入社後に取れる資格もたくさんあります。", "受験費用は全額会社負担。"],
    },
    {
      num: "02",
      title: "会社都合の休みは6日/月まで補償",
      descLines: ["天気や工期の都合で急に休みになっても、", "給与はきちんと守ります。"],
    },
  ],
  schedule: [
    { time: "07:30", task: "集合・朝礼（現場または事務所）" },
    { time: "08:00", task: "作業開始" },
    { time: "12:00", task: "昼休憩（1時間・作業により前後あり）" },
    { time: "13:00", task: "午後作業" },
    { time: "17:00", task: "片付け・日報記録" },
    { time: "17:30", task: "終業" },
  ],
  overtime: "残業は月3時間以内がほとんど。",
};
