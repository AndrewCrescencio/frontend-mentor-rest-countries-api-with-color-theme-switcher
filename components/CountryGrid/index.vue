<template>
  <section class="container">
    <div
      class="mt-8 grid grid-cols-countryGrid gap-10 lg:(mt-12 gap-y-[75px] gap-x-[74px])"
    >
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
