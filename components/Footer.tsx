export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Charme Eyelash</h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              東大阪・八戸ノ里駅徒歩3分<br />
              完全個室のプライベートサロン<br />
              美容師国家資格保有アイリスト
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">営業時間</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <div>平日: 10:00 - 20:00</div>
              <div>土日祝: 9:00 - 19:00</div>
              <div className="text-pink-400">定休日: 不定休</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">アクセス</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <div>近鉄奈良線 八戸ノ里駅</div>
              <div>徒歩3分</div>
              <div>〒577-0034</div>
              <div>大阪府東大阪市</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Charme Eyelash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}