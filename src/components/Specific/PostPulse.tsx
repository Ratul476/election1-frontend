"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import "chart.js/auto";
import Link from "next/link";

export default function PostPulse() {
    const data = {
        labels: ["Trump", "Harris"],
        datasets: [
            {
                label: "Forecast",
                data: [312, 226],
                backgroundColor: ["#E63946", "#457B9D"],
                borderColor: ["#E63946", "#457B9D"],
                borderWidth: 1,
                barThickness: 30, // Reduced bar height
            },
        ],
    };

    const options: ChartOptions<"bar"> = {
        indexAxis: "y", // Fixed: Explicitly typed
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 30,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 items-center justify-center py-10 border-b-[1px] border-gray-500 gap-4">
                    <div className="col-span-6">
                        <div className="">
                        <h1 className="text-4xl font-semibold">Post Pulse</h1>
                        </div>
                    <div className="flex flex-col mt-4 mb-4 gap-2">
                        <div className="">
                            <p className="text-lg text-black font-bold">Our forecast</p>
                        </div>
                        <div className="">
                            <p className="text-xl text-gray-700 leading-7  italic">
                                Likely outcomes based on counted votes
                            </p>
                        </div>
                    </div>
                    <p className="text-xl text-gray-700 leading-7 mt-4 p-1">
                            Our forecast analyzes votes counted so far, along with historical
                            results and demographic data, to estimate how many votes are
                            outstanding and which candidate or party those votes will
                            ultimately benefit.{" "}
                        <Link href="#" className="text-blue-600 underline">
                            Read more.
                        </Link>
                        </p>
                </div>
                <div className="col-span-6">
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
                                <Bar data={data} options={options} height={100} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}