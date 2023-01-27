import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/modal/product';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: number = 3;
  userDetails: Iuser | undefined;
  constructor(private userService: UsersService, private route: ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot);
    // this.userId = +this.route.snapshot.params['userid'];
    this.route.params.subscribe((myparams: Params) => {
      console.log(myparams);
      this.userId = +myparams['userid'];
      this.getUserDetails()
    })

  }

  getUserDetails() {
    this.userDetails = this.userService.getSingleUser(this.userId)!;
    // console.log(this.userDetails);
  }
  onEditUser() {
    this.router.navigate(['/users', this.userId, 'edit'])
  }
}
