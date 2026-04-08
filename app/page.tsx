"use client";

import { useEffect, useState } from "react";
import { generateDay } from "../lib/protocol";
import { initProgress, saveProgress } from "../lib/storage";
import WorkoutCard from "../components/WorkoutCard";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [day, setDay] = useState(1);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const progress = initProgress();

    const start = new Date(progress.startDate);
    const now = new Date();

    const diff =
      Math.floor((now.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;

    const currentDay = Math.min(diff, 90);

    setDay(currentDay);
    setData(generateDay(currentDay));
  }, []);

  const completeDay = () => {
    const progress = initProgress();
    progress.completedDays.push(day);
    progress.streak += 1;
    progress.score += 10;
    saveProgress(progress);
    alert("Day Completed");
  };

  if (!data) return null;

  return (
    <main className="bg-bg text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-2">
        Day {day} Protocol
      </h1>

      <ProgressBar day={day} />

      <WorkoutCard title="Warm-up" data={data.warmup} />
      <WorkoutCard title="Movement" data={data.movement} />
      <WorkoutCard title="Strength" data={data.strength} />
      <WorkoutCard title="Mobility" data={data.mobility} />
      <WorkoutCard title="Finisher" data={data.finisher} />

      <button
        onClick={completeDay}
        className="w-full bg-accent p-4 rounded-xl mt-4 font-bold"
      >
        COMPLETE DAY
      </button>
    </main>
  );
}
