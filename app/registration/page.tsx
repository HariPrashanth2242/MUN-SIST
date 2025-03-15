"use client"; // Ensure this is at the top

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Send, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function RegistrationPage() {
  const [selectedCommittee1, setSelectedCommittee1] = useState("");
  const [enrolled, setEnrolled] = useState("");
  const [selectedCommittee2, setSelectedCommittee2] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState(1);
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Add loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Ensure e.currentTarget is defined
    if (!e.currentTarget) {
      console.error("Form element is undefined.");
      return;
    }
  
    setIsSubmitting(true);
  
    // Log form data for debugging
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    try {
      // Submit the form to the iframe
      e.currentTarget.submit();
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Form submission failed. Please check your internet connection and try again.");
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Registration</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Join us for Sathyabama MUN 2025! Registration is free and open to all passionate students interested in
          diplomacy, international relations, and global affairs.
        </p>

        <Tabs defaultValue="delegate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 auto-rows-fr min-h-[3.5rem]">
            <TabsTrigger value="delegate" className="text-center break-words whitespace-normal">
              Delegate Registration
            </TabsTrigger>
            <TabsTrigger value="eb" className="text-center break-words whitespace-normal">
              Executive Board Application
            </TabsTrigger>
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
                      Deadline: March 18, 2025
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
                {/* Form */}
                <div>
                  {!isFormSubmitted ? (
                    <form
                      action="https://docs.google.com/forms/d/e/1FAIpQLScNJhGtcfiscV4-r553336JR8XbZgzLCnYHYuTquh0pUUEt-Q/formResponse"
                      method="POST"
                      target="hidden_iframe"
                      onSubmit={handleSubmit}
                      className="w-full space-y-8"
                    >
                      {/* Section 1: Personal Details */}
                      <div className="space-y-6">
                        <h2 className="text-lg font-semibold mt-8">Section 1: Personal Details</h2>
                        <div className="space-y-6">
                          {/* Full Name */}
                          <label className="block text-sm font-medium">
                            Full Name with Initial <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.2058220784"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your full name with initial"
                          />

                          {/* Email ID */}
                          <label className="block text-sm font-medium">
                            Email ID <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="email"
                            name="entry.1693362767"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your email address"
                          />

                          {/* Contact Number */}
                          <label className="block text-sm font-medium">
                            Contact Number (WhatsApp number, preferably) <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="tel"
                            name="entry.2058161891"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your WhatsApp number"
                          />

                          {/* Year of Study */}
                          <label className="block text-sm font-medium">
                            Year of Study <span className="text-red-500">*</span>
                          </label>
                          <Select
                            name="entry.850580514"
                            required
                            defaultValue=""
                            onValueChange={(value) => setSelectedYear(value)}
                          >
                            <SelectTrigger className={`w-full p-4 border rounded-md ${selectedYear ? "text-black" : "text-gray-400"}`}>
                              <SelectValue placeholder="Select Year of Study" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="I">I (First Year)</SelectItem>
                              <SelectItem value="II">II (Second Year)</SelectItem>
                              <SelectItem value="III">III (Third Year)</SelectItem>
                              <SelectItem value="IV">IV (Fourth Year)</SelectItem>
                              <SelectItem value="V">V (Fifth Year)</SelectItem>
                            </SelectContent>
                          </Select>

                          {/* Department Selection */}
                          <label className="block text-sm font-medium">
                            Department <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.141136026"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your department"
                          />

                          {/* Currently Enrolled in */}
                          <label className="block text-sm font-medium">
                            Enrolled in <span className="text-red-500">*</span>
                          </label>
                          <Select
                            name="entry.1583412127"
                            required
                            defaultValue=""
                            onValueChange={(value) => setEnrolled(value)}
                          >
                            <SelectTrigger className={`w-full p-4 border rounded-md ${enrolled ? "text-black" : "text-gray-400"}`}>
                              <SelectValue placeholder="Select Enrollment Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                              <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                            </SelectContent>
                          </Select>

                          {/* Course Name */}
                          <label className="block text-sm font-medium">
                            Course Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.1396454272"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your course name"
                          />
                        </div>
                      </div>

                      {/* Section 2: Committee Preferences */}
                      <div className="space-y-6">
                        <h2 className="text-lg font-semibold mt-8">Section 2: Committee Preferences</h2>
                        <div className="p-6 border-l-4 border-primary bg-primary/20 text-black rounded-md">
                          <p className="font-semibold text-lg">Agenda:</p>
                          <ul className="list-disc ml-4 text-sm">
                            <li>
                              <strong>UNGA:</strong> Debating the future of international law in addressing neo-imperialism and economic exploitation.
                            </li>
                            <li>
                              <strong>UNHRC:</strong> Defining the limits of state power in monitoring citizens under the guise of national security.
                            </li>
                            <li>
                              <strong>UNCSW:</strong> Bridging the gender gap: ensuring equal representation of women in leadership.
                            </li>
                            <li>
                              <strong>CCC:</strong> Defining the ethical boundaries of humanitarian intervention in conflict zones.
                            </li>
                          </ul>
                          <p className="mt-4 text-sm">
                            <strong>Kindly ensure that you choose two different preferences, without repetition.</strong>
                          </p>
                        </div>

                        <div className="space-y-6 mt-6">
                          {/* Committee Preference One */}
                          <label className="block text-sm font-medium">
                            Committee Preference One <span className="text-red-500">*</span>
                          </label>
                          <Select
                            name="entry.889507807"
                            required
                            value={selectedCommittee1}
                            onValueChange={setSelectedCommittee1}
                          >
                            <SelectTrigger className={`w-full p-4 border rounded-md ${selectedCommittee1 ? "text-black" : "text-gray-400"}`}>
                              <SelectValue placeholder="Select Committee" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="United Nations Human Rights Council (UNHRC)">
                                United Nations Human Rights Council (UNHRC)
                              </SelectItem>
                              <SelectItem value="United Nations General Assembly (UNGA)">
                                United Nations General Assembly (UNGA)
                              </SelectItem>
                              <SelectItem value="Continuous Crisis Committee (CCC)">
                                Continuous Crisis Committee (CCC)
                              </SelectItem>
                              <SelectItem value="United Nations Commission on Status of Women">
                                United Nations Commission on Status of Women
                              </SelectItem>
                              <SelectItem value="International Press (IP) - Photojournalism">
                                International Press (IP) - Photojournalism
                              </SelectItem>
                              <SelectItem value="International Press (IP) - Journalism">
                                International Press (IP) - Journalism
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          {/* Committee Preference Two */}
                          <label className="block text-sm font-medium">
                            Committee Preference Two <span className="text-red-500">*</span>
                          </label>
                          <Select
                            name="entry.1863658876"
                            required
                            value={selectedCommittee2}
                            onValueChange={setSelectedCommittee2}
                          >
                            <SelectTrigger className={`w-full p-4 border rounded-md ${selectedCommittee2 ? "text-black" : "text-gray-400"}`}>
                              <SelectValue placeholder="Select Committee" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="UNHRC">United Nations Human Rights Council (UNHRC)</SelectItem>
                              <SelectItem value="UNGA">United Nations General Assembly (UNGA)</SelectItem>
                              <SelectItem value="CCC">Continuous Crisis Committee (CCC)</SelectItem>
                              <SelectItem value="UNCSW">United Nations Commission on Status of Women (UNCSW)</SelectItem>
                              <SelectItem value="IP-Photojournalism">International Press (IP) - Photojournalism</SelectItem>
                              <SelectItem value="IP-Journalism">International Press (IP) - Journalism</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Section 3: Country Preferences */}
                      <div className="space-y-6">
                        <h2 className="text-lg font-semibold">Section 3: Country Preferences</h2>
                        <div className="p-4 border-l-4 border-primary bg-primary/20 text-black rounded-md">
                          <p className="font-semibold">Important Information:</p>
                          <p>
                            Kindly ensure that you go through the country portfolio/matrix before filling your country preferences.
                          </p>
                          <p>
                            <a
                              href="https://docs.google.com/spreadsheets/d/1hrrm61R25ZJFPaxGm6Cd_0qH3WbbTNw-fxSh_V0dWH4/edit?usp=drivesdk"
                              target="_blank"
                              className="underline text-blue-600"
                            >
                              Country Matrix Link
                            </a>
                          </p>
                          <p>
                            <strong>
                              Country Preferences are not applicable to those delegates who wish to be a part of IP Photojournalism & Journalism.
                            </strong>
                          </p>
                        </div>

                        <div className="space-y-6 mt-6">
                          {/* Committee One - Country Preferences */}
                          <label className="block text-sm font-medium">
                            Committee One - Country Preference One <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.48250264"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your first country preference"
                          />

                          <label className="block text-sm font-medium">
                            Committee One - Country Preference Two <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.1256802439"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your second country preference"
                          />

                          <label className="block text-sm font-medium">
                            Committee One - Country Preference Three <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.1840640281"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your third country preference"
                          />

                          {/* Committee Two - Country Preferences */}
                          <label className="block text-sm font-medium">
                            Committee Two - Country Preference One <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.584391547"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your first country preference"
                          />

                          <label className="block text-sm font-medium">
                            Committee Two - Country Preference Two <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.1952299249"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your second country preference"
                          />

                          <label className="block text-sm font-medium">
                            Committee Two - Country Preference Three <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            name="entry.995694688"
                            required
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter your third country preference"
                          />
                        </div>
                      </div>

                      {/* Section 4: Experience Details */}
                      <div className="space-y-6">
                        <h2 className="text-lg font-semibold mt-8">Section 4: Experience Details</h2>
                        <div className="p-6 border-l-4 border-primary bg-primary/20 text-primary-800 rounded-md">
                          <p className="font-semibold text-lg">
                            Kindly ensure that you answer these questions accurately for the facilitation of the MOCK MUN training session.
                          </p>
                        </div>

                        <div className="space-y-6 mt-6">
                          {/* Previous MUN Experience */}
                          <label className="block text-sm font-semibold">Have you participated in MUN before?</label>
                          <Select
                            name="entry.1738054312"
                            required
                            defaultValue=""
                            onValueChange={(value) => setSelected(value)}
                          >
                            <SelectTrigger className={`w-full p-4 border rounded-md ${selected ? "text-black" : "text-gray-400"}`}>
                              <SelectValue placeholder="Select Yes or No" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Yes">Yes</SelectItem>
                              <SelectItem value="No">No</SelectItem>
                            </SelectContent>
                          </Select>

                          {/* Previous MUN Experiences */}
                          <label className="block text-sm font-semibold">Previous MUN Experiences</label>
                          <Input
                            type="text"
                            name="entry.436128629"
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter details of your previous MUN experiences (if any)"
                          />

                          {/* Previous MUN Wins */}
                          <label className="block text-sm font-semibold">Previous MUN Wins</label>
                          <Input
                            type="text"
                            name="entry.1967484251"
                            className="w-full p-4 border rounded-md"
                            placeholder="Enter details of your previous MUN wins (if any)"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full py-4 px-6 bg-primary text-white rounded-md mt-8"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Registration"}
                      </Button>
                    </form>
                  ) : (
                    <div className="p-4 w-full border-l-4 border-green-600 bg-green-50 text-green-800 rounded-md">
                      <p className="font-semibold text-base sm:text-lg text-center whitespace-normal sm:whitespace-nowrap">
                        Thank you for registering! We appreciate your interest and look forward to your participation.
                      </p>
                    </div>
                  )}
                  <iframe
                    name="hidden_iframe"
                    id="hidden_iframe"
                    style={{ display: "none" }}
                    onLoad={() => {
                      setIsFormSubmitted(true); // Show success message when the iframe loads
                      setIsSubmitting(false); // Reset submitting state
                    }}
                  ></iframe>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

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
                <div className="p-3 border-l-4 w-full border-red-600 bg-red-50 text-red-800 rounded-md">
                  <p className="font-semibold text-lg text-center justify-center">Registrations Closed !</p>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="my-12" />

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
                  <span>Munianish076@gmail.com</span>
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
                  <span>+91 962992419</span>
                </div>
              </div>
              <Button className="w-full mt-4" asChild>
                <Link href="/contact#inquiry" passHref>
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