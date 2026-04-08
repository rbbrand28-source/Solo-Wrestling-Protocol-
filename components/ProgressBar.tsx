export default function ProgressBar({ day }: any) {
  return (
    <div className="w-full bg-zinc-800 h-2 rounded-full mb-4">
      <div
        className="bg-accent h-2 rounded-full"
        style={{ width: `${(day / 90) * 100}%` }}
      />
    </div>
  );
}
