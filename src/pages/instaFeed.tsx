import React, { useState } from "react";
import {
  IonItem,
  IonText,
  IonAvatar,
  IonLabel,
  IonIcon,
  IonSlide,
  IonSlides,
  IonChip,
  IonBadge,
} from "@ionic/react";
import { personCircle, chatboxEllipses, heart, bookmark } from "ionicons/icons";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

type List = {
  src: string;
  name: string;
  desc: string;
};

const Feed = styled(IonText)`
  p{overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  width:60vw;
`;

const Label = styled(IonItem)`
  --padding-start: 10px;
`;
const items: List[] = [
  {
    src: "assets/food/1.png",
    name: "큐브 돈까스",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
  {
    src: "assets/food/2.png",
    name: "담담",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
  {
    src: "assets/food/3.png",
    name: "함박 웃음",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
  {
    src: "assets/food/4.png",
    name: "미스터 샐러드",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
  {
    src: "assets/food/5.png",
    name: "띵호와 반점",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
  {
    src: "assets/food/6.png",
    name: "엄마의 손맛",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
  {
    src: "assets/food/7.png",
    name: "집밥 한상",
    desc: "응모권 사용자 중 10명을 뽑아 2천원 상당의 할인권을 드립니다.",
  },
];

const InstaFeed = () => {
  const history = useHistory();
  const [like, setLike] = useState(false);
  

  function toggleLike(){
    if(like){
      return <img src="assets/icon/like-01.png" alt="heart_online" style={{width:'50px'}}/>;
    }
    else{
      return <img src="assets/icon/like-01-01.png" alt="heart" style={{width:'50px'}}/>;
    }
  }
  
  return(
  <div className="feedContainer">
    <IonItem lines="none" style={{ height: "8vh" }}>
      <IonAvatar slot="start">
        <IonIcon icon={personCircle} style={{ fontSize: "50px" }} />
      </IonAvatar>
      <IonLabel>
        <p style={{ marginBottom: 0 }}>유저명</p>
        <p style={{ marginTop: 0 }}>33% 00:00</p>
      </IonLabel>
      <IonLabel
        position="stacked"
        slot="end"
        style={{ textAlign: "right", marginTop: "10px" }}
      >
        <p style={{ marginBottom: 0 }} 
        onClick={(e) => {
          e.preventDefault();
          history.push('/newsfeed/store');
        }}>마리스 커피</p>
        <p style={{ marginTop: 0 }}>아이스 아메리카노</p>
      </IonLabel>
    </IonItem>
    <IonSlides options={{ slidesPerView: 1 }}>
      {items.map((image, i) => (
        <IonSlide key={i}>
          <img src={image.src} alt="img" style={{ width: "100vw" }} />
        </IonSlide>
      ))}
    </IonSlides>
    <Label lines="none" style={{ marginTop: "10px" }}>
      <div onClick={e => {setLike(!like)}}>
      {toggleLike()}
      </div>
      <img src="assets/icon/feedg-01.png" alt="heart" style={{width:'50px'}}/>
      <img src="assets/icon/bookmark-01-01.png" alt="heart" style={{width:'50px'}}/>
      
      <div
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "43vw",
          marginLeft: "auto",
          marginTop: "-5px",
        }}
      >
        <IonChip style={{ fontSize: "8px" }}>해시태그</IonChip>
        <IonChip style={{ fontSize: "8px" }}>해시태그</IonChip>
        <IonChip style={{ fontSize: "8px" }}>해시태그</IonChip>
      </div>
    </Label>
    <div className="feedzone" style={{ padding: "0 10px" }}>
      <Feed>
        <p>
          <span style={{ fontWeight: "bold" }}>lorem </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
          ullam? Ea quaerat sit tempore quam error, architecto laudantium quia
          beatae nisi, rem ut atque totam saepe voluptatem voluptatum culpa
          consequatur.
        </p>
        <IonBadge slot="end">
          <IonIcon icon={heart} />
        </IonBadge>
      </Feed>
      <Feed>
        <p>
          <span style={{ fontWeight: "bold" }}>lorem </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </Feed>
      <Feed>
        <p>
          <span style={{ fontWeight: "bold" }}>lorem </span>
          Lorem ipsum dolor sit amet,
        </p>
        <IonIcon icon={heart} slot="end" />
      </Feed>
    </div>
  </div>
)};
export default InstaFeed;
/* <IonList>
      {items.map((image, i) => (
        <IonButton className={'navImage'} key={i * 10} fill='clear'
        onClick={(e) => {
          e.preventDefault();
          history.push('/newsfeed/detail');
        }}
        >
          <img
            src={image.src}
            alt="test"
            style={{ margin: 0 }}
          />
          {/* </IonRouterLink>
        </IonButton>
      ))}
          </IonList>*/
