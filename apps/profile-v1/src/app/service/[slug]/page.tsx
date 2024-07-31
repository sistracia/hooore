import { BackgroundColor } from "@/components/background-color";
import { Content2 } from "@repo/components-v1/content2";
import { Hero } from "@repo/components-v1/hero";
import { ServiceCard } from "@repo/components-v1/service-card";
import { redirect } from "next/navigation";
import { Fragment } from "react";
import { Divider } from "@repo/components-v1/divider";
import {
  getServiceSlugsAction,
  getServiceBySlugAction,
} from "@/actions/service";

export async function generateStaticParams() {
  return getServiceSlugsAction();
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlugAction(params.slug);

  if (!service) {
    return redirect("/not-found");
  }

  return (
    <BackgroundColor color={service.background_color}>
      <Hero
        tags={service.tags.toString()}
        headline={service.title}
        description={service.description}
        background={service.background_image}
      />
      <Divider />
      <ServiceCard
        thumbnailUrl={service.thumbnail_url}
        thumbnailAlt={service.thumbnail_alt}
        className="ss-flex-1 ss-bg-black-mamba-500/25 ss-px-4 ss-py-10 sm:ss-px-20 sm:ss-py-20"
        direction="horizontal"
        items={service.items}
        footer={
          service.footer_images.length !== 0 ? (
            <div className="ss-flex ss-flex-wrap ss-justify-center ss-gap-6 sm:ss-justify-start">
              {service.footer_images.map((footerImage, footerImageIndex) => {
                return (
                  <img
                    key={footerImageIndex}
                    src={footerImage.src}
                    alt={footerImage.alt}
                  />
                );
              })}
            </div>
          ) : undefined
        }
      />
      <main
        style={{ backgroundColor: `rgb(${service.contents.backgoundColor}` }}
      >
        {service.contents.items.map((contentItem, contentItemIndex) => {
          return (
            <Fragment key={contentItemIndex}>
              <Divider />
              <Content2
                number={contentItemIndex + 1}
                title={contentItem.title}
                items={contentItem.items}
              />
            </Fragment>
          );
        })}
      </main>
    </BackgroundColor>
  );
}
