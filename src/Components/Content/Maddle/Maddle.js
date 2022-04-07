import React from "react";
import "./Maddle.css";
import { AiOutlineRight } from "react-icons/ai";
import {GoSettings} from 'react-icons/go';
import {BsClock} from 'react-icons/bs';

const Maddle = () => {
  return (
    <div className="maddle">
      <div className="row">
        <div className="col-md-12">
          <div className="page-traning">
            <h3 className="people">People</h3>
            <span>
              <AiOutlineRight />
            </span>
            <h5>Design Team</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="acive-people">
            <h1>
              <span>39</span>People
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="search-people">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="select-position">
            <select>
              <option value="">Position</option>
              <option value="">Salary</option>
              <option value="">Join Date</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="more">
            <select name="" id="">
              <option value="">More</option>
            </select>
            {/* <GoSettings /> */}
          </div>
        </div>
      </div>
      <div className="member-section">
        {/* <div className="row">
          <div className="col-md-4">
            <div className="member-card">
              <div className="member-img">
                <img src="./image/lana.jpeg" alt="Jone Cooper" />
              </div>
              <h6 className="member-name">Jone Cooper</h6>
              <small className="member-title">Art Director</small>
              <div className="work-range">
                <span>
                  <BsClock />
                </span>
                <div className="work-range-bg">
                  <div
                    className="work-tange-parcent"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p>
                  <span>80</span>%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <div className="member-img">
                <img src="./image/lana.jpeg" alt="Jone Cooper" />
              </div>
              <h6 className="member-name">Jone Cooper</h6>
              <small className="member-title">Art Director</small>
              <div className="work-range">
                <span>
                  <BsClock />
                </span>
                <div className="work-range-bg">
                  <div
                    className="work-tange-parcent"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p>
                  <span>80</span>%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <div className="member-img">
                <img src="./image/lana.jpeg" alt="Jone Cooper" />
              </div>
              <h6 className="member-name">Jone Cooper</h6>
              <small className="member-title">Art Director</small>
              <div className="work-range">
                <span>
                  <BsClock />
                </span>
                <div className="work-range-bg">
                  <div
                    className="work-tange-parcent"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p>
                  <span>80</span>%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="google-card">
              <h2>Walk Through The Mobile App</h2>
              <img src="./image/google-play-badge.png" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <div className="member-img">
                <img src="./image/lana.jpeg" alt="Jone Cooper" />
              </div>
              <h6 className="member-name">Jone Cooper</h6>
              <small className="member-title">Art Director</small>
              <div className="work-range">
                <span>
                  <BsClock />
                </span>
                <div className="work-range-bg">
                  <div
                    className="work-tange-parcent"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p>
                  <span>80</span>%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <div className="member-img">
                <img src="./image/lana.jpeg" alt="Jone Cooper" />
              </div>
              <h6 className="member-name">Jone Cooper</h6>
              <small className="member-title">Art Director</small>
              <div className="work-range">
                <span>
                  <BsClock />
                </span>
                <div className="work-range-bg">
                  <div
                    className="work-tange-parcent"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p>
                  <span>80</span>%
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member-card">
              <div className="member-img">
                <img src="./image/lana.jpeg" alt="Jone Cooper" />
              </div>
              <h6 className="member-name">Jone Cooper</h6>
              <small className="member-title">Art Director</small>
              <div className="work-range">
                <span>
                  <BsClock />
                </span>
                <div className="work-range-bg">
                  <div
                    className="work-tange-parcent"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <p>
                  <span>80</span>%
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Maddle;
