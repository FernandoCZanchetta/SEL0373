import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel, ImageModel } from '@models'
import { SidebarService } from '@services'
import {
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
} from 'ngx-mqtt'
import { IClientSubscribeOptions } from 'mqtt-browser';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Montanha',
      subtitle: true,
      image: {
        alt: 'Montanha',
        src: '/assets/images/home/montanha.jpg',
        caption: 'Olha só esses relevos',
      },
    },
  ]

  exemplosPhotos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/quadrado.jpg',
        alt: 'quadrado',
        caption: 'quadrado',
      },
    },
    {
      image: {
        src: '/assets/images/home/pilares.jpg',
        alt: 'pilares',
        caption: 'pilares',
      },
    },
    {
      image: {
        src: '/assets/images/logo/main.png',
        alt: 'querer',
        caption: 'querer',
      },
    },      
  ]

  modalExemplo: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/amigo.png',
        alt: 'Amigo',
        caption: 'Fiel',
      },
      modal: {
        image: {
          src: '/assets/images/home/legal.png',
          alt: 'Combatente',
        },
        text: 'Gu gu da da',
        title: 'Olha só essa guitarra',
        url: 'https://br.yamaha.com/pt/products/musical_instruments/guitars_basses/el_guitars/rs_2022/index.html',
      },
    },
  ]

  constructor(private _mqttService: MqttService) {
    this.client = this._mqttService;
  }
  publish = {
    topic: 'sharp_probe/request_photo',
    qos: 0,
    payload: '{ "msg": "QUero fotos do ARNAHA" }',
  };
  qosList = [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ];
  client: MqttService | undefined;

  doPublish(): void {
    const { topic, qos, payload } = this.publish
    console.log(this.publish)
    this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
  }
}