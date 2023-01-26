import { useState } from "react";
import { Profil } from "../types/Profil.type";
import { profilService } from "./ProfilService";

const URL : string = "http://localhost:3001/skills";
const ProfilURL : string = "http://localhost:3001/profils";

class SkillService {

    /**
     * Fonction pour récupérer toutes les compétences
     * @returns la liste de toutes les compétences
     */
    findAllSkills = () => {
        return fetch(URL)
        .then(response => response.json())
    }

    /**
     * fonction pour récupérer une competence par son id
     * @param id :number l'id de la competence à chercher
     * @returns la competence avec l'id donné en paramètre
     */
    findSkillById = (id : number) => {
        return fetch(`${URL}/${id}`, {
            method: "GET",
        }).then(response => response.json())
    }

    /**
     * fonction pour récupèrer tous les profils ayant la compétence recherchée
     * !!! n'est pas utilisée
     * @param id : number l'id de la compétence recherchée
     * @returns la liste des profils ayant cette compétence.
     */
    findProfilBySkillId = (id : number) => {
        let [profils, setProfils] = useState<Profil[]>([]);	
        profilService.findAllProfils().then(response => setProfils = response);
        return profils.filter(profil => profil.skills.some((skill) => skill.id === id));
    }

}

/**
 * Singleton du skillService
 */
export const skillService = Object.freeze(new SkillService());