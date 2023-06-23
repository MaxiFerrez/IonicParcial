import { Component, OnInit } from '@angular/core';
import { LocacionService } from '../services/locacion.service';
import { Locacion,  LocacionInd, personaje  } from '../interfaces/interface_locacion';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gente-de-zona',
  templateUrl: './gente-de-zona.page.html',
  styleUrls: ['./gente-de-zona.page.scss'],
})
export class GenteDeZonaPage implements OnInit {
  arrayResidents: string[] =[];
  //Residentes: residentes[] = [];
  id =0;
  id1=0;
  arrayId: personaje [] =[];
  constructor(private localService:LocacionService,private route: ActivatedRoute,private navCtrl: NavController) { }
  //constructor(private localService:LocacionService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.id = params['dato'];
    });

    this.localService.getLocacionInd(this.id).subscribe(respuesta =>{
      this.arrayResidents = respuesta.residents
      //console.log(this.arrayResidents)

        
          this.arrayResidents.forEach(personaje => {
            //console.log(personaje)
            let string1 = 'https://rickandmortyapi.com/api/character/';
            let string2 = personaje;
            let result = Number (string2.replace(string1, ''));
            
             this.localService.getpersonaje(result).subscribe(respuesta1 =>{
              this.arrayId.push(respuesta1)
              
                })  
            
           
        }) 
        //console.log(this.arrayId)
    });
    
  }

  goToHome() {
    {
     this.navCtrl.back();
    }

  }


}
