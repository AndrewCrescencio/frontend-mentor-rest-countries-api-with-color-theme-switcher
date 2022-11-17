<template>
  <nav
    class="bg-white dark:bg-lightDarkBg shadow-navbar lg:px-20 text-[#111517] dark:text-[#fff]"
  >
    <div class="container flex items-center justify-between h-20">
      <h1
        class="font-extrabold font-nunitoBold font-font-extrabold text-sm md:text-2xl"
      >
        Where in the world?
      </h1>
      <button
        class="flex items-center p-0 gap-x-2 font-nunitoSemibold"
        @click="changeColorMode"
      >
        <LazyIconMoon
          v-if="$colorMode.value === 'light'"
          class="w-4 h-4 md:w-5 md:h-5"
        />
        <LazyIconSun v-else class="w-4 h-4 md:w-5 md:h-5" />
        <span class="text-xs md:text-base leading-none font-semibold"
          >{{ $colorMode.value === 'light' ? 'Dark' : 'Light' }} Mode</span
        >
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  // created() {
  //   console.log(this.$colorMode)
  // },
  methods: {
    changeColorMode() {
      // window.alert(this.$colorMode.value)
      this.$colorMode.value === 'dark'
        ? (this.$colorMode.value = 'light')
        : (this.$colorMode.value = 'dark')
    },
  },
}
</script>
