import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonSegment,
  IonSegmentButton,
  IonList,
  IonListHeader,
  IonNote,
  IonProgressBar,
} from "@ionic/react";
import {
  personCircle,
  addCircleOutline,
} from "ionicons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import InstaFeed from "./instaFeed";
import Hashtagpage from "./HashTagPage";

const Item = styled(IonItem)`
  --background: transparent;
`;
const Segment = styled(IonSegmentButton)`
  --indicator-color: #9943fc;
  --color: #e5e5e5;
  --color-checked: #9943fc;
  --background: none;
`;
const Mypage = () => {
  const [segValue, setsegValue] = useState("profile");
  function renderComponent() {
    switch (segValue) {
      case "notification":
        return <Notification />;
      case "analyze":
        return <Analyze />;
      case "collection":
        return <Hashtagpage />;
      default:
        return <InstaFeed />;
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>마이페이지</IonTitle>
          <div style={{float:'left'}}>
            <img
              src="assets/icon/edit-01-01.png"
              alt="pencil"
              style={{ width: "50px" }}
            />
          </div>
          <div style={{float:'right'}}>
            <img
              src="assets/icon/settings-01-01.png"
              alt="pencil"
              style={{ width: "50px"}}
            />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
            <p>1000P</p>
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
        <IonSegment
          value={segValue}
          onIonChange={(e) => {
            // e.preventDefault();
            setsegValue(`${e.detail.value}`);
          }}
        >
          <Segment value="profile" mode="md">
            프로필
          </Segment>
          <Segment value="notification" mode="md">
            알림
          </Segment>
          <Segment value="analyze" mode="md">
            분석
          </Segment>
          <Segment value="collection" mode="md">
            컬렉션
          </Segment>
        </IonSegment>
        {renderComponent()}
      </IonContent>
    </IonPage>
  );
};
export default Mypage;

const Notification = () => {
  return (
    <IonList>
      <IonListHeader>알림</IonListHeader>
    </IonList>
  );
};

const AnalyzeGraph = () => {
  return (
    <>
      <IonListHeader>
        <IonNote>음식종류</IonNote>
      </IonListHeader>
      <GraphContents />
      <IonListHeader>
        <IonNote>맛</IonNote>
      </IonListHeader>
      <GraphContents />
      <IonListHeader>
        <IonNote>가격대</IonNote>
      </IonListHeader>
      <GraphContents />
      <IonListHeader>
        <IonNote>분위기</IonNote>
      </IonListHeader>
      <GraphContents />
      <IonListHeader>
        <IonNote>인원</IonNote>
      </IonListHeader>
      <GraphContents />
    </>
  );
};

const GraphContents = () => (
  <div className="" style={{ padding: "0 20px" }}>
    <GraphInner>
      <IonProgressBar value={Math.random()} />
      <IonNote slot="end">해시태그</IonNote>
    </GraphInner>
    <GraphInner>
      <IonProgressBar value={Math.random()} />
      <IonNote slot="end">해시태그</IonNote>
    </GraphInner>
    <GraphInner>
      <IonProgressBar value={Math.random()} />
      <IonNote slot="end">해시태그</IonNote>
    </GraphInner>
    <GraphInner>
      <IonProgressBar value={Math.random()} />
      <IonNote slot="end">해시태그</IonNote>
    </GraphInner>
    <GraphInner>
      <IonProgressBar value={Math.random()} />
      <IonNote slot="end">해시태그</IonNote>
    </GraphInner>
  </div>
);

const GraphInner = styled.div`
  display: flex;
  ion-progress-bar {
    max-width: 70%;
    margin: 15px auto 15px 0;
    height: 10px;
    --progress-background: #8217ff;
  }
  ion-note {
    margin: auto 0;
    font-size: 14px;
  }
`;
const AnalyzeTable = () => {
  return (
    <>
      <IonBadge color="transparent">#해시태그</IonBadge>
      <IonBadge>#해시태그</IonBadge>
      <IonBadge>#해시태그</IonBadge>
      <IonBadge>#해시태그</IonBadge>
      <IonListHeader>나와 잘 맞는 친구</IonListHeader>
      <IonItem>
        <IonAvatar slot="start">
          <IonIcon icon={personCircle} style={{ fontSize: "50px" }} />
        </IonAvatar>
        <IonLabel position="stacked">
          <p>유저명</p>
          <p>주소</p>
        </IonLabel>
        <IonNote slot="end">98%</IonNote>
      </IonItem>
      <IonListHeader>최애 메뉴</IonListHeader>
    </>
  );
};
const Analyze = () => {
  const [graph, setGraph] = useState(false);
  function toggle() {
    if (graph) {
      return <AnalyzeGraph />;
    } else {
      return <AnalyzeTable />;
    }
  }
  return (
    <>
      <IonList>
        <IonListHeader style={{ padding: "0 10px" }}>
          <IonLabel
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            해시태그
            <IonNote
              slot="end"
              style={{ margin: "auto 0" }}
              onClick={(e) => {
                setGraph(!graph);
              }}
            >
              <IonIcon icon={addCircleOutline} />
            </IonNote>
          </IonLabel>
        </IonListHeader>
        {toggle()}
      </IonList>
    </>
  );
};
