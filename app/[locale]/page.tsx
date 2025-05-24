'use client';

import dynamic from "next/dynamic";

const ClientHome = dynamic(() => import("@/components/ClientHome"), {
  ssr: false,
});

export default function Page() {
  return <ClientHome />;
}