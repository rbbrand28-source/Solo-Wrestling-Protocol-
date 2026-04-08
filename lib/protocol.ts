import { getPhase, scale } from "./progression";

const exercises = {
  penetration: "/exercises/penetration.gif",
  sprawl: "/exercises/sprawl.gif",
  hipHeist: "/exercises/hipheist.gif",
  sitOut: "/exercises/sitout.gif",
  bridge: "/exercises/bridge.gif",
  shadow: "/exercises/shadow.gif"
};

export const generateDay = (day: number) => {
  const phase = getPhase(day);

  return {
    warmup: [
      {
        name: "Joint Mobility Flow",
        reps: "5 min",
        cue: "full range controlled"
      }
    ],

    movement: [
      {
        name: "Penetration Step",
        reps: scale(10, day),
        gif: exercises.penetration,
        cue: "drive knee forward, chest upright"
      },
      {
        name: "Sprawl",
        reps: scale(8, day),
        gif: exercises.sprawl,
        cue: "hips slam down fast"
      }
    ],

    strength: [
      {
        name: "Push-ups",
        reps: scale(15, day),
        cue: "tight core, full depth"
      },
      {
        name: "Squats",
        reps: scale(20, day),
        cue: "explode up"
      }
    ],

    mobility: [
      {
        name: "Bridge Hold",
        reps: `${20 + day}s`,
        gif: exercises.bridge,
        cue: "push through neck + feet"
      }
    ],

    finisher: [
      {
        name: "Shadow Wrestling",
        reps: `${2 + Math.floor(day / 10)} min`,
        gif: exercises.shadow,
        cue: "flow continuously"
      }
    ]
  };
};
