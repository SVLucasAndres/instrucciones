import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'; 
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; 

@Component({
  selector: 'app-prin',
  templateUrl: './prin.page.html',
  styleUrls: ['./prin.page.scss'],
})
export class PrinPage implements OnInit {
  usuarioID:string="";

  constructor(private http: HttpClient, private toastController: ToastController,private router: Router, private storage:Storage) {
    this.userID();
  }

  async userID(){
    await this.simularPeticionHttp();
    this.usuarioID = await this.storage.get("User");
  }

  async simularPeticionHttp() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Petición HTTP simulada completada");
  }
  
  ngOnInit() {
  }  
}
