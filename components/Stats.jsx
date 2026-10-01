"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Months of Experience",
  },
  {
    num: 3,
    text: "Projects Completed",
  },
  {
    num: 12,
    text: "Technologies Mastered",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* black ledger bar; the 2px gaps show the yellow behind as divider lines */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[2px] bg-[#FFC900] border-2 border-ink shadow-[8px_8px_0_0_var(--sh)] max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-black flex flex-col xl:flex-row items-center xl:items-end justify-center xl:justify-start gap-1 xl:gap-4 p-4 xl:p-6 text-center xl:text-left"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold leading-none text-[#FFC900]"
                />
                <p className="max-w-[150px] text-sm xl:text-base font-medium leading-snug text-white">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;