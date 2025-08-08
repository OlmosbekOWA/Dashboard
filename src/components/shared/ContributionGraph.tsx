import { useState, useEffect } from "react";

const levels = [
  "bg-gray-200",
  "bg-green-100",
  "bg-green-300",
  "bg-green-500",
  "bg-green-700",
];

const days = 7;

const getRandomLevel = () => levels[Math.floor(Math.random() * levels.length)];

const getMonthPositions = (weeksCount: number) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const interval = Math.floor(weeksCount / months.length);
  return months.map((name, i) => ({ index: i * interval, name }));
};

const ContributionGraph = () => {
  const [weeks, setWeeks] = useState(45);
  const [monthPositions, setMonthPositions] = useState(getMonthPositions(50));
  const [scale, setScale] = useState("scale-100");

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 1200) {
        setWeeks(45); 
        setScale("scale-100"); 
      } else {
        setWeeks(45);
        setScale("scale-100");
      }
      setMonthPositions(getMonthPositions(weeks));
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [weeks]);

  const data = Array.from({ length: weeks }, () =>
    Array.from({ length: days }, getRandomLevel)
  );

  return (
    <div className="p-4 ">
      <div className="overflow-x-auto">
        <div className={`origin-top-left ${scale} overflow-x-auto` }>
          
          <div className="flex justify-between overflow-x-auto max-w-[430px] lg:max-w-[600px] xl:max-w-[750px]">
            {Array.from({ length: weeks }).map((_, i) => {
              const month = monthPositions.find((m) => m.index === i);
              return (
                <div key={i} className="w-3 h-3 text-[10px] text-gray-600">
                  {month ? month.name : ""}
                </div>
              );
            })}
          </div>

          
          <div className="overflow-x-auto max-w-[430px] lg:max-w-[600px] xl:max-w-[740px] mb-1">
            <div className="flex gap-[3px] pl-5 w-max">
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

        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-2 flex-wrap gap-2 text-xs">
        <span className="text-gray-600">Learn how we count contributions</span>
        <div className="flex items-center gap-2">
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
