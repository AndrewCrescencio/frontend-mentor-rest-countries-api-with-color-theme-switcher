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
export default {
  name: 'CountryGrid',
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
}
</script>
