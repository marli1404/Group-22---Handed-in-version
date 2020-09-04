import { Justification } from './justification';
import { Job } from './job';

export class jobRequest{

    id : number;
    justification : Justification;
    job : Job;
    brief : string;
    fulfilmentDate : Date;

}