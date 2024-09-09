"use client";
import { barChardData } from "@/lib/data/dashboard";
import { useTheme } from "@/lib/store/global.store";
import { useMemo } from "react";
import { Bar, ResponsiveContainer } from "recharts";
import { BarChart as BarGraph, XAxis, YAxis } from "recharts";

type Props = {};

export default function BarChart({}: Props) {
  const data = useMemo(() => barChardData, []);

  const { isDark: isDarkMode } = useTheme();

  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          stroke={isDarkMode ? "#fff" : "#000"}
          fontSize={12}
        />
        <YAxis tickLine={false} axisLine={false} stroke={isDarkMode ? "#fff" : "#000"} fontSize={12} />
        <Bar dataKey={"total"} radius={[6, 6, 0, 0]} fill="#adf506" barSize={20} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
