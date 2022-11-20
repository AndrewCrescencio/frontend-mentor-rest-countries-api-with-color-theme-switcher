<template>
  <div
    class="container !mt-16 flex flex-col text-[#111517] items-center dark:text-white lg:(flex-row gap-8)"
  >
    <img
      :src="country.flag"
      :alt="country.name + 'flag'"
      class="max-w-[560px] w-full h-auto lg:(h-[401px]) rounded-[10px]"
    />

    <div class="mt-11 w-full max-w-[560px] lg:(mt-0 max-w-[574px])">
      <h1 class="font-nunito font-bold text-3xl">{{ country.name }}</h1>
      <div class="mt-4 lg:mt-[23px] flex justify-between flex-wrap gap-y-8">
        <div>
          <p><b>Native Name:</b> België</p>
          <p><b>Population:</b> 11,319,511</p>
          <p><b>Region:</b> Europe</p>
          <p><b>Sub Region:</b> Western Europe</p>
          <p><b>Capital:</b> Brussels</p>
        </div>
        <div>
          <p><b>Top Level Domain:</b> .be</p>
          <p><b>Currencies:</b> Euro</p>
          <p><b>Languages:</b> Dutch, French, German</p>
        </div>
      </div>
      <div class="mt-8 lg:(mt-[68px] flex gap-4 item)">
        <p class="w-full max-w-max">Border Countries:</p>
        <div class="mt-4 lg:mt-0 flex gap-10px flex-wrap">
          <nuxt-link
            v-for="(borderCountry, i) in country.borders"
            :key="i"
            :to="'/' + borderCountry.toLowerCase()"
            class="btn-border-country"
          >
            {{ borderCountry }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CountryInfo',
  computed: {
    ...mapGetters({ get: 'getCountry' }),
    country() {
      return this.get(this.routeParam)
    },
    routeParam() {
      const param = this.$route.params.country
      return param.toLowerCase()
    },
  },
}
</script>
