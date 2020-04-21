import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonText,
  IonContent,
  IonCard,
  IonSearchbar,
  IonList,
  IonTitle,
  IonFooter,
  IonListHeader,
  IonSlides,
  IonSlide,
  IonLabel,
  IonNote,
} from "@ionic/react";
import "./Home.css";
import { RouteComponentProps } from "react-router";
import {HomeSlide} from './theme';
type List = {
  src: string;
  name: string;
  quest: string;
  reward: string;
  date: Date;
  mainmenu: string;
  sale: string;
  price: number;
};

const items: List[] = [
  {
    src: "assets/food/1.png",
    name: "큐브 돈까스",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
  {
    src: "assets/food/2.png",
    name: "담담",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
  {
    src: "assets/food/3.png",
    name: "함박 웃음",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
  {
    src: "assets/food/4.png",
    name: "미스터 샐러드",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
  {
    src: "assets/food/5.png",
    name: "띵호와 반점",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
  {
    src: "assets/food/6.png",
    name: "엄마의 손맛",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
  {
    src: "assets/food/7.png",
    name: "집밥 한상",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward: "2000원 할인권!",
    date: new Date(),
    mainmenu: "대표메뉴",
    sale: "20%",
    price: 5000,
  },
];


const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar style={{ height: "50px" }}>
            <IonTitle style={{ textAlign: "center" }}>현재 주소</IonTitle>
            <IonText slot="start">
              <img
                src="assets/icon/locationg-01.png"
                alt="loc"
                style={{ width: "50px" }}
              />
            </IonText>
            <IonText slot="end">
              <img
                src="assets/icon/filterg-01.png"
                alt="crown"
                style={{ width: "50px" }}
              />
            </IonText>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonSearchbar
            value={searchText}
            placeholder="오늘은 뭐먹지?"
            onIonChange={(e) => setSearchText(e.detail.value!)}
          ></IonSearchbar>
          <img
            src="assets/img/banner.png"
            alt="banner"
            style={{ width: "100%" }}
          />
          <IonList>
            <IonListHeader>
              <p style={{ fontSize: "22px", fontWeight: 700 }}> 이벤트</p>
              <img
                src="assets/icon/lists-01.png"
                alt="list"
                style={{ width: "50px", margin: "auto 0 auto auto" }}
              />
            </IonListHeader>
            {items.map((image, i) => (
              <IonCard
                key={i}
                style={{
                  display: "flex",
                  maxWidth: "334px",
                  margin: "0 auto 10px auto",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/home/detail");
                }}
              >
                <img
                  src={image.src}
                  alt="test"
                  style={{
                    width: "79px",
                    height: "79px",
                    display: "inline-block",
                    float: "left",
                    margin: "auto 0",
                  }}
                />
                <div
                  style={{
                    padding: "8px 10px",
                    display: "flex",
                    flexDirection: "column",
                    width: "77%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flex: 1,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#8217FF",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      <span style={{ color: "#000" }}>상호명: </span>
                      {image.name}
                    </p>
                    <p style={{ margin: 0, color: "gray", fontSize: "10px" }}>
                      기간: {image.date.getFullYear()}-0
                      {image.date.getMonth() + 1}-{image.date.getDate()}
                    </p>
                  </div>
                  <div style={{ padding: 0, width: "100%", flex: 1 }}>
                    <p
                      style={{
                        fontSize: "14px",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span style={{ fontWeight: "bold", color: "#000" }}>
                        퀘스트:{" "}
                      </span>
                      {image.quest}
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "#8217FF",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      <span style={{ color: "#000" }}>리워드: </span>
                      {image.reward}
                    </p>
                  </div>
                </div>
              </IonCard>
            ))}
            <IonListHeader>
              <p style={{ fontSize: "22px", fontWeight: 700 }}> 타임세일</p>
              <img
                src="assets/icon/lists-01.png"
                alt="list"
                style={{ width: "50px", margin: "auto 0 auto auto" }}
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/home/timesale");
                }}
              />
            </IonListHeader>
            <IonSlides options={{ slidesPerView: 2.1, spaceBetween: 10 }}>
              {items.map((image, i) => (
                <IonSlide
                  key={i + image.date.getMonth()}
                  style={{ display: "inline-block", border: "0.5px #c2c2c2" }}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/home/detail");
                  }}
                >
                  <img src={image.src} alt="src" />
                  <HomeSlide lines="none">
                    <IonLabel>{image.name}</IonLabel>
                    <IonNote>
                      {image.date.getFullYear()}-0{image.date.getMonth() + 1}-
                      {image.date.getDate()}
                    </IonNote>
                  </HomeSlide>
                  <HomeSlide lines="none">
                    <IonLabel>{image.mainmenu}</IonLabel>
                  </HomeSlide>
                  <HomeSlide lines="none">
                    <IonLabel>
                      {image.sale} 가격: {image.price}
                    </IonLabel>
                  </HomeSlide>
                </IonSlide>
              ))}
            </IonSlides>
          </IonList>
          <IonFooter>
            <IonList
              style={{ display: "flex", textAlign: "center" }}
              lines="inset"
            >
              <p style={{ fontSize: "8px", flex: 1 }}>이용약관</p>
              <p style={{ fontSize: "8px", flex: 1 }}>자주 묻는 질문</p>
              <p style={{ fontSize: "8px", flex: 1 }}>공지사항</p>
              <p style={{ fontSize: "8px", flex: 1 }}>이벤트</p>
            </IonList>
          </IonFooter>
        </IonContent>
      </IonPage>
    </>
  );
};
export default Home;
