import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  
  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log("successfully Enter Baby");
        
      },
      error => {
        console.log("Use Some Lubricant");
      }
    );
  }

}
