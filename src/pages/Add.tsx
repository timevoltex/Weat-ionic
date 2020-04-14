import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButton,
  IonPopover,
  IonTitle,
  IonBackButton
} from "@ionic/react";

export default function Add() {
  const [showPopover, SetShowPopover] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>    
          <IonButton slot="start">
            <IonBackButton defaultHref = "/"/>
          </IonButton>
          <IonTitle>
            <IonButton onClick={() => SetShowPopover(true)}>갤러리</IonButton>
          </IonTitle>
          <IonPopover
            isOpen={showPopover}
            onDidDismiss={e => SetShowPopover(false)}
            translucent={true}
            mode="ios"
          >
            <p>KaKaoTalk</p>
            <p>Camera</p>
            <p>Galary</p>
            <p>Foodie</p>
          </IonPopover>
          <IonButton slot="end" href="#">
            다음
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}
