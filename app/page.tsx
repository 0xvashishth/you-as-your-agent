"use client";

import { SettingsProvider } from "@/lib/settings-provider";
import { LastOcrImage } from "@/components/ready-to-use-examples/last-ocr-image";
import { HealthStatus } from "@/components/ready-to-use-examples/health-status";
import { LastUiRecord } from "@/components/ready-to-use-examples/last-ui-record";
import { PlaygroundCard } from "@/components/playground-card";
import { ClientOnly } from "@/lib/client-only";
import { Inter } from "next/font/google";
import healthStatusContent from '../content/health-status-card.json';
import { useEffect, useState } from "react";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

interface Pipe {
  id: string;
  name: string;
  description: string;
}

export default function Page() {
  const [pipes, setPipes] = useState<Pipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  
  return (
    <SettingsProvider>
      <ClientOnly>
        <div className={`flex flex-col gap-6 items-center justify-center h-full mt-12 px-4 pb-12 ${inter.className}`}>
          <h1 className="text-2xl font-bold mb-0">You as Your Agent</h1>
          <p className="text-gray-600 mb-2 -mt-5">Use these components in your daily life..!</p>
          
          {healthStatusContent.map((cardContent, index) => (
            <PlaygroundCard key={index} content={cardContent} />
          ))}
          
          <footer className="mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} You as Your Agent. All rights reserved.</p>
          </footer>
        </div>
      </ClientOnly>
    </SettingsProvider>
  );
}
