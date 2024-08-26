"use client";

import {
  projectSettingSchema,
  type ProjectSettingSchema,
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
import { ScrollArea } from "@/components/ui/scroll-area";
import type { FuncActionState } from "@/types/result";

export function SettingsForm(props: {
  projectSetting: ProjectSettingSchema;
  action: (projectSetting: ProjectSettingSchema) => Promise<FuncActionState>;
}) {
  const { projectSetting, action } = props;
  const { handleSubmit, register, control, formState } =
    useForm<ProjectSettingSchema>({
      resolver: zodResolver(projectSettingSchema),
      defaultValues: projectSetting,
    });

  const onSubmit = (value: ProjectSettingSchema) => {
    action({ ...projectSetting, ...value })
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

      <Card as="form" onSubmit={handleSubmit(onSubmit)}>
        <ScrollArea className="dd-h-full">
          <CardContent
            title="Site metas-data"
            titleLevel="h2"
            description="The detail used to describe your website."
          >
            <Label>
              Business Name
              <Input
                {...register("business_name")}
                placeholder="Write your business name"
                className="dd-mb-4 dd-mt-2"
              />
            </Label>
            {formState.errors.business_name !== undefined && (
              <p className="dd-my-4 dd-text-red-500">
                {formState.errors.business_name.message}
              </p>
            )}
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
            title="General"
            titleLevel="h2"
            description="The detail used to identify your website."
          >
            <Label>
              Title
              <Input
                {...register("metas.0.title")}
                placeholder="Write your page title"
                className="dd-mb-4 dd-mt-2"
              />
            </Label>
            {formState.errors.metas?.[0]?.title !== undefined && (
              <p className="dd-my-4 dd-text-red-500">
                {formState.errors.metas[0].title.message}
              </p>
            )}
            <Label>
              Description
              <Input
                {...register("metas.0.description")}
                placeholder="Write your page description"
                className="dd-mb-4 dd-mt-2"
              />
            </Label>
            {formState.errors.metas?.[0]?.description !== undefined && (
              <p className="dd-my-4 dd-text-red-500">
                {formState.errors.metas[0].description.message}
              </p>
            )}
            <Label>
              Favico
              <Controller
                control={control}
                name="metas.0.favico"
                render={({ field }) => {
                  const { onChange, value } = field;
                  return (
                    <InputFile
                      type="FAVICO"
                      className="dd-mb-4 dd-mt-2"
                      value={value}
                      onChange={onChange}
                    />
                  );
                }}
              />
            </Label>
          </CardContent>
          {/* <CardContent
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
          <CardContent title="Social Network" titleLevel="h2">
            <SocialMediaFields />
          </CardContent> */}
          <CardContent>
            <Button type="submit">Save</Button>
          </CardContent>
        </ScrollArea>
      </Card>
    </div>
  );
}
