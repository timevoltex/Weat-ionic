import React, {useState} from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonText,
  IonIcon,
  IonContent,
  IonCard,
  IonSearchbar,
  IonList,
  IonTitle,
} from "@ionic/react";
import { location, pencil, time } from "ionicons/icons";
import "./Home.css";
import styled from "styled-components";
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

const Page = styled(IonPage)`
  padding: 10px;
`;

const Toolbar = styled.div`

margin-top:-5%; display:flex; justify-content:space-between
`
const Home: React.FC<RouteComponentProps> = ({history}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <>
    <Page>
      <IonHeader>
        <IonToolbar style={{height:"50px"}}>
          <IonTitle>현재 주소</IonTitle>
          <IonText slot="start">
            <img src="assets/icon/locationg-01.png" alt="loc" style={{width:"50px"}}/>
          </IonText>
          <IonText slot="end">
            <img src="assets/icon/crown-01-01.png" alt="crown" style={{width:"50px"}}/>
          </IonText>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonSearchbar value={searchText} placeholder="오늘은 뭐먹지?" onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <img src="assets/img/banner.png" alt="banner" style={{width:"100%"}}/>
        <IonToolbar>
          <Toolbar>
          <IonText style={{ fontWeight: "bold", margin:"auto 0" }}>이벤트</IonText>
          <img src="assets/icon/lists-01.png" alt="list" style={{width:"50px"}}/>
          </Toolbar> 
        </IonToolbar>
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
        <IonToolbar>
          <Toolbar>
          <IonText style={{ fontWeight: "bold", margin:"auto 0" }}>타임세일</IonText>
          <img src="assets/icon/lists-01.png" alt="list" style={{width:"50px"}}
          onClick={(e) => {
            e.preventDefault();
            history.push('/home/timesale');
          }}/>
          </Toolbar>
        </IonToolbar>
        <IonList>
        {items.map((image, i) => (
          <div
          key={i + image.date.getMonth()}
          style={{width:"48%", border:"0.5px solid #c8c8c8", display:"inline-block", margin:"2px",
          boxShadow:"rgba(0, 0, 0, 0.6) 0px 0px 5px 1px"}}
          onClick={(e) => {
            e.preventDefault();
            history.push('/home/detail');
          }}>
            <img src={image.src} alt="src"/>
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between", flex:1
                }}
                >
                <p style={{ margin: 0, color:"#8217FF", fontSize:"14px", fontWeight:"bold"}}>{image.name}</p>
              <p style={{ margin: 0, color:"gray", fontSize:"10px" }}>{image.date.getFullYear()}-0{image.date.getMonth()+1}-{image.date.getDate()}</p>
              </div>
              <p>{image.mainmenu}</p>
              <div>
                <p>{image.sale}</p>
                <p><span>가격: \</span>{image.price}</p>
              </div>
          </div>
        ))}
        </IonList>
      </IonContent>
    </Page>
    </>
  );
}
export default Home;
