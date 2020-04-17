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
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
type List = {
  src: string;
  name: string;
  quest: string;
  reward:string;
  date: Date;
  mainmenu:string;
  sale:string;
  price:number;
};

const items: List[] = [
  {
    src: "assets/food/1.png",
    name: "큐브 돈까스",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date: new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  },
  {
    src: "assets/food/2.png",
    name: "담담",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date:new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  },
  {
    src: "assets/food/3.png",
    name: "함박 웃음",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date:new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  },
  {
    src: "assets/food/4.png",
    name: "미스터 샐러드",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date:new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  },
  {
    src: "assets/food/5.png",
    name: "띵호와 반점",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date:new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  },
  {
    src: "assets/food/6.png",
    name: "엄마의 손맛",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date:new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  },
  {
    src: "assets/food/7.png",
    name: "집밥 한상",
    quest: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
    reward:"2000원 할인권!",
    date:new Date(),
    mainmenu:"대표메뉴",
    sale:"20%",
    price:5000
  }
];

const Timesale = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" text="" color="gray" />
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
            margin: "0 auto 10px auto"
          }}
          
        >
          <img src={image.src} alt="test" style={{ width: "79px", height:"79px", display:"inline-block", float:"left", margin:"auto 0" }} />
          <div style={{ padding: "8px 10px", display:"flex", flexDirection:"column", width:"77%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between", flex:1
              }}
            >
              <p style={{ margin: 0, color:"#8217FF", fontSize:"14px", fontWeight:"bold"}}><span style={{color:"#000"}}>상호명: </span>{image.name}</p>
            <p style={{ margin: 0, color:"gray", fontSize:"10px" }}>기간: {image.date.getFullYear()}-0{image.date.getMonth()+1}-{image.date.getDate()}</p>
            </div>
            <div style={{ padding: 0, width: "100%", flex:1 }}>
              <p style={{fontSize:"14px", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}><span style={{fontWeight:"bold", color:"#000"}}>퀘스트: </span>{image.quest}</p>
            </div>
            <div
              style={{
                width: "100%"
              }}
            >
              <p style={{ margin: 0, color:"#8217FF", fontWeight:"bold", fontSize:"14px" }}><span style={{color:"#000"}}>리워드: </span>{image.reward}</p>
            </div>
          </div>
        </IonCard>
        ))}
        {items.map((image, i) => (
          <IonCard
          key={i} 
          style={{
            display: "flex",
            maxWidth: "334px",
            margin: "0 auto 10px auto"
          }}
          
        >
          <img src={image.src} alt="test" style={{ width: "79px", height:"79px", display:"inline-block", float:"left", margin:"auto 0" }} />
          <div style={{ padding: "8px 10px", display:"flex", flexDirection:"column", width:"77%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between", flex:1
              }}
            >
              <p style={{ margin: 0, color:"#8217FF", fontSize:"14px", fontWeight:"bold"}}><span style={{color:"#000"}}>상호명: </span>{image.name}</p>
            <p style={{ margin: 0, color:"gray", fontSize:"10px" }}>기간: {image.date.getFullYear()}-0{image.date.getMonth()+1}-{image.date.getDate()}</p>
            </div>
            <div style={{ padding: 0, width: "100%", flex:1 }}>
              <p style={{fontSize:"14px", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}><span style={{fontWeight:"bold", color:"#000"}}>퀘스트: </span>{image.quest}</p>
            </div>
            <div
              style={{
                width: "100%"
              }}
            >
              <p style={{ margin: 0, color:"#8217FF", fontWeight:"bold", fontSize:"14px" }}><span style={{color:"#000"}}>리워드: </span>{image.reward}</p>
            </div>
          </div>
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
