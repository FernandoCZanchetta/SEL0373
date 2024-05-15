import { Component } from '@angular/core'
import { AlternatingLayoutModel } from '@models'

@Component({
  selector: 'app-bandejao',
  templateUrl: './bandejao.component.html',
})
export class BandejaoComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      image: {
        alt: 'bandeja com comida',
        src: '/assets/images/bandejao/bandeja.jpg',
        caption: 'Uma bandeja do bandejão dentro do bandejão',
      },
      text: 'Procurando uma refeição balanceada, saudável, e acessível? Conheça o Bandejão, o restaurante universitário do CAASO (o nome é devido à comida ser servida em bandejas de metal).<br><br>Cada refeição custa <strong>2 reais</strong>, e você só pode passar pela fila de alimentos uma vez. Diariamente, no almoço e janta, é servido: opções de salada, arroz e feijão, uma opção de mistura (podendo ser substituida por uma opção vegetariana), uma opção de guarnição, duas opções de sobremesa (podendo pegar só uma).<br><br>No Campus 1, o almoço é servido entre 11h e 13h15min e o jantar é servido entre 17h15min e 19h30min. Aos sábados, o horário é um pouco mais curto e somente há o almoço, que ocorre entre 11h e 13h.',
    },
    {
      image: {
        alt: 'cafe da manha',
        src: '/assets/images/bandejao/cafe.jpg',
        caption: 'Um delicioso café da manha no bandejão',
      },
      text: 'O café da manhã, a partir do final do ano de 2023, passou a ser oferecido para todos os alunos, custando somente <strong>50 centavos</strong> e oferencendo café (com e sem açúcar), leite, pão francês, manteiga e uma opção de fruta. Os itens do café da manhã são servidos a vontade, portanto, você pode repetir quantas vezes quiser!<br><br>O café da manhã é servido entre 7h e 8h de segunda a sexta-feira.',
    },
    {
      image: {
        alt: 'mesas internas do bandejão',
        src: '/assets/images/bandejao/mesas.jpg',
        caption: 'Mesas de refeição do bandeco',
      },
      text: 'A salada, o arroz, o feijão, a guarnição e o pão podem ser pegos à vontade, porém a mistura é controlada pelos funcionários, responsáveis por servi-la.<br><br>Para entrar no bandejão é preciso ter créditos na sua carteirinha. O local para recarregar os créditos fica do lado do restaurante e fica aberto entre 9h e 14h de segunda a sexta-feira. Então não se esqueça de verificar previamente se você tem créditos para não ficar sem janta!',
    },
    {
      text: 'Você também pode gerar um boleto ou chave PIX (copia e cola) para fazer a recarga pelo <strong><a target="_blank" rel="noopener noreferrer" href="https://portalservicos.usp.br">Portal de Serviços</a></strong>: restaurante universitário → boleto → comprar, para emitir um boleto, e restaurante universitário → Pix → comprar, para emitir a chave e poder pagar via Pix. Ou pelo aplicativo <strong>Cardápio USP:</strong> ícone de dinheiro logo abaixo de "SALDO RUCard" → fazer login → inserir um valor entre R$20,00 e R$200,00 → gerar boleto, para pagamento por boleto, e ícone de dinheiro logo abaixo de "SALDO RUCard" → fazer login → inserir um valor entre R$20,00 e R$200,00 → pagamento PIX, para pagar via PIX. <br><br>Vale notar que uma vez pago, o valor do boleto pode demorar de 1 a 3 dias para cair na sua conta, já para pagamento via Pix o valor cai na sua conta em no máximo alguns minutos.',
    },
    {
      image: {
        alt: 'como adicionar creditos na conta',
        src: '/assets/images/bandejao/creditos.jpg',
        caption: 'Recarga de créditos do bandejão pelo Portal de Serviços',
      },
    },
    {
      image: {
        alt: 'marmitas servidas durante a pandemia',
        src: '/assets/images/bandejao/marmita.jpg',
        caption: 'Marmitas servidas durante a pandemia',
      },
      text: 'Você pode consultar o cardápio do dia pelo <a target="_blank" rel="noopener noreferrer" href="http://www.puspsc.usp.br/cardapio/">site da prefeitura do campus</a>, pelo aplicativo <a target="_blank" rel="noopener noreferrer" href="https://sites.usp.br/sas/exemplo-de-post-2/">Cardápio USP</a>, ou até mesmo por um <a href="https://t.me/BandejaoBot" target="_blank" rel="noreferrer noopener">bot no telegram</a>.<br><br>Durante o período de pandemia, o bandejão estava sendo oferecido por meio de marmitas, ou seja, não era permitido comer no restaurante. No dia 07/02/2022, houve a reabertura do bandejão presencial com distanciamento entre as cadeiras, tendo bem menos ocupação do que o normal, no entanto, dado aos números indicando melhora da situação da pandemia no estado, tais medidas não são mais adotadas e continua sendo possível adentrar ao restaurante para se alimentar.<br><br>Estudantes com dificuldades socioeconômicas podem acessar o auxílio alimentação oferecido pela <a target="_blank" rel="noopener noreferrer" href="http://www.puspsc.usp.br/bolsas-e-auxilios/">prefeitura do campus</a>.',
    },
  ]
}
