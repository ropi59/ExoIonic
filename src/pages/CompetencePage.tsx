import { IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { profilService } from "../services/ProfilService";
import { skillService } from "../services/SkillService";
import { Profil } from "../types/Profil.type";
import { Skill } from "../types/Skill.type";
import "./CompetencePage.css"

const CompetencePage = () => {

    const {id} = useParams() as {id: string};
    const [skill, setSkill] = useState<Skill>();
    let [profils, setProfils] = useState<Profil[]>([]);	

    useEffect(() => {
        skillService.findSkillById(parseInt(id)).then(data => setSkill(data))
        profilService.findAllProfils().then(data => setProfils(data))
    }, [id]);

    /**useEffect(() => {
      setProfils(skillService.findProfilBySkillId(parseInt(id)))
    }, [id]);*/

    /**
     * Trie les profils par l'id de la compétence
     * @returns une liste de profils ayant la compétence
     */
    const sortProfils = () => {
      return profils.filter(profil => profil.skills.some((skill) => skill.id === parseInt(id)));
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
          <IonTitle className="title">{skill?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="card">
        <img src={skill?.pic} alt={skill?.name}></img>
        <p>{skill?.description}</p>
        </IonCard>
        <h5>Personnes :</h5>
        <IonList>
          {sortProfils().map((profil: Profil, index: number) => (
            <IonItem key={index} routerLink={`/profil/${profil.id}`}>
              <IonLabel>{profil.first_name + " " + profil.last_name}</IonLabel>
              <IonButton id="open-modal" expand="block">
                Edit
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CompetencePage
