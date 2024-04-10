"use client";

import { useState, useEffect } from "react";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";

interface MeetingSetupProps {
  setIsSetupComplete: (value: boolean) => void;
}

export function MeetingSetup({ setIsSetupComplete }: MeetingSetupProps) {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview mirror={false} className="mx-3" />
      <div className="flex items-center justify-center gap-3 h-16 ">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => {
              setIsMicCamToggledOn(e.target.checked);
            }}
          />
          Join with Mic and Camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 hover:bg-green-500/80 px-4 py-2.5"
        onClick={() => {
          call.join;

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
}
