import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xannaqqb"); // Replace with your Formspree form ID
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleEmailJsSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Uncomment to enable EmailJS integration
      // await emailjs.send(
      //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: form.name,
      //     to_name: "JavaScript Mastery",
      //     from_email: form.email,
      //     to_email: "sujata@jsmastery.pro",
      //     message: form.message,
      //   },
      //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      // );

      alert("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={(e) => {
            handleSubmit(e); // Formspree submission
            handleEmailJsSubmit(e); // EmailJS submission
          }}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              id="message"
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={state.submitting || loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
