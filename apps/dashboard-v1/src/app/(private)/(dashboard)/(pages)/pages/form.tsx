"use client";

import { Card, CardContent } from "@/components/card";
// import { ComingSoonOverlay } from "@/components/coming-soon-overlay";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import {
  EyeOpenIcon,
  Pencil2Icon,
  //   PlusIcon,
  //   TrashIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { type PageContent, type PageSchema } from "@/actions/page.definition";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";
import { PageRenderer } from "@/components/page-renderer";
import { Scaler } from "@/components/scaler";

export function PageForm(props: {
  pageId: string | null;
  pageContents: PageContent[] | null;
  pages: PageSchema[];
}) {
  const { pageId, pageContents, pages } = props;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="dd-flex dd-h-full dd-w-full dd-flex-col dd-gap-4">
      <Card as="header">
        <CardContent
          title="Pages"
          titleLevel="h1"
          //   action={
          //     <ComingSoonOverlay as={Button} variant="outline" asChild>
          //       <Link href="/">
          //         Create New Page <PlusIcon className="dd-ml-2 dd-h-4 dd-w-4" />
          //       </Link>
          //     </ComingSoonOverlay>
          //   }
        />
      </Card>
      <main className="dd-flex dd-flex-1 dd-gap-4 dd-overflow-y-hidden">
        <Card className="dd-h-full dd-flex-[3]">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead className="dd-w-[200px]">Page</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead>Last Edited</TableHead>
                  <TableHead>Create Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="dd-overflow-y-scroll">
                {pages.map((page) => {
                  return (
                    <TableRow key={page.id}>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            router.push(pathname + "?page_id=" + page.id);
                          }}
                        >
                          <EyeOpenIcon className="dd-h-4 dd-w-4" />
                        </Button>
                      </TableCell>
                      <TableCell>{page.name}</TableCell>
                      <TableCell>
                        <Switch defaultChecked={page.published} />
                      </TableCell>
                      <TableCell>
                        {dayjs(page.last_edited).format(
                          "YYYY-MM-DD HH:mm:ss A",
                        )}
                      </TableCell>
                      <TableCell>
                        {dayjs(page.create_date).format("YYYY-MM-DD")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {pageContents && pageContents.length !== 0 && (
          <Card className="dd-flex dd-h-full dd-flex-[2] dd-flex-col">
            <CardContent
              className="dd-flex-1 dd-bg-slate-50"
              title={pageContents[0]?.name}
              titleLevel="h2"
              description={`https://www.hooore.com${pageContents[0]?.page_slug}`}
              action={
                <div className="dd-flex dd-gap-2">
                  {/* <Button type="button" variant="outline" size="icon">
                    <TrashIcon className="dd-h-4 dd-w-4" />
                  </Button> */}
                  <Button type="button" variant="outline" size="icon" asChild>
                    <Link href={`/page/${pageId}`}>
                      <Pencil2Icon className="dd-h-4 dd-w-4" />
                    </Link>
                  </Button>
                </div>
              }
            />
            <CardContent>
              <div className="dd-h-full dd-overflow-y-scroll">
                <Scaler className="dd-w-[1440px]">
                  <PageRenderer
                    pageContents={pageContents}
                    disableLink={true}
                  />
                </Scaler>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
