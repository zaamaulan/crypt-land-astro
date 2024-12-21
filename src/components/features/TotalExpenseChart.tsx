"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [
  { browser: "safari", visitors: 85, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export const TotalExpenseChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[150px]"
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={-110}
        innerRadius={80-30}
        outerRadius={110-30}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86-30, 74-30]}
        />
        <RadialBar dataKey="visitors" background />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-base font-medium"
                    >
                      {chartData[0].visitors.toLocaleString()}%
                    </tspan>
                    {/* <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan> */}
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
};
