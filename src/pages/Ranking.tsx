import React from "react";
import {
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonList,
  IonListHeader,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

type List = {
  count: number;
};

const test: List[] = [
  { count: 1 },
  { count: 2 },
  { count: 3 },
  { count: 4 },
  { count: 5 },
  { count: 6 },
  { count: 7 },
  { count: 8 },
];

const Ranking = () => {
  return (
    <>
      <IonList>
        <IonListHeader>
          <IonLabel>
            <p>이달의 단골손님</p>
          </IonLabel>
          <IonBadge>
            <IonIcon icon={addCircleOutline} />
          </IonBadge>
        </IonListHeader>
        {test.map((count, i) => (
          <IonItem>
            <IonLabel>
              <p>
                <span>순위 </span>유저명
              </p>
            </IonLabel>
            <IonBadge slot="end">방문횟수</IonBadge>
          </IonItem>
        ))}
      </IonList>
      <IonListHeader>
        <IonLabel>
          <p>동네 순위</p>
        </IonLabel>
        <IonBadge>
          <IonIcon icon={addCircleOutline} />
        </IonBadge>
      </IonListHeader>
      <IonList>
        {test.map((count, i) => (
          <IonItem>
            <IonLabel>
              <p>
                <span>순위 </span>유저명
              </p>
            </IonLabel>
            <IonBadge>방문횟수</IonBadge>
          </IonItem>
        ))}
      </IonList>
    </>
  );
};
export default Ranking;
