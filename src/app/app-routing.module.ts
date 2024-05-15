import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  BandejaoComponent,
  BibliotecasComponent,
  CampusComponent,
  HomeComponent,
  IcExtraComponent,
  KitBixoComponent,
  MatriculaComponent,
  MoradiasComponent,
  OuvidoriaComponent,
  PreparacaoEstudosComponent,
  ProjetoAmpereComponent,
  SemanaDeRecepcaoComponent,
  ServicosAcademicosComponent,
  SobreCursoComponent,
} from '@core'
import { RouteModel } from '@models'

const routes: RouteModel[] = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Recepção dos Bixos da Elétrica - 2024',
      background: [
        { src: '/assets/images/home/banner.jpg', alt: 'Membros da SA-SEL em 2019' },
        {
          src: '/assets/images/home/recepcao_2020.jpg',
          alt: 'Bixos ingressantes de 2020',
        },
        {
          src: '/assets/images/home/recepcao_2023.jpg',
          alt: 'Bixos ingressantes de 2023',
        },
        {
          src: '/assets/images/home/recepcao_2023_2.jpg',
          alt: 'Bixos ingressantes de 2023',
        },
      ],
    },
  },
  {
    path: 'bibliotecas',
    component: BibliotecasComponent,
    data: {
      title: 'Bibliotecas',
      background: [
        {
          src: '/assets/images/bibliotecas/banner.jpg',
          alt: 'Foto da biblioteca da EESC, segundo andar',
        },
      ],
    },
  },
  {
    path: 'curso',
    component: SobreCursoComponent,
    data: {
      title: 'Sobre o Curso',
      background: [
        {
          src: '/assets/images/sobre-curso/banner.jpg',
          alt: 'Foto do prédio da SEL, departamento da elétrica',
        },
      ],
    },
  },
  {
    path: 'matricula',
    component: MatriculaComponent,
    data: {
      title: 'Matrícula',
      background: [
        {
          src: '/assets/images/matricula/banner.jpg',
          alt: 'Foto do E1, prédio principal da EESC',
        },
      ],
    },
  },
  {
    path: 'bandejao',
    component: BandejaoComponent,
    data: {
      title: 'Bandejão (ou "Bandeco")',
      background: [{ src: '/assets/images/bandejao/banner.jpg', alt: 'Foto do banejão' }],
    },
  },
  {
    path: 'projeto-ampere',
    component: ProjetoAmpereComponent,
    data: {
      title: 'Projeto Ampere',
      background: [
        {
          src: '/assets/images/projeto-ampere/banner.jpg',
          alt: 'Parte de uma aula de física do Projeto Ampere',
        },
      ],
      bgDarkness: 0.1,
      logo: {
        src: '/assets/images/projeto-ampere/logo.png',
        alt: 'Logo do Projeto Ampere',
      },
    },
  },
  {
    path: 'preparacao-estudos',
    component: PreparacaoEstudosComponent,
    data: {
      title: 'Preparação para os Estudos',
      background: [
        { src: '/assets/images/preparacao/banner.jpg', alt: 'Banner da preparacao' },
      ],
    },
  },
  {
    path: 'campus',
    component: CampusComponent,
    data: {
      title: 'Conheça o Campus',
      background: [
        { src: 'assets/images/campus/banner.jpg', alt: 'Evento no campus' },
        { src: 'assets/images/campus/Prédio_E1.jpg', alt: 'Prédio E1' },
        {
          src: 'assets/images/campus/Prédio_Eng_Elétr_Comp.jpg',
          alt: 'Prédio Eng. Elétrica e Comp',
        },
        {
          src: 'assets/images/campus/Entrada_Arquitetura.jpg',
          alt: 'Entrada Arquitetura',
        },
        { src: 'assets/images/campus/Sala_Bloco_D.jpg', alt: 'Sala Bloco D' },
        { src: 'assets/images/campus/Praça_Campus_2.jpg', alt: 'Praça Campus 2' },
        {
          src: 'assets/images/campus/Ponto_Ônibus_Campus_2.jpg',
          alt: 'Ponto de Ônibus Campus 2',
        },
        {
          src: 'assets/images/campus/Bancada_Lab_Fís.jpg',
          alt: 'Bancada Laboratório de Física',
        },
        {
          src: 'assets/images/campus/Bancada_Lab_Quím.jpg',
          alt: 'Bancada Laboratório de Química',
        },
      ],
    },
  },
  {
    path: 'semana-recepcao',
    component: SemanaDeRecepcaoComponent,
    data: {
      title: 'Semana de Recepção',
      background: [
        {
          src: '/assets/images/semana-de-recepcao/banner.jpg',
          alt: 'Foto de uma gincana da semana de recepção',
        },
      ],
    },
  },
  {
    path: 'ics-extras',
    component: IcExtraComponent,
    data: {
      title: 'ICs e Extracurriculares',
      background: [
        { src: '/assets/images/ic-extra/ic-extra.jpg', alt: 'Foto de um gradiente' },
      ],
    },
  },
  {
    path: 'servicos-academicos',
    component: ServicosAcademicosComponent,
    data: {
      title: 'Serviços Acadêmicos',
      background: [
        {
          src: '/assets/images/servicos-academicos/banner.jpg',
          alt: 'Foto do campus da USP de São Carlos',
        },
      ],
    },
  },
  {
    path: 'moradias',
    component: MoradiasComponent,
    data: {
      title: 'Moradias',
      background: [{ src: '/assets/images/moradias/banner.jpg', alt: 'Foto da USP' }],
    },
  },
  {
    path: 'ouvidoria',
    component: OuvidoriaComponent,
    data: {
      title: 'Ouvidoria',
      background: [
        { src: '/assets/images/ouvidoria/banner.jpg', alt: 'Reunião na sala da SA-SEL' },
      ],
      bgDarkness: 0.4,
    },
  },
  {
    path: 'kit-bixo',
    component: KitBixoComponent,
    data: {
      title: 'Kit Bixo',
      background: [
        {
          src: '/assets/images/kit-bixo/banner.jpg',
        },
      ],
    },
  },
  { path: '**', redirectTo: '/' } as any,
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes as Routes, {
      anchorScrolling: 'disabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
