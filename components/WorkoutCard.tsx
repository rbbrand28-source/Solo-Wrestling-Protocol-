import ExerciseBlock from "./ExerciseBlock";

export default function WorkoutCard({ title, data }: any) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {data.map((ex: any, i: number) => (
        <ExerciseBlock key={i} ex={ex} />
      ))}
    </div>
  );
}
