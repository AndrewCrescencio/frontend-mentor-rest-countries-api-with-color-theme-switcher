<template>
  <section
    class="container flex flex-col md:flex-row md:justify-between !mt-6 !lg:mt-12 gap-y-10 text-[#111517] dark:text-white"
  >
    <div
      class="px-8 h-14 flex items-center rounded shadow-navbar dark:bg-[#2B3844] max-w-[480px] w-full"
    >
      <IconSearch class="text-[#B2B2B2] mr-[26px]" />
      <input
        type="text"
        class="text-xs font-normal !leading-none bg-transparent rounded font-nunito md:text-sm focus:border-none"
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
          @click="selected = 'Africa'"
        >
          Africa
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="selected = 'America'"
        >
          America
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="selected = 'Asia'"
        >
          Asia
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="selected = 'Europe'"
        >
          Europe
        </button>
        <button
          class="hover:bg-[#fafafa] dark:hover:text-lightDarkBg hover:font-nunitoSemibold hover:font-semibold"
          @click="selected = 'Oceania'"
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
    }
  },
}
</script>
