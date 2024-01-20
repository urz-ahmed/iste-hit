"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import HeroSection from "./HeroSection";
import About from "./About";
import JoinUs from "./JoinUs";
import RecentEvent from "./RecentEvent";
import Explore from "./Explore";
import Message from "./Message";

export default function HeroContentContainer() {
  return (
    <div className="mt-12">
    <HeroSection/>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <JoinUs />
    </div>
    <div className="relative">
      <RecentEvent />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Explore />
      <div className="gradient-04 z-0" />
      <Message />
    </div>
  </div>
  );
}
