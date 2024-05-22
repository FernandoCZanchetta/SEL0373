import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel } from '@models'

@Component({
  selector: 'app-moradias',
  templateUrl: './moradias.component.html',
})
export class MoradiasComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Entrada da USP',
      subtitle: true,
      image: {
        alt: 'mapa do campus I',
        src: '/assets/images/moradias/entradas.jpg',
        caption: 'Mapa identificando as principais saídas do Campus I',
      },
      text: 'No campus I existem 4 entradas principais, apelidadas de acordo com os prédios dos quais estão próximas. São elas: <b>física</b>, <b>matemática</b>, <b>produção</b> e <b>arquitetura</b>.<br><br> Elas são frequentemente utilizadas como referência para procurar apartamentos, e repúblicas. Por exemplo, um anúncio pode dizer: <i>"nossa rep está a 700m da saída da ARQ"</i>.<br><br> Tem apartamentos e reps perto de todas as quatro saídas; a questão é pesquisar e encontrar aquela que é mais conveniente no seu caso!',
    },
  ]

  housingPhotos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/moradias/alojaA.jpg',
        alt: 'bloco a',
        caption: 'Bloco A',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja1.jpg',
        alt: 'foto do alojamento',
        caption: 'Bloco do alojamento da USP',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja2.jpg',
        alt: 'bloco e',
        caption: 'Bloco E',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja3.jpg',
        alt: 'aloja à noite',
        caption: 'Aloja à noite',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja4.jpg',
        alt: 'arvore',
        caption: 'Árvore do aloja',
      },
    },
  ]

  realStateAgencies: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/moradias/abias.svg',
        alt: 'abias imoveis',
        caption: 'Abias Imóveis',
      },
      url: 'https://www.abiasimoveis.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/roca.svg',
        alt: 'roca',
        caption: 'Imobiliária Roca',
      },
      url: 'https://roca.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/cardinali.svg',
        alt: 'cardinali',
        caption: 'Imobiliária Cardinali',
      },
      url: 'https://www.cardinali.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/maria-aires.svg',
        alt: 'maria aires',
        caption: 'Maria Aires',
      },
      url: 'https://mariaaires.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/contato.svg',
        alt: 'contato',
        caption: 'Contato Imóveis',
      },
      url: 'https://www.icontato.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/uniao.svg',
        alt: 'união',
        caption: 'Imobiliária União',
      },
      url: 'http://www.iuniaoimoveis.com.br/',
    },
  ]
}
