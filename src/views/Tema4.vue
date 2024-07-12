<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.f-4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Hábitos de pago
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4.bg-white(style="border: #b15815 2px solid ").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/39.svg', alt='')
            .col-lg-10
              p.mb-0 Los buenos o malos hábitos de pago serán determinantes para el otorgamiento o no de los microcréditos, por ejemplo, en las centrales de riesgo, el cliente tendrá todo su historial de pagos con las diferentes entidades tanto del sector financiero, como el sector real y solidario, al igual que cada entidad financiera en su base de datos refleja el comportamiento de ese cliente dentro de la entidad. Puede pasar que el cliente nunca pase su mora de los 30 días, pero no paga a tiempo sus cuentas y por ende sus pagos. 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  Capacidad
    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between.order-reverse
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Las entidades microfinancieras deben tener especial cuidado en la capacidad de pago de sus clientes, porque es un sector que cubre el mercado formal, informal e inclusive algunos emprendimientos y por lo general no tienen muy claras sus cuentas entre la parte familiar y microempresarial. Su labor como asesor de microfinanzas consiste en indagar y conocer muy bien al cliente, para determinar de manera acertada la verdadera capacidad de pago. 
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/40.png', alt='')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Voluntad de pago 
    .row.justify-content-center.mb-5
      .col-lg-5.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/41.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        p En el sector microfinanciero, este es uno de los factores determinantes para que se exija una mayor tasa de interés, porque no se conoce la voluntad de pago de los futuros clientes. Cuando los deudores tienen un historial crediticio con un negocio establecido, es más fácil conocer la voluntad de pago por los hábitos que se reflejan, pero en los clientes que aún no han tendido historial, es más complejo.
        .tarjeta.p-4(style="background-color: #b15815 ").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/42.svg', alt='')
            .col-lg-10
              p.mb-0.text-white Las entidades microfinancieras acuden a otros métodos para lograr conocer en algo de voluntad de pago a sus potenciales clientes y lo hacen a través de otras fuentes como referencias del entorno, de proveedores, de clientes, entre otros. 

</template>

<script>
export default {
  name: 'Tema4',
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
