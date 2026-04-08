export default function ExerciseBlock({ ex }: any) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl mb-4">
      <p className="text-lg font-bold">{ex.name}</p>

      {ex.gif && (
        <img src={ex.gif} className="w-full rounded-lg my-2" />
      )}

      <p className="text-sm text-gray-400">Reps: {ex.reps}</p>
      <p className="text-sm text-gray-500">{ex.cue}</p>
    </div>
  );
}
