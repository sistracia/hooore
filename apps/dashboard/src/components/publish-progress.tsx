"use client";

import type { Result } from "@/types/result";
import { useEffect, useState } from "react";

/**
 * Make the function wait until the connection is made...
 * Ref: https://stackoverflow.com/a/21394730/12976234
 */
function waitForSocketConnection(socket: WebSocket, callback: () => void) {
  setTimeout(function () {
    if (socket.readyState === 1) {
      callback();
    } else {
      waitForSocketConnection(socket, callback);
    }
  }, 5); // wait 5 milisecond for the connection...
}

export type BuildInfo = {
  build_last_step: number;
  build_total_step: number;
};

export type PublishProgressProps = {
  userId: string;
  projectId: string;
  wsURL: string;
};

export function PublishProgress({
  projectId,
  userId,
  wsURL,
}: PublishProgressProps) {
  const [buildInfo, setBuildInfo] = useState<BuildInfo>({
    build_last_step: 0,
    build_total_step: 0,
  });

  useEffect(() => {
    const socket = new WebSocket(wsURL);

    socket.addEventListener("message", (event) => {
      const buildInfo = JSON.parse(event.data) as Result<BuildInfo>;
      console.log(buildInfo);
      if (!buildInfo.success) {
        return;
      }

      setBuildInfo(buildInfo.data);
    });

    waitForSocketConnection(socket, () => {
      socket.send(JSON.stringify({ projectId, userId }));
    });

    return () => {
      socket.close();
    };
  }, [projectId, userId, wsURL]);

  const progressPercentage =
    (buildInfo.build_last_step / buildInfo.build_total_step || 0) * 100;

  return (
    <div className="dd-h-1 dd-w-full dd-overflow-x-hidden">
      <div
        className="dd-h-full dd-bg-foreground"
        style={{
          width: `${progressPercentage >= 100 ? 0 : progressPercentage}%`,
        }}
      ></div>
    </div>
  );
}
