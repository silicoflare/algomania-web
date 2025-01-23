"use client";

import FeatureCard from "@/components/FeatureCard";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import questions from "./questions";
import Markdown from "react-markdown";

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
          <h1 className="text-4xl md:text-8xl font-semibold font-algomania flex items-center gap-5">
            <div className="text-orange-600">Algomania</div>
            <div className="text-pink-600">2.0</div>
          </h1>
          <div className="font-body text-lg md:text-2xl mt-5 text-center">
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
          <h1 className="text-4xl font-semibold font-heading bg-gradient-to-br from-purple-600 to-purple-900 text-transparent bg-clip-text md:mt-5">
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
                Prize pool of worth ₹21,000 to be won, along with prizes for the
                best performing teams.
              </FeatureCard>
              <FeatureCard title="Hands-on CC Experience">
                First-hand experience of competitive coding, to prepare you for
                job placements.
              </FeatureCard>
              <FeatureCard title="Foodies and Goodies">
                Lots of food, and goodies like stickers, stationery and much
                more!
              </FeatureCard>
            </Slide>
          </div>
        </div>

        {/* Page 3 */}
        <div className="w-screen h-screen py-10 px-5 md:p-20 bg-background flex flex-col items-center gap-2 snap-start">
          <h1 className="text-4xl font-semibold font-heading text-orange-600">
            FAQs
          </h1>
          <div className="w-4/5 mt-10 hidden md:grid grid-cols-2 gap-10">
            <Fade cascade triggerOnce damping={0.75}>
              {questions.map(({ question, answer }, i) => (
                <InfoCard key={i} title={question}>
                  {answer}
                </InfoCard>
              ))}
            </Fade>
          </div>
          <div className="w-full md:hidden flex flex-col items-center gap-3">
            <Fade cascade triggerOnce damping={0.75}>
              {questions.map(({ question, answer }, i) => (
                <div key={i} className="flex flex-col justify-center gap-2">
                  <span className="font-semibold text-orange-600 font-heading text-xl">
                    {question}
                  </span>
                  <Markdown>{answer}</Markdown>
                </div>
              ))}
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
