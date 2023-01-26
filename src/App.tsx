import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, triangle } from 'ionicons/icons';
import Profils from './pages/Profils';
import Competences from './pages/Competences';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ProfilPage from './pages/ProfilPage';
import CompetencePage from './pages/CompetencePage';



setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/profils">
            <Profils />
          </Route>
          <Route exact path="/competences">
            <Competences />
          </Route>
          <Route path="/profil/:id" component={ProfilPage}>
          </Route>
          <Route path="/competence/:id" component={CompetencePage}>
          </Route>
          <Route exact path="/">
            <Redirect to="/profils" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Profils" href="/profils">
            <IonIcon icon={triangle} />
            <IonLabel>Profils</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Competences" href="/competences">
            <IonIcon icon={ellipse} />
            <IonLabel>Compétences</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
