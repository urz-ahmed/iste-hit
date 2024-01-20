"use client"
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/ui/events/BackgroundImage";
import Slides from "@/ui/events/Slides";
import SlideInfo from "@/ui/events/SlideInfo";
import Controls from "@/ui/events/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg",
    location: "CSE CS Department",
    description:
      "Explore the latest advancements in technology at Tech Summit 2024! Join industry leaders, experts, and innovators for a three-day event packed with keynote sessions, workshops, and networking opportunities.",
    title: "Tech Summit 2024",
  },
  {
    img: "https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Tech-Events.jpg",
    title: "Innovation Expo: Future Tech Edition",
    description:
      "The Innovation Expo brings together startups and established tech companies to showcase groundbreaking solutions shaping the future. Don't miss the chance to witness demos, engage with entrepreneurs, and discover the next big thing!",
    location: "CSE AIML Department",
  },
  {
    img: "https://socio.events/wp-content/uploads/2022/03/AdobeStock_213888630.jpeg",
    title: "AI Revolution Conference",
    description:
      "Dive deep into the world of artificial intelligence at the AI Revolution Conference. Learn about the latest AI trends, ethical considerations, and real-world applications from leading researchers, engineers, and industry pioneers.",
    location: "Aryabhatt Hall",
  },
  {
    img: "https://cdn.evbstatic.com/s3-build/fe/build/images/1d87d01c25d690d5564dd4184cd39f8e-science.webp",
    title: "Cybersecurity Symposium 2024",
    description:
      " As cyber threats evolve, the Cybersecurity Symposium 2024 gathers experts to discuss strategies, tools, and best practices for safeguarding digital assets. Stay ahead of cyber challenges and network with top security professionals.",
    location: "Central Hall Haldia",
  },
  {
    img: "https://dcljbbc0bv6lw.cloudfront.net/wp-content/uploads/2018/02/photo-1504384764586-bb4cdc1707b0.jpg",
    title: "Blockchain Innovation Forum",
    description:
      "Uncover the potential of blockchain technology at the Blockchain Innovation Forum. Explore use cases, industry applications, and the future of decentralized systems with thought leaders and blockchain enthusiasts.",
    location: "Datascience Hall",
  },
];

const initData = sliderData[0];
