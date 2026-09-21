import { Camera, Mic, MessageSquare } from 'lucide-react'

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-5 pb-5 pt-2">
      <div className="bg-[#fffefa]/90 backdrop-blur-xl rounded-[24px] shadow-[0_12px_30px_rgba(39,72,56,0.14)] border border-[#dfe8df] px-5 py-2.5 flex items-center justify-around">
        <button className="flex flex-col items-center gap-1 p-2 rounded-2xl hover:bg-[#edf4ee] transition-colors group">
          <Camera className="w-[21px] h-[21px] text-[#91a79b] group-hover:text-[#31594b] transition-colors" />
          <span className="text-[10px] text-[#81958a] group-hover:text-[#31594b] transition-colors">
            Scan
          </span>
        </button>

        <button className="relative -mt-7 flex flex-col items-center">
          <div className="w-[62px] h-[62px] rounded-full bg-[#e8785d] border-[6px] border-[#fffefa] shadow-[0_7px_18px_rgba(232,120,93,0.28)] flex items-center justify-center hover:bg-[#d96850] hover:scale-105 transition-all active:scale-95">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <span className="text-[10px] text-[#31594b] font-bold mt-1">
            Voice
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 p-2 rounded-2xl hover:bg-[#edf4ee] transition-colors group">
          <MessageSquare className="w-[21px] h-[21px] text-[#91a79b] group-hover:text-[#31594b] transition-colors" />
          <span className="text-[10px] text-[#81958a] group-hover:text-[#31594b] transition-colors">
            Chat
          </span>
        </button>
      </div>
    </nav>
  )
}

export default BottomNav
