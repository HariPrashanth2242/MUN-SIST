"use client"; // Ensure this is at the top

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { ExternalLink, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [helpMessage, setHelpMessage] = useState("");

  const handleSubmit = () => {  // Prevent form submission

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setContactNumber("");  // Clear contact number
      setEmailId("");        // Clear email
      setHelpMessage("");    // Clear help message
    }, 1500);  // Reset after 1.5 seconds
  };
  

  

  return (
    <div>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about Sathyabama MUN 2025? Our team is here to help! Reach out through any of the channels
            below.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Submit an Inquiry
                  </CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Quick Response
                  </Badge>
                </div>
                <CardDescription>Fill out our inquiry form and we'll get back to you</CardDescription>
              </CardHeader>
              <CardContent id='enquiry'>
                <p className="mb-6">
                  For general questions about registration, committees, accommodation, or any other aspect of Sathyabama
                  MUN 2025, please submit an inquiry.
                </p>
              </CardContent>
              <CardFooter>
  <form 
  action="https://docs.google.com/forms/d/e/1FAIpQLSfsJbJQsUU4UMWRM0HU62xaIzgvSSyKMHnoF3YMBZw3fPZcuw/formResponse"
  method="POST"
  target="hidden_iframe"

  
  onSubmit={handleSubmit} className="w-full space-y-4">
    {/* Contact Number Input */}
    <div className="flex flex-col">
      <label htmlFor="contact-number" className="mb-2 text-sm font-medium">Contact Number</label>
      <Input
        type="tel"
        name="entry.34985409"

        placeholder="Contact Number"
        className="w-full"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)} 
        required
      />
    </div>

    {/* Email ID Input */}
    <div className="flex flex-col">
      <label htmlFor="email-id" className="mb-2 text-sm font-medium">Email ID</label>
      <Input
        type="email"
        name="entry.1056944501"
  // Add id to associate with the label
        placeholder="Email ID"
        className="w-full"
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}  
        required
      />
    </div>

    {/* How can we help you? Input */}
    <div className="flex flex-col">
      <label htmlFor="help-message" className="mb-2 text-sm font-medium">How can we help you?</label>
      <Input
        type="text"
        name="entry.21916993"
        value={helpMessage}
        onChange={(e) => setHelpMessage(e.target.value)}
        placeholder="How can we help you?"
        className="w-full"
        required
      />
    </div>

    {/* Success Message */}
    {submitted && (
      <div className="p-2 justify-center items-center border-l-4 border-green-600 bg-green-50 text-primary-800 rounded-md">
        <p className="font-semibold text-lg justify-center text-center">Submitted ✓</p>
      </div>
    )}

    {/* Submit Button (Moved Below) */}
    <Button type="submit" className="w-full">
      Submit Inquiry
    </Button>
  </form>

  {/* Hidden Iframe to Prevent Redirect */}
  <iframe name="hidden_iframe" style={{ display: "none" }} />
</CardFooter>

            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join Our Communication Channels
                  </CardTitle>
                </div>
                <CardDescription>Connect with organizers and other delegates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>

                

Stay connected with the organizing team and fellow delegates for instant updates. Join our official WhatsApp and Telegram groups for quick communication. Get the latest announcements, ask questions, and interact directly. Stay informed on all event details. Don’t miss out on essential updates—join now! Engage in real-time discussions and network with other delegates. Be part of the community and share valuable insights. Stay ahead and make the most of your MUN experience! Share your thoughts and suggestions with the team. Be part of the planning and contribute your ideas. Join the conversation and help shape the event!
                </p>
                <div className="flex flex-col space-y-3">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="https://whatsapp.com/group" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                      </svg>
                      Join WhatsApp Group
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="https://t.me/group" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                      Join Telegram Channel
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">For formal inquiries and official communication</p>
                <Link href="mailto:info@sathyabamamun.com" className="text-primary hover:underline">
                Munianish076@gmail.com  natureschild139@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent  className="p-6 flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-4">For urgent matters requiring immediate attention</p>
                <Link href="tel:+91 78930 93723" className="text-primary hover:underline">
                +91 78930 93723
                </Link>
                <Link href="tel:+91 9962992419" className="text-primary hover:underline">
                +91 99629 92419
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground mb-4">Sathyabama Institute of Science and Technology</p>
                <address className="not-italic text-sm">
                  Jeppiaar Nagar, Rajiv Gandhi Salai
                  <br />
                  Chennai - 600119
                  <br />
                  Tamil Nadu, India
                </address>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-2" id="faq" />
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="flex flex-col items-center text-center text-2xl font-semibold mb-6">Meet the Organizing Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden">
                      <img
                        src="/gae.svg?height=100&width=100"
                        alt="Secretary General"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">Anish Inti</h3>
                    <p className="text-sm text-muted-foreground mb-2">Secretary General</p>
                    <Link href="mailto:Munianish076@gmail.com" className="text-primary text-sm hover:underline">
                    Munianish076@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden">
                      <img
                        src="/deputy.svg?height=100&width=100"
                        alt="Deputy Secretary General"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">thaarani</h3>
                    <p className="text-sm text-muted-foreground mb-2">Deputy Secretary General</p>
                    <Link href="mailto:natureschild139@gmail.com" className="text-primary text-sm hover:underline">
                    natureschild139@gmail.com
                    </Link>
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Follow Us on Social Media</h2>
            <p className="mb-6">
              Stay updated with the latest announcements, behind-the-scenes content, and MUN tips by following our
              official social media accounts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  Twitter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
