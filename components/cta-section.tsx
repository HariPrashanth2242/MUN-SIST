import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, Award } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="overflow-hidden rounded-2xl border-2">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary p-8 md:p-12 text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Participate?</h2>
              <p className="text-lg opacity-90 mb-6">
                Join us for two days of diplomatic simulations, debates, and networking with fellow delegates.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">March 25-26, 2025</p>
                    <p className="text-sm opacity-80">Two full days of engaging sessions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Open to All Students</p>
                    <p className="text-sm opacity-80">No prior experience required</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Certificates & Awards</p>
                    <p className="text-sm opacity-80">Recognition for outstanding delegates</p>
                  </div>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/registration">Register as a Delegate</Link>
              </Button>
            </div>
            <div className="p-8 md:p-12 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Key Dates</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Registration Opens:</span>
                      <span className="font-medium">January 15, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Registration Deadline:</span>
                      <span className="font-medium">March 18, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Position Paper Due:</span>
                      <span className="font-medium">March 23, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Conference Dates:</span>
                      <span className="font-medium">March 25-26, 2025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

