import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  // transferencias: any[] = [];

  constructor(private service: TransferenciaService){};

  // transferir($event: any){
  //   // console.log($event)
  //   // const transferencia = {...$event, data: new Date}
  //   // this.transferencias.push(transferencia);
  //   this.service.adicionar($event);
  //   // no html >>> <app-nova-transferencia (aoTransferir) = "transferir($event)"></app-nova-transferencia>
  // }

  // no html >> <app-nova-transferencia></app-nova-transferencia> para trazer esta "Entidade"

  // no html >>> <app-extrato></app-extrato> para trazer esta "Entidade"

}
