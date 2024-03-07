import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent {

  constructor(private router: Router) {}

  afficherForm() {
    this.router.navigate(['/form']);
  }

}
