import { User, Bell } from 'lucide-react'

function Header() {
  return (
    <header className="fixed top-0 left-1/2 z-50 grid w-full max-w-[430px] -translate-x-1/2 grid-cols-3 items-center bg-gradient-to-b from-[#c7ddcc]/98 via-[#dce9df]/96 to-[#f7f8f3]/0 px-5 py-4 border-b border-transparent backdrop-blur-[2px]">
      <div className="justify-self-start">
        <button
          aria-label="Account"
          className="w-11 h-11 bg-white border border-[#dfe8df] rounded-full flex items-center justify-center shadow-sm hover:bg-[#edf4ee] transition-colors"
        >
          <User className="w-5 h-5 text-[#31594b]" />
        </button>
      </div>

      <h1 className="justify-self-center rounded-full bg-white border border-[#dfe8df] px-6 py-2.5 text-center text-[#173f35] text-[19px] font-extrabold tracking-[-0.04em] shadow-sm">
        ArogyaMitra
      </h1>

      <div className="justify-self-end">
        <button
          aria-label="Notifications"
          className="relative w-11 h-11 bg-white border border-[#dfe8df] rounded-full flex items-center justify-center shadow-sm hover:bg-[#edf4ee] transition-colors"
        >
          <Bell className="w-5 h-5 text-[#31594b]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#e8785d] rounded-full border-2 border-white" />
        </button>
      </div>
    </header>
  )
}

export default Header
