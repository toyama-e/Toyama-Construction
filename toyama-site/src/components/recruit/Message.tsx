export default function Message() {
  return (
    <section className="border-t border-navy/10 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">From the President</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
          代表より
        </h2>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-[#fdfaf4] px-8 py-10">
          <blockquote className="text-base leading-loose text-navy md:text-lg">
            うちに来る人に、特別なスキルは求めていません。<br />
            現場をやってみたい、手に職をつけたい、地元で働きたい。<br />
            それだけで十分です。あとは一緒に育てていきます。
          </blockquote>
          <p className="mt-3 leading-relaxed text-sub text-sm">
            小さい会社だからこそ、一人ひとりをちゃんと見られる。それがうちの強みだと思っています。
          </p>
          <p className="mt-6 text-sm font-medium text-navy">代表　外山 澄男</p>
        </div>
      </div>
    </section>
  );
}
