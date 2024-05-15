import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router, Scroll } from '@angular/router'
import { SidebarItemModel } from '@models'
import { SidebarService } from '@services'
import * as bootstrap from 'bootstrap'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  route = ''
  fragment = ''
  startsOpen = this.sidebarService.isOpen()
  subscriptions: Subscription[] = []
  sidebar!: bootstrap.Offcanvas

  private changedRoutes = true

  items: SidebarItemModel[] = [
    {
      title: 'Página Inicial',
      icon: 'fas fa-home',
      route: '',
      collapsed: true,
      subitems: [
        {
          title: 'Informações Gerais',
          id: 'introducao',
        },
        {
          title: 'Navegação',
          id: 'navegacao',
        },
        {
          title: 'FAQ',
          id: 'faq',
        },
        {
          title: 'Patrocinadores',
          id: 'patrocinadores',
        },
      ],
    },
    {
      title: 'Semana de Recepção',
      icon: 'fas fa-calendar-week',
      route: 'semana-recepcao',
      collapsed: true,
      subitems: [
        {
          title: 'Calendário',
          id: 'calendário',
        },
        {
          title: 'Apadrinhamento',
          id: 'apadrinhamento',
        },
      ],
    },
    {
      title: 'Ouvidoria',
      icon: 'fas fa-bullhorn',
      route: 'ouvidoria',
      collapsed: true,
    },
    {
      title: 'Kit Bixo',
      icon: 'fas fa-tshirt',
      route: 'kit-bixo',
      collapsed: true,
      subitems: [
        {
          title: 'Compra do Kit Bixo',
          id: 'compra-de-kits',
        },
        {
          title: 'Edições Anteriores',
          id: 'edicoes-anteriores',
        },
        {
          title: 'Cervejada da Elétrica',
          id: 'cervejada',
        },
      ],
    },
    {
      title: 'Matrícula',
      icon: 'fas fa-passport',
      route: 'matricula',
      collapsed: true,
      subitems: [
        {
          title: 'Cronograma - FUVEST',
          id: 'calendario',
        },
        {
          title: 'Datas das chamadas - FUVEST',
          id: 'datas',
        },
        {
          title: 'Confirmação de matrícula - FUVEST',
          id: 'confirmacao-matricula',
        },
        {
          title: 'Cronograma - ENEM-USP',
          id: 'calendario-enem-usp',
        },
        {
          title: 'Datas das chamadas - ENEM-USP',
          id: 'datas-enem-usp',
        },
        {
          title: 'Confirmação de matrícula - ENEM-USP',
          id: 'confirmacao-matricula-enem-usp',
        },
        {
          title: 'Cronograma - Provão Paulista',
          id: 'calendario-provão-paulista',
        },
        {
          title: 'Datas das chamadas - Provão Paulista',
          id: 'datas-provão-paulista',
        },
      ],
    },
    {
      title: 'Sobre o curso',
      icon: 'fas fa-graduation-cap',
      route: 'curso',
      collapsed: true,
      subitems: [
        {
          title: 'Separação por Ênfases',
          id: 'separacao-enfases',
        },
        {
          title: 'Grade Curricular',
          id: 'grade-curricular',
        },
        {
          title: 'Certificados Especiais',
          id: 'certificados-especiais',
        },
      ],
    },
    {
      title: 'Projeto Ampere',
      icon: 'fab fa-youtube',
      route: 'projeto-ampere',
      collapsed: true,
      subitems: [
        {
          title: 'Pré-Cálculo',
          id: 'pre-calculo',
        },
        {
          title: 'Geometria Analítica',
          id: 'geometria-analitica',
        },
        {
          title: 'Programação',
          id: 'programacao',
        },
        {
          title: 'Física I',
          id: 'fisica1',
        },
        {
          title: 'Cálculo I',
          id: 'calculo1',
        },
      ],
    },
    {
      title: 'Preparação Estudos',
      icon: 'fas fa-book',
      route: 'preparacao-estudos',
      collapsed: true,
      subitems: [
        {
          title: 'Introdução',
          id: 'introducao',
        },
        {
          title: 'Sites e Softwares',
          id: 'ferramentas',
        },
      ],
    },
    {
      title: 'Serviços Acadêmicos',
      icon: 'fas fa-user-graduate',
      route: 'servicos-academicos',
      collapsed: true,
      subitems: [
        {
          title: 'Portal de Serviços USP',
          id: 'portal-servicos',
        },
        {
          title: 'e-Disciplinas (Moodle)',
          id: 'moodle',
        },
        {
          title: 'Ferramentas Google',
          id: 'ferramentas-google',
        },
        {
          title: 'Eduroam (Wi-Fi)',
          id: 'eduroam',
        },
        {
          title: 'MatrUSP',
          id: 'matrusp',
        },
        {
          title: 'Outros mimos',
          id: 'mimos',
        },
      ],
    },
    {
      title: 'ICs e Extracurriculares',
      icon: 'fas fa-microscope',
      route: 'ics-extras',
      collapsed: true,
      subitems: [
        {
          title: 'Extracurriculares Técnicas',
          id: 'extracurriculares-tecnicas',
        },
        {
          title:
            'Centro Acadêmico, Secretarias Acadêmicas, Coletivos e Grupos Religiosos',
          id: 'centro-academico',
        },
        {
          title: 'Iniciações Científicas',
          id: 'iniciacao-cientifica',
        },
        {
          title: 'Grupos Extracurriculares',
          id: 'extracurriculares',
        },
      ],
    },
    {
      title: 'Conheça o Campus',
      icon: 'fas fa-map-marked',
      route: 'campus',
      collapsed: true,
    },
    {
      title: 'Bandejão',
      icon: 'fas fa-utensils',
      route: 'bandejao',
      collapsed: true,
    },
    {
      title: 'Bibliotecas',
      icon: 'fas fa-book-reader',
      route: 'bibliotecas',
      collapsed: true,
      subitems: [
        {
          title: 'Salas de Estudos',
          id: 'salas-estudos',
        },
        {
          title: 'Pró Aluno - EESC',
          id: 'pro-aluno',
        },
        {
          title: 'Bloco 6 - ICMC',
          id: 'bloco-6',
        },
      ],
    },
    {
      title: 'Moradias',
      icon: 'fas fa-house-user',
      route: 'moradias',
      collapsed: true,
      subitems: [
        {
          title: 'Alojamento Estudantil no Campus',
          id: 'alojamento',
        },
        {
          title: 'Grupos no Facebook',
          id: 'grupos-facebook',
        },
        {
          title: 'Imobiliárias de São Carlos',
          id: 'imobiliarias',
        },
      ],
    },
  ]

  private expanded?: SidebarItemModel

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    const sidebarElement = document.querySelector('#sidebar')

    if (sidebarElement) {
      this.sidebar = new bootstrap.Offcanvas(sidebarElement)

      // when the sidebar is hidden through Bootstrap scripts
      // (e.g.: by clicking in the backdrop or pressing <ESC>)
      // set the `isOpen` attribute to false
      sidebarElement.addEventListener('hidden.bs.offcanvas', () => {
        this.sidebarService.close()

        if (this.expanded) {
          this.expanded.collapsed = true
        }
      })
    }

    this.subscriptions.push(
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          const regexp = /\/(?<route>[^#]*)(?<fragment>#.+)?/
          const groups = regexp.exec(e.urlAfterRedirects)?.groups ?? {}

          /* eslint-disable dot-notation */
          this.changedRoutes = this.route !== groups['route']
          this.route = groups['route']
          this.fragment = groups['fragment']?.replace('#', '') ?? ''
          /* eslint-enable dot-notation */

          this.sidebar.hide()
        }
      })
    )

    this.subscriptions.push(
      this.router.events.subscribe(e => {
        if (e instanceof Scroll) {
          if (e.anchor) {
            setTimeout(
              () => {
                document.querySelector(`#${e.anchor}`)?.scrollIntoView()
              },
              this.changedRoutes ? 350 : 0
            )
          }
        }
      })
    )

    this.subscriptions.push(
      this.sidebarService.visibility$.subscribe(isOpen => {
        isOpen ? this.sidebar.show() : this.sidebar.hide()
      })
    )

    this.expanded = this.items.find(item => !item.collapsed)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })
  }

  toggleCollapsed(item: SidebarItemModel): void {
    if (item.collapsed) {
      if (this.expanded) {
        this.expanded.collapsed = true
      }

      this.expanded = item
      item.collapsed = false
    } else {
      this.expanded = undefined
      item.collapsed = true
    }
  }
}
