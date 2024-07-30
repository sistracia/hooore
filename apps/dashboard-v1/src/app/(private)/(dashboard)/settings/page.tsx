import { Card, CardContent } from "@/components/card";
import { InputFile } from "@/components/input-file";
import { SocialMediaFields } from "@/components/social-media-fields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="dd-max-w-[1000px]">
      <Card as="header" className="dd-mb-4">
        <CardContent
          title="Setting"
          description="Manage your website identity setting and social media."
        />
      </Card>
      <Card as="form">
        <CardContent
          title="General"
          description="The detail used to identify your website."
        >
          <Label>
            Business Name
            <Input
              placeholder="Write you business name"
              className="dd-mb-4 dd-mt-2"
            />
          </Label>

          <Label>
            Logo <InputFile className="dd-mb-4 dd-mt-2" />
          </Label>
        </CardContent>
        <CardContent
          title="Public site URL"
          description="The detail used to identify your website."
        >
          <Label>
            Hooore URL
            <Input
              placeholder="hooore.hooore.com"
              className="dd-mb-4 dd-mt-2"
            />
          </Label>
        </CardContent>
        <CardContent title="Social Network">
          <SocialMediaFields />
        </CardContent>
        <CardContent>
          <Button>Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}
