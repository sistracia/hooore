export default async function ProjectSetupLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const { children } = props;
  return (
    <main className="dd-flex dd-h-[calc(100dvh-var(--navbar-height))] dd-items-center dd-overflow-scroll">
      <div className="dd-h-full dd-w-full sm:dd-mx-auto sm:dd-w-fit">
        {children}
      </div>
    </main>
  );
}
