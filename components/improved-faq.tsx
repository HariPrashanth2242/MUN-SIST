"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "What is Sathyabama MUN?",
    answer:
      "Sathyabama MUN is the inaugural Model United Nations conference organized by Sathyabama Institute of Science and Technology. It provides a platform for students to engage in diplomatic simulations, debate global issues, and develop critical thinking and public speaking skills.",
    category: "General",
  },
  {
    question: "How can I register for the conference?",
    answer:
      "Registration is free and open to all students. Visit our Registration page to fill out the application form. You'll receive a confirmation email with your country assignment once your registration is processed.",
    category: "Registration",
  },
  {
    question: "What committees are available?",
    answer:
      "We offer four committees: UNGA (General Assembly), UNHRC (Human Rights Council), UNCSW (Commission on Status of Women), and a Crisis Committee. Each addresses specific global challenges requiring innovative diplomatic solutions.",
    category: "Committees",
  },
  {
    question: "Do I need prior MUN experience?",
    answer:
      "No prior experience is required. We welcome both experienced delegates and newcomers. Comprehensive study guides and resources are provided to help you prepare effectively.",
    category: "Preparation",
  },
  {
    question: "What should I wear to the conference?",
    answer:
      "Delegates should wear formal Western business attire (suits, blazers, formal dresses) throughout the conference to maintain a professional diplomatic atmosphere.",
    category: "Event",
  },
]

export function ImprovedFAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center pb-4">
  <Badge className="bg-primary/20 text-primary px-3 py-1">FAQs</Badge>
</div>

          <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground mb-10 text-center">
            Find answers to common questions about Sathyabama MUN 2025. If you can't find what you're looking for, feel
            free to contact our team.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background rounded-lg shadow-sm">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="hover:no-underline px-6 py-4 text-left font-medium data-[state=open]:text-primary">
                      <div className="flex items-center justify-between w-full pr-4">
                        <span className="text-left">{faq.question}</span>
                        
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-6 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

