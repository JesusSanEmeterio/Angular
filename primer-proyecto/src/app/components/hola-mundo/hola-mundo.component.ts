import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})

export class HolaMundoComponent {
  public titulo: string = " - Hola Mundo desde el componente HolaMundoComponent -";
  public color : string = "blue";
  public alumnos : string[] = ["Jesus","Unai","Jeray","Mikel","Maore"];

  // El tipo any no hace comprobación de tipo
  //agregarAlumno(alumno : any){
  agregarAlumno(alumno : HTMLInputElement){
    this.alumnos.push(alumno.value);
    alumno.value = "";
  }

  public mostrarDiv : boolean = false;
  alternarDivs(){
    alert("Click de boton");
    this.mostrarDiv = !this.mostrarDiv;
  }
}
