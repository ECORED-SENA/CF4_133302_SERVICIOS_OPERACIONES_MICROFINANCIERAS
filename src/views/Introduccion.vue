<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .fondo-intro.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/1.svg', alt='' style="width: 88px ").mb-4
          p.mb-0 Cobrar es una necesidad, y en las entidades financieras se realiza de manera adecuada sin agredir ni sobrepasar a las personas. La deuda no es mala cuando se maneja correctamente. 
        .col-lg-8
          div(style="background-color:  #a6eae8")
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-lg-0.mb-3.p-4.p-lg-0: img(src='@/assets/curso/temas/2.svg', alt='')
              .col-lg-7
                .p-3: p.mb-0 Una buena forma de cobrar permite que las personas se sientan valoradas, y contar con una formación adecuada para hacerlo sin ser invasivos puede convertirse en el mejor aliado de las entidades financieras. Cuando se realiza una cobranza adecuada, todos ganan: el usuario, la entidad y el mercado. 
      .tarjeta.overflow-hidden(style="background-color: #dfbba0 ")
        .row.justify-content-center.g-0.align-items-center
          .col-lg-6.mb-lg-0.mb-3
            .p-lg-0.p-4: img(src='@/assets/curso/temas/3.png', alt='')
          .col-lg-6
            .p-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-6: img(src='@/assets/curso/temas/4.svg', alt='')
                .col-lg-10
                  p.mb-0 En este componente formativo, se aborda la mejor manera de cobrar, sistematizando las interacciones entre las partes sin agotar los recursos hasta el punto de la desesperación. Siempre hay un mejor camino para cobrar bien. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
