import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { profilService } from "../services/ProfilService";
import { Profil } from "../types/Profil.type";
import "./ProfilPage.css"

const Profils: React.FC = () => {

    const [profils, setProfils] = useState([]);

    useEffect(() => {
      profilService.findAllProfils().then(data => setProfils(data))
    }, []);


    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="title">Profils</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonList>
            {profils.map((profil: Profil, index: number) => (
              <IonItem key={index} routerLink={`/profil/${profil.id}`}>
                <IonLabel>{profil.first_name + " " + profil.last_name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profils;