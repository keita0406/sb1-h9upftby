import Link from "next/link";
import { Clock, Phone, Instagram, MessageCircle } from "lucide-react";

export default function BookingSection() {
  return (
    <section id="booking" className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">ご予約</h2>
          <p className="mt-4 text-lg text-gray-700">
            24時間オンラインで予約受付中。初回クーポンや学割もご用意しています！
          </p>
        </div>
        
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="https://beauty.hotpepper.jp/kr/slnH000703204/"
              target="_blank"
              className="group flex items-center justify-center rounded-xl bg-pink-600 p-6 font-semibold text-white shadow-lg transition-all hover:bg-pink-700 hover:shadow-xl hover:scale-105"
            >
              <Clock className="mr-3 h-5 w-5" />
              ホットペッパーで予約
            </Link>
            <Link
              href="https://line.me/R/ti/p/@charme-eyelash"
              target="_blank"
              className="group flex items-center justify-center rounded-xl bg-green-500 p-6 font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              公式LINEで予約
            </Link>
            <Link
              href="https://www.instagram.com/charme.eyelash"
              target="_blank"
              className="group flex items-center justify-center rounded-xl border-2 border-pink-200 bg-white p-6 font-semibold text-pink-600 shadow-lg transition-all hover:border-pink-300 hover:bg-pink-50 hover:shadow-xl hover:scale-105"
            >
              <Instagram className="mr-3 h-5 w-5" />
              Instagramで相談
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center text-gray-600">
              <Phone className="mr-2 h-4 w-4" />
              <span className="text-sm">TEL: 090-2282-5611 （施術中は折り返し対応）</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="text-center p-6 rounded-xl bg-white shadow-sm border">
            <div className="text-2xl font-bold text-pink-600">完全個室</div>
            <p className="mt-2 text-sm text-gray-600">プライベート空間で<br />リラックスして施術</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-sm border">
            <div className="text-2xl font-bold text-pink-600">国家資格</div>
            <p className="mt-2 text-sm text-gray-600">美容師免許を持つ<br />経験豊富なアイリスト</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-sm border">
            <div className="text-2xl font-bold text-pink-600">学割あり</div>
            <p className="mt-2 text-sm text-gray-600">U24学生割引で<br />お得にキレイを手に入れる</p>
          </div>
        </div>
      </div>
    </section>
  );
}