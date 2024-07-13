<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Canales de comunicación organizacional 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #b15815 ").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/79.svg', alt='')
            .col-lg-10
              p.mb-0.text-white Son todos aquellos medios físicos o virtuales que utilizan las empresas/entidades financieras para tener comunicación con sus clientes. Para todos los seres humanos la comunicación es de gran importancia, así mismo las empresas la necesitan con sus clientes, para mantener relaciones de mutuo beneficio. 
    p.mb-5(data-aos='fade-right') Los tipos de canales son una muestra de la evolución de las Tecnologías de la Información (TI). A continuación, se relacionan los más representativos y recomendados: 
    .fondo-slyder.tarjeta.p-5.mb-5
      SlyderA(tipo='b').text-white
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Medios sociales 
            p Hacen parte de los medios tecnológicos o digitales. 
              br
              br
              |Dentro de los medios sociales se encuentran el chat, las redes sociales y los correos.  
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/80.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Blogs 
            p O revista empresarial, es uno de los canales más versátiles y amigables, aquí se pueden adaptar las secciones o contenidos que la empresa desee. Generalmente se utiliza para comunicar noticias corporativas, contenido informativo y hasta contenido interactivo, eventos empresariales, entre otros. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/81.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Email marketing 
            p Este email se enfoca en enviar mensajes cuya finalidad es adquirir nuevos clientes, fidelizar a los actuales e interactuar con los contactos. 
              br
              br
              |Los correos son esenciales para el crecimiento y gestión del negocio. 
              br
              br
              |Los objetivos del email marketing son:
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Notoriedad (dar a conocer el negocio). 
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Imagen (posicionarse como experto). 
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 Acción (vender productos y servicios). 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/82.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Atención al cliente 
            p Se da de manera presencial, virtual o telefónica. En todos los casos debe ser de excelente calidad, hacer sentir al cliente lo mejor y aclararle sus inquietudes y sugerencias será el objetivo principal. 
              br
              br
              |Para microfinanzas, la atención al cliente se podría afirmar que es presencial en la mayoría del tiempo, porque hay una cercanía entidad financiera (asesor) con el cliente desde el primer momento, sin embargo, en el transcurso del tiempo, las llamadas telefónicas son de gran importancia. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/83.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Video 
            p Usualmente escuchamos decir que “una imagen vale más que mil palabras”; los videos se usan mucho como comunicación interna en las empresas, lo que se pretende es motivar, llamar a la acción, pensar de otra forma, cambiar el pensamiento, este puede ser informativo o vivencial. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/84.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Foros de discusión 
            p Son espacios abiertos para discutir o tratar temas específicos, cuyo propósito es que los grupos de interés participen, intercambiando ideas, teorías y opiniones. Los tipos son:
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Foro público:] todos pueden participar sin previa inscripción, todos pueden leer y enviar mensajes. 
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Foro protegido:] requiere registro previo para participar. 
              li.d-flex.mb-1
                i.fas.fa-check-circle
                p.mb-0 #[b Foro privado:] únicamente pueden acceder los usuarios registrados como administrador (es el que permite la entrada), moderador o miembro. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/85.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Canales externos de reclamación 
            p Son todos aquellos canales ajenos a la empresa/entidad financiera que un cliente puede dirigir su queja o reclamo, pueden ser aquellos que vigilen o controlen a estos organismos o aquellos que se pueden hacer públicamente, por ejemplo, las redes sociales. 
              br
              br
              |En el caso de las entidades financieras, están vigiladas y supervisadas por autoridades que intervienen en su funcionamiento y que protegen al consumidor financiero, en este caso se encuentra la Superintendencia Financiera de Colombia, donde el consumidor financiero puede hacer llegar su queja o reclamo cuando la entidad financiera no ha dado respuesta, en el caso de las cooperativas está la Superintendencia de la Economía Solidaria. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/86.png', alt='')

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
