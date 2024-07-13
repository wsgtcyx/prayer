/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";


const CTA = () => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">Start Creating Your Personalized Prayers</h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            Create
          </RoughNotation>{" "}
          heartfelt prayers,
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {" "}
            find
          </RoughNotation>{" "}
          peace and comfort, and
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {"  "}
            connect
          </RoughNotation>
          {" "}
          with your faith!
        </p>
      </div>
      <CTAButton />
    </section>
  );
};

export default CTA;
