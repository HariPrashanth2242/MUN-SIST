import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Sathyabama MUN</h1>
        <Separator className="my-6" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is Model United Nations?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                Model United Nations (MUN) is an educational simulation where students can learn about diplomacy,
                international relations, and the United Nations. Participants, known as delegates, are assigned a
                country to represent in one of the UN's numerous committees.
              </p>
              <p className="text-muted-foreground">
                They conduct research before conferences, formulate positions and strategies, deliver speeches,
                negotiate with allies and adversaries, resolve conflicts, and navigate the conference rules of
                procedure—all in the interest of resolving problems that affect the world.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Model United Nations Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Sathyabama MUN?</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Sathyabama Campus"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-muted-foreground mb-4">
                As the inaugural edition of Sathyabama MUN, this conference represents a historic moment for our
                institution. By participating, you become part of the founding legacy of what we hope will become a
                prestigious annual event.
              </p>
              <p className="text-muted-foreground">
                Sathyabama MUN offers a unique platform for students to engage with global issues, develop critical
                thinking, public speaking, and diplomatic skills in a supportive environment. Our carefully selected
                committees and agendas reflect contemporary challenges that require innovative solutions.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-6">Message from the Secretariat</h2>
          <Card>
            <CardContent className="p-6">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="text-muted-foreground mb-4">
                  "On behalf of the entire organizing team, I am thrilled to welcome you to the first edition of
                  Sathyabama Model United Nations. In a world facing unprecedented challenges, the need for diplomatic
                  dialogue and collaborative problem-solving has never been more critical.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our theme, 'Redefining Power & Reshaping Narratives,' invites delegates to question established
                  paradigms and envision new frameworks for global cooperation. We have designed this conference to be
                  both intellectually stimulating and practically enriching.
                </p>
                <p className="text-muted-foreground">
                  Whether you are a seasoned MUN participant or a first-timer, we promise you an unforgettable
                  experience of debate, diplomacy, and discovery. We look forward to welcoming you to our campus in
                  March 2025."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/gae.svg?height=100&width=100"
                    alt="Secretary General"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Anish Inti</p>
                  <p className="text-sm text-muted-foreground">Secretary General, Sathyabama MUN 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-6">Message from the Deputy Secretary General</h2>
          <Card>
            <CardContent className="p-6">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="text-muted-foreground mb-4">
                  "On behalf of the entire organizing team, I am thrilled to welcome you to the first edition of
                  Sathyabama Model United Nations. In a world facing unprecedented challenges, the need for diplomatic
                  dialogue and collaborative problem-solving has never been more critical.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our theme, 'Redefining Power & Reshaping Narratives,' invites delegates to question established
                  paradigms and envision new frameworks for global cooperation. We have designed this conference to be
                  both intellectually stimulating and practically enriching.
                </p>
                <p className="text-muted-foreground">
                  Whether you are a seasoned MUN participant or a first-timer, we promise you an unforgettable
                  experience of debate, diplomacy, and discovery. We look forward to welcoming you to our campus in
                  March 2025."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/deputy.svg?height=100&width=100"
                    alt="Deputy Secretary General"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Thaarani</p>
                  <p className="text-sm text-muted-foreground">Secretary General, Sathyabama MUN 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}