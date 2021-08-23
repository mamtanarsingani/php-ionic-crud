import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
StudentName: any;
MarksObtained: any;
Result: any;
students: any = [];

  constructor(
   public _apiservice: ApiService
    ) {
      this.getStudents();
    }

    ngOnInit() {
    }
    
    ionViewWillEnter() {
      this.getStudents();
    }
    

  addStudent(){

    let data = {
      StudentName: this.StudentName,
      MarksObtained: this.MarksObtained,
      Result: this.Result,
    }

    this._apiservice.addstudent(data).subscribe((res: any) => {
      console.log("success ===",res);
      
      this.StudentName = '';
      this.MarksObtained = '',
      this.Result = '';
      this.getStudents();
    },(error: any) => {
      console.log("ERROR ===",error);
    })
  }

  getStudents()
{

  this._apiservice.getStudents().subscribe((res: any) => {
    console.log("success ===",res);
    this.students = res;
  },(error: any) => {
    console.log("ERROR ===",error);

  })

}

deleteStudent(id) {

  this._apiservice.deleteStudent(id).subscribe((res: any) => {
    console.log("success ===",res);
    this.getStudents();
  },(error: any) => {
     console.log("ERROR ===",error);
  })
    
}

}


