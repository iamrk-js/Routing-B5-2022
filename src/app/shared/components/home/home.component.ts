import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onGotoProducts(){
    /// api call to get ids of products
    console.log(`Api Call Done`);
    this.router.navigate(['/products'])
  }
}


// navigating from ts file >> 