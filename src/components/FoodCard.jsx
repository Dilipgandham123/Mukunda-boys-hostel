import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function 

FoodCard({ meal }) {
  return (
    <Card className="hover-scale animate-fade-in pt-0" style={{ animationDelay: `${meal.id * 0.1}s` }}>
      <div className="h-48 overflow-hidden">
        <img 
          src={meal.image} 
          alt={meal.name} 
          width={400} 
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-purple-700">{meal.name}</CardTitle>
        <CardDescription>{meal.time}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{meal.description}</p>
      </CardContent>
      <CardFooter>

        {/* <Dialog>
  <DialogTrigger className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">View Menu</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog> */}

      </CardFooter>
    </Card>
  )
}