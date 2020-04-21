import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonText,
  IonButtons,
  IonTitle,
  IonChip,
  IonItem,
  IonLabel,
  IonNote,
  IonListHeader,
  IonList,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { Content, BackButton, DetailContainer } from "./theme";

const MenuDetail = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <BackButton text="" icon="null" defaultHref="/home"></BackButton>
          </IonButtons>
          <IonTitle>상호명</IonTitle>
          <IonText slot="end" style={{ fontSize: "10px" }}>
            <img
              src="assets/icon/lists-01.png"
              alt="list"
              style={{ width: "50px" }}
              onClick={(e) => {
                e.preventDefault();
                history.push("/home/timesale");
              }}
            />
          </IonText>
        </IonToolbar>
      </IonHeader>
      <Content>
        <div
          style={{ width: "100%", height: "100vw", backgroundColor: "gold" }}
        ></div>
        <DetailContainer className="container">
          <IonList>
            <IonItem lines="none">
              <IonLabel>시간</IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>메뉴</IonLabel>
              <IonNote>구매 인원</IonNote>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>할인율 가격</IonLabel>
              <IonNote>잔여 물량</IonNote>
            </IonItem>
          </IonList>
          <IonList>
            <IonListHeader>상세정보</IonListHeader>
            <IonItem lines="none">
              <IonLabel>영업시간</IonLabel>
              <IonNote >11:00 ~ 19:00</IonNote>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>가게위치</IonLabel>
              <IonNote >
                강원도 춘천시 후평동 198-345
              </IonNote>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>전화번호</IonLabel>
              <IonNote >033-652-6516</IonNote>
            </IonItem>
            <IonItem lines="none">
              <IonLabel>해시태그</IonLabel>
              <IonNote >
                <IonChip>양식</IonChip>
                <IonChip>매콤</IonChip>
                <IonChip>아늑</IonChip>
              </IonNote>
            </IonItem>
            <IonItem lines="none" className="info">
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
            </IonItem>
            <IonListHeader>위치</IonListHeader>
            <IonItem lines="none">
              <div
                className="map"
                style={{
                  width: "100%",
                  height: "60vw",
                  backgroundColor: "cyan",
                }}
              ></div>
            </IonItem>
            <IonItem lines="none" className="timesale">
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
            </IonItem>
          </IonList>
        </DetailContainer>
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
        <div
          style={{
            backgroundColor: "#9943FC",
            color: "#fff",
            height: "50px",
            textAlign: "center",
            padding: "14px",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          예약하기
        </div>
      </Content>
    </IonPage>
  );
};
export default MenuDetail;
