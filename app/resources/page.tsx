"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, BookOpen, HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("position-papers"); // Default tab

  useEffect(() => {
    const value = searchParams.get("value"); // Get 'value' from URL
    if (value) {
      if (value === "beginners") {
        // Scroll to just above the bottom of the page when the 'beginners' tab is clicked
        const scrollPosition = document.documentElement.scrollHeight - window.innerHeight - 250; // Adjust 100 as needed for "just above the bottom"
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      } else {
        setActiveTab(value); // Set active tab if it's not 'beginners'
        document.getElementById(value)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    // Only call setActiveTab if value is not 'beginners'
    if (value !== "beginners") {
      setActiveTab(value);
    }

    if (value === "beginners") {
      // Scroll to just above the bottom of the page when the 'beginners' tab is clicked
      const scrollPosition = document.documentElement.scrollHeight - window.innerHeight - 100; // Adjust 100 as needed for "just above the bottom"
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }

    router.push(`/resources?value=${value}`, { scroll: false }); // Update URL without page reload
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Access all the materials you need to prepare for Sathyabama MUN 2025. We've compiled comprehensive resources
          to help both experienced delegates and newcomers.
        </p>
        <div className="p-6 mb-6 border-l-4 border-red-600 bg-red-50 text-red-800 rounded-md">
          <p className="font-semibold text-lg">Important Notice:</p>
          <p className="mt-2 text-m">
            <strong>Study Guides will be released soon!</strong>
          </p>
        </div>

        {/* Tabs section (commented out) */}
        {/* <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full gap-14">
            <TabsTrigger value="study-guides">Study Guides</TabsTrigger>
            <TabsTrigger value="rules">Rules of Procedure</TabsTrigger>
            <TabsTrigger value="position-papers">Position Papers</TabsTrigger>
          </TabsList>

          <TabsContent value="study-guides" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Committee Study Guides</CardTitle>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Essential
                  </Badge>
                </div>
                <CardDescription>Comprehensive background guides for each committee</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Study guides provide essential background information on your committee's topic, key questions to
                  consider, research guidance, and a bibliography of helpful resources.
                </p>
                <div className="grid gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">UNGA Study Guide</p>
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Reevaluating the Global Order: Empowering Emerging Nations
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://drive.google.com/drive/folders" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download All Study Guides
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Rules of Procedure (ROP)</CardTitle>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Required
                  </Badge>
                </div>
                <CardDescription>Official guidelines for committee proceedings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Rules of Procedure (ROP) outline the formal structure of committee sessions, including debate
                  formats, voting procedures, and resolution drafting guidelines.
                </p>
                <div className="grid gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Sathyabama MUN Rules of Procedure</p>
                          <Badge variant="outline" className="text-xs">
                            2025 Edition
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Comprehensive guide to parliamentary procedure</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="position-papers" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Position Papers</CardTitle>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Mandatory
                  </Badge>
                </div>
                <CardDescription>Guidelines and samples for writing effective position papers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Position papers outline your country's stance on the committee topic, relevant historical background,
                  proposed solutions, and anticipated challenges. They are essential preparation for effective
                  participation.
                </p>
                <div className="grid gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Position Paper Guidelines</p>
                          <Badge variant="secondary" className="text-xs">
                            Required
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Format, structure, and submission instructions</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="POSITION PAPER GUIDELINES .pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Sample Position Paper - UNGA</p>
                          <Badge variant="outline" className="text-xs">
                            Example
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Example of an excellent position paper</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="Sample Position Paper-UNGA.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-primary mr-3" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Sample Position Paper - UNHRC</p>
                          <Badge variant="outline" className="text-xs">
                            Example
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Example of an excellent position paper</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="UNHRC_SAMPLEPOSITION.pdf" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs> */}

        {/* Position Papers section (active) */}
        <Card id="position-papers">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>Position Papers</CardTitle>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary">
                Mandatory
              </Badge>
            </div>
            <CardDescription>Guidelines and samples for writing effective position papers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Position papers outline your country's stance on the committee topic, relevant historical background,
              proposed solutions, and anticipated challenges. They are essential preparation for effective
              participation.
            </p>
            <div className="grid gap-4">
              {/* Position Paper Guidelines */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Position Paper Guidelines</p>
                      <Badge variant="secondary" className="text-xs">
                        Required
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Format, structure, and submission instructions</p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="POSITION PAPER GUIDELINES .pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sample Position Paper - UNGA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Sample Position Paper - UNGA</p>
                      <Badge variant="outline" className="text-xs">
                        Example
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Example of an excellent position paper</p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="Sample Position Paper-UNGA.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sample Position Paper - UNHRC */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Sample Position Paper - UNHRC</p>
                      <Badge variant="outline" className="text-xs">
                        Example
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Example of an excellent position paper</p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="UNHRC_SAMPLEPOSITION.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        {/* Beginner's Guide section (active) */}
        <div className="bg-muted p-6 rounded-lg">
          <div className="flex items-start gap-4 flex-col md:flex-row">
            <HelpCircle className="h-8 w-8 text-primary mt-1" />
            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-2xl font-semibold">New to MUN? Here's How to Prepare!</h2>
                <Badge variant="secondary">Beginner Guide</Badge>
              </div>
              <div className="space-y-4">
                <p>
                  If this is your first Model United Nations conference, don't worry! We've put together a
                  beginner-friendly guide to help you prepare effectively and make the most of your experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold mb-2">Research Your Country</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand your assigned country's history, political system, economy, and stance on the committee
                      topic.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold mb-2">Master the Rules</h3>
                    <p className="text-sm text-muted-foreground">
                      Familiarize yourself with the Rules of Procedure to navigate committee sessions confidently.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold mb-2">Prepare Your Position Paper</h3>
                    <p className="text-sm text-muted-foreground">
                      Write a concise document outlining your country's perspective and proposed solutions.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold mb-2">Practice Public Speaking</h3>
                    <p className="text-sm text-muted-foreground">
                      Prepare and practice your opening speech to build confidence for committee sessions.
                    </p>
                  </div>
                </div>
                <Button
                  className="mt-4 px-4 py-3 text-sm md:text-base md:px-6 md:py-3 break-words whitespace-normal h-auto min-h-[48px] sm:min-h-0"
                  asChild
                >
                  <Link
                    href="Beginner's_GUIDE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Beginner's Guide to MUN
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourcesContent />
    </Suspense>
  );
}