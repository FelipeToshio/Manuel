import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { from } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import {
  IMqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS = {
  hostname: 'test.mosquitto.org',
  port: 8080,
  path: '/'
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MqttService,
    MediaCapture,
    NativeAudio,
    Media,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
