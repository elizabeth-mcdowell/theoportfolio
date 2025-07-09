// src/components/SearchBar.tsx
interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search stories..."
      className="border px-3 py-2 rounded w-64"
    />
  );
}
