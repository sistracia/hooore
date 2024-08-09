export default function PreviewPage(props: { params: { previewId: string } }) {
  const previewId = props.params.previewId;
  return <div>{previewId}</div>;
}
