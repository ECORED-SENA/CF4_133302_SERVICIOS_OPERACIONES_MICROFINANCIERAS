export default {
  global: {
    componenteFormativo: 'Recuperar cartera',
    descripcionCurso:
      '​​​En el presente componente formativo, se hace un planteamiento de la forma correcta de cobrar y cómo este fundamental proceso se requiere de manera indispensable en las entidades financieras y microempresas. La cartera y la cobranza no es un tema solo del prestador del servicio, es una hoja de vida del microempresario que sale a competir en un mercado en el que necesita credibilidad. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Administración de cartera',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de cobranzas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Consecuencias de la cartera morosa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Consolidación de información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Reportes',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Informes',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: ' Información de clientes deudores ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Hábitos de pago',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Capacidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Voluntad de pago',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ley del consumidor financiero y Ley de <i>Habeas Data</i> ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Derechos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Obligaciones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Derechos <em>Habeas Data</em> ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estrategias de recuperación de cartera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Técnicas de cobranzas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Servicio al cliente ',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Procesos de negociación',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Canales de comunicación organizacional ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Objeciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Proyecciones y acuerdos de pago',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Políticas de normalización de cartera ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Procesos y procedimientos para recaudo cartera ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Informe de cobranza ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Evaluación de la gestión de cobranza ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/133302_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ley del consumidor financiero y Ley de <i>Habeas Data</i>',
      referencia:
        'JFK Cooperativa Financiera. (2019). Ley Habeas Data (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hx7qjvNftfY',
    },
  ],
  glosario: [
    {
      termino: 'Eficiencia operativa',
      significado: 'mide la eficiencia en ciertos rubros de la empresa.',
    },
    {
      termino: 'Liquidez',
      significado: 'mide la capacidad de pago en efectivo de una empresa.',
    },
    {
      termino: 'Mora',
      significado:
        'también llamado morosidad bancaria, el cual es un indicador de riesgo que los deudores de los bancos no cumplan con sus obligaciones de pago con los créditos adquiridos.',
    },
    {
      termino: 'Rentabilidad',
      significado: 'mide las utilidades o ganancias de una empresa.',
    },
    {
      termino: 'Solvencia',
      significado:
        'mide la habilidad que tiene la empresa para cubrir sus compromisos inmediatos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco, G. C. (2013). Comunicación y atención al cliente. Macmillan Iberia, S.A.',
    },
    {
      referencia:
        'Brachfield, P. (2019). Credit management: cómo conceder créditos a clientes y evitar los impagados. FC Editorial.',
    },
    {
      referencia: 'Congreso de Colombia (2209) Ley 1329 de 2009',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36841',
    },
    {
      referencia:
        'Gulli, H. (1999). Microfinanzas y pobreza. Banco Interamericano de Desarrollo.',
    },
    {
      referencia:
        'Molina, V. (1995). Estrategias de cobranza en época de crisis. Editorial ISEF.',
    },
    {
      referencia:
        'Morales Castro, J. A. y Castro, A. M. (2015). Crédito y cobranza. Grupo Editorial Patria.',
    },
    {
      referencia:
        'Sapag, N. (2007). Proyectos de inversión: formulación y evaluación.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Vilma Andrea Baracaldo Neira',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
