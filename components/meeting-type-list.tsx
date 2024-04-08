"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { HomeCard } from "@/components/home-card";
import { MeetingModal } from "@/components/meeting-modal";

export function MeetingTypeList() {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
      <HomeCard
        title="New Meeting"
        description="Start an instant meeting"
        iconSrc="/icons/add-meeting.svg"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        title="Schedule Meeting"
        description="Plan your meeting"
        iconSrc="/icons/schedule.svg"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        title="View Recordings"
        description="Check out your recordings"
        iconSrc="/icons/recordings.svg"
        handleClick={() => router.push("/recordings")}
        className="bg-purple-1"
      />
      <HomeCard
        title="Join Meeting"
        description="Via invitation link"
        iconSrc="/icons/join-meeting.svg"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />

      <MeetingModal />
    </section>
  );
}
