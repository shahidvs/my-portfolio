import React, { useRef, useState } from "react";
import { CONTACT } from "../Constants/datas";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ lightmode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      setIsSending(true);

      emailjs
        .send(
          "service_dcul9gz",
          "template_ghqee7b",
          formData,
          "rOfOko4IJ2XFkXrac"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Failed...", error);
          toast.error("Failed to send message");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="border-b border-neutral-900 mb-5 pb-4">
      <section id="contact">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 100 }}
          transition={{ duration: 1.2 }}
          className={
            lightmode
              ? "mt-20 mb-10 text-center text-4xl text-white"
              : "mt-20 mb-10 text-center text-4xl text-black"
          }
        >
          Get in touch
        </motion.h2>
      </section>
      <div
        className={
          lightmode ? "text-center text-white" : "text-center text-black"
        }
      >
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 100 }}
          transition={{ duration: 1.3 }}
          className="my-4"
        >
          <div className="flex justify-center text-center gap-5 ">
            <IoMdHome className="text-3xl " /> {CONTACT.address}
          </div>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 100 }}
          transition={{ duration: 1.4 }}
          className="my-4"
        >
          <div className="flex justify-center  ">
            <FaPhoneAlt className="text-xl mr-6" />
            <p className="mr-6">{CONTACT.phoneNo}</p>
          </div>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: 100 }}
          transition={{ duration: 1.45 }}
          className="my-4"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className={
              lightmode
                ? "underline text-purple-300 hover:text-purple-200"
                : "underline text-purple-800 hover:text-purple-900"
            }
          >
            {CONTACT.email}
          </a>
        </motion.p>
        <form
          onSubmit={handleSubmit}
          className="w-full xl:px-[200px] flex flex-col  space-y-5 md:px-16"
        >
          <motion.input
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition={{ duration: 1.5 }}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={
              lightmode
                ? "p-3 rounded-md bg-neutral-800 focus:outline-indigo-700 caret-purple-500"
                : "p-3 rounded-md bg-neutral-200 focus:outline-indigo-700 caret-purple-500"
            }
          />
          {error.name && (
            <p
              className={
                lightmode ? "text-sm text-red-600" : "text-sm text-red-900"
              }
            >
              {error.name}
            </p>
          )}
          <motion.input
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition={{ duration: 1.6 }}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={
              lightmode
                ? "p-3 rounded-md bg-neutral-800 focus:outline-indigo-700 caret-purple-500"
                : "p-3 rounded-md bg-neutral-200 focus:outline-indigo-700 caret-purple-500"
            }
          />
          {error.email && (
            <p
              className={
                lightmode ? "text-sm text-red-600" : "text-sm text-red-900"
              }
            >
              {error.email}
            </p>
          )}
          <motion.textarea
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition={{ duration: 1.7 }}
            placeholder="Message"
            rows="3"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={
              lightmode
                ? "p-3 rounded-md bg-neutral-800 focus:outline-indigo-700 caret-purple-500"
                : "p-3 rounded-md bg-neutral-200 focus:outline-indigo-700 caret-purple-500"
            }
          ></motion.textarea>
          {error.message && (
            <p
              className={
                lightmode ? "text-sm text-red-600" : "text-sm text-red-900"
              }
            >
              {error.message}
            </p>
          )}
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition={{ duration: 1.2 }}
            disabled={isSending}
            className={
              lightmode
                ? `mb-5 w-full rounded border border-stone-50/30 px-4 py-2 text-sm fornt-semibold text-white hover:bg-purple-800 ${
                    isSending ? "cursor-not-allowed opacity-50" : ""
                  }`
                : `mb-5 w-full rounded border border-stone-900 px-4 py-2 text-sm font-semibold text-black hover:bg-purple-400 ${
                    isSending ? "cursor-not-allowed opacity-50" : ""
                  }`
            }
          >
            {isSending ? "sending..." : "Send"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
