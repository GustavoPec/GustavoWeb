import Home from "./screen/home";
import { GlobalStyle } from "./styles/global";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Preloader } from "./screen/home/components/preloader";

export function App() {
  const [loading, setLoading] = useState("0");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading("-100vh");
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: loading }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <Preloader />
      </motion.div>
      {visible && <Home />}
    </>
  );
}
