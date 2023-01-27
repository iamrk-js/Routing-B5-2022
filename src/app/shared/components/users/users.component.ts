import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../modal/product';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData: Iuser[] = [];
  activeUserId: number = 1;
  constructor(private router: Router, private usersService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userData = this.usersService.getAllUsers();
  }
  onGotoProducts() {
    this.router.navigate(['products'])
    // this.router.navigate(['products'], {relativeTo : this.route})  // by default >> Absolute path
  }
}

// locahost:4200/users/prodcuts 