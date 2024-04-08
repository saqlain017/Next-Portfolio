import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
// import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
// import about from '/public/lottie/code.json'


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center gap-6 order-1 lg:order-2">
          <GlowCard>
              <div className="p-3 pb-0 relative">
              <Image
                src={personalData.profile}
                width={280}
                height={280}
                alt="Muhammad Saqlain"
                style={{maxWidth: 'none'}}
              />
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute left-0 bottom-0 opacity-80"
              />
              </div>
            </GlowCard>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;