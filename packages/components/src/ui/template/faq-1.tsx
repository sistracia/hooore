import type { Faq1Props } from '../../types/template-types/faq-1'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../common/accordion'
import { AutoLinkSentence } from '../common/auto-link-senctence'
import { Chip } from '../common/chip'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Faq1RendererProps = Faq1Props & AdditionalPageRendererComponentProps

export function Faq1(props: Faq1RendererProps) {
  const { caption, faq, headline, tag } = props

  return (
    <section className="pc-flex pc-h-fit pc-w-full pc-flex-col pc-items-center pc-px-4 pc-py-10 sm:pc-flex-row sm:pc-items-start sm:pc-px-20 sm:pc-py-20">
      {(tag || headline) && (
        <div className="pc-flex pc-w-full pc-flex-1 pc-flex-col pc-gap-6 sm:pc-mr-12 sm:pc-w-fit">
          {tag && (
            <div className="pc-flex pc-justify-center pc-gap-1 sm:pc-justify-start">
              <Chip>{tag}</Chip>
            </div>
          )}
          {headline && (
            <h2 className="pc-whitespace-pre-line pc-text-balance pc-text-center pc-text-h2 sm:pc-text-left sm:pc-text-h2-sm">
              {headline}
            </h2>
          )}
        </div>
      )}
      {(faq || caption) && (
        <div className="pc-flex pc-h-full pc-flex-1 pc-flex-col pc-items-center pc-gap-10 sm:pc-items-start">
          {faq && (
            <Accordion type="single" collapsible>
              {faq.map((faq, faqIndex) => {
                return (
                  <AccordionItem key={faqIndex} value={faqIndex.toString()}>
                    <AccordionTrigger>{faq?.question}</AccordionTrigger>
                    <AccordionContent>
                      <div className="pc-mb-6 last:pc-mb-0">
                        <p className="pc-whitespace-pre-line pc-text-balance pc-text-p sm:pc-text-p-sm">
                          <AutoLinkSentence>{faq?.answer}</AutoLinkSentence>
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          )}
          {caption && (
            <p className="pc-text-center pc-text-p sm:pc-text-p-sm">
              {caption}
            </p>
          )}
        </div>
      )}
    </section>
  )
}
