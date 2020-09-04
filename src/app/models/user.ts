import { Role } from './role';
import { View } from './view';
import { Nationality } from './Nationality';
import { Country } from './country';
import { Language } from './language';
import { Skill } from './skill';

export class User{

    id: number;
    name: string;
    surname: string;
    email : string;
    contact: number;
    pictureURL : string;
    roles : Role[];
    views : View[];
    skills : Skill[];
    languages : Language[];
    nationality : Nationality;
    country : Country;

}