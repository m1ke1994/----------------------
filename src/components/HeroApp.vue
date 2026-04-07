<script setup>
import { heroContent } from '../data'
</script>

<template>
  <section class="hero-root text-[#181a21]">
    <div class="relative overflow-hidden bg-[#f2f3f5]">
      <div class="w-full pb-0 pl-5 pr-0 pt-8 sm:pl-8 sm:pr-0 lg:pl-12 lg:pr-0 lg:pt-12">
        <div class="grid items-center gap-6 lg:gap-0 lg:grid-cols-[minmax(21.25rem,26.875rem)_1fr]">
          <div class="z-10 max-w-[430px] pb-6 lg:pb-16">
            <p class="flex flex-wrap gap-x-2 gap-y-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[#8e929a] sm:text-[0.6875rem]">
              <template
                v-for="(item, index) in heroContent.categories"
                :key="item"
              >
                <span>{{ item }}</span>
                <span v-if="index < heroContent.categories.length - 1">&bull;</span>
              </template>
            </p>

            <h1
              class="mt-5 whitespace-pre-line text-[2.625rem] font-semibold leading-[0.96] tracking-[-0.03em] text-[#14161d] sm:text-[3.5rem] md:text-[4.25rem]"
            >
              {{ heroContent.title }}
            </h1>

            <p class="mt-6 max-w-[420px] text-[1rem] leading-[1.65] text-[#5d6169]">
              {{ heroContent.description }}
            </p>

            <button
              type="button"
              class="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#181b24] px-7 py-3 text-[0.875rem] font-medium text-white transition hover:bg-black"
            >
              <span>{{ heroContent.primaryAction }}</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div class="relative min-h-[300px] w-full sm:min-h-[390px] lg:min-h-[560px]">
            <img
              :src="heroContent.heroImage"
              alt="Modern glass house"
              class="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-right"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f2f3f5] to-transparent sm:w-24 lg:w-32" />
          </div>
        </div>
      </div>
    </div>

    <div class="relative overflow-hidden">
      <div class="w-full px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div class="grid gap-10 lg:grid-cols-[minmax(18.75rem,26.25rem)_1fr] lg:gap-14">
          <div class="max-w-[420px]">
            <p class="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#969aa2]">
              {{ heroContent.aboutLabel }}
            </p>
            <h2
              class="mt-3 whitespace-pre-line text-[2.625rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#151820] sm:text-[3.625rem] lg:text-[3.875rem]"
            >
              {{ heroContent.aboutTitle }}
            </h2>
            <p class="mt-5 text-[1rem] leading-[1.7] text-[#5c6168]">
              {{ heroContent.aboutDescription }}
            </p>
            <button
              type="button"
              class="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#c8cbd1] bg-white px-6 py-3 text-[0.875rem] font-medium text-[#1c1f27] transition hover:border-[#a7abb3] hover:bg-[#f8f9fb]"
            >
              <span>{{ heroContent.secondaryAction }}</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div class="relative">
            <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <article
                v-for="item in heroContent.features"
                :key="item.title"
                class="border-l border-[#d7dae0] pl-5 first:border-l-0 first:pl-0 xl:first:border-l xl:first:pl-5"
              >
                <div
                  class="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#cfd3da] bg-white text-[#1d2028]"
                >
                  <svg
                    v-if="item.icon === 'layers'"
                    viewBox="0 0 24 24"
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <path d="m12 4 7 4-7 4-7-4 7-4Z" />
                    <path d="m5 12 7 4 7-4" />
                    <path d="m5 16 7 4 7-4" />
                  </svg>

                  <svg
                    v-else-if="item.icon === 'shield'"
                    viewBox="0 0 24 24"
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <path d="M12 3 5 6v6c0 4.5 2.7 7.9 7 9 4.3-1.1 7-4.5 7-9V6l-7-3Z" />
                  </svg>

                  <svg
                    v-else-if="item.icon === 'diamond'"
                    viewBox="0 0 24 24"
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <path d="m3 10 4.5-5h9L21 10l-9 10-9-10Z" />
                    <path d="M7.5 5 12 20l4.5-15" />
                    <path d="M3 10h18" />
                  </svg>

                  <svg
                    v-else
                    viewBox="0 0 24 24"
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l2.5 2.5" />
                  </svg>
                </div>

                <h3 class="text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#151820]">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-[0.875rem] leading-[1.65] text-[#656a72]">
                  {{ item.description }}
                </p>
              </article>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-7 border-t border-[#d6d9df] pt-8 sm:grid-cols-4">
              <article
                v-for="item in heroContent.stats"
                :key="item.value + item.label"
              >
                <p class="text-[3.625rem] font-semibold leading-none tracking-[-0.03em] text-[#191c24]">
                  {{ item.value }}
                </p>
                <p class="mt-2 max-w-[130px] text-[0.875rem] leading-[1.45] text-[#6b7078]">
                  {{ item.label }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.hero-root {
  font-family: "Manrope", "Segoe UI", sans-serif;
}
</style>
