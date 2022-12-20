<template>
  <section class="container">
    <!--
      class="mt-8 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10 xl:gap-[74px]"
      mt-8 flex flex-wrap justify-center gap-10 lg:(mt-12 gap-[74px])
     -->
    <div
      class="mt-8 flex flex-wrap justify-center gap-10 lg:(mt-12 gap-y-[75px] gap-x-[74px])"
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
