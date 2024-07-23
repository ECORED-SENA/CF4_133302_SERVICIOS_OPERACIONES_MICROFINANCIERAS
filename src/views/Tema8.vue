<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-8
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Objeciones
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/87.svg', alt='')
      .col-lg-7
        p.mb-0 Son todas aquellas barreras u obstáculos que el cliente interpone para evitar alguna negociación, en el caso de la recuperación de cartera, el cliente expondrá todas las excusas o razones válidas para el no pago de la obligación adquirida. El papel que desempeña el asesor microfinanciero es esencial para el manejo de dichas objeciones, porque como hubo un previo conocimiento en el otorgamiento del crédito, hay un grado de confianza que permite mover al asesor frente a cada objeción que presente el cliente, porque cualquier objeción es respecto a su vida y no respecto a su deuda con la entidad. 
    p.mb-5(data-aos='fade-right') Conozcamos los tipos de objeciones: 
    TabsA.color-acento-botones.mb-5
      .tarjeta.p-5(titulo="Pasiva – Psicológica " style="background-color: #f6ede6 ")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            h4 Pasiva – Psicológica 
            p Por lo general, ocurre como reacción para dilatar el pago. 
              br
              |Dentro de las más comunes excusas o razones, tenemos: 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 ¡Qué pena, no me llegó la factura! 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 ¡El cheque está girado, pero no lo han firmado! 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 ¿Cómo quiere que le pague si no hay ventas?
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Estoy esperando una plática, cuando me llegue le cancelo. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 ¡Tuve una calamidad, pero muy pronto le cancelo! 
          .col-lg-3.col-6: img(src='@/assets/curso/temas/88.svg', alt='')
      .tarjeta.p-5(titulo="Administrativa – Legal " style="background-color: #f6ede6 ")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            h4 Administrativa – Legal 
            p Este tipo de objeciones puede no darse, siempre y cuando haya un buen conocimiento de las diferentes reglas formales de cobro. 
              br
              |En ella se encuentran: 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 La factura presenta tal inconsistencia.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 El concepto está mal formulado, hay que cambiarla. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Hay que cambiarle la fecha, vencida o no legalizada. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 A mí nunca me llegan los extractos – no sé de cuánto es la cuota.
          .col-lg-3.col-6: img(src='@/assets/curso/temas/89.svg', alt='')
      .tarjeta.p-5(titulo="Formal – consentida" style="background-color: #f6ede6 ")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            h4 Formal – consentida 
            p Se pueden encontrar frases como: 
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Hermanito, tranquilo que la otra semana pago. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Esta situación está muy difícil, espérame hasta el… 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Mire que yo soy un buen cliente. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Yo arreglo con el gerente que es mi amigo. 
          .col-lg-3.col-6: img(src='@/assets/curso/temas/90.svg', alt='')
    p.mb-5(data-aos='fade-right') El manejo por parte del asesor en algunas objeciones presentadas por el cliente para evadir pago, pueden ser:  
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/91.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .text-small(numero="1" titulo="Soy cliente antiguo ")
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Con mayor razón debe estar al día. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Eso no lo exonera de cumplir con sus compromisos. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Su deuda se está incrementando con los intereses de mora. 
          .text-small(numero="2" titulo="Yo hablo con su jefe, que es mi amigo ")
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Si lo desea puede hacerlo, él le hará el mismo planteamiento que le estoy haciendo. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Si usted es amigo de..(mi jefe), creo que es mejor que busque una solución y evite que él se entere de esta mora. 
          .text-small(numero="3" titulo="Estoy a la espera de una plática ")
            p Por favor me regala una fecha para el pago. 
          .text-small(numero="4" titulo="Las ventas están muy bajas ")
            ul.lista-ul--color
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Lamentamos su situación, pero desafortunadamente eso no lo exonera de su obligación. 
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Estando al día con nosotros, seremos una excelente referencia en el caso que requiera solicitar nuevos créditos. 
    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 Es muy importante evitar los famosos impagos por su peligro para la entidad: 
        .bloque-texto-b.color-primario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left( style='color: #201044' )
            h5.mb-0 Los impagos de los créditos comerciales otorgados a los clientes, son una amenaza para el crecimiento y supervivencia de las empresas. En los últimos años se está produciendo un importante repunte de la morosidad, se están incrementando los impagados de facturas y está aumentando el plazo de pago de los clientes
            i.fas.fa-quote-right(style='color: #201044' )
          p.text-end.d-block (Brachfield, 2019) 
        p Para profundizar en esta forma de no pago y evitarlo, lo invitamos a consultar el capítulo 2 del libro #[b #[em Credit management:] cómo conceder créditos a clientes y evitar los impagados], el cual se encuentra en el material complementario. 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/92.png', alt='')
        
          

</template>

<script>
export default {
  name: 'Tema8',
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
