import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonText,
  IonIcon,
  IonButton,
  IonList,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { location } from "ionicons/icons";
import Detail from './MenuDetail';
type List = {
  src: string;
  name: string;
  desc: string;
};

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

const Page = styled(IonPage)`
  padding: 10px;
`;
const NewsFeed: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <Page>
      <IonHeader>
        <IonToolbar>
          <FontAwesomeIcon icon={faHashtag} style={{ color: "#8217FF" }} />
          <IonText slot="end" style={{ fontSize: "10px" }}>
            강원도 춘천시 효자동
            <IonIcon
              icon={location}
              style={{ fontSize: "14px", color: "#8217FF" }}
            />
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
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
          {/* </IonRouterLink> */}
        </IonButton>
      ))}
    </IonList>
      </IonContent>
    </Page>
  );
}
export default NewsFeed;
// const nav = document.querySelector('#list');
// function showDetail(name){
//   const img = items.find(img => img.name === name);
//   nav.push(<Detail/>, {img});
// }

