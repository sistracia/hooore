"use client";

import { TemplatePreview } from "@/components/template-preview";
import { useRouter } from "next/navigation";

export default function PageEditForm() {
  const router = useRouter();

  return (
    <TemplatePreview
      title="Beranda"
      description="https://www.hooore.com/beranda"
      onBack={() => {
        router.back();
      }}
    ></TemplatePreview>
  );
}
