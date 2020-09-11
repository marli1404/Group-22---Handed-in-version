import { Component, OnInit, Input } from '@angular/core';
import Stepper from 'bs-stepper';
import { JobRequestInfo } from 'src/app/models/jobReqDetails';
import { JobCardHelperService } from 'src/app/services/job-card-helper.service';
import { Observer, Observable, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Schedule } from 'src/app/models/schedule';
import { RequisitionApproval } from 'src/app/models/requisitionApproval';
import { ApiService } from 'src/app/services/api.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { Location } from 'src/app/models/location';
import { Test } from 'src/app/models/test';
import { Language } from 'src/app/models/language';
import { Skill } from 'src/app/models/skill';
import { LongQuestion } from 'src/app/models/longQuestion';
import { Requirement } from 'src/app/models/requirement';
import { userLite } from 'src/app/models/userLite';
import { userCard } from 'src/app/models/userCard';
import { UserProfile } from 'src/app/models/userProfile';


@Component({
  selector: 'app-job-card-create',
  templateUrl: './job-card-create.component.html',
  styleUrls: ['./job-card-create.component.css']
})
export class JobCardCreateComponent implements OnInit {

  


  basicDetails : FormGroup;
  testForm : FormGroup;
  language : FormGroup;
  skill : FormGroup;
  longQuestion : FormGroup;
  requirement : FormGroup;




  requestDetails : JobRequestInfo;
  pageSize : number = 10;
  testCollectionSize : number;
  languageCollectionSize : number;
  skillCollectionSize : number;
  longQuestionCollectionSize : number;
  requirementCollectionSize : number;
  
  page : number = 1;
  langPage : number = 1;
  skillpage : number = 1;
  questionPage : number = 1
  requirementPage : number = 1;

  employees : userCard [] =[];
  approvers : userCard [] = [];

  locations : Location [] = [];
  addedLocations : Location [] = [];

  schedules : Schedule [] = [];
  addedSchedules : Schedule [] = [];

  rApprovals : RequisitionApproval [] = [];
  addedRApprovals : RequisitionApproval [] = [];

  languages : Language [] = [];
  addedLanguages : Language [] = [];

  skills : Skill [] = [];
  addedSkills : Skill [] = [];

  longQuestions : LongQuestion [] = [];
  addedLongQuestions : LongQuestion [] = [];


  requirements : Requirement [] = [];
  addedRequirements : Requirement [] = [];

  tests : Test [] = [];
  addedTests : Test [] = [];

  constructor(private cardHelper : JobCardHelperService , private formBuilder : FormBuilder, private api : ApiService, private toast : ToastsService) { }

  private stepper: Stepper;

  buildForm(){
    this.basicDetails = this.formBuilder.group({
      jobCardName : ['',[Validators.required]],
      startDate : [null,[Validators.required]],
      endDate : [ null, [Validators.required]],
      introduction : ['',[Validators.required]],
      description : ['', [Validators.required]],
      travel : [false,],
      publishDate : ['',[Validators.required]],
      closingDate : ['',[Validators.required]],
      scheduleId : [null, [Validators.required]],
      locationId : [null, [Validators.required]],
      raApprovalId : [null, [Validators.required]]
    });

    this.testForm = this.formBuilder.group({questions : FormArray});
  }

  getBasicFrom(){
    return {
      jobCardName : this.basicDetails.get('jobCardName').value,
      startDate : this.basicDetails.get('startDate').value,
      endDate : this.basicDetails.get('endDate').value,
      introduction : this.basicDetails.get('introduction').value,
      description : this.basicDetails.get('description').value,
      travel : this.basicDetails.get('travel').value,
      publishDate : this.basicDetails.get('publishDate').value,
      closingDate : this.basicDetails.get('closingDate').value,
      scheduleId : this.basicDetails.get('scheduleId').value,
      locationId : this.basicDetails.get('locationId').value,
      raApprovalId : this.basicDetails.get('raApprovalId').value,

    }

  }
  ngOnInit() {
    this.buildForm();
    this.getData();
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });

    this.cardHelper.jobDescriptionInfo.subscribe( val => this.setJobRequest(val));
  }
  getData(){
    this.getLocations();
    this.getSchedule();
    this.getRapprovals();
    this.getTests();
    this.getLanguages();
    this.getSkills();
    this.getLongQuestions();
    this.getRequirements();
    this.getEmployees();
  }
  next() {
    this.stepper.next();
  }
  previous() {
    this.stepper.previous();
  }

  onSubmit() {
    return false;
  }

  
  ngOnDestroy(){
  }

  setJobRequest(val){
    this.requestDetails = val;
  }

  getRapprovals(){
    return this.api.getRequisitionApprovals().subscribe(success => this.getApprovalsSuccess(success), err => this.fetchFailed(err));
  }
  getApprovalsSuccess(success){
    this.rApprovals = success;
  }

  getLocations(){
    return this.api.getLocations().subscribe( r => this.getLocationSuccess(r), error => this.fetchFailed(error));
  }

  getLocationSuccess( success ){
    this.locations = success;
  }

  getSchedule(){
    return this.api.getSchedule().subscribe( success => this.getScheduleSuccess(success), err => this.fetchFailed(err));
  }

  getScheduleSuccess(success){
    this.schedules = success;
  }

  getTests(){
    this.api.getTests().subscribe( success => this.getTestsSuccess(success), err => this.fetchFailed(err))
  }

  getTestsSuccess(success){
    this.tests = success;
    this.testCollectionSize = this.tests.length;
  }

  getLanguages(){
    this.api.getLanguages().subscribe( succ => this.getLanguagesSuccess(succ), err => this.fetchFailed(err));
  }

  getLanguagesSuccess(success){
    this.languages = success;
    this.languageCollectionSize = this.languages.length;
  }

  getSkills(){
    return this.api.getSkills().subscribe( succ => this.getSkillSuccess(succ), err => this.fetchFailed(err))
  }

  getSkillSuccess(succ){
    this.skills = succ;
    this.skillCollectionSize = this.skills.length;
    console.log(this.skills);
    
  }

  getLongQuestions(){
      return this.api.getLongQuestions().subscribe( succ => this.getLongQuestionSuccess(succ), err => this.fetchFailed(err))
  }
  getLongQuestionSuccess(success){
    this.longQuestions = success;
    this.longQuestionCollectionSize = this.longQuestions.length;
  }

  getRequirements(){
    this.api.getRequirements().subscribe( succ => this.getRequirementSuccess(succ), err => this.fetchFailed(err));
  }

  getRequirementSuccess(requirements){
    this.requirements = requirements;
    this.requirementCollectionSize = this.requirements.length;
  }

  getEmployees(){
    this.api.getEmployees().subscribe( success => this.gotEmployees(success), err => this.fetchFailed)
  }

  gotEmployees(success){
    this.employees = success;
  }
  fetchFailed(error){
    this.toast.display({type:"Error",heading: error.error.Title, message : error.error.message});
  }
  //////////////////////////////////
   
  testsFArray = new FormArray([]);
  addTest(id : number){
    let obj = this.tests.find(x => x.testId == id);
    this.addedTests.push(obj);
    this.tests = this.tests.filter( x => x.testId != id);
    this.testsFArray.push(new FormControl(false));
    //this.tControl.push( new FormControl(false));
  }

  removeTest(id : number){
    let index = this.addedTests.map( x => {return x.testId;}).indexOf(id);
    let obj = this.addedTests.find(x => x.testId == id);
    this.testsFArray.removeAt(index);
    this.tests.push(obj);
    this.addedTests = this.addedTests.filter( x => x.testId != id);
    
  }
  testing(){
    console.log(this.testsFArray.value);
  }
  addLanguage(id : number){
    let obj = this.languages.find(x => x.id == id);
    this.addedLanguages.push(obj);
    this.languages = this.languages.filter( x => x.id != id);
  }

  removeLanguage(id : number){
    let obj = this.addedLanguages.find(x => x.id == id);
    this.languages.push(obj);
    this.addedLanguages = this.addedLanguages.filter( x => x.id != id);
  }

  addSkill(id : number){
    let obj = this.skills.find(x => x.id == id);
    this.addedSkills.push(obj);
    this.skills = this.skills.filter( x => x.id != id);
  }

  removeSkill(id : number){
    let obj = this.addedSkills.find(x => x.id == id);
    this.skills.push(obj);
    this.addedSkills = this.addedSkills.filter( x => x.id != id);
  }
  addRequirement(id : number){
    let obj = this.requirements.find(x => x.id == id);
    this.addedRequirements.push(obj);
    this.requirements = this.requirements.filter( x => x.id != id);
  }

  removeRequirement(id : number){
    let obj = this.addedRequirements.find(x => x.id == id);
    this.requirements.push(obj);
    this.addedRequirements.filter( x => x.id != id);
  }

  addLQuestion(id : number){
    let obj = this.longQuestions.find(x => x.id == id);
    this.addedLongQuestions.push(obj);
    this.longQuestions = this.longQuestions.filter( x => x.id != id);
  }

  removeQuestion(id : number){
    let obj = this.addedLongQuestions.find(x => x.id == id);
    this.longQuestions.push(obj);
    this.addedLongQuestions.filter( x => x.id != id);
  }


}
