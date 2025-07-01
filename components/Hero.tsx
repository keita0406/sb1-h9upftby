import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <Image
        src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
        alt="まつ毛のアップ写真"
        width={1920}
        height={600}
        className="h-[500px] w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          東大阪・八戸ノ里で
          <br className="hidden md:block" />
          最高の目元体験を
        </h1>
        <p className="mt-6 max-w-2xl text-lg opacity-90 md:text-xl">
          国家資格×10年以上の実績で叶える、理想のまつ毛＆眉
        </p>
        <Link
          href="#booking"
          className="mt-8 rounded-xl bg-pink-600 px-8 py-4 text-lg font-semibold transition hover:bg-pink-700 hover:shadow-lg transform hover:scale-105"
        >
          24時間WEB予約
        </Link>
      </div>
    </section>
  );
}