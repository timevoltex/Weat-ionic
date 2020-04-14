import React, { useState } from "react";
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
  IonTitle,
  IonSearchbar,
  IonAvatar,
  IonLabel,
  IonItem,
  IonSlides,
  IonSlide,
  IonChip,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { personCircle, heart, chatboxEllipses, bookmark } from "ionicons/icons";
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

const Feed = styled(IonText)`
  p{overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  width:60vw;}
`
const NewsFeed: React.FC<RouteComponentProps> = ({ history }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <Page>
      <IonHeader>
        <IonToolbar style={{ height: "50px" }}>
          <IonTitle style={{ textAlign: 'center' }}>
            <img src="assets/img/weat-purple.png" alt="logo" style={{ width: '50px' }} />
          </IonTitle>
          <IonText slot="start">
            <img src="assets/icon/locationg-01.png" alt="loc" style={{ width: "50px" }} />
          </IonText>
          <IonText slot="end">
            <img src="assets/icon/lists-01.png" alt="lists" style={{ width: "50px" }} />
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar value={searchText} placeholder="어디가 맛있지?" onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <div className="feedContainer">
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonIcon icon={personCircle} style={{ fontSize: '50px' }} />
            </IonAvatar>
            <IonLabel position="stacked">
              <p style={{ marginBottom: 0 }}>유저명</p>
              <p style={{ marginTop: 0 }}>33% 00:00</p>
            </IonLabel>
            <IonLabel position="stacked" slot="end" style={{ textAlign: 'right', marginTop: "10px" }}>
              <p style={{ marginBottom: 0 }}>마리스 커피</p>
              <p style={{ marginTop: 0 }}>아이스 아메리카노</p>
            </IonLabel>
          </IonItem>
          <IonSlides options={{ slidesPerView: 2.5, freeMode: 'true', spaceBetween: 20 }}>
            {items.map((image, i) => (
              <IonSlide key={i}>
                <img src={image.src} alt="img" />
              </IonSlide>
            ))}
          </IonSlides>
          <IonItem lines="none" style={{ marginTop: '10px' }}>
              <IonIcon icon={heart} style={{ fontSize: '29px' }} />
              <IonIcon icon={chatboxEllipses} style={{ fontSize: '29px' }} />
              <IonIcon icon={bookmark} style={{ fontSize: '29px' }} />
            <IonAvatar>
            </IonAvatar>
            <IonAvatar>
            </IonAvatar>
            <IonAvatar>
            </IonAvatar>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '43vw', marginLeft: 'auto', marginTop: '-5px' }}>
              <IonChip style={{ fontSize: '8px' }}>해시태그</IonChip>
              <IonChip style={{ fontSize: '8px' }}>해시태그</IonChip>
              <IonChip style={{ fontSize: '8px' }}>해시태그</IonChip>
            </div>
          </IonItem>
          <div className="feedzone">
            <Feed>
              <p>
                <span style={{ fontWeight: 'bold' }}>lorem </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ullam? Ea quaerat sit tempore quam error, architecto laudantium quia beatae nisi, rem ut atque totam saepe voluptatem voluptatum culpa consequatur.</p>
            </Feed>
            <Feed>
              <p>
                <span style={{ fontWeight: 'bold' }}>lorem </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Feed>
            <Feed>
              <p>
                <span style={{ fontWeight: 'bold' }}>lorem </span>
                Lorem ipsum dolor sit amet,
                </p>
              <IonIcon icon={heart} slot="end" />
            </Feed>
          </div>
        </div>

        {/* <IonList>
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
    </IonList> */}
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

