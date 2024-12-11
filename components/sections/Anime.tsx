"use client";

import { useState } from "react";

import { animeList as animeData } from "@/constants";

type AnimeStatus = "watched" | "watching";

const MOBILE_DISPLAY_COUNT = 6;

export default function Anime() {
  const [activeTab, setActiveTab] = useState<AnimeStatus>("watched");
  const [showAll, setShowAll] = useState(false);

  const statusMap: Record<AnimeStatus, string> = {
    watched: "已觀看",
    watching: "正在觀看",
  };

  const currentList = animeData[activeTab];
  const displayList = showAll
    ? currentList
    : currentList.slice(0, MOBILE_DISPLAY_COUNT);

  return (
    <section id="anime" className="min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-800">
          動漫清單
        </h1>
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white/60 p-1">
            {(Object.keys(statusMap) as AnimeStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => {
                  setActiveTab(status);
                  setShowAll(false);
                }}
                className={`rounded-full px-6 py-2 transition-colors duration-200 ${
                  activeTab === status
                    ? "bg-accent-300 text-white"
                    : "text-gray-600 hover:bg-white/50"
                }`}
              >
                {statusMap[status]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {displayList.map((anime) => (
            <div
              key={anime.title}
              className="rounded-xl bg-white/50 p-6 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold text-accent-300">
                {anime.title}
              </h2>
              {anime.rating && (
                <div className="mt-2 text-neutral-600">
                  評分：{"⭐️".repeat(anime.rating)}
                </div>
              )}
              {anime.comment && (
                <p className="mt-1 text-sm text-neutral-600">
                  短評：{anime.comment}
                </p>
              )}
            </div>
          ))}
        </div>
        {currentList.length > MOBILE_DISPLAY_COUNT && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-8 block rounded-full bg-accent-300 px-6 py-2 text-white hover:bg-accent-400"
          >
            {showAll ? "顯示較少" : "查看更多"}
          </button>
        )}
      </div>
    </section>
  );
}
