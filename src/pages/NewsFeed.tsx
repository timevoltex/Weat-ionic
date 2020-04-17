import React, { useState,} from "react";

import styled from "styled-components";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonText,
  IonTitle,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,

} from "@ionic/react";
import InstaFeed from "./instaFeed";
import Hashtagpage from "./HashTagPage";
import { RouteComponentProps } from "react-router";


const Page = styled(IonPage)`
  padding: 0;
`;

const Segment = styled(IonSegmentButton)`
  --indicator-color:#9943FC;
  --color:#E5E5E5;
  --color-checked:#9943FC;
  --background:none;
`
const NewsFeed: React.FC<RouteComponentProps> = ({history}) => {
  const [searchText, setSearchText] = useState("");
  const [segValue, setsegValue] = useState("comment");

  
  // segValue의 값에 따라서 다른 컴포넌트를 Render
  function renderComponent() {
    switch (segValue) {
      case "Feed":
        return <Hashtagpage />;
      default:
        return <InstaFeed/>;
    }
  }

  return (
    <Page>
      <IonHeader>
        <IonToolbar style={{ height: "50px" }}>
          <IonTitle style={{ textAlign: "center" }}>
            <img
              src="assets/img/weat-purple.png"
              alt="logo"
              style={{ width: "50px" }}
            />
          </IonTitle>
          <IonText slot="start">
            <img
              src="assets/icon/locationg-01.png"
              alt="loc"
              style={{ width: "50px" }}
            />
          </IonText>
          <IonText slot="end">
            <img
              src="assets/icon/lists-01.png"
              alt="lists"
              style={{ width: "50px" }}
            />
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchText}
          placeholder="어디가 맛있지?"
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <IonSegment
          value={segValue}
          onIonChange={(e) => {
            // e.preventDefault();
            setsegValue(`${e.detail.value}`);
          }}
        >
          <Segment value="comment" mode="md">
            Feed
          </Segment>
          <Segment value="Feed" mode="md">
            hashtag
          </Segment>
        </IonSegment>
        {renderComponent()}
        {/* <div className="feedContainer">
          <IonItem lines="none" style={{height:"8vh"}}>
            <IonAvatar slot="start">
              <IonIcon icon={personCircle} style={{ fontSize: '50px' }} />
            </IonAvatar>
            <IonLabel>
              <p style={{ marginBottom: 0 }}>유저명</p>
              <p style={{ marginTop: 0 }}>33% 00:00</p>
            </IonLabel>
            <IonLabel position="stacked" slot="end" style={{ textAlign: 'right', marginTop: "10px" }}>
              <p style={{ marginBottom: 0 }}>마리스 커피</p>
              <p style={{ marginTop: 0 }}>아이스 아메리카노</p>
            </IonLabel>
          </IonItem>
          <IonSlides options={{ slidesPerView: 1}}>
            {items.map((image, i) => (
              <IonSlide key={i}>
                <img src={image.src} alt="img" style={{width:'100vw'}}/>
              </IonSlide>
            ))}
          </IonSlides>
          <Label lines="none" style={{ marginTop: '10px' }}>
              <IonIcon icon={heart} style={{ fontSize: '29px', paddingRight:'10px' }} />
              <IonIcon icon={chatboxEllipses} style={{ fontSize: '29px', paddingRight:'10px' }} />
              <IonIcon icon={bookmark} style={{ fontSize: '29px' }} />
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '43vw', marginLeft: 'auto', marginTop: '-5px' }}>
              <IonChip style={{ fontSize: '8px' }}>해시태그</IonChip>
              <IonChip style={{ fontSize: '8px' }}>해시태그</IonChip>
              <IonChip style={{ fontSize: '8px' }}>해시태그</IonChip>
            </div>
          </Label>
          <div className="feedzone" style={{padding:'0 10px'}}>
            <Feed>
              <p>
                <span style={{ fontWeight: 'bold' }}>lorem </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ullam? Ea quaerat sit tempore quam error, architecto laudantium quia beatae nisi, rem ut atque totam saepe voluptatem voluptatum culpa consequatur.</p>
                  <IonBadge slot="end">
                    <IonIcon icon={heart}/>
                  </IonBadge>
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
        </div> */}

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
};
export default NewsFeed;
// const nav = document.querySelector('#list');
// function showDetail(name){
//   const img = items.find(img => img.name === name);
//   nav.push(<Detail/>, {img});
// }
