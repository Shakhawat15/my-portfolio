import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Shakhawat15",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/shakhawat15-bd/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/shakhawat15_bd",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
