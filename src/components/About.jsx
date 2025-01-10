import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        👋 Welcome to my profile! 🌟 I am pursuing a BScIT degree from Ganpat University, Ahmedabad 🎓, with a passion for Data Science, Business Analytics, AI, and ML. 📊🤖

I specialize in transforming raw data into actionable insights and developing predictive models to solve business challenges. My toolkit includes Python, SQL, R, TensorFlow, scikit-learn, Pandas, and NumPy. I also work with data visualization tools like Tableau, Power BI, and Excel. 📊

💼 My expertise includes:
- Statistical Analysis & Business Forecasting 📈
- Data Mining & Predictive Analytics 🛠️
- Machine Learning Algorithms & Deep Learning Frameworks 🤖
- Data Cleaning, Wrangling, and ETL Processes 🧹
- Time Series Analysis & Regression Modeling ⏱️📉

I aim to harness AI and analytics to optimize decision-making and drive business innovation. 🚀 Let's connect on LinkedIn and GitHub 🌍 to share insights and collaborate on exciting projects! 🚀📊
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
