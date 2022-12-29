import React from "react";
import "./trackData.styles.css";

import reward from "../../assets/reward-steps.png";
import copy from "../../assets/copy.png";

function TrackData() {
  return (
    <div className="main-div">
      <div className="heading-div">
        <button>
          <i class="fa-solid fa-angle-left"></i>{" "}
        </button>
        <h3 className="heading">REFER A FRIEND</h3>
      </div>

      <div className="body-div">
        <div className="ace-points">
          <h2>
            100 ACE Points to you and to your friend.
            <span className="color"> Deal?</span>
          </h2>
        </div>

        <div className="reward-steps">
          <img src={reward} alt="" />
        </div>

        <div className="reward-details">
          <h4>How to use my Rewards?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ad ipsam omnis excepturi facilis ut porro totam quaerat voluptates
            harum nisi eveniet repellat dignissimos.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ad ipsam omnis excepturi facilis ut porro totam quaerat voluptates
            harum nisi eveniet repellat dignissimos.
          </p>
        </div>

        <div className="last-section">
          <div className="text-section">
            <span>Copy your referral code and share with your friends.</span>
          </div>
          <div className="button-section">
            <button className="copy-btn">
              ABH7657845 <img className="btn-img" src={copy} alt="" />
            </button>
            <button className="invite-button">INVITE FRIENDS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackData;
