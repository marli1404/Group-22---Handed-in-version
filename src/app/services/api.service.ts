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
import { Stage } from '../models/stage';
import { ViewAuth } from '../models/viewAuth';
import { View } from '../models/view';
import { Test } from '../models/test';
import { Location } from '../models/location';
import { Building } from '../models/building';
import { Floor } from '../models/floor';



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
  stage : string = `${this.globalRoot}API/Stage/`;
  test : string = `${this.globalRoot}API/Test/`;
  location : string = `${this.globalRoot}API/Location/`;
  building : string = `${this.globalRoot}API/Building/`;
  floor : string = `${this.globalRoot}API/Floor/`;
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
  ///////////////////////////////////////role/////////////////////////////////////
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
  ///////////////////////////////////////stage///////////////////////////
  addStage(stage:any){
    return this.http.post(this.stage,{request :"createStage",payload : stage})
  }
  editStage( stage : any){
    return this.http.post(this.stage,{request :"updateStage",payload : stage});
  }
  getStages(){
    return this.http.post<Stage[]>(this.stage,{request : "getStages"});
  }

 deleteStage(id : number){
    return this.http.post(this.stage, {request : "deleteStage", payload : {id}});
  }
  /////////////////////////////////////test////////////////////
  addTest(test: any){

    return this.http.post(this.test,{request :"createTest",payload : test})
  }

  editTest( test : any){
    return this.http.post(this.test,{request :"updateTest",payload : test});
  }

  getTests(){
    return this.http.post<Test[]>(this.test,{request : "getTests"});
  }


  deleteTest(id : number){
    return this.http.post(this.test, {request : "deleteTest", payload : {id}});
  }
  //////////////////////////////////////Job//////////////////////////////////////
  getJobPositions(){
    return this.http.post<Job[]>(this.jobPositions,{request: "getJobs"})
  }
  editJob(jobName){
    return this.http.post(this.job, {request: "updateJob", payload: jobName});
  }
  deleteJob(id : number){
    return this.http.post(this.job, {request: "deleteJob", payload : {id} }); // NEEDS BACK END
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

  /////////////////////////Location//////////////////////////////////////
  getLocations(){
    return this.http.post<Location[]>(this.location, {request: "getLocations"});
  }

  addLocation(location : any){
    return this.http.post(this.location,{request :"createLocation",payload : location})
  }
  editLocation( location : Location){
    return this.http.post(this.location,{request :"updateLocation",payload :location});
  }
  getLocation(){
    return this.http.post<Role[]>(this.location,{request : "getLocations"});

  }
  deleteLocation(id : number){
    return this.http.post(this.location, {request : "deleteLocation", payload : {id}})
  }

  /////////Building/////////
  addBuilding(building : any){
    return this.http.post(this.building,{request :"createBuilding",payload : building})
  }
  editBuilding( building : Building){
    return this.http.post(this.building,{request :"updateBuilding",payload :building});
  }
  getBuildings(){
    return this.http.post<Building[]>(this.building, {request: "getBuildings"});
  }

  deleteBuilding(buildingId : number){
    return this.http.post(this.building, {request: "deleteBuilding", payload : {buildingId}});
  }


  getBuildingsByLocation(locationId: number){
    return this.http.post<Building[]>(this.building, {request: "getBuildingsByLocation", payload: {locationId} });
  }

  /////////Floor////////////////////////////
  addFloor(floor : any){
    return this.http.post(this.floor,{request :"createFloor",payload : floor})
  }
  editFloor( floor : Floor){
    return this.http.post(this.floor,{request :"updateFloor",payload :floor});
  }
  getFloors(){
    return this.http.post<Floor[]>(this.floor, {request: "getFloors"});
  }

  deleteFloor(floorId : number){
    return this.http.post(this.floor, {request: "deleteFloor", payload : {floorId}});
  }






}
