export default function Button({ text = "Default" }: { text?: string }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 active:scale-95 transition cursor-pointer">
      {text}
    </button>
  );
}
