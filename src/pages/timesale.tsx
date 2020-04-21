import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
  IonText,
  IonContent,
  IonSearchbar,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonCard,
  IonLabel,
  IonItem,
  IonNote,
} from "@ionic/react";
import { BackButton } from "./theme";
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

const Timesale = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <BackButton defaultHref="/home" text="" icon="null" />
          </IonButtons>
          <IonTitle>타임세일</IonTitle>
          <IonText slot="end" style={{ fontSize: "10px" }}>
            <img
              src="assets/icon/lists-01.png"
              alt="list"
              style={{ width: "50px" }}
            />
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ backgroundColor: "#F2F2F2" }}>
        <IonSearchbar
          value={searchText}
          placeholder="싼데 없나?"
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <IonList>
          {items.map((image, i) => (
            <IonCard
              key={i}
              style={{
                display: "flex",
                maxWidth: "334px",
                margin: "0 auto 10px auto",
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
              <IonItem lines="none">
                <IonLabel>시간</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>가게명</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>메뉴</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>할인율 가격</IonLabel>
                <IonNote>구매 인원 <br/> 잔여 물량</IonNote>
              </IonItem>
            </IonCard>
          ))}
        </IonList>
        <IonInfiniteScroll threshold="100px" id="infinite-scroll">
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading data..."
          />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};
export default Timesale;
