import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Carousel = ({ images }) => {
  let [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div style={{ height: "100%", backgroundColor: "inherit" }}>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              style={{ display: "flex" }}
            >
              {images.map((image) => (
                <img
                  key={image}
                  src={image}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setIndex(index - 1)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "4px",
                    height: "32px",
                    width: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <ChevronLeftIcon />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  onClick={() => setIndex(index + 1)}
                  style={{
                    position: "absolute",
                    right: "4px",
                    top: "50%",
                    height: "32px",
                    width: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <ChevronRightIcon />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default Carousel;
