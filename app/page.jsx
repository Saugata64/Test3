import Header from '../src/components/Header'
import QueueCard from '../src/components/QueueCard'
import FeatureGrid from '../src/components/FeatureGrid'
import BottomNav from '../src/components/BottomNav'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#e7eee8] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-[#f7f8f3] relative overflow-hidden">
        <Header />

        <main className="px-5 pt-[100px] pb-32 space-y-7">
          <QueueCard />
          <FeatureGrid />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}