import { Language } from './language';
import { Skill } from './skill';
import { Country } from './country';
import { Nationality } from './Nationality';

export class UserProfile{

    id : number;
    name: string;
    surname : string;
    contact : string;
    imgUrl : string;
    email: string;
    languages : Language [];
    skills : Skill [];
    country : Country;
    nationality : Nationality;
}