import { Component } from '@angular/core'
import { ExtracurricularGroupModel, ExtracurricularGroupTypes } from '@models'

@Component({
  selector: 'app-ic-extra',
  templateUrl: './ic-extra.component.html',
})
export class IcExtraComponent {
  extracurricularGroups: ExtracurricularGroupModel[] = [
    {
      name: 'ABUSCar',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/abusanca/',
    },
    {
      name: 'ACASO Teatro',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/grupoacaso/',
    },
    {
      name: 'AIESEC - São Carlos',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://aiesec.org.br/',
    },
    {
      name: 'Atlética CAASO',
      categories: [ExtracurricularGroupTypes.Sports],
      url: 'http://atleticacaaso.com/',
    },
    {
      name: 'Baja EESC - USP',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.bajaeescusp.com/',
    },
    {
      name: 'CAASO',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/CAASO.USP/',
    },
    {
      name: 'Campanha USP do Agasalho',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/campanhadoagasalhouspsc/',
    },
    {
      name: 'Centro de Voluntariado Universitário de São Carlos',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/cvusc/',
    },
    {
      name: 'Cia de Dança CAASO',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/CompanhiadeDancaCAASO/',
    },
    {
      name: 'Coletivo de Mulheres CAASO/FEDERAL',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/coletivomulherescaasoufscar/',
    },
    {
      name: 'Coletivo Negro Elza Soares',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/coletivoelzasoares/',
    },
    {
      name: 'ECon Equipe de Concreto',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.facebook.com/econeescusp/',
    },
    {
      name: 'EESC - USP Aerodesign',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'http://www3.eesc.usp.br/aerodesign/',
    },
    {
      name: 'EESC - USP Formula SAE',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://formula.eesc.usp.br/',
    },
    {
      name: 'EESC - USP Mileage',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'http://www.mileage.eesc.usp.br/',
    },
    {
      name: 'EESC - USP Tupã',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://linktr.ee/TupaUsp',
    },
    {
      name: 'Empresa Junior EESC jr.',
      categories: [
        ExtracurricularGroupTypes.Technical,
        ExtracurricularGroupTypes.Business,
      ],
      url: 'http://eescjr.com.br/',
    },
    {
      name: 'Enactus CAASO - USP',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/EnactusCSaoCarlos/',
    },
    {
      name: 'FoCA',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/grupoFoCA/',
    },
    {
      name: 'GAPeria (Bateria do CAASO)',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/gaperia/',
    },
    {
      name: 'GEISA',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.facebook.com/geisasaocarlos/',
    },
    {
      name: 'GMA - Grupo de Manutenção de Aeronaves',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.facebook.com/gmausp/',
    },
    {
      name: 'Grupo de Som CAASO',
      categories: [ExtracurricularGroupTypes.Artistic],
      url: 'https://www.facebook.com/gsomcaaso/',
    },
    {
      name: 'IEEE Student Branch',
      categories: [ExtracurricularGroupTypes.Technical, ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/ieeeuspsc/',
    },
    {
      name: 'Liga de Empreendedorismo de São Carlos',
      categories: [ExtracurricularGroupTypes.Business],
      url: 'https://www.facebook.com/ligadeempreendedorismosc/',
    },
    {
      name: 'Liga do Mercado Financeiro de São Carlos',
      categories: [ExtracurricularGroupTypes.Business],
      url: 'https://www.lmf-saocarlos.com/',
    },
    {
      name: 'NUANCES',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/nuancescaaso/?fref=mentions',
    },
    {
      name: 'Operação Natal',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/operacaonatalsc/',
    },
    {
      name: 'Projeto Semente',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/semente.usp/',
    },
    {
      name: 'Projeto Sol',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/projetosol.sc/',
    },
    {
      name: 'SA-SEL',
      categories: [ExtracurricularGroupTypes.Representative],
      url: 'https://www.facebook.com/sasel.usp/',
    },
    {
      name: 'Sanca Social',
      categories: [ExtracurricularGroupTypes.Social],
      url: 'https://www.facebook.com/sancasocial/',
    },
    {
      name: 'Semear',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'http://www.semear.eesc.usp.br/',
    },
    {
      name: 'Topus - Pesquisas Aeroespaciais',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'http://facebook.com/grupotopus',
    },
    {
      name: 'Warthog Robotics',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'https://www.facebook.com/WarthogRobotics/',
    },
    {
      name: 'Zenith - USP',
      categories: [ExtracurricularGroupTypes.Technical],
      url: 'http://zenith.eesc.usp.br/',
    },
  ]
}
