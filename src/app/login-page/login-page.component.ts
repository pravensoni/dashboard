import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from "@angular/router";


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [CommonService]
})
export class LoginPageComponent{
  userName : string;
  password : string;
  response : string ;

      constructor(
        private commonService: CommonService,
        private route: ActivatedRoute,
        private router : Router
    ) { }

  login(){
    this.commonService.login(this.userName,this.password).then(response =>{
      this.response = response.toString();
      if(response.toString()=="Login Successful."){
        this.router.navigate(["/orders"]);
      }
    });
  }



}
