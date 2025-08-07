const weeks = 50;
const days = 7;

const levels = [
  "bg-gray-200",
  "bg-green-100",
  "bg-green-300",
  "bg-green-500",
  "bg-green-700",
];

const monthPositions: { index: number; name: string }[] = [
  { index: 0, name: "Jan" },
  { index: 4, name: "Feb" },
  { index: 8, name: "Mar" },
  { index: 13, name: "Apr" },
  { index: 17, name: "May" },
  { index: 21, name: "Jun" },
  { index: 26, name: "Jul" },
  { index: 30, name: "Aug" },
  { index: 35, name: "Sep" },
  { index: 39, name: "Oct" },
  { index: 44, name: "Nov" },
  { index: 48, name: "Dec" },
];

const getRandomLevel = () => levels[Math.floor(Math.random() * levels.length)];

const ContributionGraph = () => {
  const data = Array.from({ length: weeks }, () =>
    Array.from({ length: days }, getRandomLevel)
  );

  return (
    <div className="p-4 w-full">
      <div className="overflow-x-auto">
        <div className="flex gap-[3px] w-max mb-1 px-[20px]">
          {Array.from({ length: weeks }).map((_, i) => {
            const month = monthPositions.find((m) => m.index === i);
            return (
              <div key={i} className="w-3 h-3 text-[10px] text-gray-600">
                {month ? month.name : ""}
              </div>
            );
          })}
        </div>

        <div className="flex gap-[3px] w-max">
          {data.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 ${level} border border-gray-300 rounded-sm`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full flex justify-between items-center mt-2 flex-wrap pr-12 gap-2">
        <span className="text-sm text-gray-600">
          Learn how we count contributions
        </span>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-600">Less</span>
          {levels.map((level, i) => (
            <div
              key={i}
              className={`w-3 h-3 ${level} border border-gray-300 rounded-sm`}
            />
          ))}
          <span className="text-gray-600">More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
