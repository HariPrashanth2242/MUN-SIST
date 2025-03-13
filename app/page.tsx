import { ImprovedHero } from "@/components/improved-hero"
import { ImageGallery } from "@/components/image-gallery"
import { ImprovedFAQ } from "@/components/improved-faq"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, FileText, Award, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Improved Hero Section */}
      <ImprovedHero />

      {/* Introduction Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Welcome to Sathyabama MUN 2025
              <div className="h-1 w-16 bg-primary mx-auto mt-4" />
            </h2>
            <p className="text-lg text-muted-foreground">
              Sathyabama Institute of Science and Technology proudly presents its first-ever Model United Nations. Be
              part of history as we launch a platform for future diplomats, leaders, and changemakers!
            </p>
            <Separator className="my-8" />
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Key Highlights
            <div className="h-1 w-16 bg-primary mx-auto mt-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">4 Committees</h3>
                <p className="text-muted-foreground">UNGA, UNHRC, UNCSW, and Crisis Committee</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Exciting Debates</h3>
                <p className="text-muted-foreground">Engage in stimulating discussions on pressing global issues</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Registration Fee</h3>
                <p className="text-muted-foreground">Open to all passionate students interested in global diplomacy</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Downloadable Resources</h3>
                <p className="text-muted-foreground">Comprehensive study guides and materials for preparation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery />

      {/* FAQ Section */}
      <ImprovedFAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

