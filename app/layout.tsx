import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'シャルムアイラッシュ | 東大阪八戸ノ里のマツエク＆まつ毛パーマ専門サロン',
  description: '完全個室・美容師国家資格アイリストによるプライベートサロン。まつ毛パーマ・フラットラッシュ・学割U24など豊富なメニューを24時間WEB予約で。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex min-h-screen flex-col bg-white`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}