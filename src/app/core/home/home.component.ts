import { Component, OnInit } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel, ProbeDataModel } from '@models'
import { IMqttMessage, IMqttServiceOptions, MqttService, IPublishOptions } from 'ngx-mqtt'
import { IClientSubscribeOptions } from 'mqtt-browser'
import { Subscription } from 'rxjs'
import { environment } from '../../../environments/environment'
// import { SidebarService, getDataService } from '@services'
// import { ObjectId } from 'mongodb'
// import { interval } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  client: MqttService | undefined

  constructor(private _mqttService: MqttService) {
    this.client = this._mqttService
  }

  connection = {
    hostname: 'igbt.eesc.usp.br',
    port: 1883,
    path: '/mqtt',
    clean: true, // Retain session
    connectTimeout: 4000, // Timeout period
    reconnectPeriod: 4000, // Reconnect period
    // Authentication information
    clientId: 'mqttx_597046f4',
    username: 'mqtt',
    password: 'mqtt_123_abc',
    protocol: 'ws',
  }

  publish = {
    topic: 'sharp_probe/request_photo',
    qos: 0,
    payload: '{ "msg": "QUERO FOTO!" }',
  }

  qosList = [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ]

  createConnection() {
    try {
      this.client?.connect(this.connection as IMqttServiceOptions)
    } catch (error) {
      console.log('mqtt.connect error', error)
    }
  }

  destroyConnection() {
    try {
      this.client?.disconnect(true)
      console.log('Successfully disconnected!')
    } catch (error: any) {
      console.log('Disconnect failed', error.toString())
    }
  }

  doPublish() {
    this.createConnection()
    const { topic, qos, payload } = this.publish
    console.log(this.publish)
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
    this.destroyConnection()
  }

  // getData:getDataService = new getDataService()
  data: ProbeDataModel[] = [
    {
      latitude: -22.15141,
      longitude: -44.1259815,
      altitude: 857.129815,
      year: 2024,
      month: 6,
      day: 26,
      hour: 15,
      minutes: 31,
      seconds: 32,
      pressure: 1016,
      altitudeBME: 856.158724,
      humidityBME: 38.1591248,
      acelerationx: 3.14915,
      acelerationy: 1.125981,
      acelerationz: 6.15914,
      anglex: 10.125914,
      angley: 120.14914,
      anglez: 246.124814,
      temperaturempu: 26.410512,
      humiditydht: 39.5190142,
      temperaturedht: 26.14901247,
      heatindex: 28.4151941,
    },
  ]
  // sub = interval(1000).subscribe(x => { this.getData.getProbeDatas(this.data) })

  latlongalt: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/girando.gif',
        alt: 'Latitude',
        caption: 'Latitude',
      },
      modal: {
        text: this.data[0].latitude.toString(),
        title: 'Latitude da Sonda',
      },
    },
    {
      image: {
        src: '/assets/images/home/girando.gif',
        alt: 'Longitude',
        caption: 'Longitude',
      },
      modal: {
        text: this.data[0].longitude.toString(),
        title: 'Longitude da Sonda',
      },
    },
    {
      image: {
        src: '/assets/images/home/girando.gif',
        alt: 'Altitude',
        caption: 'Altitude',
      },
      modal: {
        text: this.data[0].altitude.toString(),
        title: 'Altitude da Sonda',
      },
    },
  ]

  datatime: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/relogio.gif',
        alt: 'Ano',
        caption: 'Ano',
      },
      modal: {
        text: this.data[0].year.toString(),
        title: 'Ano',
      },
    },
    {
      image: {
        src: '/assets/images/home/relogio.gif',
        alt: 'Mes',
        caption: 'Mes',
      },
      modal: {
        text: this.data[0].month.toString(),
        title: 'Mes',
      },
    },
    {
      image: {
        src: '/assets/images/home/relogio.gif',
        alt: 'Dia',
        caption: 'Dia',
      },
      modal: {
        text: this.data[0].day.toString(),
        title: 'Dia',
      },
    },
    {
      image: {
        src: '/assets/images/home/relogio.gif',
        alt: 'Hora',
        caption: 'Hora',
      },
      modal: {
        text: this.data[0].hour.toString(),
        title: 'Hora',
      },
    },
    {
      image: {
        src: '/assets/images/home/relogio.gif',
        alt: 'Minuto',
        caption: 'Minuto',
      },
      modal: {
        text: this.data[0].minutes.toString(),
        title: 'Minuto',
      },
    },
    {
      image: {
        src: '/assets/images/home/relogio.gif',
        alt: 'Segundos',
        caption: 'Segundos',
      },
      modal: {
        text: this.data[0].seconds.toString(),
        title: 'Segundos',
      },
    },
  ]

  bme: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/bme.png',
        alt: 'Pressão',
        caption: 'Pressão',
      },
      modal: {
        text: this.data[0].pressure.toString(),
        title: 'Pressão',
      },
    },
    {
      image: {
        src: '/assets/images/home/bme.png',
        alt: 'Altitude da Sonda',
        caption: 'Altitude da Sonda',
      },
      modal: {
        text: this.data[0].altitudeBME.toString(),
        title: 'Altitude da Sonda',
      },
    },
    {
      image: {
        src: '/assets/images/home/bme.png',
        alt: 'Humidade',
        caption: 'Humidade',
      },
      modal: {
        text: this.data[0].humidityBME.toString(),
        title: 'Humidade',
      },
    },
  ]

  mpu: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Aceleração no Eixo X',
        caption: 'Aceleração no Eixo X',
      },
      modal: {
        text: this.data[0].acelerationx.toString(),
        title: 'Aceleração no Eixo X',
      },
    },
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Aceleração no Eixo Y',
        caption: 'Aceleração no Eixo Y',
      },
      modal: {
        text: this.data[0].acelerationy.toString(),
        title: 'Aceleração no Eixo Y',
      },
    },
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Aceleração no Eixo Z',
        caption: 'Aceleração no Eixo Z',
      },
      modal: {
        text: this.data[0].acelerationz.toString(),
        title: 'Aceleração no Eixo Z',
      },
    },
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Angulo da Sonda no Eixo X',
        caption: 'Angulo da Sonda no Eixo X',
      },
      modal: {
        text: this.data[0].anglex.toString(),
        title: 'Angulo da Sonda no Eixo X',
      },
    },
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Angulo da Sonda no Eixo Y',
        caption: 'Angulo da Sonda no Eixo Y',
      },
      modal: {
        text: this.data[0].angley.toString(),
        title: 'Angulo da Sonda no Eixo Y',
      },
    },
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Angulo da Sonda no Eixo Z',
        caption: 'Angulo da Sonda no Eixo Z',
      },
      modal: {
        text: this.data[0].anglez.toString(),
        title: 'Angulo da Sonda no Eixo Z',
      },
    },
    {
      image: {
        src: '/assets/images/home/mpu.png',
        alt: 'Temperatura',
        caption: 'Temperatura',
      },
      modal: {
        text: this.data[0].temperaturempu.toString(),
        title: 'Temperatura',
      },
    },
  ]

  dht: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/dht.png',
        alt: 'Umidade',
        caption: 'Umidade',
      },
      modal: {
        text: this.data[0].humiditydht.toString(),
        title: 'Umidade',
      },
    },
    {
      image: {
        src: '/assets/images/home/dht.png',
        alt: 'Temperatura',
        caption: 'Temperatura',
      },
      modal: {
        text: this.data[0].temperaturedht.toString(),
        title: 'Temperatura',
      },
    },
    {
      image: {
        src: '/assets/images/home/dht.png',
        alt: 'Sensação Térmica',
        caption: 'Sensação Térmica',
      },
      modal: {
        text: this.data[0].heatindex.toString(),
        title: 'Sensação Térmica',
      },
    },
  ]
}
