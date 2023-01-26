import { Skill } from "./Skill.type"

export type Profil = {
    id: number,
    first_name: string,
    last_name: string,
    pic: string,
    skills: Skill[]
}