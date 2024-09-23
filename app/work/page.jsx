"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "We Travel",
    description:
      "We Travel is a comprehensive travel planning platform that allows users to search, book, and plan trips with ease. It features a user-friendly interface, real-time API integrations, and secure booking systems.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://we-travel-tech-taqwa.vercel.app/",
    github: "https://github.com/Shakhawat15/TravelPlanning-Website-client",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Task Manager",
    description:
      "Task Manager is a productivity tool designed to help users organize, track, and manage their tasks efficiently. It allows users to create, edit, prioritize, and categorize tasks, with features for deadline management and task completion tracking.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://shakhawat-task-manager.vercel.app/",
    github: "https://github.com/Shakhawat15/task-manager-frontend",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Glowify Dashboard",
    description:
      "Glowify Dashboard is an admin panel built for managing e-commerce product details, categories, brands, and user roles. It includes features like CRUD operations, media management, and product attribute handling.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://glowify-dashboard.vercel.app/",
    github: "https://github.com/Shakhawat15/glowify-dashboard",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h1 className="text-[42px] font-bold leading-none text-white">
                {project.title}
              </h1>

              {/* category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                    {index < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 blur-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-min xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
