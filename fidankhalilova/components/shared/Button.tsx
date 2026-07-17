export default function Button({ text }: { text: string; }) {
    return (
      <button className="bg-[#AC6891] text-white px-3 py-2 rounded-lg hover:bg-[#AC6891]/90 transition-colors duration-100">
        {text}
      </button>
    );
}