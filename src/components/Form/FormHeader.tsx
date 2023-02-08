export default function FormHeader({
  headline,
  subheadline,
}: {
  headline: string | JSX.Element;
  subheadline?: string | JSX.Element;
}) {
  return (
    <>
      <span className="text-xl block">{headline}</span>
      <span className="text-xs opacity-40">{subheadline}</span>
    </>
  );
}
