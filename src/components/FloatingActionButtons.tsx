import { Camera, MessageCircle } from 'lucide-react'

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <button className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
        <Camera className="w-6 h-6" />
      </button>
      <button className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}

