import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import {
  trophy,
  chatboxEllipses,
  addCircle,
  search,
  person,
} from "ionicons/icons";

import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import Add from "./pages/Add";
import Test from "./pages/test";
import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTab,
  IonNav,
  IonPage,
} from "@ionic/react";
import "./pages/tab.css";
import { Route, Redirect } from "react-router-dom";
import MenuDetail from "./pages/MenuDetail";
import Timesale from "./pages/timesale";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage id="main">
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true} />
            <Route path="/:tab(home)/detail" component={MenuDetail} exact={true} />
            <Route path="/:tab(home)/timesale" component={Timesale} exact={true} />
            <Route
              path="/:tab(newsfeed)"
              component={NewsFeed}
              exact={true}
            ></Route>
            <Route path="/:tab(newsfeed)/detail" component={MenuDetail} />
            <Route path="/:tab(add)" component={Add} exact={true} />
            <Route path="/:tab(test)" component={Test} exact={true} />
            {/* <Route path="/tab" component={Home} exact={true}/> */}
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton className="nav-btn" tab="home" href="/home">
              <IonIcon icon={trophy} />
            </IonTabButton>
            <IonTabButton className="nav-btn" tab="newsfeed" href="/newsfeed">
              <IonIcon icon={chatboxEllipses} />
            </IonTabButton>
            <IonTabButton className="nav-btn" tab="add" href="/add">
              <IonIcon icon={addCircle} />
            </IonTabButton>
            <IonTabButton className="nav-btn" tab="test" href="/test">
              <IonIcon icon={search} />
            </IonTabButton>
             {/* <IonTabButton tab="home" href="/">
          <IonIcon icon={person} />
        </IonTabButton> */}
          </IonTabBar>
        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
