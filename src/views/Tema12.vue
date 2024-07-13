<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-12
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Informe de cobranza 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Permite comprobar toda la información respecto de la cobranza que se maneja en la entidad financiera, ya sean las direcciones de los clientes y los montos de los documentos que se adeudan. 
          br
          br
          |Un informe de cobranza debe contener la siguiente información:
        .p-4(style="background-color: #201144 ")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-7(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/114.svg', alt='')
            .col-lg-7
              ul.lista-ul--color
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Fecha de realización. 
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Nombre del asesor quien realiza el informe.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Nombre del cliente.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Dirección del negocio.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Teléfonos de cliente. 
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Ciudad – Localidad – Barrio.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Estado del crédito (edad de mora). 
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Deuda (total y cuota vencida). 
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Compromiso del cliente.
                li.d-flex.mb-0
                  i.fas.fa-check-circle
                  p.mb-0.text-white Firmas del asesor y del cliente. 
      .col-lg-4(data-aos="fade-left").col-7: img(src='@/assets/curso/temas/115.svg', alt='')
    p.mb-5(data-aos='fade-right') El informe de cobranza es de gran importancia para las entidades microfinancieras, debido a que allí se refleja la gestión realizada por los asesores en su labor de recuperación de cartera. En estos informes se reflejan los compromisos que ha hecho el cliente que se encuentra con su crédito vencido, las fechas en que pretende cumplir y las razones de su incumplimiento. Estos informes deben estar firmados tanto por el cliente como por el asesor de microfinanzas.
    .row.justify-content-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/116.png', alt='')
      .col-lg-6(data-aos="fade-right")
        p Antes de la realización de un informe de cobranza, se debe realizar la respectiva gestión de cobranzas, y para ello se deben tener en cuenta los siguientes pasos: 
        LineaTiempoD.color-primario
          .text-small(numero="1" titulo="Preparación y planeación ")
            p.mb-0 Se tendrán en cuenta aspectos como el cálculo de los intereses en mora, análisis de las garantías presentadas por el cliente al momento del desembolso y la edad de mora del microcrédito.  
          .text-small(numero="2" titulo="Comunicación y negociación ")
            p.mb-0 Posteriormente, se procede a establecer contacto directo con el cliente, se verifica con él las razones del no pago, se escucha y se toma nota de las razones entregadas por el cliente; se le recuerdan los costos en que está incurriendo por la mora y la honorabilidad que tiene frente a la entidad. 
          .text-small(numero="3" titulo="Compromiso y seguimiento ")
            p.mb-0 Es fundamental hacer un acta de negociación, allí se dejan los compromisos adquiridos en términos de cumplimiento (fechas y valor), y si hay lugar a garantías adicionales. 
          .text-small(numero="4" titulo="Cobro pre jurídico y jurídico ")
            p.mb-0 Dependerá de las políticas de cada entidad microfinanciera, sin embargo, a nivel general, el cobro prejurídico se realiza para el sector de microfinanzas antes de los 30 días y este será realizado directamente por el asesor que desembolsó el microcrédito, y el cobro jurídico se realizará a partir del día 31 y será realizado por una casa de cobranza, a través de abogados. 










</template>

<script>
export default {
  name: 'Tema12',
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
