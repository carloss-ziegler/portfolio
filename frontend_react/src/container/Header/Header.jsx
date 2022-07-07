import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../constants";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="app__header app_flex">
      <motion.div
        whileInView={{ x: [-150, 30, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Olá, sou</p>
              <h1 className="head-text">Carlos Ziegler</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Desenvolvedor Web</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.3, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.7 }}
        className="app__header-img"
      >
        <img src={images.logo} alt="profile-bg" height={300} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.sass,
          images.react,
          images.javascript,
          images.firebase,
          images.tailwind,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
