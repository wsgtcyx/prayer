import { ALL_FEATURES } from "@/config/feature";
import React from "react";
import { RoughNotation } from "react-rough-notation";

const Feature = ({
  id
}: {
  id: string
}) => {
  const FEATURES = ALL_FEATURES[`FEATURES_EN`];
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          Features
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES?.map((feature, index) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center px-8 py-6 border-b md:border-b-0 md:border-r"
          >
            <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
              {feature.icon &&
                React.createElement(feature.icon, { className: "text-2xl" })}
            </div>
            <h3 className={"text-xl font-semibold mb-2"}>{feature.title}</h3>
            <p className="text-slate-700 dark:text-slate-400">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
