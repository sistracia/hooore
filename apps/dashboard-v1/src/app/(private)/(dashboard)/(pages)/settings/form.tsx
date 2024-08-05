"use client";

import {
  projectSchema,
  type ProjectState,
  type ProjectSchema,
} from "@/actions/project.definition";
import { Card, CardContent } from "@/components/card";
import { InputFile } from "@/components/input-file";
// import { SocialMediaFields } from "@/components/social-media-fields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";

export function SettingsForm(props: {
  project: ProjectSchema;
  action: (project: ProjectSchema) => Promise<ProjectState>;
}) {
  const { project, action } = props;
  const { handleSubmit, register, control } = useForm<ProjectSchema>({
    resolver: zodResolver(projectSchema),
    defaultValues: project,
  });

  const onSubmit = (value: ProjectSchema) => {
    action(value)
      .then((result) => {
        if (!result.success) {
          toast({
            title: "Fail to update project setting",
            description: result.error,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Somethin went wrong",
          description: `${error}`,
        });
      });
  };

  return (
    <div className="dd-flex dd-h-full dd-max-w-[1000px] dd-flex-col dd-gap-4">
      <Card as="header">
        <CardContent
          title="Setting"
          titleLevel="h1"
          description="Manage your website identity setting and social media."
        />
      </Card>
      <Card
        as="form"
        className="dd-overflow-y-scroll"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CardContent
          title="General"
          titleLevel="h2"
          description="The detail used to identify your website."
        >
          <Label>
            Business Name
            <Input
              {...register("business_name")}
              placeholder="Write you business name"
              className="dd-mb-4 dd-mt-2"
            />
          </Label>

          <Label>
            Logo
            <Controller
              control={control}
              name="business_logo"
              render={({ field }) => {
                const { onChange, value } = field;
                return (
                  <InputFile
                    className="dd-mb-4 dd-mt-2"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
          </Label>
        </CardContent>
        <CardContent
          title="Public site URL"
          titleLevel="h2"
          description="The detail used to identify your website."
        >
          <Label>
            Hooore URL
            <Input
              {...register("domain")}
              placeholder="hooore.hooore.com"
              className="dd-mb-4 dd-mt-2"
            />
          </Label>
        </CardContent>
        {/* <CardContent title="Social Network" titleLevel="h2">
          <SocialMediaFields />
        </CardContent> */}
        <CardContent>
          <Button type="submit">Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}
