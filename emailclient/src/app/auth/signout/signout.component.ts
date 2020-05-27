import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(private authService: AuthService) {  }

  ngOnInit(): void {
    this.authService.signout().subscribe(() => {
      // TODO: add navigation
    });
  }

}
