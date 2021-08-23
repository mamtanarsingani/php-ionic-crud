import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    //this.headers.append('Content-type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  addstudent(data) {
    return this.http.post('http://localhost/php-ionic-crud/backend/create.php',data);
  }

  getStudents() {
    return this.http.get('http://localhost/php-ionic-crud/backend/getStudents.php');
  }

  deleteStudent(id) {
    return this.http.delete('http://localhost/php-ionic-crud/backend/deletestudente.php?id='+id);
  }

  getStudent(id) {
    return this.http.get('http://localhost/php-ionic-crud/backend/getsinglestudent.php?id='+id);

  }

  updateStudent(id,data) {
    return this.http.put('http://localhost/php-ionic-crud/backend/updatestudents.php?id='+id,data);

  }
}
