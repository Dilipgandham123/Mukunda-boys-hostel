"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpwljeea");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Contact Us
      </h1>
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle className="text-pink-700">Send us a Message</CardTitle>
          <CardDescription>
            We'll get back to you within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="lg:col-span-3">
            {state.succeeded && (
              <p className="text-green-500 text-center mb-4 text-lg font-medium">
                Thanks for your message! I'll get back to you soon.
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="border-pink-200 focus:border-pink-500"
                  placeholder="Enter Name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="border-pink-200 focus:border-pink-500"
                  placeholder="Enter Mail id"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="border-pink-200 focus:border-pink-500"
                  placeholder="Enter subject"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
               <div className="space-y-2">
                <Label htmlFor="subject">Phone</Label>
                <Input
                  id="phone"
    type="tel" 
    name="phone"
                  required
                  className="border-pink-200 focus:border-pink-500"
                  placeholder="Enter Phone"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="border-pink-200 focus:border-pink-500"
                  placeholder="Write Message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r cursor-pointer
 from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                Send Message
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
