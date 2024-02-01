"use client"

import VideoDisplay from "@/components/VideoDisplay";
import { fetchYouTubeVideos } from "@/lib/actions/youtube";
import type { VideoData } from "@/types";
import { useEffect, useState } from "react";

const AIPage = () => {
  const [allVideos, setAllVideos] = useState<VideoData[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const videos = await fetchYouTubeVideos({ title: "ai" });
        setAllVideos(videos ?? []);
      } catch (error) {
        console.error(error);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getData();
  }, []);


  return (
    <div className="p-4">
      {allVideos.length > 0 && <VideoDisplay videos={allVideos ?? []} />}
    </div>
  );
};

export default AIPage;
