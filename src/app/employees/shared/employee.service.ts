import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Employee } from './employee.model';
@Injectable()

export class EmployeeService 
{

  selectedEmployee : Employee;
  employeeList  : Employee[];  
  constructor( private http: Http) { }

  postEmployee(emp : Employee )
  {

    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'content-type':'application/json'});
    var requestOptions = new RequestOptions({ method : RequestMethod.Post,headers :headerOptions});
    return this.http.post('http://localhost:53985/api/Empployee ',body,requestOptions).map(x =>x.json());
  }

  putEmployee(id , emp )
  {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'content-type':'application/json'});
    var requestOptions = new RequestOptions({ method : RequestMethod.Put,headers :headerOptions});
    return this.http.post('http://localhost:53985/api/Empployee' + id,body,requestOptions).map(x =>x.json());
  }

  getEmployeeList()
  {
    this.http.get("http://localhost:53985/api/Empployee")
    .map((data: Response) =>{
      return data.json() as Employee[]
    }).toPromise().then(x => {
      this.employeeList = x;
    })
  }
  deleteEmployee(id: number)
  {
    return this.http.delete('http://localhost:53985/api/Empployee/' + id).map(res => res.json());
  }

}