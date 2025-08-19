"use client"

import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Send, CalendarCheck } from "lucide-react"
import Link from "next/link"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerClose, DrawerDescription, DrawerFooter, DrawerTitle } from "@/components/ui/drawer"
import { ChangeEvent } from "react"

const HomePage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<string>("10:30")
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")

  const handleSubmit = () => {
    console.log("Selected date:", date)
    console.log("Selected time:", time)
    // Handle form submission here
  }

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedTime = e.target.value
    const minTime = "09:00"
    const maxTime = "11:45"

    if (selectedTime < minTime || selectedTime > maxTime) {
      alert("Please select a time between 9:00 and 11:45 (Central European Time)")
      return
    }

    setTime(selectedTime)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value
    setEmail(inputText)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value
    setName(inputText)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="flex w-full max-w-sm">
        <CardHeader>
          <CardTitle>Book a Spot🗓️</CardTitle>
          <CardDescription>Choose a date and a time, and I&apos;ll let you know if it works!</CardDescription>
          <CardAction>
            <Link href={"https://link.clelia.dev"}>
              <Button variant="link">All My Links</Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 justify-center">
                <Label htmlFor="date" className="justify-center">Choose a Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow-sm"
                  captionLayout="dropdown"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="time-picker" className="px-1">
                    Time
                  </Label>
                  <Input
                    type="time"
                    id="time-picker"
                    min="09:00"
                    max="11:45"
                    value={time}
                    onChange={handleTimeChange}
                    className="bg-background"
                    required
                  />
                </div>
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="w-full">
                Reach out 
                <Send />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
            <DrawerHeader className="gap-y-2">
              <DrawerTitle>Wait, I need to know who you are!</DrawerTitle>
              <DrawerDescription>You thought I forgot, uh?👀</DrawerDescription>
              <Label className="justify-center">Your Name:</Label>
              <Input 
              placeholder="Your Name"
              onChange={handleNameChange}
              />
              <Label className="justify-center">Your Email:</Label>
              <Input 
              type="email"
              placeholder="your@email.com"
              onChange={handleEmailChange}
              />
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={handleSubmit}>
                Reach out! (For real this time)
                <CalendarCheck />
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
          </Drawer>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HomePage
