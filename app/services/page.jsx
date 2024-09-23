"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "Building responsive, scalable, and interactive web applications using the latest technologies like React.js, Node.js, Express.js, and MongoDB.",
    href: "",
  },
  {
    num: "02",
    title: "API Development & Integration",
    description:
      "Designing and developing secure RESTful APIs, and integrating third-party APIs to connect applications and enhance functionality.",
    href: "",
  },
  {
    num: "03",
    title: "Frontend Development",
    description:
      "Creating visually appealing and interactive user interfaces with a strong focus on user experience using HTML, CSS, JavaScript, and modern frameworks like React.js.",
    href: "",
  },
  {
    num: "04",
    title: "Backend Development",
    description:
      "Developing robust and scalable backend architectures using Node.js, Express.js, MongoDB, and MySQL to power dynamic web applications.",
    href: "",
  },
  {
    num: "05",
    title: "WordPress Development",
    description:
      "Providing custom WordPress theme and plugin development to create highly customized and dynamic websites tailored to business needs.",
    href: "",
  },
  {
    num: "06",
    title: "Version Control & Collaboration",
    description:
      "Expertise in Git-based version control tools like GitHub and GitLab, ensuring seamless collaboration and code management across teams.",
    href: "",
  },
  {
    num: "07",
    title: "Cloud Integration & Deployment",
    description:
      "Deploying web applications to cloud platforms and integrating services like AWS, Heroku, and Cloudinary for scalable and efficient cloud-based solutions.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-2 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
