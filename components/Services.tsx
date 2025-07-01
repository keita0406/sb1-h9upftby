import { Sparkles, Eye, Wand2 } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "まつ毛パーマ",
    desc: "次世代パリジェンヌ/束感デザインで理想のカールを長持ち",
    features: ["持続期間6-8週間", "自然な仕上がり", "ダメージレス"]
  },
  {
    icon: Eye,
    title: "フラットラッシュ",
    desc: "軽量＆高持続の最新エクステでぱっちり目元に",
    features: ["超軽量設計", "高い持続性", "自然なボリューム"]
  },
  {
    icon: Wand2,
    title: "眉毛スタイリング",
    desc: "ラミネーション＆WAX脱毛で美眉をトータルプロデュース",
    features: ["骨格に合わせたデザイン", "持続期間4-6週間", "痛み最小限"]
  }
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">メニュー</h2>
          <p className="mt-4 text-lg text-gray-600">
            お客様の目元に合わせて豊富なメニューをご用意しています
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, features }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                <Icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-gray-600">{desc}</p>
              <ul className="mt-4 space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-pink-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}