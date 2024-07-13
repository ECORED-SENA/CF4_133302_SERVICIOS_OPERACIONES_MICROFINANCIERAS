<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-9
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Proyecciones y acuerdos de pago
    p.mb-5(data-aos='fade-right') Las proyecciones de pago son aquellas concertaciones que llegan a acordar el cliente con el asesor de microcrédito, una vez el cliente comience a quedar en mora, inclusive puede darse poco antes de su vencimiento si el cliente manifiesta que no puede pagar a la fecha estipulada. Estas proyecciones siempre serán dadas por el cliente, puesto que es él quien sabe realmente cuándo puede pagar, sin embargo, no pueden pasar algunas fechas que estipule la entidad de acuerdo con sus políticas, porque existen rangos de edades de mora para los cuales ya tendrán otro proceso de cobro. 
    .row.justify-content-center.mb-5
      .col-lg-3.col-6: img(src='@/assets/curso/temas/93.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-colors.p-4.h-100
          img.m-auto(src='@/assets/curso/temas/94.svg', alt='' style="width: 90px").mb-3
          .d-flex.justify-content-center
            .p-1(style="background-color: #201144 ").mb-4
              h4.text-white.mb-0 Recursos
          p.text-center Dentro de los recursos que se cuentan en las proyecciones de pago, tenemos: las llamadas, las visitas, los formatos de compromisos de pagos firmadas por el cliente y el asesor, mensajes de texto, entre otros.  
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-colors.p-4.h-100
          img.m-auto(src='@/assets/curso/temas/95.svg', alt='' style="width: 90px").mb-3
          .d-flex.justify-content-center
            .p-1(style="background-color: #201144 ").mb-4
              h4.text-white.mb-0 Plazos
          p.text-center Si un cliente puede completar su cuota dentro del mes, realizará dicha proyección con el asesor, firmando un formato compromiso establecido por la entidad, para no afectar su vida crediticia y su buen nombre con la entidad; pasados 31 días de mora, la cartera pasará a casa de cobranza, además de afectar su calificación en las centrales de riesgo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Ahora, un acuerdo se puede definir como un documento que es firmado por el asesor de microcrédito y el cliente dueño de la obligación, en donde este último se compromete con el pago de la deuda en una o varias fechas dispuestas, debido a su capacidad de pago y situación económica. 
        .tarjeta.p-4(style="border: 1px #201144 solid  ").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/96.svg', alt='')
            .col-lg-10
              p.mb-0 El acuerdo depende de cada entidad financiera, donde el cliente puede hacer acuerdos de pago diarios, semanales, quincenales, o por fechas en las que se compromete el cliente, inclusive si desea tener pagos de diferentes valores, según sus ingresos mensuales o anuales. 
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/97.svg', alt='')
    .row.justify-content-center.mb-5.g-0
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/98.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .p-4(style="background-color: #201144").h-100.d-flex.align-items-center 
            p.mb-0.text-white Cada cliente debe desarrollar un acuerdo de pago con las políticas de la entidad en el espacio mejor dado para ello, puede ser por un canal telefónico, digital o presencial y tener claro que todo debe quedar soportado en grabación o en los formatos empresariales dispuestos para esto, en caso de no ser así, es importante que tenga en cuenta que el acuerdo de pago puede perder su validez por no sustentar los formatos y las formas necesarias de procedimiento. 




</template>

<script>
export default {
  name: 'Tema9',
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
