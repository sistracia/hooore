import { Card } from "@/components/card";
import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { DashboardPageHeader } from "@/components/dashboard-page-header";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function PagesPage() {
  return (
    <>
      <DashboardPageHeader
        title="Pages"
        className="dd-mb-4"
        action={
          <ComingSoonOverlay as={Button} variant="outline" asChild>
            <Link href="/">
              Create New Page <PlusIcon className="dd-ml-2 dd-h-4 dd-w-4" />
            </Link>
          </ComingSoonOverlay>
        }
      />
      <Card as="main">Pages</Card>
    </>
  );
}
