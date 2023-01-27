import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userId: number = 1
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  onUserLogin() {
    this.authService.logInToApplication()
  }
  onUserLogOut(){
    this.authService.logOutFromApplication();
    this.router.navigate(['/'])
  }
}
