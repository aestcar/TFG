import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit(): void {
  }

  clickHome(){
    this.zone.run(() => {
      this.router.navigate(['/home']);
    });
  }

}
