export default function Header({ text, color }: { text: string; color: string; }) {
    return (
      <h1 className="text-5xl font-bold text-[${color}]" style={{ color }}>
        {text}
      </h1>
    );
  }