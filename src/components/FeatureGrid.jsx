import {
  Stethoscope,
  ClipboardList,
  MapPin,
  CreditCard,
  Download,
  AlertTriangle,
} from 'lucide-react'

const features = [
  {
    id: 'doc',
    label: 'DOC',
    subtitle: 'Find Doctors',
    icon: Stethoscope,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
  {
    id: 'adv-hist',
    label: 'ADV HIST',
    subtitle: 'Advisory History',
    icon: ClipboardList,
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-50',
  },
  {
    id: 'hlc',
    label: 'HLC',
    subtitle: 'Health Centers',
    icon: MapPin,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
  },
  {
    id: 'abha',
    label: 'ABHA',
    subtitle: 'Health Account',
    icon: CreditCard,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
  },
  {
    id: 'manual',
    label: 'Manual',
    subtitle: 'Download Manual',
    icon: Download,
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-50',
  },
  {
    id: 'emergency',
    label: 'Emergency',
    subtitle: 'Quick Help',
    icon: AlertTriangle,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    isEmergency: true,
  },
]

function FeatureCard({ feature }) {
  const Icon = feature.icon
  const isRed = feature.isEmergency

  return (
    <button className={`card-press aspect-square flex flex-col items-center justify-center gap-2 p-3 rounded-[20px] border transition-all group ${
      isRed
        ? 'bg-[#fff0eb] border-[#f3c5b8] hover:border-[#e8785d] hover:shadow-md'
        : 'bg-white border-[#e0e8df] hover:border-[#a9c9ad] hover:shadow-md'
    }`}>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.iconBg}`}>
        <Icon className={`w-[19px] h-[19px] ${feature.iconColor}`} strokeWidth={1.8} />
      </div>

      <div className="text-center">
        <p className={`font-extrabold text-sm leading-tight ${isRed ? 'text-[#a74431]' : 'text-[#21463b]'}`}>
          {feature.label}
        </p>
        <p className={`text-[9px] mt-0.5 leading-tight ${isRed ? 'text-[#d77b68]' : 'text-[#81958a]'}`}>{feature.subtitle}</p>
      </div>
    </button>
  )
}

function FeatureGrid() {
  return (
    <div>
      <div className="flex items-end justify-between mb-3 px-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8aa096] mb-1">Explore</p>
          <h2 className="text-lg font-extrabold tracking-[-0.04em] text-[#173f35]">Services for you</h2>
        </div>
        <span className="text-[10px] font-bold text-[#7d9688]">06 options</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default FeatureGrid
