import "./button.css";
export default function Button({ text = "Default" }: { text?: string }) {
  return <button className="button">{text}</button>;
}
