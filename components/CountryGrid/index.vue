<template>
  <section class="container">
    <div
      class="mt-8 mt-12 grid grid-cols-countryGrid justify-between gap-10 xl:gap-[74px]"
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
