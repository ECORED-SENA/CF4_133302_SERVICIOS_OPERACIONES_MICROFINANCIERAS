<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Administración de cartera 
    p.mb-5(data-aos='fade-right') Son todas aquellas actividades que se usan para prevenir el vencimiento de las cuentas por cobrar. Para desarrollarla, es necesario tener en cuenta la evaluación, seguimiento y control de los pagos que se encuentran pendientes, y encaminar los esfuerzos para lograr la pronta recuperación con los saldos pendientes. 
    .row.justify-content-center.mb-3
      .col-lg-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.svg', alt='')
      .col-lg-5.mb-lg-0.mb-3
        p En la administración es importante contar con políticas de seguimiento y control. 
        .tarjeta.bg-white.border-2.mb-3.p-4(style="border: 2px gray solid")
          p.mb-0 La administración de cartera le sirve a una empresa para elegir las mejores decisiones contables y financieras a la hora de recoger sus inversiones. La cartera es el punto en el cual gira la liquidez de la empresa y/o entidad financiera, porque allí radica el flujo del efectivo para posteriores negocios o prestación de servicios, e inclusive, para el mantenimiento de la entidad financiera. En la administración de la cartera se cuenta con políticas, normas, procesos y procedimientos.  
        p El cobro de deudas es una de las actividades más antiguas que se practican. Siempre que las personas soliciten dinero prestado, habrá la necesidad de cobrar. Las casas de cobranzas y los abogados de cobranza son la más reciente manera de cobrar. 
      .col-lg-4.col-6: img(src='@/assets/curso/temas/6.png', alt='')
    .tarjeta.p-4(style="background-color: #b15815 ").mb-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='')
        .col-lg-11
          p.mb-0.text-white El dato más antiguo de cobro de deudas comerciales lo encontramos en la antigua Babilonia, esta sociedad protegía los derechos de los deudores aunque también permitía a los acreedores recuperar cuentas que se encontraban vencidas. En la Biblia, en el antiguo testamento hebreo, observamos que cuando las personas no cumplían con sus pagos, tenían que laborar para su acreedor como esclavos hasta que la deuda se cumpliera a cabalidad.                           
    p.mb-5(data-aos='fade-right') Para un mejor seguimiento de la cartera, generalmente se clasifica por el número de días que se encuentran en mora, así por ejemplo tenemos: de 1 a 30 días, de 31 a 60, de 61 a 90, más de 90 días de mora. 
    .row.justify-content-center.mb-5
      .col-lg-3.col-7: img(src='@/assets/curso/temas/8.png', alt='')   
      .col-lg-9
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta card-blue")
          div(titulo="Los primeros 30 días")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Se recuerda al cliente desde el primer día de mora, mediante una llamada. 

              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Se realiza una visita al cliente, entregando una primera carta. 
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Si el cliente ha faltado con sus acuerdos de pago, se envía una segunda carta y primera carta al aval.
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Si el cliente continúa en mora, se envía tercera carta al cliente y segunda al aval. 
          div(titulo="Después de los 30 días ")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 Se remite la última carta al cliente y el gerente de oficina le realiza visita, junto con el analista de crédito y cobranza. 
              li.d-flex
                i.fas.fa-check-circle
                p.mb-0 El gerente de oficina podría hacer último compromiso y/o retiro de garantía. 
          div(titulo="Después de los 50 días ")
            p.mb-0 Cuando el cliente definitivamente no cumple con su obligación, se procede con acciones jurídicas, se entrega documentación completa del cliente al abogado o al área encargada, o inclusive a la casa de cobranzas, que son empresas encargadas de hacer estos trabajos.
    p.mb-5(data-aos='fade-right') La cartera en general, se califica en categorías, de acuerdo con el concepto del Fondo de Garantías (2019):
    TabsC.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Categoría A" style="background-color: #e8faf9 ").px-4
        .row
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/9.svg', alt='')
          .col-lg-10
            h4.mb-3 Riesgo normal 
            p.mb-0 Son aquellos créditos que presentan una atención apropiada de los estados financieros de los deudores, demostrando una adecuada capacidad de pago, en términos del monto y origen de los ingresos con que cuentan y así mismo, una adecuada estructuración de los flujos de caja del proyecto. 
      .py-4.py-md-5(titulo="Categoría B" style="background-color: #e8faf9 ").px-4
        .row
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.svg', alt='')
          .col-lg-10
            h4.mb-3 Riesgo aceptable, superior al normal 
            p.mb-0 Los créditos calificados en esta categoría están aceptablemente atendidos y protegidos, pero existen algunas debilidades en la capacidad de pago del deudor o los flujos de caja del proyecto, en forma tal que, de no ser corregidas oportunamente, llegaran a afectar el normal recaudo del crédito. 
      .py-4.py-md-5(titulo="Categoría C" style="background-color: #e8faf9 ").px-4
        .row
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.svg', alt='')
          .col-lg-10
            h4.mb-3 Riesgo apreciable 
            p.mb-0 En esta categoría podemos calificar todos aquellos créditos que presentan insuficiencias en la capacidad de pago del deudor o en los flujos de caja del proyecto, y comprometen el normal recaudo de la obligación en los términos convenidos. 
      .py-4.py-md-5(titulo="Categoría D" style="background-color: #e8faf9 ").px-4
        .row
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.svg', alt='')
          .col-lg-10
            h4.mb-3 Riesgo significativo 
            p.mb-0 Esta categoría está compuesta por todos aquellos créditos que se encuentran en un grado de riesgo significativo, cuya probabilidad de recaudo es altamente dudosa. 
      .py-4.py-md-5(titulo="Categoría E" style="background-color: #e8faf9 ").px-4
        .row
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/13.svg', alt='')
          .col-lg-10
            h4.mb-3 Riesgo de incobrabilidad 
            p.mb-0 Así como su nombre lo indica, en esta categoría entran todos los créditos de riesgo con una mínima probabilidad de recaudo. 
      .py-4.py-md-5(titulo="Categoría F" style="background-color: #e8faf9 ").px-4
        .row
          .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/14.svg', alt='')
          .col-lg-10
            h4.mb-3 Riesgo de incobrabilidad 
            p.mb-0 Así como su nombre lo indica, en esta categoría entran todos los créditos de riesgo con una mínima probabilidad de recaudo. 
    p.mb-5(data-aos='fade-right') Para el caso de microfinanzas, se clasifica por edad de vencimiento, así como lo muestra la siguiente tabla: 
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Calificación de la cartera de microcrédito 
        .tabla-a.color-acento-botones.mb-5
          table
            caption 
            thead(style="background-color: #201144 ").border-0
              tr.text-center
                th.text-white  Categoría 
                th.text-white  Microcrédito 
            tbody
              tr(style="background-color: #d1ced9 ")
                td A
                td 0 - 30 días 
              tr(style="background-color: #e5e4e9 ")
                td B
                td 31 - 60 días 
              tr(style="background-color: #d1ced9 ")
                td C
                td 61 - 90 días
              tr(style="background-color: #e5e4e9 ")
                td D
                td 91 - 120 días 
              tr(style="background-color: #d1ced9 ")
                td E
                td Mayor a 120 días 
      .col-lg-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/15.svg', alt='')
        p Los créditos que se encuentren con una mora igual o mayor a 180, serán sujetos de castigo, sin embargo, la cartera se puede seguir cobrando. Para poder realizar el castigo se debe contar con la aprobación del gerente o quien haga las veces de gestor, quien manifiesta la operación como irrecuperable, se solicita el concepto del área comercial de la gestión de cobro y certificación del saldo a castigar por parte del área contable y/o auditoría. 
        .tarjeta.p-1(style="background-color: #efddcf ")
          p.mb-0 Ahora, las provisiones se dan cuando agotadas todas las gestiones de cobro, no se ha logrado la recuperación, de acuerdo con las políticas de la entidad. 
    p.mb-5(data-aos='fade-right') Para microfinanzas se propone la siguiente provisión: 
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Provisiones para microfinanzas  
        .tabla-a.color-acento-botones.mb-5
          table
            caption 
            thead(style="background-color: #201144 ").border-0
              tr.text-center
                th.text-white  Edad de la cartera morosa
                th.text-white  Provisión 
            tbody
              tr(style="background-color: #d1ced9 ")
                td 1-7 días 
                td 10 % del saldo total
              tr(style="background-color: #e5e4e9 ")
                td 8-30 días
                td 30 % del saldo total 
              tr(style="background-color: #d1ced9 ")
                td 31 - 60 días 
                td 50 % del saldo total 
              tr(style="background-color: #e5e4e9 ")
                td 61 - 90 días 
                td 75 % del saldo total 
              tr(style="background-color: #d1ced9 ")
                td Mayor a 90 días 
                td 100 % del saldo total 
      .col-lg-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/16.svg', alt='')
        p Como lo dicen Morales y Castro (2015), cobranza es toda una gestión que tiene la responsabilidad de ayudar al mantenimiento de las entidades financieras, y para ampliar la información, lo invitamos a consultar el capítulo 6 del libro Crédito y cobranza, el cual se encuentra en el material complementario. 




























                      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
