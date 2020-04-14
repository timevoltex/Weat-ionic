import React from "react";
import {} from "@ionic/react";

const Footer = () => (
  <div
    className="footer"
    style={{ backgroundColor: "#e6e6e6", color: "#848484" }}
  >
    <div
      className="footer-btn"
      style={{
        display: "flex",
        color: "#afafaf",
        justifyContent: "space-between",
      }}
    >
      <a href="#">이용약관</a>
      <a href="#">자주 묻는 질문</a>
      <a href="#">공지사항</a>
      <a href="#">이벤트</a>
    </div>
    <div className="footer-content">
      <div className="leftCont">
        <div>
          <p>강원도 춘천시 강원대학길1, KNU스타트업큐브 B동 214호</p>
          <p>사업자 등록 번호: 151-20-00854</p>
        </div>
        <br />
        <div>
          <p>대표: 최원준</p>
          <p>help@connple.com</p>
          <p>Copyright {"\u00A9"} 2020 Connple. All rights reserved.</p>
        </div>
      </div>
      <div className="rightCont">
        <div className="footer-logo">
          <img
            src="../static/Connple-white.png"
            alt="logo"
            style={{ width: "142px" }}
          />
        </div>
        <div className="button">
          <div className="round">자주 묻는 질문</div>
          <div className="round" style={{ marginLeft: "16px" }}>
            공지사항
          </div>
        </div>
      </div>
    </div>
  </div>
);
