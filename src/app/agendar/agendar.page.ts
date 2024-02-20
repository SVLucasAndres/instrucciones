import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AnimationController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit{

  constructor(private db:Firestore, private storage:Storage) { }
  
  ngOnInit() { 
    this.obtenerTareas();
  }
  tareas:any[]=[];
  ruta:any;
  user:any;
  consulta:any;
  async obtenerTareas(){
    this.user = await this.storage.get('User');
    this.ruta = await collection(this.db,'Tareas');
    const ref = query(this.ruta, where("usuario","==",this.user));
    const consulta = await getDocs(ref);
    consulta.forEach(element => {
      const dato = element.data() as datauser;
      const color = dato.color;
      const comando = dato.comando;
      const fecha = dato.fecha;
      const figura = dato.figura;
      const id = dato.id;
      const usuario = dato.usuario;
      this.tareas.push({color,comando,fecha,figura,id,usuario});
    });
    console.log(this.tareas);
  } 
}

interface datauser {
  color: string;
  comando: string;
  fecha: string;
  figura: number;
  id: number;
  usuario: number;
}