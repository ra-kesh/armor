import React, { useState } from "react";
import style from "../Feature.module.css";

const GloveFeatures = () => {
  const [show, setShow] = useState("video");
  return (
    <div className="container">
      <div className={style.feature_header}>Protection Features</div>
      <div className={style.feature_subheader}>Tap on feature to know more</div>
      <div className="flex-row space-between">
        <div className="flex-col-lg-5 order-1 order-lg-0 center-vertically">
          <div className="flex-row ">
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("finger protection");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/finger.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  finger protection
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("construction");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/construction.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  construction
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("knuckle");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/knuckle-protection.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  knuckle protection
                </span>
              </div>
            </div>

            <div
              className="flex-col-4"
              onClick={() => {
                setShow("palm");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/palm-protection.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  palm protection
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("touch");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/touch-screen.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  touch screen
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("weather");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/weather.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>weather</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-col-lg-6 order-0 order-lg-1"
          style={{ minHeight: "35rem", width: "100%" }}
        >
          {show === "video" && (
            <video
              src="/gloves/gloves.mp4"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted="true"
              playsinline
            />
          )}
          {show === "construction" && (
            <img
              src="/gloves/construction.jpg"
              width="100%"
              height="auto"
              alt="construction"
            />
          )}
          {show === "finger protection" && (
            <img
              src="/gloves/finger_protection.jpg"
              width="100%"
              height="auto"
              alt="finger protection"
            />
          )}
          {show === "knuckle" && (
            <img
              src="/gloves/knuckle.jpg"
              width="100%"
              height="auto"
              alt="knuckle"
            />
          )}
          {show === "palm" && (
            <img src="/gloves/palm.jpg" width="100%" height="auto" alt="palm" />
          )}
          {show === "touch" && (
            <img
              src="/gloves/touch.jpg"
              width="100%"
              height="auto"
              alt="touch screen"
            />
          )}
          {show === "weather" && (
            <img
              src="/gloves/weather.jpg"
              width="100%"
              height="auto"
              alt="weather"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GloveFeatures;
