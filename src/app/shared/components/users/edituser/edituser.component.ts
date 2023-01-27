import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/modal/product';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  userId: number | undefined;
  userInfo: Iuser | undefined
  constructor(
      private route: ActivatedRoute,
       private usersService: UsersService,
       private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      console.log(param);
      this.userId = +param['userid'];
      this.getUserDetails()
    })
  }
  getUserDetails() {
    this.userInfo = this.usersService.getSingleUser(this.userId!)
  }
  onUserUpdate(){
    /// update 
    this.router.navigate(['/users'])
  }
}
