"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationPin } from "react-icons/md";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import ContactInfo from "../components/contactInfo";
import { LuSend } from "react-icons/lu";
import Footer from "../components/footer";
import { FaX, FaXTwitter } from "react-icons/fa6";
import ElectricBorder from "../components/ElectricBorder";
import { primaryColor } from "@/app/theme";
import SamuraiSword from "../components/sword";
import PillNav from "../components/PillaNav";
import Button from "../components/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "", // This will serve as reply_to
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setFeedback("Message sent successfully!");
        setFormData({ from_name: "", email: "", message: "" });
      } else {
        setFeedback("Failed to send message. Please try again.");
        console.error(result.error);
      }

      setTimeout(() => setFeedback(null), 3000);
    } catch (err) {
      console.error(err);
      setFeedback("Failed to send message. Please try again.");
      setTimeout(() => setFeedback(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[100%] my-1">
      {/* <h1>Contact me</h1> */}
      <div className="flex flex-col-reverse gap-16 lg:flex-row items-center  justify-center md:gap-x-10 lg:gap-x-64 ">
        <div className="flex flex-col gap-10  ">
          {/* <ContactInfo
            icon={<MdLocationPin size={30} />}
            text="Panjsad Family, Khair Khana, Kabul Afghanistan"
          /> */}
          {/* <ContactInfo icon={<FaPhone size={30} />} text="+93749102015" /> */}
          <ContactInfo
            icon={<FaWhatsapp size={30} color="rgb(20,120,100)" />}
            text={
              <>
                <a href="https://wa.me/93749102015" target="_blank">
                  Masih Muhammadi
                </a>
              </>
            }
          />
          <ContactInfo
            icon={<FaGithub color="rgb(20,120,100)" size={30} />}
            text={
              <>
                <a href="https://github.com/MasihMuhammadi" target="_blank">
                  https://github.com/MasihMuhammadi
                </a>
              </>
            }
          />
          <ContactInfo
            icon={<FaLinkedin size={30} color="rgb(20,120,100)" />}
            text={
              <a
                href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"
                target="_blank"
              >
                Masihullah Muhammadi Linkedin
              </a>
            }
          />
        </div>

        <ElectricBorder
          color={primaryColor}
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="bg-transparent shadow-lg  shadows  p-4 md:p-20 rounded-lg mx-6 sm:mx-2">
            <h2 className="font-normal text-2xl mb-5 text-center">
              Send Me An Email
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  placeholder="Your Name"
                  type="text"
                  className=" bg-transparent  p-2  focus-within:border-b-2 rounded-sm focus-within:outline-none  w-full md:w-64 text-sm"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  className="mt-4  bg-transparent   p-2  focus-within:border-b-2 rounded-sm focus-within:outline-none  w-full md:w-64 text-sm"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  rows={6}
                  cols={32}
                  placeholder="Message"
                  className="mt-4  bg-transparent border-b  p-2 resize-none   focus-within:border-b-2 rounded-sm focus-within:outline-none  w-full md:w-64 text-sm"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className={`mt-2 ${isSubmitting ? "opacity-50 pointer-events-none" : "cursor-pointer"}`}
              >
                <Button type="submit" disabled={isSubmitting}>
                  <div className="flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Send"}
                    <LuSend size={18} />
                  </div>
                </Button>
              </div>
            </form>
          </div>
        </ElectricBorder>

        {feedback && (
          <p
            className={`text-white ${
              feedback.includes("successfully") ? "bg-green-500" : "bg-red-500"
            } rounded p-2 absolute top-0 left-10`}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
