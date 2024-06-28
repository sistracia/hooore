import { Hero } from "@/components/hero";
import { HoooreLogo } from "@/components/hooore-logo";

export default function AboutUs() {
  return (
    <Hero
      title={
        <>
          Welcome to <HoooreLogo className="ss-inline" />
        </>
      }
      descripption="At Hooore, we are passionate about delivering happiness through technology. We specialize in crafting exceptional applications, designing intuitive user interfaces and experiences, and empowering individuals and teams through comprehensive training and upskilling programs."
    />
  );
}
