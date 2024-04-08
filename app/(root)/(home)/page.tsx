"use client";

import { useEffect, useMemo, useState } from "react";

import { MeetingTypeList } from "@/components/meeting-type-list";

function Home() {
  const now = useMemo(() => new Date(), []);

  const date = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
  }, [now]);

  const [time, setTime] = useState(
    now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col gap-7 size-full text-white">
      <h1 className="text-3xl font-bold">Home</h1>

      <div className="h-[300px] rounded-[20px] bg-hero bg-cover">
        <div className="h-full flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meeting at: 12:30 PM
          </h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-7xl font-extrabold">{time}</h1>
            <p className="text-lg lg:text-2xl font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
}

export default Home;
