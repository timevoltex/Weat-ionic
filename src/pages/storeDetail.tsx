import React, {useState} from "react";
import {
  IonPage,
  IonHeader,
  IonBackButton,
  IonTitle,
  IonIcon,
  IonButtons,
  IonContent,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonSlides,
  IonSlide,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { bookmark, personCircle, heart } from "ionicons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Ranking from "./Ranking";
import InstaFeed from "./instaFeed";
import StoreInfo from "./storeInfo";

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

const Content = styled(IonContent)`
  --background: #f2f2f2;
`;
const Item = styled(IonItem)`
  --background: transparent;
`;
const Segment = styled(IonSegment)`
  --background: transparent;
`;
const StoreDetail = () => {
  const [index, setIndex] = useState('info');

  function swipe() {
    switch(index){
      case 'review' : return <InstaFeed/>;
      case 'ranking' : return <Ranking/>;
      default: return <StoreInfo/>
    }
  }
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/newsfeed" text="" color="gray" />
          </IonButtons>
          <IonTitle>가게정보</IonTitle>
          <IonIcon icon={bookmark} slot="end" />
        </IonToolbar>
      </IonHeader>
      <Content>
        <Item lines="none" style={{ height: "8vh" }}>
          <IonAvatar slot="start">
            <IonIcon icon={personCircle} style={{ fontSize: "50px" }} />
          </IonAvatar>
          <IonLabel position="stacked">
            <p style={{ marginBottom: 0 }}>
              상호명
              <FontAwesomeIcon icon={faStore} />
            </p>
            <p style={{ marginTop: 0 }}>
              강원도 춘천시 석사동 <span>33%</span>{" "}
            </p>
          </IonLabel>
          <IonBadge slot="end">
            <IonIcon icon={heart} />
          </IonBadge>
        </Item>
        <IonGrid style={{ width: "92vw" }}>
          <IonRow style={{ textAlign: "center" }}>
            <IonCol style={{ borderRight: "1px solid gray" }}>
              000
              <br />
              팔로워
            </IonCol>
            <IonCol style={{ borderRight: "1px solid gray" }}>
              000
              <br />
              팔로잉
            </IonCol>
            <IonCol style={{ borderRight: "1px solid gray" }}>
              000
              <br />
              리뷰
            </IonCol>
            <IonCol>
              000
              <br />
              단골손님
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonSlides
          options={{
            slidesPerView: 2.5,
            spaceBetween: 10,
            watchOverflow: "true",
            autoHeight: "true",
          }}
        >
          {items.map((image, i) => (
            <IonSlide key={i}>
              <img src={image.src} alt="img" style={{ width: "45vw" }} />
            </IonSlide>
          ))}
        </IonSlides>
        <IonToolbar style={{ background: "#fff" }}>
          <Segment value={index} style={{ margin: 0 }} onIonChange={(e) => {
            setIndex(`${e.detail.value}`);
          }}>
            <IonSegmentButton value='info' style={{ minWidth: "10px" }} mode="md">
              정보
            </IonSegmentButton>
            <IonSegmentButton value='review' style={{ minWidth: "10px" }} mode="md">
              리뷰
            </IonSegmentButton>
            <IonSegmentButton value='ranking' style={{ minWidth: "10px" }} mode="md">
              랭킹
            </IonSegmentButton>
          </Segment>
        </IonToolbar>
        {swipe()}
      </Content>
    </IonPage>
  );
};
export default StoreDetail;
