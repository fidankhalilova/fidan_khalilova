export default function Subheader({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold" style={{ color }}>
      {text}
    </h1>
  );
}
