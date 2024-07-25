import { userProjectCountAction } from "@/actions/project";
import { SetupLayout } from "@/components/setup-layout";
import { validateRequest } from "@/lib/auth";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";

export default async function DashboardLayout(
  _: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  const userProjectCount = await userProjectCountAction(user.id);
  if (userProjectCount === 0) {
    return redirect("/project-setup");
  }

  return (
    <SetupLayout
      badge="Template"
      title="Choose how to design your website"
      nextButtonText="Save & Proceed"
    >
      <div className="dd-w-full">
        <div className="dd-mb-3 dd-flex dd-items-center dd-rounded-md dd-border dd-p-4">
          <div className="dd-flex-1">
            <span className="dd-block dd-text-lg dd-font-semibold">
              Start from a template
            </span>
            <span className="dd-text-slate-500">
              Create a site for your client from responsive layout
            </span>
          </div>
          <ArrowRightIcon className="dd-h-5 dd-w-5" />
        </div>
        <div className="dd-mb-3 dd-flex dd-items-center dd-rounded-md dd-border dd-p-4">
          <div className="dd-flex-1">
            <span className="dd-block dd-text-lg dd-font-semibold">
              Start from blank canvas
            </span>
            <span className="dd-text-slate-500">
              Turn your idea into well-perfect design
            </span>
          </div>
          <ArrowRightIcon className="dd-h-5 dd-w-5" />
        </div>
      </div>
    </SetupLayout>
  );
}
