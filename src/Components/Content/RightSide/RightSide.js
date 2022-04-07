import React from "react";
import "./RightSide.css";
import { MdOutlineSearch, MdNotifications } from "react-icons/md";

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="d-flex justify-content-between">
        <span className="search-btn">
          <MdOutlineSearch />
        </span>
        <span className="notification-btn">
          <MdNotifications />
        </span>
      </div>
      <div className="row">
        <div className="col-mg-12">
          <div className="statistics">
            <h2>Statistics</h2>
            <div className="time-log">
              <div className="time-log-content">
                <p>Time Log</p>
                <h2>80%</h2>
                <span>+23% </span>
              </div>
              <svg
                className="w-44 h-44"
                viewBox="0 0 640 635"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M316.186 35.6224C375.187 41.1672 440.1 16.2493 489.9 48.3703C539.687 80.4835 547.91 147.722 573.112 201.34C598.639 255.648 643.974 305.27 638.75 365.051C633.461 425.585 587.775 473.728 545.497 517.372C505.026 559.15 458.427 597.082 401.667 609.794C346.641 622.117 292.526 599.072 237.597 586.326C179.032 572.737 111.135 575.772 69.2351 532.658C26.9169 489.114 18.772 422.122 19.0048 361.402C19.2177 305.856 54.975 259.803 70.4856 206.466C89.4041 141.41 64.5157 52.2989 120.141 13.6209C175.247 -24.696 249.363 29.3424 316.186 35.6224Z"
                  fill="url(#paint0_linear_8_4)"
                  fillOpacity="0.3"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M322.979 598.686C263.978 593.142 199.065 618.06 149.265 585.939C99.4776 553.825 91.2556 486.587 66.0533 432.969C40.5265 378.66 -4.80867 329.038 0.415039 269.257C5.70449 208.724 51.3903 160.581 93.6685 116.937C134.139 75.1585 180.738 37.2263 237.498 24.515C292.524 12.192 346.639 35.2372 401.569 47.9827C460.133 61.5717 528.03 58.5365 569.93 101.651C612.248 145.195 620.393 212.187 620.16 272.907C619.947 328.453 584.19 374.506 568.679 427.843C549.761 492.899 574.649 582.01 519.024 620.688C463.918 659.005 389.802 604.966 322.979 598.686Z"
                  fill="url(#paint1_linear_8_4)"
                  fillOpacity="0.9"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_8_4"
                    x1="48"
                    y1="41"
                    x2="529"
                    y2="593.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#10FFC6"></stop>
                    <stop offset="1" stopColor="#0376FD"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_8_4"
                    x1="591.165"
                    y1="593.309"
                    x2="110.165"
                    y2="40.8088"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#10FFC6"></stop>
                    <stop offset="1" stopColor="#0376FD"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="project">
        <h3>Projext</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="project-item">
              <div className="project-item-title">
                <h6>Total</h6>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="project-item-nubmer">
                    <span>202</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item">
              <div className="project-item-title">
                <h6>Total</h6>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="project-item-nubmer">
                    <span>202</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item">
              <div className="project-item-title">
                <h6>Total</h6>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="project-item-nubmer">
                    <span>202</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item">
              <div className="project-item-title">
                <h6>Total</h6>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="project-item-nubmer">
                    <span>202</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
