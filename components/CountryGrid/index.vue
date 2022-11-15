<template>
  <section class="container">
    <div
      class="mt-8 mt-12 lg:(grid grid-cols-4) flex flex-wrap justify-center lg:justify-between gap-10"
    >
      <template v-for="(country, i) in content">
        <CountryCard :key="i" :country="country" />
      </template>
    </div>
    {{ content }}
    {{ $store.getters.getContentByRegion('oceania') }}
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CountryGrid',
  data() {
    return {
      show: true,
    }
  },
  computed: {
    ...mapGetters({ get: 'getContentByRegion' }),
    content() {
      const filter = this.$store.getters.searchFilter
      return this.get(filter)
    },
  },
  // watch: {
  //   content: function (newVal, oldVal) {
  //     this.go()
  //   },
  // },
  // methods: {
  //   go() {
  //     window.alert('oi')
  //     this.show = false
  //     this.$nextTick(() => {
  //       this.show = true
  //     })
  //   },
  // },
  // mounted() {
  //   this.content = this.$store.state.content
  // },
  // methods: {
  //   changeContent(filter) {
  //     if (filter === 'oceania') {
  //       this.content = this.$store.getters.getContentByRegion(filter)
  //     }
  //     // window.alert(this.$store.getters)
  //     // console.log(this.$store.getters)
  //     console.log(this.$store.getters.getContentByRegion(filter))
  //     const teste = this.$store.getters.getContentByRegion(filter)
  //     console.log(teste)
  //   },
  // },
}
</script>
