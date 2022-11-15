<template>
  <main class="h-[100vh] bg-[#fafafa] dark:bg-[#202C36]">
    <AppNavbar />
    <SearchBar />
    <CountryGrid :content="content" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    content() {
      return this.$store.state.content
    },
  },
}
</script>
