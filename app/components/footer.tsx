import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border-t-[0.1px] border-t-white  flex sm:flex-row-reverse flex-col items-center pt-5 justify-around gap-x-20 gap-y-5 ">
        <div className="flex flex-row gap-x-10 text-sm">
          <Link href="/">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Project</Link>
          <Link href="/experiences">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex gap-x-10">
          <div className="flex gap-x-2">
            <b>&copy;</b>
            <p>Masihullah Muhammadi</p>
          </div>
          <div className="flex gap-x-7">
            <a href="https://github.com/MasihMuhammadi" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+93749102015?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20portfolio."
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
