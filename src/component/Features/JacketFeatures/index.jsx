import React, { useState } from "react";
import style from "../Feature.module.css";

const JacketFeatures = () => {
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
                setShow("construction");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/construction_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  construction
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("impact resistance");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/impact_protection_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  impact resistance
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("fit");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/fit_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>fit</span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("protection");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img
                    src="/feature/protection_abrasion_resistant_icon.png"
                    alt="icon"
                  />
                </div>
                <span className={style.protection_feature_label}>
                  protection
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("water resistance");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/water_resistance_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  water resistance
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("ventilation");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/ventilation_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  ventilation
                </span>
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
              src="/jacket/jacketFeature.webm"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted={true}
              playsInline
            />
          )}
          {show === "construction" && (
            <img
              src="/jacket/construction.png"
              width="100%"
              height="auto"
              alt="construction"
            />
          )}
          {show === "impact resistance" && (
            <img
              src="/jacket/impact_protection.png"
              width="100%"
              height="auto"
              alt="impact"
            />
          )}
          {show === "fit" && (
            <img src="/jacket/fit.png" width="100%" height="auto" alt="fit" />
          )}
          {show === "protection" && (
            <img
              src="/jacket/protection.png"
              width="100%"
              height="auto"
              alt="protection"
            />
          )}
          {show === "water resistance" && (
            <img
              src="/jacket/water-resistance.png"
              width="100%"
              height="auto"
              alt="water resistance"
            />
          )}
          {show === "ventilation" && (
            <img
              src="/jacket/ventilation.png"
              width="100%"
              height="auto"
              alt="ventilation"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JacketFeatures;
