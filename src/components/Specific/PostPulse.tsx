"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import "chart.js/auto";
import Link from "next/link";

export default function PostPulse() {
    const [theme, setTheme] = useState("light");
    const [chartKey, setChartKey] = useState(0);  // Force re-render of Chart

    const data = {
        labels: ["Trump", "Harris"],
        datasets: [
            {
                label: "Forecast",
                data: [312, 226],
                backgroundColor: ["#E63946", "#457B9D"],
                borderColor: ["#E63946", "#457B9D"],
                borderWidth: 1,
                barThickness: 30,
            },
        ],
    };

    const options: ChartOptions<"bar"> = {
        indexAxis: "y",
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 40,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    useEffect(() => {
        console.log("Theme changed:", theme);
        console.log("Forcing chart re-render:", chartKey);
        setChartKey((prevKey) => prevKey + 1); // Change key to remount chart
    }, [theme]); // Only depend on `theme`

    return (
        <div className="container mx-auto">
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 bg-gray-800 text-white rounded"
            >
                Toggle Theme
            </button>

            <div className="grid grid-cols-12 items-center justify-center py-10 border-b-[1px] border-gray-500 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <h1 className="text-2xl md:text-4xl font-semibold">Post Pulse</h1>
                    <div className="flex flex-col mt-1 md:mt-4 mb-1 md:mb-4 gap-2">
                        <p className="text-base md:text-lg text-black font-bold">Our forecast</p>
                        <p className="text-base md:text-xl text-gray-700 leading-7 italic">
                            Likely outcomes based on counted votes
                        </p>
                    </div>
                    <p className="text-base md:text-xl text-gray-700 leading-7 mt-1 md:mt-4 p-1">
                        Our forecast analyzes votes counted so far, along with historical
                        results and demographic data, to estimate how many votes are
                        outstanding and which candidate or party those votes will ultimately benefit.{" "}
                        <Link href="#" className="text-blue-600 underline">Read more.</Link>
                    </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <Card className="w-full max-w-3xl">
                        <CardContent>
                            <div className="flex justify-between items-center border-t pt-4">
                                <div className="text-gray-700">
                                    <h2 className="font-bold text-lg">Electoral votes</h2>
                                    <p className="text-sm">270 to win</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-red-600">Trump (R): 312</p>
                                    <p className="font-bold text-blue-600">Harris (D): 226</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                {/* Force re-mount by changing the key */}
                                <Bar key={chartKey} data={data} options={options} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
