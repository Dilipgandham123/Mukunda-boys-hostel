import { Button } from '@/components/ui/button'
import { Input } from './ui/input'

export default function SocialMedia() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-purple-700">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <Button variant="outline" size="lg" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
          <span className="mr-2">📘</span> Facebook
        </Button>
        <Button variant="outline" size="lg" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
          <span className="mr-2">📱</span> Instagram
        </Button>
        <Button variant="outline" size="lg" className="hover:bg-purple-100 hover:text-purple-700 transition-colors">
          <span className="mr-2">🐦</span> Twitter
        </Button>
      </div>
      
    </div>
  )
}