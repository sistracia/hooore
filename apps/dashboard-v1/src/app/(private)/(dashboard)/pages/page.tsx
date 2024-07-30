import { Card, CardContent } from "@/components/card";
import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function PagesPage() {
  return (
    <>
      <Card as="header" className="dd-mb-4">
        <CardContent
          title="Pages"
          action={
            <ComingSoonOverlay as={Button} variant="outline" asChild>
              <Link href="/">
                Create New Page <PlusIcon className="dd-ml-2 dd-h-4 dd-w-4" />
              </Link>
            </ComingSoonOverlay>
          }
        />
      </Card>
      <Card as="main">
        <CardContent>Pages</CardContent>
      </Card>
    </>
  );
}
