import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonText,
  IonIcon,
  IonContent,
  IonBackButton,
  IonButtons,
  IonPage,
  IonTitle,
  IonChip,
  IonFooter,
} from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHashtag,
  faStoreAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { location, personCircleOutline } from "ionicons/icons";
import styled from "styled-components";
import Array from "./list";
const Content = styled(IonContent)`
  padding: 10px !important;
`;

export default function MenuDetail() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="" color="gray" />
          </IonButtons>
          <IonTitle>상호명</IonTitle>
          <IonText slot="end" style={{ fontSize: "10px" }}>
            <img
              src="assets/icon/lists-01.png"
              alt="list"
              style={{ width: "50px" }}
            />
          </IonText>
        </IonToolbar>
      </IonHeader>
      <Content>
        <div
          style={{ width: "100%", height: "100vw", backgroundColor: "gray" }}
        ></div>
        <div className="container" >
          <div className="timebox" style={{ padding: "16px" }}>
            <p>시간</p>
            <p>
              메뉴<span style={{ float: "right" }}>구매 인원</span>
            </p>
            <p>
              할인율 가격<span style={{ float: "right" }}>잔여물량</span>
            </p>
          </div>
          <div className="detailbox"style={{ backgroundColor: "#c2c2c2", padding:'16px' } }>
            <div className="info" >
              <p>
                영업시간 <span>11:00~20:00</span>
              </p>
              <p>
                가게위치 <span>강원도 춘천시 후평동 198-345</span>
              </p>
              <p>
                전화번호 <span>033-652-6516</span>
              </p>
              <p>
                해시태그 <IonChip>양식</IonChip>
                <IonChip>매콤</IonChip>
                <IonChip>아늑</IonChip>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                officiis placeat aliquid blanditiis enim quod sunt explicabo
                ipsa esse earum repellendus natus molestias hic numquam, quia
                facere culpa. Veritatis, repudiandae? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. At officiis placeat aliquid
                blanditiis enim quod sunt explicabo ipsa esse earum repellendus
                natus molestias hic numquam, quia facere culpa. Veritatis,
                repudiandae?
              </p>
            </div>
            <div className="map-container">
              <p>위치</p>
              <div
                className="map"
                style={{
                  width: "100%",
                  height: "60vw",
                  backgroundColor: "cyan",
                }}
              ></div>
            </div>
            <div className="timesale">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                suscipit deserunt consequatur officia! Ipsa nobis quae tempore
                nam ducimus optio voluptate voluptatibus, repudiandae sit
                aperiam neque id tenetur minima dolore? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Quis suscipit deserunt
                consequatur officia! Ipsa nobis quae tempore nam ducimus optio
                voluptate voluptatibus, repudiandae sit aperiam neque id tenetur
                minima dolore?
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{ display: "flex" }}>
          <IonIcon icon={personCircleOutline} style={{ fontSize: "35px" }} />
          <div style={{ height: "35px" }}>
          <p>이소담</p>
          <p>
          15분전 <span>조회수 8</span>
          </p>
          </div>
          </div>
          <div>
          <FontAwesomeIcon icon={faStoreAlt} style={{ fontSize: "20px" }} />
          <FontAwesomeIcon icon={faEllipsisV} style={{ fontSize: "20px" }} />
          </div>
        </div> */}
      </Content>
      <IonFooter
        style={{
          backgroundColor: "#9943FC",
          color: "#fff",
          height: "50px",
          textAlign: "center",
          padding: "14px",
        }}
      >
        예약하기
      </IonFooter>
    </IonPage>
  );
}
