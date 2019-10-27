import { Component, OnInit, Injectable } from '@angular/core';
import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
//import { Observable } from 'rxjs/Observable';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

const MEDIA_FILES_KEY = 'mediaFIles';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  mediaFiles = [];
  constructor(private mediaCapture: MediaCapture,
    private storage: Storage,
    private media: Media,
    private file: File,
    private nativeAudio: NativeAudio,
    private _mqttService: MqttService) {
      this._mqttService.observe('/bpm').subscribe((message: IMqttMessage) => 
    {
    this.sensor1 = message.payload.toString();
    console.log(this.sensor1);
    }); 
     }

  private sensor1: string;

/*
  publishMessage()
 {
  this._mqttService.unsafePublish("/led", "led1-on", {qos: 0, retain: false});
 }
*/
  ngOnInit() {

  }

  sounds: any = [];

  captureAudio() {
    console.log("chamei a funcao");
    this.file.createFile(this.file.externalRootDirectory + "/Download/", 'my_file.wav', true).then(() => {
      let file = this.media.create(this.file.externalRootDirectory + "/Download/".replace(/^file:\/\//, '') + 'novo_file.wav');
      file.startRecord();
      window.setTimeout(() => file.stopRecord(), 5000);
      console.log(file);
      this.play(file);
    });

  }
  onSuccess(e) {
    console.log(e);
  }
  onError(e) {
    console.log(e);
  }
  play(file) {
    this.nativeAudio.preloadSimple('uniqueId1', file.externalRootDirectory + "/Download/novo_file.wav").then(this.onSuccess, this.onError);
    console.log('1');
    this.nativeAudio.play(this.file.externalRootDirectory + "/Download/novo_file.wav").then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}

