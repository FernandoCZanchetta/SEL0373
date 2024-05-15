import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'

@Component({
  selector: 'app-preparacao-estudos',
  templateUrl: './preparacao-estudos.component.html',
})
export class PreparacaoEstudosComponent {
  taskManagerLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/Todoist.png',
        alt: 'todist',
        caption: 'Todoist',
      },
      url: 'https://todoist.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/microsofttodo.png',
        alt: 'microsoft to do',
        caption: 'Microsoft To-Do',
      },
      url: 'https://todo.microsoft.com/tasks/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Pomofocus.png',
        alt: 'pomodoro',
        caption: 'Pomofocus',
      },
      url: 'https://pomofocus.io/',
    },
  ]

  planningLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/Notion.png',
        alt: 'notion',
        caption: 'Notion',
      },
      url: 'https://www.notion.so/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Trello.png',
        alt: 'Trello',
        caption: 'Trello',
      },
      url: 'https://trello.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Calendar.png',
        alt: 'google calendar',
        caption: 'Google Calendar',
      },
      url: 'https://workspace.google.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/matrusp.png',
        alt: 'matrusp',
        caption: 'MatrUSP',
      },
      url: 'https://bcc.ime.usp.br/matrusp/',
    },
  ]

  notetakingLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/roam.png',
        alt: 'roam research',
        caption: 'Roam Research',
      },
      url: 'https://roamresearch.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/obsidian.png',
        alt: 'obsidian',
        caption: 'Obsidian',
      },
      url: 'https://obsidian.md/',
    },
    {
      image: {
        src: '/assets/images/preparacao/OneNote.png',
        alt: 'onenote',
        caption: 'Onenote',
      },
      url: 'https://www.onenote.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/Evernote.png',
        alt: 'evernote',
        caption: 'Evernote',
      },
      url: 'https://evernote.com/',
    },
  ]

  otherToolsLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/eesc.jpg',
        alt: 'eesc',
        caption: 'EESC Intranet',
      },
      url: 'https://eesc.usp.br/intranet/',
    },
    {
      image: {
        src: '/assets/images/preparacao/meet.png',
        alt: 'meet',
        caption: 'Google Meet',
      },
      url: 'https://apps.google.com/meet/',
    },
    {
      image: {
        src: '/assets/images/preparacao/zoom.png',
        alt: 'zoom',
        caption: 'Zoom',
      },
      url: 'https://zoom.us/',
    },
    {
      image: {
        src: '/assets/images/preparacao/classroom.png',
        alt: 'classroom',
        caption: 'Google Classroom',
      },
      url: 'https://edu.google.com/intl/pt/products/classroom/',
    },
    {
      image: {
        src: '/assets/images/preparacao/edisciplinas.png',
        alt: 'edisciplinas',
        caption: 'Edisciplinas',
      },
      url: 'https://edisciplinas.usp.br/acessar/',
    },
  ]

  electricalToolsLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/ltspice.png',
        alt: 'ltspice',
        caption: 'LTspice',
      },
      url: 'https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html',
    },
    {
      image: {
        src: '/assets/images/preparacao/simulide.png',
        alt: 'simulide',
        caption: 'SimulIDE',
      },
      url: 'https://simulide.com/p/',
    },
    {
      image: {
        src: '/assets/images/preparacao/falstad.png',
        alt: 'falstad',
        caption: 'Falstad',
      },
      url: 'https://www.falstad.com/circuit/circuitjs.html',
    },
    {
      image: {
        src: '/assets/images/preparacao/proteus.png',
        alt: 'proteus',
        caption: 'Proteus',
      },
      url: 'https://www.labcenter.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/kicad.png',
        alt: 'kicad',
        caption: 'KiCad',
      },
      url: 'https://www.kicad.org/',
    },
    {
      image: {
        src: '/assets/images/preparacao/tinkercad.png',
        alt: 'tinkercad',
        caption: 'Tinkercad',
      },
      url: 'https://www.tinkercad.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/fritzing.png',
        alt: 'fritzing',
        caption: 'Fritzing',
      },
      url: 'https://fritzing.org/',
    },
  ]

  programmingToolsLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/vscode.png',
        alt: 'vscode',
        caption: 'Visual Studio Code',
      },
      url: 'https://code.visualstudio.com/Download',
    },
    {
      image: {
        src: '/assets/images/preparacao/onlinegdb.png',
        alt: 'onlinegdb',
        caption: 'OnlineGDB',
      },
      url: 'https://www.onlinegdb.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/replit.png',
        alt: 'replit',
        caption: 'replit',
      },
      url: 'https://replit.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/git.png',
        alt: 'git',
        caption: 'git',
      },
      url: 'https://git-scm.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/github.png',
        alt: 'github',
        caption: 'GitHub',
      },
      url: 'https://github.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/arduinoide.png',
        alt: 'arduinoide',
        caption: 'ArduinoIDE',
      },
      url: 'https://www.arduino.cc/en/software',
    },
    {
      image: {
        src: '/assets/images/preparacao/matlab.png',
        alt: 'matlab',
        caption: 'MATLAB',
      },
      url: 'https://www.mathworks.com/products/matlab.html',
    },
    {
      image: {
        src: '/assets/images/preparacao/octave.png',
        alt: 'gnuoctave',
        caption: 'GNU Octave',
      },
      url: 'https://octave.org/',
    },
    {
      image: {
        src: '/assets/images/preparacao/octaveonline.png',
        alt: 'octaveonline',
        caption: 'OctaveOnline',
      },
      url: 'https://octave-online.net/',
    },
  ]

  mathematicalToolsLogos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/preparacao/desmos.png',
        alt: 'desmos',
        caption: 'desmos',
      },
      url: 'https://www.desmos.com/calculator?lang=pt-BR',
    },
    {
      image: {
        src: '/assets/images/preparacao/geogebra.png',
        alt: 'geogebra',
        caption: 'GeoGebra',
      },
      url: 'https://www.geogebra.org/?lang=pt',
    },
    {
      image: {
        src: '/assets/images/preparacao/veusz.png',
        alt: 'veusz',
        caption: 'Veusz',
      },
      url: 'https://veusz.github.io/',
    },
    {
      image: {
        src: '/assets/images/preparacao/symbolab.png',
        alt: 'symbolab',
        caption: 'Symbolab',
      },
      url: 'https://pt.symbolab.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/wolframalpha.png',
        alt: 'wolframalpha',
        caption: 'WolframAlpha',
      },
      url: 'https://www.wolframalpha.com/',
    },
    {
      image: {
        src: '/assets/images/preparacao/integralcalculator.png',
        alt: 'integralcalculator',
        caption: 'Integral Calculator',
      },
      url: 'https://www.integral-calculator.com/',
    },
  ]
}
