<template>
  <section
    class="!mt-6 container flex flex-col gap-y-10 text-[#111517] dark:text-white lg:(flex-row !lg:mt-12 justify-between)"
  >
    <div
      class="px-8 h-14 flex items-center rounded shadow-navbar dark:bg-[#2B3844] max-w-[480px] w-full"
    >
      <IconSearch class="text-[#B2B2B2] mr-[22px]" />
      <input
        v-model="searchInput"
        type="text"
        maxlength="40"
        class="w-full p-2 text-xs font-normal !leading-none bg-transparent rounded font-nunito md:text-sm focus:border-none"
        placeholder="Search for a country…"
      />
    </div>
    <div class="max-w-[200px] w-full">
      <button
        class="flex items-center w-full h-12 pl-6 bg-white rounded lg:h-14 dark:bg-lightDarkBg shadow-search-filter select-arrow"
        @click="filterOpen = !filterOpen"
      >
        Filter by Region
      </button>
      <div
        v-if="filterOpen"
        class="mt-2 flex w-[200px] flex-col px-4 py-3 font-normal bg-white children:px-2 children:text-left dark:bg-lightDarkBg shadow-search-filter children:w-full children:py-1 children:font-nunito children:rounded rounded absolute"
      >
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="$store.dispatch('setRegionFilter', 'All')"
        >
          All
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="$store.dispatch('setRegionFilter', 'Africa')"
        >
          Africa
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="$store.dispatch('setRegionFilter', 'Americas')"
        >
          America
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="$store.dispatch('setRegionFilter', 'Asia')"
        >
          Asia
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="$store.dispatch('setRegionFilter', 'Europe')"
        >
          Europe
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="$store.dispatch('setRegionFilter', 'Oceania')"
        >
          Oceania
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      selected: null,
      filterOpen: false,
      searchInput: '',
    }
  },
  watch: {
    searchInput(newVal, oldVal) {
      if (
        (newVal.length < 40 && newVal.length >= 1) ||
        (oldVal.length && newVal.length === 0)
      ) {
        this.searchInputDispatch(this.searchInput.toLowerCase())
      }
    },
  },
  methods: {
    searchInputDispatch(val) {
      this.$store.dispatch('setSearchBar', val)
    },
  },
}
</script>
