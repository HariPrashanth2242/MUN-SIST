import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Send, MessageSquare } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function RegistrationPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Registration</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Join us for Sathyabama MUN 2025! Registration is free and open to all passionate students interested in
          diplomacy, international relations, and global affairs.
        </p>

        <Tabs defaultValue="delegate" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="delegate">Delegate Registration</TabsTrigger>
            <TabsTrigger value="eb">Executive Board Application</TabsTrigger>
          </TabsList>

          <TabsContent value="delegate" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Delegate Registration</CardTitle>
                  <Badge className="bg-primary">Free Entry</Badge>
                </div>
                <CardDescription>
                  Register as a delegate to represent a country in one of our committees
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  As a delegate, you will represent a country or character in one of our committees, engage in debates,
                  draft resolutions, and work with other delegates to address global challenges.
                </p>
                <h3 className="font-semibold">Registration Process:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Fill out the Google Form with your personal details and committee preferences</li>
                  <li>Receive a confirmation email with your country assignment</li>
                  <li>Download and review the study guide for your committee</li>
                  <li>Prepare a position paper based on the guidelines provided</li>
                  <li>Attend the conference on March 25-26, 2025</li>
                </ol>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-medium">Important Notes:</p>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Deadline: March 1, 2025
                    </Badge>
                  </div>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Registration is free of charge</li>
                    <li>Delegates must be current students</li>
                    <li>Country assignments will be made on a first-come, first-served basis</li>
                    <li>Registration deadline: March 18, 2025</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Register as Delegate
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>


          {/* Executive Board Application Tab */}
          <TabsContent value="eb" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Executive Board Application</CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Limited Positions
                  </Badge>
                </div>
                <CardDescription>Apply to be part of the committee leadership team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Executive Board (EB) plays a crucial role in guiding committee sessions, facilitating debate, and
                  ensuring a productive and educational experience for all delegates.
                </p>
                <h3 className="font-semibold">Positions Available:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Chairperson:</span> Presides over committee sessions, enforces rules
                    of procedure
                  </li>
                  <li>
                    <span className="font-medium">Vice-Chairperson:</span> Assists the Chair, manages speakers' list and
                    voting procedures
                  </li>
                  <li>
                    <span className="font-medium">Director:</span> Provides substantive expertise on committee topics
                  </li>
                  <li>
                    <span className="font-medium">Rapporteur:</span> Documents committee proceedings and assists with
                    administrative tasks
                  </li>
                </ul>
                <h3 className="font-semibold mt-4">Requirements:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Previous MUN experience (minimum 3 conferences)</li>
                  <li>Strong understanding of parliamentary procedure</li>
                  <li>Excellent communication and leadership skills</li>
                  <li>Availability for pre-conference training sessions</li>
                </ul>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-medium">Application Process:</p>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      Deadline: January 15, 2025
                    </Badge>
                  </div>
                  <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>Submit the application form with your experience and committee preferences</li>
                    <li>Selected candidates will be invited for an interview</li>
                    <li>Final selections will be announced by January 15, 2025</li>
                  </ol>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Apply for Executive Board
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-12" />

        {/* Communication Channels and Contact Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Join Our Communication Channels
                </CardTitle>
                <Badge variant="secondary">Stay Updated</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Stay updated with the latest announcements, connect with other delegates, and get quick responses to
                your queries by joining our official communication channels.
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


          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  Contact the Organizing Team
                </CardTitle>
                <Badge variant="secondary">Quick Response</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Have questions about registration, committees, or any other aspect of Sathyabama MUN 2025? Our
                organizing team is here to help!
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
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
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@sathyabamamun.com</span>
                </div>
                <div className="flex items-center">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 9876543210</span>
                </div>
              </div>
              <Button className="w-full mt-4" asChild>
                <Link href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Submit an Inquiry
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}