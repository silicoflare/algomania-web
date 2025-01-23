"use client";

import FeatureCard from "@/components/FeatureCard";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function AlgoMania() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPhoneRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center gap-3 bg-none z-0 font-body">
      <Navbar />
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-full h-full object-cover -z-10 brightness-[.25] absolute top-0 left-0 hidden md:block"
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <video
        ref={videoPhoneRef}
        src="/video-phone.mp4"
        className="w-full h-full object-cover -z-10 brightness-[.25] absolute top-0 left-0 block md:hidden"
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
      />

      <div className="w-screen h-screen overflow-y-scroll scroll-snap-container snap-mandatory">
        {/* Page 1 */}
        <div className="w-screen h-screen flex flex-col items-center justify-center snap-start">
          <h1 className="text-5xl md:text-8xl font-semibold font-algomania flex items-center gap-5">
            <div className="text-orange-600">Algomania</div>
            <div className="text-pink-600">2.0</div>
          </h1>
          <div className="font-body text-xl md:text-2xl mt-5 text-center">
            The most awaited event of Encode AI is here!
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8twgZXulYD42nTFqoU_zARjbHxhiDQ5DA36oRzXqBaUamhQ/viewform"
            target="_blank"
            className="btn mt-10 text-3xl px-20 py-2"
          >
            Register
          </a>
        </div>

        {/* Page 2 */}
        <div className="w-screen h-full min-h-screen py-10 px-5 md:p-20 bg-background flex flex-col items-center gap-2 snap-start">
          <h1 className="text-4xl font-semibold font-heading bg-gradient-to-br from-purple-600 to-purple-900 text-transparent bg-clip-text mt-5">
            Why Algomania?
          </h1>
          <div className="mt-5 md:mt-10 w-full md:w-4/5 h-full grid grid-rows-3 md:grid-cols-3 gap-5">
            <Slide
              direction="up"
              cascade
              triggerOnce
              damping={0.75}
              className="w-full h-full"
            >
              <FeatureCard title="Amazing Prize Pool">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                eos obcaecati architecto! Asperiores iure commodi facilis
                ratione soluta nisi laudantium obcaecati, praesentium quam,
                cumque nostrum ad quibusdam. Quidem, ut facere!
              </FeatureCard>
              <FeatureCard title="Hands-on CC Experience">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                eos obcaecati architecto! Asperiores iure commodi facilis
                ratione soluta nisi laudantium obcaecati, praesentium quam,
                cumque nostrum ad quibusdam. Quidem, ut facere!
              </FeatureCard>
              <FeatureCard title="Foodies and Goodies">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                eos obcaecati architecto! Asperiores iure commodi facilis
                ratione soluta nisi laudantium obcaecati, praesentium quam,
                cumque nostrum ad quibusdam. Quidem, ut facere!
              </FeatureCard>
            </Slide>
          </div>
        </div>

        {/* Page 3 */}
        <div className="w-screen h-screen py-10 px-5 md:p-20 bg-background flex flex-col items-center gap-2 snap-start">
          <h1 className="text-4xl font-semibold font-heading text-orange-600">
            FAQs
          </h1>
          <div className="w-full md:w-4/5 mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <Fade cascade triggerOnce damping={0.75}>
              <InfoCard title="When?">
                On **8th February, 2025**, from **9 AM to 6 PM**
              </InfoCard>
              <InfoCard title="Where?">
                In the **13th floor study area** of **BE Block**
              </InfoCard>
              <InfoCard title="Is there a selection round?">
                Yes. Around **32 to 35 teams** will qualify the selection round
                to go to the finals.
              </InfoCard>
              <InfoCard title="What is the fee?">
                A fee of **₹200 per head** has to be paid by qualifying teams in
                the finals venue.
              </InfoCard>
              <InfoCard title="What kinds of questions will be asked?">
                They look like **competitive-coding problems** like the ones
                from LeetCode or CodeChef. These websites can get you prepped.
              </InfoCard>
              <InfoCard title="Why should I attend this event?">
                Competitive coding events get you prepared for the DSA (Data
                Structures and Algorithms) rounds of job recruitments.
              </InfoCard>
            </Fade>
          </div>
        </div>

        <div className="w-screen h-screen p-20 bg-transparent flex flex-col items-center justify-center gap-2 snap-start">
          <div className="font-heading font-semibold text-6xl gradient-text py-2">
            Are you ready to take up the challenge?
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8twgZXulYD42nTFqoU_zARjbHxhiDQ5DA36oRzXqBaUamhQ/viewform"
            target="_blank"
            className="btn mt-10 text-3xl px-20 py-2"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
