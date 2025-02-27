import AgentPulse from "@/components/AgentPulse";
import React from "react";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { features, steps } from "@/constants/content";
import Image from "next/image";
import coffee from "@/assets/icons8-coffee-cup.gif";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-whiteto-gray-50 ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet your{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                AI Content Co-Pilot
              </span>{" "}
            </h1>
            <div className="text-xl flex flex-col items-center text-gray-600 text-center mb-8 max-w-2xl mx-auto ">
              <p className="text-center">
                Unlock instant video breakdowns, smart captions, and performance
                secrets{" "}
              </p>
              <p className="flex items-center mt-1">
                – all before your coffee cools.{" "}
                <Image className="w-6 h-6" alt="coffee gif" src={coffee} />
              </p>
            </div>

            <YoutubeVideoForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Content Creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semifold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-red-200 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-red-400 to-red-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Meet Your AI Content Agent?
          </h2>
          <p className="text-xl text-blue-50">
            Join creators leveraging AI to unlock content insights
          </p>
        </div>
      </section>
    </div>
  );
}
