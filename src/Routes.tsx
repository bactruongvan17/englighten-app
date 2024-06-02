import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Home from "./pages/home";
import CollectionPage from "./pages/collection";
import LessonPage from "./pages/lesson";

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/:type/:id" component={CollectionPage} />
        <Route exact path="/lesson/:id" component={LessonPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
