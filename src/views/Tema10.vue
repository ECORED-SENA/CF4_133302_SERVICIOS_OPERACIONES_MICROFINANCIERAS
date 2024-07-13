<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Políticas de normalización de cartera 
    .tarjeta.p-4(style="#dfbba0").mb-4
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/99.svg', alt='')
        .col-lg-10
          p.mb-0 Son todos aquellos lineamientos, normas y procedimientos que tiene una entidad financiera para colocar su cartera al día. Cada entidad podrá ofrecer diferentes alternativas a los clientes que se encuentren con sus deudas vencidas, algunas de ellas son:  
    TabsC.color-acento-contenido.mb-5
      .p-5.py-4.py-md-5(titulo="Reestructuración " style="background-color: #e8faf9")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Reestructuración 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Modificación en las condiciones iniciales de crédito.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Se amplía plazo y se reduce cuota. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Se mantiene la misma obligación. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Reporte a las centrales de riesgo.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/100.png', alt='')
      .p-5.py-4.py-md-5(titulo="Prórroga de microfinanzas" style="background-color: #e8faf9")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Prórroga de microfinanzas 
            ul.lista-ul--color
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Obligación al día o en mora hasta 29 días al momento de la contabilización. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Amplía plazo, se mantiene valor cuota. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Se pueden prorrogar hasta 3 cuotas. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 No reporta centrales de riesgo. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Debe utilizarse en forma excepcional y estar debidamente justificada. 
          .col-lg-5.col-7: img(src='@/assets/curso/temas/101.png', alt='')
      .p-5.py-4.py-md-5(titulo="Prórroga y/o rediferido " style="background-color: #e8faf9")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Prórroga y/o rediferido 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Consiste en el traslado de la(s) cuota(s) de un crédito a una nueva fecha de pago, sin ampliar ni modificar el vencimiento final de la operación original. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 No reporta centrales de riesgo.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 No aplica para créditos de única o última cuota. 
          .col-lg-5.col-7: img(src='@/assets/curso/temas/102.png', alt='')
      .p-5.py-4.py-md-5(titulo="Mejoramiento de perfil " style="background-color: #e8faf9")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Mejoramiento de perfil 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Obligación al día o en mora hasta 29 días al momento de la contabilización.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Modificación de condiciones iniciales de crédito. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Amplía plazo, reduce cuota.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 No reporta a centrales de riesgo. 
          .col-lg-5.col-7: img(src='@/assets/curso/temas/103.png', alt='')
      .p-5.py-4.py-md-5(titulo="Mejoramiento de perfil con modalidad de abono parcial" style="background-color: #e8faf9")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Mejoramiento de perfil con modalidad de abono parcial 
            ul.lista-ul--color
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Obligación al día o en mora, hasta 29 días al momento de la contabilización.
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Modificación en las condiciones iniciales de crédito. Amplía plazo y reduce cuota. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 El plazo será ampliado dependiendo de las políticas de cada entidad financiera. 
          .col-lg-5.col-7: img(src='@/assets/curso/temas/104.png', alt='')
      .p-5.py-4.py-md-5(titulo="Subrogación " style="background-color: #e8faf9")
       .row
          .col-lg-6.mb-4.mb-md-0
            h4 Subrogación 
            ul.lista-ul--color
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Asume obligación un tercero, debe acreditar características de sujeto de crédito. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 Genera nueva obligación. 
              li.d-flex.mb-0 
                i.fas.fa-check-circle
                p.mb-0 No reporta a centrales de riesgo. 
          .col-lg-5.col-7: img(src='@/assets/curso/temas/105.png', alt='')
      .p-5.py-4.py-md-5(titulo="Cambio de fecha " style="background-color: #e8faf9")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Cambio de fecha 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Modificación día de pago de la cuota. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 No reporta a centrales de riesgo. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Los intereses causados por el cambio de fecha, deberán ser cancelados por el cliente o autorizar cargarlos a la siguiente cuota.
          .col-lg-5.col-7: img(src='@/assets/curso/temas/106.png', alt='')
    p.mb-5(data-aos='fade-right') Toda organización, empresa o entidad financiera que otorgue préstamos, dentro de su política crediticia y cobranza deberá contener la normalización de la cartera, para profundizar en el tema se recomienda hacer el análisis de los puntos fuertes en la cobranza, expuestos en el libro Crédito y Cobranza, el cual se encuentra en el material complementario. 
    

</template>

<script>
export default {
  name: 'Tema10',
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
