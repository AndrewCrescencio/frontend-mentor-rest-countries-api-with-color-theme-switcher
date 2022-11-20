<template>
  <nuxt-link
    :to="'/' + country.name"
    class="shadow-card overflow-hidden rounded"
  >
    <nuxt-img
      :src="country.flag"
      :alt="country.name + ' flag'"
      class="w-full h-auto"
      placeholder
      width="264"
      height="160"
      fit="cover"
      loading="lazy"
    />
    <div class="pt-6 px-6 pb-[46px]">
      <p class="font-nunitoBold font-bold text-lg">
        {{ country.name }}
      </p>
      <p>
        <b class="mt-4 font-nunitoSemibold font-semibold text-sm">Population:</b
        >{{ country.population }}
      </p>
      <p>
        <b class="mt-2 font-nunitoSemibold font-semibold text-sm">Region:</b
        >{{ country.region }}
      </p>
      <p>
        <b class="mt-2 font-nunitoSemibold font-semibold text-sm">Capital:</b
        >{{ country.capital?.[0] }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
}
</script>
