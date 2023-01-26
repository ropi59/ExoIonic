import { IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { profilService } from "../services/ProfilService";
import { Profil } from "../types/Profil.type";
import { Skill } from "../types/Skill.type";


const ProfilPage: React.FC = () => {

  const {id} = useParams() as { id: string };
  const [profil, setProfil] = useState<Profil>();
  

  useEffect(() => {
    profilService.findProfilById(parseInt(id)).then(data => setProfil(data))
  }, [id]);

  const editProfil = (skill: Skill) => {
    alert(skill.name)
    return skill;
  }

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle className="title">{profil?.first_name + " " + profil?.last_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="card">
        <img src={profil?.pic}></img>
        <p>{profil?.first_name + " " + profil?.last_name}</p>
        </IonCard>
        <h5>Compétences :</h5>
        <IonList>
          {profil?.skills.map((skill: Skill, index: number) => (
            <IonItem key={index} routerLink={`/competence/${skill.id}`}>
              <IonLabel>{skill.name + " " + skill.level}</IonLabel>
              <button onClick={() => editProfil(skill)}>Edit</button>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
  
  export default ProfilPage;