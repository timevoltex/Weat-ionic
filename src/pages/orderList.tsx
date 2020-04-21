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
import {useHistory} from 'react-router-dom'
const Item = styled(IonItem)`
  --padding-start: 0;
`
const Label = styled(IonLabel)`
  padding-left:10px;
`

const OrderList = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>주문내역</IonTitle>
          <div style={{textAlign:"end"}}>
            <img src="assets/icon/settings-01-01.png" alt="setting" style={{width:'50px'}}/>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar placeholder="어디서 먹었더라..?" />
        <div style={{width:'90vw', margin:'auto', border:'1px solid gray'}}>
        <Item>
          <Label>
            <p>시간</p>
            <p onClick={(e) => {
              e.preventDefault();
              history.push('/orderlist/store');
            }}>가게명</p>
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
