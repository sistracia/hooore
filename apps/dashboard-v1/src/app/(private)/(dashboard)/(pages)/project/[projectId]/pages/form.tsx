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
import type { PageContent, PageSchema } from "@/actions/page.definition";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";
import { PageRenderer } from "@/components/page-renderer";
import { Scaler } from "@/components/scaler";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FuncActionState } from "@/types/result";

export function PageForm(props: {
  pageId: string | null;
  pageContents: PageContent[] | null;
  pages: PageSchema[];
  publishAction: (
    pageId: string,
    needPublish: boolean,
  ) => Promise<FuncActionState>;
}) {
  const { pageId, pageContents, pages, publishAction } = props;
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
            <ScrollArea className="dd-h-full">
              <Table>
                <TableHeader className="dd-sticky dd-top-0 dd-z-10 dd-bg-background">
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead className="dd-w-[200px]">Page</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Last Edited</TableHead>
                    <TableHead>Create Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
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
                          <Switch
                            defaultChecked={page.published}
                            onCheckedChange={(checked) => {
                              publishAction(page.id, checked);
                            }}
                          />
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
            </ScrollArea>
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
              <ScrollArea className="dd-h-full">
                <Scaler className="dd-w-[1440px]">
                  <PageRenderer contents={pageContents} disableLink={true} />
                </Scaler>
              </ScrollArea>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
