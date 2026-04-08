export default function ExerciseBlock({ ex }: any) {
  return (
    <div className="bg-zinc-900 p-4 rounded-2xl mb-4 border border-zinc-800">
      <p className="text-lg font-bold">{ex.name}</p>

      {ex.gif && (
        <img
          src={ex.gif}
          className="w-full rounded-lg my-3"
        />
      )}

      <p className="text-sm text-gray-400">Reps: {ex.reps}</p>

      {ex.steps && (
        <ul className="text-sm text-gray-300 mt-2 space-y-1">
          {ex.steps.map((s: string, i: number) => (
            <li key={i}>• {s}</li>
          ))}
        </ul>
      )}

      {ex.breath && (
        <p className="text-xs text-blue-400 mt-2">
          Breathing: {ex.breath}
        </p>
      )}

      {ex.mistakes && (
        <p className="text-xs text-red-400 mt-2">
          Mistake: {ex.mistakes}
        </p>
      )}
    </div>
  );
}