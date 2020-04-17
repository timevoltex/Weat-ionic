import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { camera, bookmark, basket, globe, call, star, pin, heart, home } from 'ionicons/icons';

const SearchBarExamples: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Default Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

        <p>Searchbar with cancel button always shown</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="always"></IonSearchbar>

        <p>Searchbar with cancel button never shown</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>

        <p>Searchbar with cancel button shown on focus</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>

        <p>Searchbar with danger color</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} color="danger"></IonSearchbar>

        <p>Searchbar with telephone type</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} type="tel"></IonSearchbar>

        <p>Searchbar with numeric inputmode</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} inputmode="numeric"></IonSearchbar>

        <p>Searchbar disabled </p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} disabled={true}></IonSearchbar>

        <p>Searchbar with a cancel button and custom cancel button text</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" cancelButtonText="Custom Cancel"></IonSearchbar>

        <p>Searchbar with a custom debounce - Note: debounce only works on onIonChange event</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} debounce={1000}></IonSearchbar>

        <p>Animated Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>

        <p>Searchbar with a placeholder</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Filter Schedules"></IonSearchbar>

        <p>Searchbar in a Toolbar</p>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>


        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Enemies</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Disabled Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} disabled value="sunny">
          <IonSegmentButton value="sunny">
            <IonLabel>Sunny</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="rainy">
            <IonLabel>Rainy</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with anchors --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="dogs">
            <IonLabel>Dogs</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="cats">
            <IonLabel>Cats</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Scrollable Segment --*/}
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="home">
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="globe">
            <IonIcon icon={globe} />
          </IonSegmentButton>
          <IonSegmentButton value="basket">
            <IonIcon icon={basket} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with secondary color --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} color="secondary">
          <IonSegmentButton value="standard">
            <IonLabel>Standard</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hybrid">
            <IonLabel>Hybrid</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sat">
            <IonLabel>Satellite</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment in a toolbar --*/}
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="camera">
              <IonIcon icon={camera} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">
              <IonIcon icon={bookmark} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {/*-- Segment with default selection --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="javascript">
          <IonSegmentButton value="python">
            <IonLabel>Python</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="javascript">
            <IonLabel>Javascript</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default SearchBarExamples;