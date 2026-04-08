import { getPhase, scale } from "./progression";

export const generateDay = (day: number) => {
  const phase = getPhase(day);

  const intensity = day * 0.3;

  return {
    warmup: [
      {
        name: "Joint Mobility Flow",
        reps: "5 min",
        steps: [
          "Rotate all joints slowly",
          "Increase range gradually",
          "Stay controlled"
        ],
        breath: "steady breathing"
      }
    ],

    movement: [
      {
        name: "Penetration Step",
        reps: scale(10, day),
        gif: "/exercises/penetration.gif",
        steps: [
          "Step forward explosively",
          "Drop level",
          "Keep chest upright"
        ],
        breath: "inhale down, exhale drive",
        mistakes: "leaning forward"
      },
      {
        name: "Sprawl",
        reps: scale(8, day),
        gif: "/exercises/sprawl.gif",
        steps: [
          "Kick legs back",
          "Drop hips hard",
          "Keep head up"
        ],
        breath: "sharp exhale on drop",
        mistakes: "slow hip drop"
      }
    ],

    strength: [
      {
        name: "Push-ups",
        reps: scale(15, day),
        steps: [
          "Full depth",
          "Core tight",
          "Explode up"
        ]
      },
      {
        name: "Squats",
        reps: scale(20, day),
        steps: [
          "Sit back",
          "Drive knees out",
          "Explode up"
        ]
      }
    ],

    mobility: [
      {
        name: "Bridge Hold",
        reps: `${20 + day}s`,
        gif: "/exercises/bridge.gif",
        steps: [
          "Push through neck",
          "Lift hips high",
          "Hold steady"
        ],
        mistakes: "collapsing neck"
      }
    ],

    finisher: [
      {
        name: "Shadow Wrestling",
        reps: `${2 + Math.floor(day / 10)} min`,
        gif: "/exercises/shadow.gif",
        steps: [
          "Chain movements",
          "Stay low",
          "Keep flow continuous"
        ]
      }
    ]
  };
};