import { Component, OnInit } from '@angular/core';
import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  private sensor1: string;

  constructor(private _mqttService: MqttService) { 
    this._mqttService.observe('led').subscribe((message: IMqttMessage) => 
    {
    this.sensor1 = message.payload.toString();
    console.log(this.sensor1);
    }); 
  }

  publishMessage()
 {
  this._mqttService.unsafePublish("/led", "led1-on", {qos: 0, retain: false});
 }

  ngOnInit() {

  }

}

