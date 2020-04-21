import styled from "styled-components";
import {
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonPage,
} from "@ionic/react";

// Home
export const HomeSlide = styled(IonItem)`
  --padding-start: 10px;
  --min-height: fit-content;
  ion-label {
    font-size: 14px !important;
    margin: 5px auto;
  }
  ion-note {
    font-size: 12px !important;
  }
`;

export const Container = styled.div`
  margin: 0 20px;
`;
export const Content = styled(IonContent)`
  padding: 10px !important;
`;

// MenuDetail.tsx
export const DetailContainer = styled.div`
padding-bottom:50px;
ion-list-header, ion-label, ion-note{
  --color:#707070!important;
}
  }
  ion-list-header {
    font-size: 16px;
  }
  ion-list:nth-child(1) {
    ion-label,
    ion-note {
      font-size: 14px !important;
      margin: 5px 0;
    }
  }
  ion-list:nth-child(2) {
    ion-list-header{
      --background:#F2F2F2;
    }
    ion-item {
      --background: #F2F2F2;
      --min-height: fit-content;
      ion-label,
      ion-note {
        font-size: 14px !important;
        margin: 5px 0;
      }
    }
    ion-item ion-label {
      flex: 0 40%;
    }
  }
`;

// common
export const BackButton = styled(IonBackButton)`
  width: 50px;
  background: url("assets/icon/back-g.png") center/cover;
`;
