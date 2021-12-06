import React, { useState } from "react";
import style from "../Feature.module.css";

const HelmetFeatures = () => {
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
                  <img src="/feature/shell_construction_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>
                  shell construction
                </span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("design");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/design_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>design</span>
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
                  impact protection
                </span>
              </div>
            </div>

            <div
              className="flex-col-4"
              onClick={() => {
                setShow("comfort");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/comfort_icon_1.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>comfort</span>
              </div>
            </div>
            <div
              className="flex-col-4"
              onClick={() => {
                setShow("visor");
              }}
            >
              <div className={style.protection_feature_box}>
                <div className={style.protection_feature_icon}>
                  <img src="/feature/visor_construction_icon.png" alt="icon" />
                </div>
                <span className={style.protection_feature_label}>visor</span>
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
              src="/helmet/helmet.mp4"
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
              src="/helmet/shell-construction.png"
              width="100%"
              height="auto"
              alt="construction"
            />
          )}
          {show === "impact resistance" && (
            <img
              src="/helmet/impact-protection.png"
              width="100%"
              height="auto"
              alt="impact"
            />
          )}
          {show === "design" && (
            <img
              src="/helmet/design.png"
              width="100%"
              height="auto"
              alt="design"
            />
          )}
          {show === "comfort" && (
            <img
              src="/helmet/comfort.png"
              width="100%"
              height="auto"
              alt="comfort"
            />
          )}
          {show === "visor" && (
            <img
              src="/helmet/construction.png"
              width="100%"
              height="auto"
              alt="visor"
            />
          )}
          {show === "ventilation" && (
            <img
              src="/helmet/ventilation.png"
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

export default HelmetFeatures;
