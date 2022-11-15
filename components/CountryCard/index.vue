<template>
  <div class="max-w-[264px] w-full shadow-card">
    <img :src="country.flag" alt="" />
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
  </div>
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
