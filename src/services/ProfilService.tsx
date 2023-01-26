
const URL : string = "http://localhost:3001/profils";

class ProfilService {

    /**
     * Fonction pour récupérer tous les profils
     * @returns la liste de tous les profils
     */
    findAllProfils = () => {
        return fetch(URL)
        .then(response => response.json())
    }

    /**
     * fonction pour récupérer un profil par son id
     * @param id :number l'id du profil à chercher
     * @returns le profil avec l'id donné en paramètre
     */
    findProfilById = (id : number) => {
        return fetch(`${URL}/${id}`, {
            method: "GET",
        }).then(response => response.json())
    }

}

/**
 * Singleton du profilService
 */
export const profilService = Object.freeze(new ProfilService());