export const getProgress = () => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem("protocol") || "{}");
};

export const saveProgress = (data: any) => {
  localStorage.setItem("protocol", JSON.stringify(data));
};

export const initProgress = () => {
  let data = getProgress();
  if (!data.startDate) {
    data = {
      startDate: new Date().toISOString(),
      completedDays: [],
      streak: 0,
      score: 0
    };
    saveProgress(data);
  }
  return data;
};
