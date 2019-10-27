import { Component, OnInit } from '@angular/core';
import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-controle-medicacoes',
  templateUrl: './controle-medicacoes.page.html',
  styleUrls: ['./controle-medicacoes.page.scss'],
})
export class ControleMedicacoesPage implements OnInit {

  private sensor1: string;

  constructor(private _mqttService: MqttService) { 
    this._mqttService.observe('/remedio').subscribe((message: IMqttMessage) => 
    {
    this.sensor1 = message.payload.toString();
    if((this.sensor1 == "tomei")){
      console.log("Remédio Tomado!");
    }
    //console.log(this.sensor1);
    }); 

  }

  publishMessage1()
 {
  this._mqttService.unsafePublish("/led", "led1-on", {qos: 0, retain: false});
 }

 publishMessage2()
 {
  this._mqttService.unsafePublish("/led", "led2-on", {qos: 0, retain: false});
 }

 publishMessage3()
 {
  this._mqttService.unsafePublish("/led", "led3-on", {qos: 0, retain: false});
 }
 
  ngOnInit() {

  }

}
