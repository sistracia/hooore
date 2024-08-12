import {
  FormRenderer as FormRendererV1,
  type FormRendererProps as FormRendererPropsV1,
} from "./components-v1/form-renderer";

export type FormRendererProps = FormRendererPropsV1 & { projectId: string };

export function FormRenderer(props: FormRendererProps) {
  if (props.code === "company-profile-1") {
    return <FormRendererV1 {...props} />;
  }

  return null;
}
