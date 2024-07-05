import { BackgroundColor } from "@/components/background-color";
import { Chip } from "@/components/chip";
import { Content2 } from "@/components/content2";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import type { PageData } from "@/types/page";
import { redirect } from "next/navigation";
import servicesDetails from "../../data/services-details.json";
import { Spotlight } from "@/components/spotlight";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const pageData = (servicesDetails as Record<string, PageData>)[params.slug];

  if (!pageData) {
    return redirect("/not-found");
  }

  return (
    <BackgroundColor color={pageData.backgroundColor}>
      <Hero
        header={<Chip>{pageData.chip}</Chip>}
        title={pageData.title}
        description={pageData.description}
        background={
          <div className="ss-absolute ss-left-0 ss-top-0 ss-h-full ss-w-full">
            <Spotlight gradientColor="rgba(var(--page-background))">
              <div
                className="ss-h-full ss-w-full ss-bg-cover ss-bg-no-repeat ss-fill-none ss-brightness-50 sm:ss-bg-contain sm:ss-bg-right"
                style={{
                  backgroundImage: `url(${pageData.backgoundImage})`,
                }}
              ></div>
            </Spotlight>
          </div>
        }
      />
      <ServiceCard
        thumbnailUrl={pageData.service.thumbnailUrl}
        thumbnailAlt={pageData.service.thumbnailAlt}
        className="ss-flex-1 ss-bg-black-mamba-500/25 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20"
        direction="horizontal"
        items={pageData.service.items}
        footer={
          pageData.service.footerImages.length !== 0 ? (
            <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-6 sm:ss-justify-start">
              {pageData.service.footerImages.map(
                (footerImage, footerImageIndex) => {
                  return (
                    <img
                      key={footerImageIndex}
                      src={footerImage.src}
                      alt={footerImage.alt}
                    />
                  );
                },
              )}
            </div>
          ) : undefined
        }
      />
      <main
        style={{ backgroundColor: `rgb(${pageData.content.backgoundColor}` }}
      >
        {pageData.content.items.map((contentItem, contentItemIndex) => {
          return (
            <Content2
              key={contentItemIndex}
              number={contentItemIndex + 1}
              className="ss-border-t-2 ss-border-t-crema-cream-500"
              title={contentItem.title}
              items={contentItem.items}
            />
          );
        })}
      </main>
    </BackgroundColor>
  );
}
