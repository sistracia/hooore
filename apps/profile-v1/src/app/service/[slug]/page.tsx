import { BackgroundColor } from "@/components/background-color";
import { Chip } from "@repo/components-v1/chip";
import { Content2 } from "@repo/components-v1/content2";
import { Hero } from "@repo/components-v1/hero";
import { ServiceCard } from "@repo/components-v1/service-card";
import { redirect } from "next/navigation";
import { SpotlightBackground } from "@repo/components-v1/spotlight-background";
import { Fragment } from "react";
import { Divider } from "@repo/components-v1/divider";
import { getServiceBySlugAction } from "@/actions/service";
import { OutlineText } from "@repo/components-v1/outline-text";

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
        header={service.tags.map((tag, tagIndex) => {
          return <Chip key={tagIndex}>{tag}</Chip>;
        })}
        title={<OutlineText>{service.title}</OutlineText>}
        description={<OutlineText>{service.description}</OutlineText>}
        background={
          <SpotlightBackground
            src={service.background_image}
            alt="Service logo"
            spotlightAlt="Service logo spotlight"
            className="ss-h-full ss-w-full ss-object-cover ss-opacity-25 sm:ss-object-contain sm:ss-object-right"
          />
        }
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
