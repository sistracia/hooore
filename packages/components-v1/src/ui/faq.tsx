import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { FAQProps } from "../types/faq";
import { Chip } from "./chip";
import { Content4 } from "./content4";
import { AutoLinkSentence } from "./auto-link-senctence";

export function FAQ({ caption, faq, headline, tag }: FAQProps) {
  return (
    <Content4
      header={tag && <Chip>{tag}</Chip>}
      title={headline}
      pushContent={false}
      footer={
        caption && (
          <p className="pc-text-center pc-text-p sm:pc-text-p-sm">{caption}</p>
        )
      }
      content={
        faq && (
          <Accordion type="single" collapsible>
            {faq.map((faq, faqIndex) => {
              return (
                <AccordionItem key={faqIndex} value={faqIndex.toString()}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <div className="pc-mb-6 last:pc-mb-0">
                      <p className="pc-whitespace-pre-line pc-text-balance pc-text-p sm:pc-text-p-sm">
                        <AutoLinkSentence>{faq.answer}</AutoLinkSentence>
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        )
      }
    />
  );
}
