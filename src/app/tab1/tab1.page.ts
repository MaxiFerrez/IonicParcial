import { Component, OnInit } from '@angular/core';
import { LocacionService } from '../services/locacion.service';
import { Locacion,  LocacionInd  } from '../interfaces/interface_locacion';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  arrayLocacion: Locacion[] = [];
  arrayLocacion2: Locacion[] = [];
  filtro = 0;
  
   constructor(private localService:LocacionService,private router: Router) {}

  ngOnInit(){
     this.localService.getLocacion().subscribe(respuesta =>{
      this.arrayLocacion = respuesta.results
        }) 
  } 

  irazona(id: number) {
    //this.router.navigate(['/gente-de-zona']);
    this.router.navigate(['/gente-de-zona'],{ queryParams: { dato: id } });
  }

   filtrar() {
    this.arrayLocacion.forEach(elemento => {
      if(elemento.type=== "Planet"){
        this.arrayLocacion2.push(elemento)
      }
      this.filtro = 1;
    });
    
  
    } 

}
