import { Card } from "@/components/card";
import { DashboardPageHeader } from "@/components/dashboard-page-header";

export default function SettingsPage() {
  return (
    <div className="dd-max-w-[1000px]">
      <DashboardPageHeader
        title="Setting"
        description="Manage your website identity setting and social media."
        className="dd-mb-4"
      />
      <Card as="main">Settings</Card>
    </div>
  );
}
