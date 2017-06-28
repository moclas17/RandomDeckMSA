import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Personaje } from "../../interface.personaje";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personajes : Personaje [] = [];
  constructor(public navCtrl: NavController,  public http: Http) {

     this.http.get('http://www.metalslugattack.ml/servicio.php').
      map(res => res.json()).subscribe(data => {
       this.personajes = data ;
      });
  }
  obtener_personajes(){

         this.http.get('http://www.metalslugattack.ml/servicio.php').
          map(res => res.json()).subscribe(data => {
           this.personajes = data ;
          });
  }


  doRefresh(refresher) {
    setTimeout(() => {
      this.obtener_personajes();
      refresher.complete();
    }, 500);
  }

}
