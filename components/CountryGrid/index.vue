<template>
  <section class="container">
    <div
      class="mt-8 mt-12 lg:(grid grid-cols-4) flex flex-wrap justify-center lg:justify-between gap-10"
    >
      <template v-for="(country, i) in content">
        <CountryCard :key="i" :country="country" />
      </template>
    </div>
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
    ...mapGetters({ get: 'getContent' }),
    content() {
      return this.get
    },
  },
}
</script>
