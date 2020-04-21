import React from "react";
import {
  IonItem,
  IonLabel,
  IonBadge,
  IonIcon,
  IonList,
  IonChip,
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

const StoreInfo = () => {
  return (
    <>
      <IonItem>
        <IonLabel>
          <p>이벤트</p>
        </IonLabel>
          <IonBadge slot="end">
            <IonIcon icon={addCircleOutline} />
          </IonBadge>
      </IonItem>
        <div
          style={{ width: "100%", height: "125px", background: "#DCDCDC" }}
        />

        <IonList>
          <IonListHeader>
        <IonLabel>
          <p>메뉴</p>
        </IonLabel>
          </IonListHeader>
          {test.map((count, i) => (
            <IonItem >
              <IonLabel>메뉴명</IonLabel>
              <IonBadge slot="end">10000원</IonBadge>
              </IonItem>
          ))}
        </IonList>

      <IonItem>
        <div
          className="detailbox"
          style={{ backgroundColor: "#c2c2c2", padding: "16px" }}
        >
          <div className="info">
            <p>
              영업시간 <span>11:00~20:00</span>
            </p>
            <p>
              가게위치 <span>강원도 춘천시 후평동 198-345</span>
            </p>
            <p>
              전화번호 <span>033-652-6516</span>
            </p>
            <p>
              해시태그 <IonChip>양식</IonChip>
              <IonChip>매콤</IonChip>
              <IonChip>아늑</IonChip>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              officiis placeat aliquid blanditiis enim quod sunt explicabo ipsa
              esse earum repellendus natus molestias hic numquam, quia facere
              culpa. Veritatis, repudiandae? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At officiis placeat aliquid
              blanditiis enim quod sunt explicabo ipsa esse earum repellendus
              natus molestias hic numquam, quia facere culpa. Veritatis,
              repudiandae?
            </p>
          </div>
          <div className="map-container">
            <p>위치</p>
            <div
              className="map"
              style={{
                width: "100%",
                height: "60vw",
                backgroundColor: "cyan",
              }}
            ></div>
          </div>
        </div>
      </IonItem>
    </>
  );
};
export default StoreInfo;
