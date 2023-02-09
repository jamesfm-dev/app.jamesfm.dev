export default function Badge({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span
      className={`px-[4px] py-[2px] text-xs rounded-full shadow-md ${color}`}
    >
      {label}
    </span>
  );
}
