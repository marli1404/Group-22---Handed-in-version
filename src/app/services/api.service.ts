import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/country';
import { Nationality } from '../models/Nationality';
import { ToastsService } from './toasts.service';
import { userCard } from '../models/userCard';
import { User } from '../models/user';
import { UserProfile } from '../models/userProfile';
import { Job } from '../models/job';
import { Justification } from '../models/justification';
import { Role } from '../models/role';
import { ViewAuth } from '../models/viewAuth';
import { View } from '../models/view';
import { Division } from '../models/division';
import { Department } from '../models/department';
import { Team } from '../models/team';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*****************URLS********************/
  globalRoot :string = 'https://bmwbackend.edumarx.co.za/'
  user : string = `${this.globalRoot}API/User/`;
  country : string = `${this.globalRoot}API/Country/`;
  nationality : string = `${this.globalRoot}API/Nationality/`;
  jobRequest : string = `${this.globalRoot}API/JobRequest/`;
  justification : string = `${this.globalRoot}API/Justification/`;
  jobPositions : string = `${this.globalRoot}API/Job/`;
  booking : string = `${this.globalRoot}API/UserBooking/`;
  role : string = `${this.globalRoot}API/Role/`;
  job : string = `${this.globalRoot}API/Job/`;
  viewAuth : string = `${this.globalRoot}API/ViewAuthorisation/`;
  view : string = `${this.globalRoot}API/View/`;
  department : string = `${this.globalRoot}API/Department/`;
  division : string = `${this.globalRoot}API/Division/`;
  team : string = `${this.globalRoot}API/Team/`;
  constructor( private http: HttpClient){

  }
  makeRequest(){

    this.http.post<string>(this.country,{"request":"test","payload":0},{headers:{'Authorization':'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjIyNjUyLCJyb2xlcyI6W3siaWQiOjAsInJvbGUiOiJNYW5hZ2VyIn0seyJpZCI6MSwicm9sZSI6IkVtcGxveWVlIn1dLCJ2aWV3cyI6W3siaWQiOjAsInZpZXciOiJSZXBvcnQifSx7ImlkIjoxLCJyb2xlIjoiQm9va2luZyJ9XSwiZW5kU2Vzc2lvbiI6MTU5NjUzOTgzMX0.76phXVqFCK60VdOrtAEhGne-09MdRHie3kJnUbBgmbw'}})
    .subscribe( success => console.log(success),
    error => console.log("ERROR",error));
  }

  getCountries(){
    return this.http.post<Country[]>(this.country,{request:"getCountries"});
  }

  getNationalities(){
    return this.http.post<Nationality[]>(this.nationality,{request:"getNationalities"});
  }

  createAccount(userDetails:any){
    return this.http.post(this.user,{request:"createAccount",payload: userDetails});
  }

  getUserProfileLite(userId: number){
    return this.http.post<userCard>(this.user,{request:"getWidgetDetails",payload:{id:userId}});
  }

  getUsersOwnProfile(){
    return this.http.post<UserProfile>(this.user,{request:"getUserProfile"});
  }

  createJobRequest(request : any){
    console.log()
    return this.http.post(this.jobRequest,{request:"createJobRequest",payload:request});
  }

  editAccount(userInfo: any){
    return this.http.post<any>(this.user,{request : "updateAccount",payload: userInfo});
  }

  uploadProfile(file : File){

    let uploadData : FormData = new FormData();
    uploadData.append('request','changeProfileImage');
    uploadData.append('image',file);
    return this.http.post(this.user,uploadData);
  }
  changePassword(password : string){
    console.log({request : "changePassword", payload : {password : password}});
    return this.http.post(this.user,{request : "changePassword", payload : {password : password}})
  }

  getJustifications(){
    return this.http.post<Justification[]>(this.justification,{request: "getJustifications" });
  }

  addRole(role:any){
    return this.http.post(this.role,{request :"createRole",payload : role})
  }
  editRole( role : any){
    return this.http.post(this.role,{request :"updateRole",payload : role});
  }
  getRoles(){
    return this.http.post<Role[]>(this.role,{request : "getRoles"});
  }
  deleteRole(id : number){
    return this.http.post(this.role, {request : "deleteRole", payload : {id}});
  }

  getJobPositions(){
    return this.http.post<Job[]>(this.jobPositions,{request: "getJobs"})
  }
  editJob(jobName){
    return this.http.post(this.job, {request: "updateJob", payload: jobName});
  }
  deleteJob(id : number){
    return this.http.post(this.job, {request: "d", payload : {id} }); // NEEDS BACK END
  }

  createJob(job : any){
    return this.http.post(this.job, {request: "createJob", payload : job});
  }

  getViewAuths(){
    return this.http.post<ViewAuth>(this.viewAuth, {request : "getViewAuthorisations"});
  }

  editViewAuths(){

  }

  delteViewAuths(){

  }
  getViews(){
    return this.http.post<View[]>(this.view, {request: "getViews"});
  }


  addDepartment(department: any ){
    return this.http.post(this.department,{request :"createDepartment", payload : department});
  }
  addDivision(division: any ){
    return this.http.post(this.division,{request :"createDivision", payload : division});
  }

  editDepartment(department: Department){

    return this.http.post(this.department,{request :"updateDepartment", payload: department });
  }
  editDivision(division: any){

    return this.http.post(this.division,{request :"updateDivision", payload: division });
  }

  getDivisions(){
    return this.http.post<Division[]>(this.division, {request: "getDivisions"});
  }

  getDepartments(){
    return this.http.post<Department[]>(this.department, {request: "getDepartments"});
  }

  getTeamsByDepartment(departmentId: number){
    return this.http.post<Team[]>(this.team, {request: "getTeamsByDepartment", payload: {departmentId} });
  }



  deleteDepartment(departmentId: number){
    return this.http.post(this.department, {request : "deleteDepartment", payload : {departmentId}})
  }
  deleteDivision(id: number){
    return this.http.post(this.division, {request : "deleteDivision", payload : {id}})
  }

}

