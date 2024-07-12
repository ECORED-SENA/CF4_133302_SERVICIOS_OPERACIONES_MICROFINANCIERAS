<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Estrategias de recuperación de cartera
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-4(style="background-color: #e8faf9 ")
          p.mb-3 Son una serie de acciones o medidas que se toman para el cobro del dinero otorgado por una entidad financiera a un cliente; para ello se encuentran, por ejemplo: 
          .row.justify-content-center
            .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/67.svg', alt='')
            .col-lg-9
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Aviso anticipado al vencimiento. 
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Recordatorio de pago. 
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Cobro administrativo. 
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Cobro prejurídico. 
                li.d-flex
                  i.fas.fa-check-circle
                  p.mb-0 Cobro jurídico. 
      .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/temas/68.svg', alt='')
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1  Técnicas de cobranzas
    p.mb-5(data-aos='fade-right') La gestión de cobranzas en las empresas siempre será un tema esencial para el sostenimiento de las mismas, en general la buena colocación de los recursos, en nuestro caso de las entidades financieras, es determinante para tener una buena recuperación de cartera, en lo posible anticipada.
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/69.png', alt='')
      .col-lg-9(data-aos="fade-left")
        p Para ello, existen unas técnicas que harán efectiva la recuperación de los recursos: 
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta card-blue")
          div(titulo="Segmentación de clientes ")
            p Definir muy bien la segmentación de los clientes: esto ayudará en los costos y en la probabilidad de pago. 
          div(titulo="Canales de comunicación ")
            p Canales de comunicación 
          div(titulo="Crear productos ")
            p Crear productos ajustados a los clientes de hoy: los clientes, al quedar en mora, lo hacen por diferentes razones, y para estos eventos, es necesario que las entidades ofrezcan diferentes productos que ayuden a los clientes en sus pagos y a las entidades a recuperar la cartera. Algunos productos son: 
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Finiquito:] obtener un descuento cuando se realice el pago total de la deuda. 

              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Reestructura de deuda:] consiste en tomar el total de deuda y enviarla a mayor tiempo con cuotas cómodas, se debe tener en cuenta que ya existe afectación en las centrales de riesgo. 

              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 #[b Descuento por devaluación del bien:] para clientes cuyo bien ha sido afectado en su valor, por razones económicas.  
          div(titulo="")
            p
          div(titulo="")
            p
          div(titulo="")
            p
          div(titulo="")
            p














</template>

<script>
export default {
  name: 'Tema6',
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
