<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de cobranzas
    p.mb-5(data-aos='fade-right') Dependiendo de las políticas de cada entidad financiera, esta gestión puede ser realizada directamente por los funcionarios de la entidad o por firmas externas autorizadas, comúnmente llamadas casas de cobranzas; este trámite depende de la edad de mora en que se encuentre el crédito y sus garantías. 
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/17.png', alt='')
      .col-lg-9
        p Las formas más conocidas de cobranza, son: 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta card-blue")
          div(titulo="Gestión extrajudicial ")
            p Son las actividades que se realizan con el objetivo que los clientes no queden en mora en sus obligaciones o recuperar las que ya se vencieron. Este tipo de gestión de cobranza puede ser: 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Preventiva:] acciones que se generan con antelación a la fecha de vencimiento de los microcréditos, con el propósito de recordar la fecha límite del próximo pago o vencimiento. Esta gestión la podrán realizar los asesores de la entidad financiera o personas externas especializadas, a través de llamadas telefónicas, o mensajes de textos. 
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Administrativa:] se indaga al cliente cuáles fueron las razones que lo llevaron al no pago de las obligaciones, se brinda orientación y se definen compromisos de pago que permitan la normalización de las obligaciones crediticias. 
          div(titulo="Gestión judicial ")
            p Estas acciones judiciales comienzan cuando no se logra colocar al día las obligaciones o cuando el banco considera que existe un riesgo jurídico o financiero que lo amerite. 
            
          div(titulo="Gestión dual ")
            p Son todas aquellas actividades que se realizan de manera simultánea tanto en la entidad financiera, como por parte de los agentes externos especializados como las casas de cobranzas, cuyo objetivo es colocar las obligaciones al día que se consideran poco probables de pagar. 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Etapas
    p.mb-5(data-aos='fade-right') Se debe generar un trámite a la hora de hacer la gestión, porque de entrada no se vencen todos los términos, como se mostró anteriormente; la edad de la cartera es la que hace que se vayan venciendo las siguientes etapas: 
    .fondo-slyder.tarjeta.p-5
      SlyderA(tipo='b').text-white
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Cobranza preventiva 
            p Encontramos básicamente: 
              br
              br
              |Formación del cliente: se maneja la educación financiera. Se informa al cliente antes del desembolso, acerca del funcionamiento del producto, plan de pagos, punto de pago, beneficios y consecuencias del incumplimiento de la obligación. 
              br
              br
              |Establecimiento de fechas de pago: se tomará de acuerdo con el flujo de efectivo del cliente. 
              br
              br
              |Reconocimiento a clientes cumplidos. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/18.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-5.mb-4.mb-md-0
            h4 Cobranza operativa  
            p Se realiza desde el primer día de mora hasta el día 60. En los primeros días hay comunicación telefónica con el cliente para obtener compromiso, el gerente en esta etapa es garante del crédito. 
              br
              br
              |En el sector de microfinanzas se puede catalogar al cliente:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Que quiere y puede pagar. 
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Quiere y no puede pagar. 
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Que no quiere y puede pagar. 
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Que no quiere y no puede. 
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/19.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Cobranza jurídica 
            p Esta se lleva a partir del momento en que termina la etapa de cobranza operativa, generalmente 61 días después que se presentó la mora, hasta el momento que se realiza la recuperación o castigo de la cartera. 
              br
              br
              |Esta etapa es responsabilidad de un abogado externo que delegue la entidad, y su gestión deberá ser supervisada por el área de cobranzas. 
          .col-lg-5.col-7
            figure
              img(src='@/assets/curso/temas/20.png', alt='Texto que describa la imagen')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Consecuencias de la cartera morosa
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        p.mb-0 Un crédito que no se pague a tiempo siempre traerá consecuencias negativas, que pueden ir desde la pérdida de credibilidad hasta intereses de mora. En primera instancia, la entidad financiera solicitará el pago de la cuota que puede ir con costos adicionales en intereses de mora o de honorarios de abogado. Posteriormente, pasados los 30 días, la entidad financiera realizará un reporte a las centrales de riesgo, afectando el buen nombre que tenía el cliente ante los diferentes sectores de la economía. 
      .col-lg-8
        div(style="background-color: #d1ced9")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/21.svg', alt='')
            .col-lg-7
              .p-3
                p.mb-0 Una de las consecuencias graves es el hecho de implicar a otros, esto en el caso de los avales, quienes depositaron la confianza en el cliente, al momento de respaldar la deuda. Dependiendo de las políticas de recaudo de cartera vencida de la entidad y de la edad de mora, se entregará la cartera a una casa de cobranza ocasionando mayores costos y cobros de garantía. Finalmente, se cierran las puertas para futuros créditos que le servirían para seguir adelante con la microempresa. 
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Consolidación de información
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.png', alt='')
      .col-lg-8
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Con suma frecuencia, no se sabe cobrar y es por lo que el atraso en la cobranza se hace notable.
            i.fas.fa-quote-right
            p.text-end.d-block (Molina, 1995)
        p La consolidación de información da un panorama más amplio de quién puede ser esa persona en su vida crediticia, esta información puede ser positiva si el cliente ha cumplido con sus obligaciones de manera adecuada, pero si por el contrario, este cliente ha quedado mal con las cuotas de sus préstamos, hablará muy mal de él, no solo dentro de la entidad que quedó en mora, sino con otros sectores de la economía del sector real o solidario. 
        .tarjeta.p-4(style="border: #b15815 2px solid ").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/23.svg', alt='')
            .col-lg-10
              p.mb-0 Uno de los modelos de consolidación de la información en manera crediticia son las centrales de riesgo, allí se consolida toda la información de una persona en todos los sectores de la economía.
        p Sin embargo, existen otras maneras de consolidación de la información en el sector microfinanciero, por ejemplo, se puede obtener gran cantidad de información cuando se realiza una visita al cliente. 
    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4  Reportes
    p.mb-5(data-aos='fade-right') Los reportes permiten generar la información necesaria para diseñar y administrar el flujo de trabajo de su estrategia de cobranzas. Un informe de gestión de cobranzas simple y claro visualmente, representa mejores decisiones. 
      br
      br
      |Existen diferentes reportes de cobranzas, algunos de ellos son: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/24.svg', alt='')
            .col-lg-6
              p.mb-0 Cuota por cobrar. 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/25.svg', alt='')
            .col-lg-6
              p.mb-0 Saldos de capital por cliente. 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/26.svg', alt='')
            .col-lg-6
              p.mb-0 Cartera por edades.  
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.svg', alt='')
            .col-lg-6
              p.mb-0 Resumen general de cartera. 
    .row.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-6
              p.mb-0 Resumen general de cartera por fecha. 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.svg', alt='')
            .col-lg-6
              p.mb-0 Reporte de movimientos de crédito. 
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #dfbba0 ").mb-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-5.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.svg', alt='')
            .col-lg-6
              p.mb-0 Reporte de provisiones. 
    Separador 
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5  Informes 
    p.mb-5(data-aos='fade-right') Los informes de gestión de cobranzas permiten: 
    .tarjeta.p-4(style="background-color: #e8faf9 ")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/31.svg', alt='')
        .col-lg-8
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Medir el nivel de efectividad de los cobradores o asesores que tengan a su cargo esta labor. 
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Tener un control de la cantidad de clientes por cobrador y del monto adeudado. 
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Evaluar la eficiencia de los cobradores.
            li.d-flex
              i.fas.fa-check-circle
              p.mb-0 Monitorear los costos de recuperación a clientes. 































            

</template>

<script>
export default {
  name: 'Tema2',
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
