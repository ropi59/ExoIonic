import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { skillService } from "../services/SkillService";
import { Skill } from "../types/Skill.type";

const Competences: React.FC = () => {

    const [skill, setSkill] = useState();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
      skillService.findAllSkills().then(data => setSkills(data))
    }, []);

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="title">Compétences</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonList>
            {skills.map((skill: Skill, index: number) => (
              <IonItem key={index} routerLink={`/competence/${skill.id}`}>
                <IonLabel>{skill.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Competences;