import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() { 
    this.title ="Juan Carlos Castillo";
    this.subtitle = "Proyectos de Programacion";
    this. email = "castillo10961@gmail.com";
  }

  ngOnInit(): void {
  }

}
