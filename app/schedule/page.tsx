import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function SchedulePage() {
  return (
    <div className="container py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Event Schedule</h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
          The Sathyabama MUN 2025 will take place over two days, with a carefully planned schedule to maximize your
          learning and engagement experience.
        </p>

        {/* Responsive alignment for the button */}
        <div className="flex justify-start sm:justify-end mb-6">
          <Button variant="outline" asChild>
            <Link href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Add to Google Calendar</span>
              <span className="sm:hidden">Add to Calendar</span>
            </Link>
          </Button>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Day 1 Schedule */}
          <div>
            <div className="flex flex-col justify-normal sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-2 sm:mb-0 sm:mr-4">
                <h2 className="text-xl font-bold">Day 1</h2>
                <p className="text-sm">March 25, 2025</p>
              </div>
              <h3 className="text-xl font-semibold">IDEAS, COALITION & DRAFTING</h3>
            </div>

            <div className="space-y-4">
              {/* Delegate Registration */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg">Required</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Delegate Registration</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">9:00 AM - 9:30 AM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Main Auditorium Lobby</p>
                      <p className="text-sm text-muted-foreground">
                        Delegates must bring their ID cards and confirmation emails
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Ceremony */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-primary/20 text-primary">Highlight</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Opening Ceremony</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">9:30 AM - 10:30 AM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Main Auditorium</p>
                      <p className="text-sm text-muted-foreground">
                        Welcome address, keynote speech, and introduction of the Secretariat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chair's Briefing */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                    <CardTitle>Chair's Briefing</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">10:30 AM - 10:50 AM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Respective Committee Rooms</p>
                      <p className="text-sm text-muted-foreground">Introduction to committee rules and procedures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Committee Session I */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-muted text-primary">All Committees</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Committee Session I</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">10:50 AM - 12:10 PM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Respective Committee Rooms</p>
                      <p className="text-sm text-muted-foreground">
                        Roll call, opening speeches, and setting the agenda
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lunch Break */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                    <CardTitle>Lunch Break</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">12:10 PM - 1:00 PM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Cafeteria</p>
                      <p className="text-sm text-muted-foreground">
                        Networking opportunity with delegates from other committees
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Committee Session II */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-muted text-primary">All Committees</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Committee Session II</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">1:00 PM - 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Respective Committee Rooms</p>
                      <p className="text-sm text-muted-foreground">
                        Moderated and unmoderated caucuses, working paper drafting
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          {/* Day 2 Schedule */}
          <div>
            <div className="flex flex-col justify-normal sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg mb-2 sm:mb-0 sm:mr-4">
                <h2 className="text-xl font-bold">Day 2</h2>
                <p className="text-sm">March 26, 2025</p>
              </div>
              <h3 className="text-xl font-semibold">AMENDMENTS, PRESENTATIONS & VOTING</h3>
            </div>

            <div className="space-y-4">
              {/* Chair's Briefing */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                    <CardTitle>Chair's Briefing</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">9:30 AM - 9:45 AM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Respective Committee Rooms</p>
                      <p className="text-sm text-muted-foreground">Overview of Day 1 progress and Day 2 objectives</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Committee Session III */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-primary/10 text-primary">Critical</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Committee Session III</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">10:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Respective Committee Rooms</p>
                      <p className="text-sm text-muted-foreground">Draft resolution presentations and amendments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lunch Break */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                    <CardTitle>Lunch Break</CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">12:00 PM - 1:00 PM</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Cafeteria</p>
                      <p className="text-sm text-muted-foreground">Final opportunity for informal negotiations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Committee Session IV */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-primary/10 text-primary">Voting Procedures</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Committee Session IV</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">1:00 PM - 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Respective Committee Rooms</p>
                      <p className="text-sm text-muted-foreground">Voting procedures and resolution adoption</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Closing Ceremony */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-primary/20 text-primary">Highlight</Badge>
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                      <CardTitle>Closing Ceremony</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">3:00 PM - 3:15 PM</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm font-medium">Main Auditorium</p>
                      <p className="text-sm text-muted-foreground">Awards ceremony, closing remarks, and group photo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-muted rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">Venue Information</h2>
            <Badge className="bg-primary">Campus Map Available</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Sathyabama Institute of Science and Technology</p>
                <p className="text-muted-foreground">Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai - 600119</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              All committee sessions will take place in designated rooms within the campus. Detailed room assignments
              will be provided during registration.
            </p>
          </div>
          <Button className="mt-4 sm:mt-6" asChild>
            <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Google Maps
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}