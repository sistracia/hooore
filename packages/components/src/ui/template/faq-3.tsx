import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import type { Faq3Props } from '../../types/template-types/faq-3'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../common/accordion'
import { AutoLinkSentence } from '../common/auto-link-senctence'
import type { AdditionalPageRendererComponentProps } from '../types'

export type Faq3RendererProps = Faq3Props & AdditionalPageRendererComponentProps

export function Faq3(props: Faq3RendererProps) {
  const { caption, faq, headline } = props

  return (
    <section className="pc-bg-white pc-py-6 sm:pc-py-8 lg:pc-py-12">
      <div className="pc-mx-auto pc-max-w-screen-2xl pc-px-4 md:pc-px-8">
        <div className="pc-mb-10 md:pc-mb-16">
          {headline && (
            <h2 className="pc-mb-4 pc-text-center pc-text-2xl pc-font-bold pc-text-gray-800 md:pc-mb-6 lg:pc-text-3xl">
              {headline}
            </h2>
          )}

          {caption && (
            <p className="pc-mx-auto pc-max-w-screen-md pc-text-center pc-text-gray-500 md:pc-text-lg">
              {caption}
            </p>
          )}
        </div>

        {faq && (
          <div className="pc-mx-auto pc-flex pc-max-w-screen-sm pc-flex-col pc-border-t">
            <Accordion type="single" collapsible>
              {faq.map((faq, faqIndex) => {
                return (
                  <AccordionItem key={faqIndex} value={faqIndex.toString()}>
                    <AccordionTrigger
                      closeIcon={
                        <ChevronUpIcon className="pc-h-8 pc-w-8 pc-shrink-0 pc-text-indigo-500" />
                      }
                      openIcon={
                        <ChevronDownIcon className="pc-h-8 pc-w-8 pc-shrink-0 pc-text-indigo-500" />
                      }
                    >
                      {faq?.question}
                    </AccordionTrigger>
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
          </div>
        )}
      </div>
    </section>
  )
}
