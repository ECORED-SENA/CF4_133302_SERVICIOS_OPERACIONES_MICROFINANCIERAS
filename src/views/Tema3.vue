<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Información de clientes deudores 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4.bg-white(style="border: #b15815 2px solid ").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/32.svg', alt='')
            .col-lg-10
              p.mb-0 Es toda aquella información que se desprende del cliente que tiene una deuda monetaria con una entidad, en nuestro caso, microfinanciera.
    p.mb-5(data-aos='fade-right') Esta información contiene:  
    .fondo-slyder.tarjeta.p-5.mb-5
      SlyderA(tipo='b').text-white
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Expedientes 
            p Es la recopilación de documentos que le permiten a una entidad financiera un conocimiento del cliente más a profundidad en variables tales como identificación, situación económica, documentos firmados por el cliente que son generados por la entidad, como formularios, pagarés, carta de instrucciones y otros a que haya lugar, inclusive fotos del negocio, balances, etc. Estos documentos deben reflejar la capacidad de pago del cliente y el posible riesgo para la entidad microfinanciera. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/33.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Documentos en expedientes 
            p  Una vez otorgado el microcrédito, dicho expediente deberá contener de igual manera la información del deudor solidario si así se requirió y del aval o avales según política de la entidad, así mismo debe contener las garantías y seguros. Estos expedientes estarán en custodia en el área o departamento que disponga la entidad durante la vigencia del crédito, inclusive algún tiempo después. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/34.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Capacidad de pago 
            p  Existe un principio básico en microfinanzas, el evaluar conjuntamente la unidad de negocio y la unidad familiar, porque esta marca cambia todo. Como lo dice Sapag (2007), “un proyecto puede ser rentable pero no tener capacidad de pago”. Esto dará un panorama más amplio de la manera como el cliente maneja sus finanzas personales y las del negocio, para determinar la capacidad de pago en la evaluación crediticia. 
              br
              br
              |Es importante indagar al cliente sobre sus hábitos de consumo, ellos harán que disminuya la capacidad de pago.  
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/35.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Solvencia económica  
            p Es la capacidad de un individuo o empresa para atender el compromiso de pago de sus deudas. 
              br
              br
              |Esta capacidad la dan los ingresos que reciba periódicamente por su actividad económica y los ingresos adicionales que pueda tener; en el caso de los microempresarios, se podrá contar los arriendos, pensión, o algunas inversiones que estén generando rentabilidad y también los activos que sean susceptibles a vender para generar liquidez. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/36.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Flujo de caja 
            p  Es un informe financiero que presenta un detalle de los flujos de ingresos y egresos de dinero que tiene una empresa en un período dado. 
              br
              br
              |Para los microempresarios, los ingresos serán los provenientes a las ventas de su microempresa, sin embargo, se podrán tener en cuenta los ingresos adicionales que pueda tener soporte y que los reciba de manera constante. 
          .col-lg-6.col-7
            figure
              img(src='@/assets/curso/temas/37.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.svg', alt='')
      .col-lg-5
        p.mb-3(data-aos='fade-right') En la capacidad de pago, es importante tener en cuenta otro aspecto importante, y es el tipo de vivienda que tiene el cliente, si es propia y la está pagando o si es en arriendo o si por el contrario se encuentra libre de deuda. No se deben dejar de lado los servicios públicos o si tiene empleados de servicios o condiciones de servicios especiales. 

</template>

<script>
export default {
  name: 'Tema3',
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
