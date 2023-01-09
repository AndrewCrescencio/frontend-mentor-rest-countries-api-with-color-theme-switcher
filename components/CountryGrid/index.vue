<template>
  <section class="container">
    <div class="mt-8 grid gap-10 grid-cols-countryGrid xl:(mt-12 gap-[74px])">
      <CountryCard
        v-for="(country, i) in content"
        :key="i"
        :country="country"
      />
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
