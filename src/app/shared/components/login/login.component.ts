import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isHavingAccount : boolean = true;
  isPasswordVisible : boolean = false;
  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  logIn(){
    this.authService.logInToApplication();
    // userdetails + JWT token (berear token)
    this.router.navigate(['/dashboard'])
  }
}
