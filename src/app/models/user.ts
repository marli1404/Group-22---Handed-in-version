import { Role } from './role';
import { View } from './view';
import { Nationality } from './Nationality';
import { Country } from './country';

export class User{

    id: number;
    name: string;
    surname: string;
    email : string;
    contact: number;
    pictureURL : string;
    roles : Role[];
    views : View[];
    nationality : Nationality;
    country : Country;

}