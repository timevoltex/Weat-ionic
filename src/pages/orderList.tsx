import React from "react";
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonIcon,
  IonContent,
  IonSearchbar,
  IonItem,
  IonLabel,
  IonBadge,
  IonFooter,
} from "@ionic/react";
import { options } from "ionicons/icons";
import styled from 'styled-components';

const Item = styled(IonItem)`
  --padding-start: 0;
`
const Label = styled(IonLabel)`
  padding-left:10px;
`

const OrderList = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>주문내역</IonTitle>
          <IonIcon icon={options} slot="end" />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder="어디서 먹었더라..?" />
        <div style={{width:'90vw', margin:'auto', border:'1px solid gray'}}>
        <Item>
          <Label>
            <p>시간</p>
            <p>가게명</p>
            <p>메뉴</p>
          </Label>
          <IonBadge>00,000원</IonBadge>
        </Item>
        <IonFooter style={{textAlign:'center'}}>리뷰쓰기</IonFooter>
        </div>
        <div style={{width:'90vw', margin:'auto', border:'1px solid gray'}}>
        <Item>
          <Label>
            <p>시간</p>
            <p>가게명</p>
            <p>메뉴</p>
          </Label>
          <IonBadge>00,000원</IonBadge>
        </Item>
        <IonFooter style={{textAlign:'center'}}>리뷰쓰기</IonFooter>
        </div>
        <div style={{width:'90vw', margin:'auto', border:'1px solid gray'}}>
        <Item>
          <Label>
            <p>시간</p>
            <p>가게명</p>
            <p>메뉴</p>
          </Label>
          <IonBadge>00,000원</IonBadge>
        </Item>
        <IonFooter style={{textAlign:'center'}}>리뷰쓰기</IonFooter>
        </div>
        <div style={{width:'90vw', margin:'auto', border:'1px solid gray'}}>
        <Item>
          <Label>
            <p>시간</p>
            <p>가게명</p>
            <p>메뉴</p>
          </Label>
          <IonBadge>00,000원</IonBadge>
        </Item>
        <IonFooter style={{textAlign:'center'}}>리뷰쓰기</IonFooter>
        </div>
        <div style={{width:'90vw', margin:'auto', border:'1px solid gray'}}>
        <Item>
          <Label>
            <p>시간</p>
            <p>가게명</p>
            <p>메뉴</p>
          </Label>
          <IonBadge>00,000원</IonBadge>
        </Item>
        <IonFooter style={{textAlign:'center'}}>리뷰쓰기</IonFooter>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default OrderList;
