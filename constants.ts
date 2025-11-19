
import { Missionary, MedicalContextItem, LegacyItem } from './types';

export const MISSIONARIES: Missionary[] = [
  {
    id: 'brainerd',
    name: 'David Brainerd',
    years: '1718-1747',
    role: 'Missionário aos Índios Delaware',
    location: 'América do Norte',
    health: 'Tuberculose ("consumption") agravada por má alimentação e clima rigoroso.',
    psychological: 'Melancolia profunda e episódios severos de depressão espiritual.',
    imagePlaceholder: 'https://flagcdn.com/w640/us.png',
    iconName: 'Flame',
  },
  {
    id: 'spurgeon',
    name: 'Charles Spurgeon',
    years: '1834-1892',
    role: 'O Príncipe dos Pregadores',
    location: 'Reino Unido',
    health: 'Gota severa, reumatismo inflamatório e Doença de Bright (nefrite crônica).',
    psychological: 'Depressão paralisante recorrente, trauma decorrente do desastre no Surrey Gardens e estresse ministerial.',
    imagePlaceholder: 'https://flagcdn.com/w640/gb.png',
    iconName: 'BookOpen',
  },
  {
    id: 'martyn',
    name: 'Henry Martyn',
    years: '1781-1812',
    role: 'Tradutor (Urdu, Persa, Árabe)',
    location: 'Índia / Pérsia',
    health: 'Tuberculose avançada e esgotamento físico total. Faleceu sozinho na Turquia.',
    psychological: 'Solidão profunda, isolamento afetivo e perfeccionismo espiritual.',
    imagePlaceholder: 'https://flagcdn.com/w640/in.png',
    iconName: 'Scroll',
  },
  {
    id: 'slessor',
    name: 'Mary Slessor',
    years: '1848-1915',
    role: 'Rainha de Calabar',
    location: 'Nigéria',
    health: 'Malária crônica e febres intermitentes debilitantes por mais de 40 anos.',
    psychological: 'Estresse extremo em zonas de conflito e isolamento cultural.',
    imagePlaceholder: 'https://flagcdn.com/w640/ng.png',
    iconName: 'Shield',
  },
  {
    id: 'judson',
    name: 'Adoniram Judson',
    years: '1788-1850',
    role: 'Tradutor da Bíblia',
    location: 'Birmânia (Myanmar)',
    health: 'Febres severas, esgotamento e sequelas físicas de 21 meses de prisão brutal.',
    psychological: 'Luto traumático pela perda de esposas e filhas, depressão profunda em reclusão.',
    imagePlaceholder: 'https://flagcdn.com/w640/mm.png',
    iconName: 'Anchor',
  },
  {
    id: 'taylor',
    name: 'Hudson Taylor',
    years: '1832-1905',
    role: 'Fundador da CIM',
    location: 'China',
    health: 'Problemas hepáticos crônicos, paralisia temporária após queda e exaustão.',
    psychological: 'Colapsos nervosos devido à responsabilidade imensa sobre centenas de missionários.',
    imagePlaceholder: 'https://flagcdn.com/w640/cn.png',
    iconName: 'MapPin',
  },
  {
    id: 'carmichael',
    name: 'Amy Carmichael',
    years: '1867-1951',
    role: 'Fundadora de Dohnavur',
    location: 'Índia',
    health: 'Acamada por 20 anos após um acidente grave, sofrendo de dores neurálgicas constantes.',
    psychological: 'Necessidade de liderar uma grande obra através de cartas, sem mobilidade.',
    imagePlaceholder: 'https://flagcdn.com/w640/in.png',
    iconName: 'Sparkles',
  },
  {
    id: 'paton',
    name: 'John G. Paton',
    years: '1824-1907',
    role: 'Apóstolo de Vanuatu',
    location: 'Vanuatu',
    health: 'Múltiplos episódios de malária e disenteria que quase o mataram.',
    psychological: 'Luto devastador pela perda da esposa e filho recém-nascido logo após a chegada.',
    imagePlaceholder: 'https://flagcdn.com/w640/vu.png',
    iconName: 'Palmtree',
  },
  {
    id: 'aylward',
    name: 'Gladys Aylward',
    years: '1902-1970',
    role: 'A Pequena Mulher',
    location: 'China',
    health: 'Desnutrição extrema, febre tifoide e pneumonia decorrentes da fuga com órfãos.',
    psychological: 'Exaustão de guerra e trauma por testemunhar brutalidade extrema.',
    imagePlaceholder: 'https://flagcdn.com/w640/cn.png',
    iconName: 'Mountain',
  },
];

export const MEDICAL_CONTEXT: MedicalContextItem[] = [
  {
    id: 'tb',
    title: 'A Peste Branca',
    subtitle: 'Tuberculose',
    description: 'Uma sentença de morte lenta e romântica na literatura, mas brutal na realidade.',
    details: [
      'Acreditava-se ser hereditária ou causada por "paixões tristes".',
      'Sem antibióticos, o único tratamento era "ar fresco" e repouso em sanatórios.',
      'Causava emaciação profunda (consumpção) e hemoptise (tosse com sangue).',
    ]
  },
  {
    id: 'malaria',
    title: 'O Mau Ar',
    subtitle: 'Malária',
    description: 'O flagelo dos trópicos, incompreendido até o final do século XIX.',
    details: [
      'Atribuída aos miasmas (vapores tóxicos) dos pântanos, não aos mosquitos.',
      'O quinino era conhecido, mas frequentemente administrado em doses tóxicas ou ineficazes.',
      'Provocava ciclos debilitantes de febre alta, calafrios e anemia profunda.',
    ]
  },
  {
    id: 'treatments',
    title: 'Medicina da Impotência',
    subtitle: 'Tratamentos Arcaicos',
    description: 'Quando a cura era, muitas vezes, mais perigosa que a enfermidade.',
    details: [
      'Baseada na Teoria Humoral: equilíbrio de sangue, fleuma, bile amarela e negra.',
      'Sangrias (flebotomia) e purgas com mercúrio eram práticas comuns.',
      'Total ausência de noções de assepsia, levando a infecções secundárias letais.',
    ]
  }
];

export const LEGACY_ITEMS: LegacyItem[] = [
  {
    name: 'Ida S. Scudder',
    institution: 'Christian Medical College (CMC)',
    description: 'Confrontada pela morte de três mulheres em trabalho de parto numa única noite por falta de uma médica, dedicou sua vida a formar mulheres na medicina. Hoje, o CMC Vellore é um dos hospitais de pesquisa mais respeitados do mundo.',
    imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/CMC_Vellore_Chapel.jpg/800px-CMC_Vellore_Chapel.jpg'
  },
  {
    name: 'Albert Schweitzer',
    institution: 'Hospital Lambaréné',
    description: 'Teólogo brilhante e músico que abandonou a academia para se tornar médico na África. Seu conceito de "Reverência pela Vida" e seu hospital no Gabão tornaram-se símbolos globais de serviço humanitário integral.',
    imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/H%C3%B4pital_Albert_Schweitzer_Lambar%C3%A9n%C3%A9.jpg/800px-H%C3%B4pital_Albert_Schweitzer_Lambar%C3%A9n%C3%A9.jpg'
  }
];
