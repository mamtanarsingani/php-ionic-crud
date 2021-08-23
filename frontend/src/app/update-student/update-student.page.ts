import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id: any;
  StudentName: any;
MarksObtained: any;
Result: any;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {
    this.route.params.subscribe((param:any) => {
      this.id = param.id;
      console.log(this.id);
      this. getStudent(this.id);

    })
   }

  ngOnInit() {
  }

  getStudent(id) {
    this._apiService.getStudent(id).subscribe((res: any) => {
      console.log("success ===",res);
      let student = res[0];
      this.StudentName = student.StudentName;
      this.MarksObtained = student.MarksObtained;
      this.Result= student.Result;
    },(error: any) => {
      console.log("ERROR ===",error);
  
    })
  }
  
    updateStudent(){
      let data = {
        StudentName: this.StudentName,
      MarksObtained: this.MarksObtained,
      Result: this.Result,
    }
    
    this._apiService.updateStudent(this.id,data).subscribe((res: any) => {
      console.log("success ===",res);
      this.router.navigateByUrl('/home');
      
    },(error: any) => {
      console.log("ERROR ===",error);
  
    })

  }
 }
