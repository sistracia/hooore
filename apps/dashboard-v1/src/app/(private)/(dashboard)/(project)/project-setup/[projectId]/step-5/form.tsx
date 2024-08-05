"use client";

import { type TemplateSchema } from "@/actions/template.definition";
import { Button } from "@/components/ui/button";
import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { SetupLayout } from "@/components/setup-layout";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  TemplatePreview,
  type TemplatePreviewProps,
} from "@/components/template-preview";

function TemplateOptionCard(props: {
  name: string;
  comingSoon?: boolean;
  thumbnailUrl?: string;
  onPreview?: () => void;
}) {
  const { name, comingSoon, thumbnailUrl, onPreview } = props;

  const Wrapper = comingSoon ? ComingSoonOverlay : "div";

  return (
    <Wrapper className="dd-rounded-lg dd-border">
      <div className="dd-h-[400px] dd-border-b dd-p-6">
        {thumbnailUrl ? (
          <div className="dd-group dd-relative dd-overflow-hidden dd-rounded-md">
            <img
              className="dd-h-full dd-w-full dd-object-none"
              src={thumbnailUrl}
              alt={`${name} Thumbnail`}
            />
            <div className="dd-absolute dd-left-0 dd-top-0 dd-hidden dd-h-full dd-w-full dd-items-center dd-justify-center dd-bg-black/50 group-hover:dd-flex">
              <Button type="button" variant="secondary" onClick={onPreview}>
                Preview
              </Button>
            </div>
          </div>
        ) : (
          <div className="dd-h-full dd-w-full dd-rounded-md dd-bg-black dd-p-2"></div>
        )}
      </div>
      <div className="dd-p-6">
        <span className="dd-text-lg dd-font-semibold">{name}</span>
      </div>
    </Wrapper>
  );
}

function PreviewModal(props: TemplatePreviewProps) {
  return (
    <div className="dd-absolute dd-left-0 dd-top-0 dd-z-50 dd-h-full dd-w-full">
      <TemplatePreview {...props} />
    </div>
  );
}

export function TemplateOptionsForm(props: { templates: TemplateSchema[] }) {
  const { templates } = props;

  const [templatePreview, setTemplatePreview] = useState<TemplateSchema | null>(
    null,
  );

  const portalRef = useRef<HTMLDivElement>(null);

  return (
    <SetupLayout
      className="sm:dd-w-[740px]"
      badge="Template"
      title="Choose a template"
      stickyHeader
    >
      <div className="dd-grid dd-grid-cols-1 dd-gap-6 sm:dd-grid-cols-2">
        {templates.map((template) => {
          return (
            <TemplateOptionCard
              key={template.id}
              name={template.name}
              thumbnailUrl={template.thumbnail_url}
              onPreview={() => {
                setTemplatePreview?.(template);
              }}
            />
          );
        })}
        <TemplateOptionCard comingSoon name="Company Profile X" />
        <TemplateOptionCard comingSoon name="Company Profile Y" />
        <TemplateOptionCard comingSoon name="Company Profile Z" />
      </div>
      <div ref={portalRef}></div>
      {templatePreview !== null &&
        portalRef.current &&
        createPortal(
          <PreviewModal
            title={templatePreview.name}
            onBack={() => {
              setTemplatePreview(null);
            }}
            actionButton={<Button type="submit">Use This Template</Button>}
          >
            <iframe
              title={`${templatePreview.name} Frame`}
              src="https://hooore.com"
              className="dd-h-full dd-w-full"
            ></iframe>
          </PreviewModal>,
          portalRef.current,
        )}
    </SetupLayout>
  );
}
