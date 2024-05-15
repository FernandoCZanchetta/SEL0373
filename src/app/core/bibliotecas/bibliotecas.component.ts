import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel } from '@models'

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.component.html',
})
export class BibliotecasComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Salas de Estudos',
      anchor: 'salas-estudos',
      subtitle: true,
      image: {
        alt: 'interior do aquario',
        src: 'assets/images/bibliotecas/aquario.jpg',
        caption: 'Interior do Aquário',
      },
      text: 'As bibliotecas da EESC, do ICMC e do IFSC possuem salas de estudo 24h. A sala da EESC fica logo ao lado de sua biblioteca e é chamada de "aquário".<br><br>Durante o horário de funcionamento das bibliotecas, há também áreas de estudo adicionais. Na biblioteca do ICMC e do IFSC, há salas fechadas que podem ser utilizadas por grupos de estudantes.',
    },
    {
      title: 'Pró Aluno - EESC',
      anchor: 'pro-aluno',
      subtitle: true,
      image: {
        alt: 'pro aluno eesc',
        src: 'assets/images/bibliotecas/proaluno.jpg',
        caption: 'Entrada do Pró Aluno - EESC',
      },
      text: 'Pertinho da biblioteca da EESC e do aquário, está o espaço Pró-Aluno. Lá, há 2 salas informatizadas para uso de computadores. Para acessá-los, basta fazer login com sua conta USP.<br><br>Cada computador está conectado à impressora do espaço. Todo semestre, cada aluno pode realizar <strong>gratuitamente</strong> a impressão de <strong>100 páginas</strong>.',
    },
    {
      title: 'Bloco 6 - ICMC',
      anchor: 'bloco-6',
      subtitle: true,
      image: {
        alt: 'bloco 6 icmc',
        src: 'assets/images/bibliotecas/bloco6.jpg',
        caption: 'Entrada do Bloco 6 - ICMC',
      },
      text: 'No bloco 6 do ICMC, também há salas informatizadas no último andar que podem ser acessadas por alunos.',
    },
  ]

  libraries: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/bibliotecas/eesc.jpg',
        alt: 'biblioteca eesc',
        caption: 'Antiga Biblioteca EESC',
      },
      fill: true,
    },
    {
      image: {
        src: '/assets/images/bibliotecas/icmc.jpg',
        alt: 'biblioteca icmc',
        caption: 'Biblioteca ICMC',
      },
      fill: true,
    },
    {
      image: {
        src: '/assets/images/bibliotecas/ifsc.jpg',
        alt: 'biblioteca ifsc',
        caption: 'Biblioteca IFSC',
      },
      fill: true,
    },
  ]

  eesclibrary: ImageGridItemModel[] = [
    {
      image: {
        alt: 'reforma biblioteca eesc',
        src: 'assets/images/bibliotecas/reformabibliotecaeesc.jpg',
        caption: 'Biblioteca EESC durante a reforma',
      },
      fill: true,
    },
    {
      image: {
        alt: 'biblioteca provisória espaço primavera',
        src: 'assets/images/bibliotecas/bibliotecaespacoprimavera.jpg',
        caption: 'Biblioteca EESC atendendo no Espaço Primavera',
      },
      fill: true,
    },
    {
      image: {
        alt: 'biblioteca eesc',
        src: 'assets/images/bibliotecas/bibliotecaeesc.jpg',
        caption: 'Biblioteca EESC atualmente',
      },
      fill: true,
    },
  ]

  searchOptions: ImageGridItemModel[] = [
    {
      image: {
        alt: 'aplicativo biblioteca usp',
        src: 'assets/images/bibliotecas/aplicativo.jpg',
        caption:
          'Aplicativo <a target="_blank" rel="noopener noreferrer" href="http://www.sti.usp.br/appusp/">Bibliotecas USP</a>',
      },
      url: 'http://www.sti.usp.br/appusp/',
      fill: true,
    },
    {
      image: {
        alt: 'site dedalus usp',
        src: 'assets/images/bibliotecas/dedalus.jpg',
        caption:
          'Site <a target="_blank" rel="noopener noreferrer" href="http://dedalus.usp.br/F/24J2UMLMSA1FE9XG6TJ7E1R7Q7QK7QCQXDJ31V5UYEXRH2SR1I-61364?RN=53343508&pds_handle=GUEST">Dedalus</a>, que permite buscas mais avançadas',
      },
      url: 'http://dedalus.usp.br/F/24J2UMLMSA1FE9XG6TJ7E1R7Q7QK7QCQXDJ31V5UYEXRH2SR1I-61364?RN=53343508&pds_handle=GUEST',
      fill: true,
    },
  ]
}
