export const enum ExtracurricularGroupTypes {
  Representative = 'Representatividade',
  Artistic = 'Artística',
  Social = 'Social',
  Sports = 'Esportes',
  Technical = 'Técnica',
  Business = 'Negócios',
}

export interface ExtracurricularGroupModel {
  name: string
  categories: ExtracurricularGroupTypes[]
  url: string
}
