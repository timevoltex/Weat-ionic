import React from 'react';
import { IonPage, IonHeader, IonBackButton, IonButtons, IonTitle } from '@ionic/react';
import {RouteComponentProps} from 'react-router';

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


const Hashtagpage = () => {
  return(
    <>
    {items.map((image, i) => (
      <img key={i} src={image.src} alt="img" style={{width:"33.33333%", height:"auto"}}/>
    ))}
    </>
  )
}
export default Hashtagpage;