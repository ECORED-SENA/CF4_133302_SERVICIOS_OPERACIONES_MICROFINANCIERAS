<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-11
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Procesos y procedimientos para recaudo cartera 
    p.mb-5(data-aos='fade-right') Recaudo de cartera es juntar todo tipo de recursos, provenientes de créditos entregados a los clientes de microfinanzas, con las condiciones establecidas por la entidad financiera. 
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/107.svg', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-colors.p-4.h-100
          img.m-auto(src='@/assets/curso/temas/108.svg', alt='' style="width: 90px").mb-3
          .d-flex.justify-content-center
            .p-1(style="background-color: #201144 ").mb-4
              h4.text-white.mb-0 Procesos de recaudo de cartera 
          p.text-center Son todos los pasos que debe realizar el asesor de microfinanzas para tener un recaudo de cartera exitoso, dependiendo de las políticas de recuperación de cartera que tenga la entidad financiera.  
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.card-colors.p-4.h-100
          img.m-auto(src='@/assets/curso/temas/109.svg', alt='' style="width: 90px").mb-3
          .d-flex.justify-content-center
            .p-1(style="background-color: #201144 ").mb-4
              h4.text-white.mb-0 Procedimientos de recaudo de cartera 
          p.text-center Es el conjunto de acciones que el asesor de microfinanzas realiza junto con cada proceso que establece la entidad financiera, de acuerdo con sus políticas de cobranza. 
    .row.justify-content-center.mb-5
      .col-lg-10 
        .tarjeta.p-4(style="#dfbba0").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/110.svg', alt='')
            .col-lg-10
              p.mb-0 En las entidades financieras se tienen concertaciones con los clientes para un recaudo exitoso, el cliente por ejemplo, puede dividir su pago mensual en pequeñas cuotas o tipos de recaudo diarias o semanales, incluso quincenal para su facilidad de pago, evitando así que se puedan juntar 2 cuotas y pase a otro tipo de cobro como casas de cobranzas. 
    p.mb-5(data-aos='fade-right') Lo ideal para una entidad financiera es evitar al máximo recoger o cobrar la garantía que ha dejado el microempresario, porque en muchas ocasiones sale más costoso y tiene mayor trámite. 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
        p.mb-4 Las garantías dependen de cada institución; en el sector de microfinanzas, las más comunes son: 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta card-blue")
          div(titulo="Personales ")
            p Validar la firma en el pagaré, que por lo general no lo firma solo una persona (titular del crédito), sino que se le pide que firme el cónyuge, haciendo parte del crédito. 
          div(titulo="Aval o fiadores ")
            p Son aquellas personas que responden por el crédito en caso que el titular falte en las cuotas o en la totalidad del crédito, teniendo la misma responsabilidad ante la entidad financiera. 
          div(titulo="Reales")
            p Fondo Nacional de Garantías: es un instrumento por medio del cual en este caso los microempresarios pueden acceder a microcréditos cuando no cuentan con las condiciones suficientes para respaldarlo. 
              br
              br
              |A la entidad financiera le permite compensar pérdidas incurridas por desembolsos de los microcréditos. Cabe aclarar que la garantía del FNG no cubre la pérdida de los créditos. 
          div(titulo="Hipoteca ")
            p En microfinanzas no son tan comunes, sin embargo, se pueden presentar para el respaldo de un crédito; tienen mayor trámite, por ende mayor tiempo, porque se debe dejar un bien inmueble como garantía de la deuda. 
          div(titulo="Prendarias ")
            p En este tipo de garantía se deja como garantía maquinaria o vehículo, de acuerdo con las políticas de crédito de la entidad financiera. 
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/111.png', alt='')
    p.mb-5(data-aos='fade-right') Conozcamos otros tipos de cobros:  
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.p-5(style="background-color: #116562 ")
        .row.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/112.svg', alt='Texto que describa la imagen')
        .p-1.d-inline-block(style="background-color: #201144 ").mb-4
          h4.text-white.mb-0.me-4 Cobro prejurídico o extrajudicial
        p.text-white También conocido como persuasivo, este tipo de cobro es gestionado directamente por la entidad financiera a través de los asesores de microfinanzas, y se realiza cuando la deuda ya se encuentra en mora, dependiendo de las políticas de cobranzas de la entidad, este cobro puede darse dentro de los 30 primeros días. 
      
      .col-md.tarjeta.p-5(style="background-color: #d2f5f4 ")
        .row.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/113.svg', alt='Texto que describa la imagen')
        .p-1.d-inline-block(style="background-color: #201144 ").mb-4
          h4.text-white.mb-0.me-4 Cobro judicial
        p También llamado jurídico, este generalmente se ejecuta cuando el cliente pasa de mora los 30 días, y es cobrado por casas de cobranza, a través de abogados, los cuales hacen más costoso el pago de la cuota.




</template>

<script>
export default {
  name: 'Tema11',
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
