"use client";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge" // Add this at the top of your file
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";



export default function CommitteesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("unga"); // Default tab

  useEffect(() => {
    const value = searchParams.get("value"); // Get 'value' from URL
    if (value) {
      setActiveTab(value); // Set active tab
      document.getElementById(value)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`/committees?value=${value}`, { scroll: false }); // Update URL without page reload
  };
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Committees & Agendas</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore our carefully selected committees and their agendas for Sathyabama MUN 2025. Each committee addresses
          critical global issues that require innovative diplomatic solutions.
        </p>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="unga">UNGA</TabsTrigger>
            <TabsTrigger value="unhrc">UNHRC</TabsTrigger>
            <TabsTrigger value="uncsw">UNCSW</TabsTrigger>
            <TabsTrigger value="crisis">Crisis</TabsTrigger>
            <TabsTrigger value="ipc">IPC</TabsTrigger>
          </TabsList>

          <TabsContent value="unga" className="mt-6">
            <Card>
              <CardHeader className="relative h-48 p-0">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="United Nations General Assembly"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    UNGA
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">Beginner Friendly</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl mb-2">United Nations General Assembly</CardTitle>
                <CardDescription className="text-lg mb-4">
                  Reevaluating the Global Order: Empowering Emerging Nations
                </CardDescription>
                <div className="space-y-4">
                  <p>
                    The United Nations General Assembly (UNGA) serves as the main deliberative, policymaking, and
                    representative organ of the UN. Comprising all 193 Member States, it provides a unique forum for
                    multilateral discussion of international issues.
                  </p>
                  <p>
                    In this committee, delegates will address the evolving global power dynamics and explore mechanisms
                    to ensure more equitable representation and influence for emerging nations in international
                    institutions and decision-making processes.
                  </p>
                  <h3 className="font-semibold mt-4">Key Discussion Points:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Reform of the UN Security Council</li>
                    <li>Voting rights in international financial institutions</li>
                    <li>Technology transfer and intellectual property rights</li>
                    <li>Climate justice and environmental responsibility</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Study Guide
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/registration">Register for UNGA</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="unhrc" className="mt-6">
            <Card>
              <CardHeader className="relative h-48 p-0">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="United Nations Human Rights Council"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    UNHRC
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">Intermediate</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl mb-2">United Nations Human Rights Council</CardTitle>
                <CardDescription className="text-lg mb-4">
                  Combatting Gender-Based Digital Surveillance & Privacy Violations
                </CardDescription>
                <div className="space-y-4">
                  <p>
                    The United Nations Human Rights Council (UNHRC) is an inter-governmental body responsible for
                    strengthening the promotion and protection of human rights around the world.
                  </p>
                  <p>
                    This committee will focus on the emerging challenges of digital surveillance and privacy violations
                    that disproportionately affect women and gender minorities. Delegates will explore the intersection
                    of technology, gender, and human rights in the digital age.
                  </p>
                  <h3 className="font-semibold mt-4">Key Discussion Points:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Online harassment and digital stalking</li>
                    <li>Non-consensual intimate imagery ("revenge porn")</li>
                    <li>State surveillance of women's rights activists</li>
                    <li>Data protection frameworks and enforcement</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Study Guide
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/registration">Register for UNHRC</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="uncsw" className="mt-6">
            <Card>
              <CardHeader className="relative h-48 p-0">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="UN Commission on the Status of Women"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    UNCSW
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">Intermediate</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl mb-2">UN Commission on the Status of Women</CardTitle>
                <CardDescription className="text-lg mb-4">Reshaping Economic Systems for Gender Parity</CardDescription>
                <div className="space-y-4">
                  <p>
                    The Commission on the Status of Women (CSW) is the principal global intergovernmental body
                    exclusively dedicated to the promotion of gender equality and the empowerment of women.
                  </p>
                  <p>
                    In this committee, delegates will examine structural economic inequalities and develop frameworks
                    for creating more inclusive economic systems that promote gender parity in ownership, leadership,
                    and opportunity.
                  </p>
                  <h3 className="font-semibold mt-4">Key Discussion Points:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Gender wage gap and occupational segregation</li>
                    <li>Women's access to financial services and capital</li>
                    <li>Unpaid care work and its economic valuation</li>
                    <li>Gender-responsive economic recovery policies</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Study Guide
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/registration">Register for UNCSW</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="crisis" className="mt-6">
            <Card>
              <CardHeader className="relative h-48 p-0">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Crisis Committee"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Crisis
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">Advanced</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl mb-2">Crisis Committee (CCC)</CardTitle>
                <CardDescription className="text-lg mb-4">
                  A New Matriarchal World Order: Redefining Leadership
                </CardDescription>
                <div className="space-y-4">
                  <p>
                    The Crisis Committee offers a dynamic and fast-paced simulation where delegates respond to rapidly
                    evolving scenarios that require immediate action and creative problem-solving.
                  </p>
                  <p>
                    This committee will explore an alternate reality where global leadership structures have shifted to
                    a matriarchal paradigm. Delegates will navigate the complexities of this new world order and address
                    emerging crises through the lens of transformed power dynamics.
                  </p>
                  <h3 className="font-semibold mt-4">Key Discussion Points:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Restructuring of international institutions</li>
                    <li>Conflict resolution through collaborative approaches</li>
                    <li>Resource allocation and distribution priorities</li>
                    <li>Balancing power and representation</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Study Guide
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/registration">Register for Crisis</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="ipc" className="mt-6">
            <Card>
              <CardHeader className="relative h-48 p-0">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="International Press Corps"
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    IPC
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm">All Levels</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl mb-2">International Press Corps (IPC)</CardTitle>
                <CardDescription className="text-lg mb-4">Journalism & Photojournalism</CardDescription>
                <div className="space-y-4">
                  <p>
                    The International Press Corps provides a unique opportunity for delegates to cover the proceedings
                    of all committees as journalists, creating written and visual content that documents the conference.
                  </p>
                  <p>
                    IPC delegates will report on committee sessions, conduct interviews with delegates and chairs, and
                    produce daily newsletters, articles, and photo essays that capture the essence of the debates and
                    negotiations.
                  </p>
                  <h3 className="font-semibold mt-4">Key Responsibilities:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Objective reporting on committee proceedings</li>
                    <li>Conducting interviews with key delegates</li>
                    <li>Creating compelling visual documentation</li>
                    <li>Publishing daily newsletters and updates</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="https://drive.google.com/file" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Press Guidelines
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/registration">Register for IPC</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Study Guides & Resources</h2>
          <p className="mb-4">
            All committee study guides are available for download. These comprehensive documents provide essential
            background information, key questions to consider, and research guidance to help you prepare effectively.
          </p>
          <Button asChild>
            <Link href="https://drive.google.com/drive/folders" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Access All Study Guides
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}