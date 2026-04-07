<script setup>
import { heroContent } from '../data'
</script>

<template>
  <section class="about-root w-full bg-transparent text-[#181a21]">
    <div class="w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <div class="grid gap-10 lg:grid-cols-[minmax(18.75rem,25.5rem)_1fr] lg:gap-14">
        <div class="max-w-[27rem] rounded-[1.375rem] border border-[#5b6169]/40 bg-white/28 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-[8px] sm:p-6">
          <p class="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-[#969aa2]">
            {{ heroContent.aboutLabel }}
          </p>

          <h2
            class="mt-3 whitespace-pre-line text-[2.35rem] font-semibold leading-[1.01] tracking-[-0.04em] text-[#151820] sm:text-[3rem] lg:text-[3.55rem]"
          >
            {{ heroContent.aboutTitle }}
          </h2>

          <p class="mt-5 text-[1rem] leading-[1.72] text-[#5c6168]">
            {{ heroContent.aboutDescription }}
          </p>

          <button
            type="button"
            class="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#5b6169]/45 bg-white/55 px-6 py-3 text-[0.875rem] font-medium text-[#1c1f27] shadow-[0_10px_30px_rgba(15,23,42,0.16)] backdrop-blur-[8px] transition duration-200 hover:-translate-y-[1px] hover:border-[#5b6169]/60 hover:bg-white/70"
          >
            <span>{{ heroContent.secondaryAction }}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <div class="relative">
          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="item in heroContent.features"
              :key="item.title"
              class="group rounded-[1.375rem] border border-[#5b6169]/35 bg-white/24 p-5 shadow-[0_12px_30px_rgba(16,24,40,0.12)] backdrop-blur-[10px] transition duration-300 hover:-translate-y-[2px] hover:border-[#5b6169]/50 hover:bg-white/32 hover:shadow-[0_16px_36px_rgba(16,24,40,0.18)] sm:p-6"
            >
              <div
                class="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#5b6169]/45 bg-white/60 text-[#1d2028] transition duration-300 group-hover:border-[#5b6169]/65"
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

              <h3
                class="text-[1.45rem] font-semibold leading-[1.12] tracking-[-0.03em] text-[#151820] sm:text-[1.6rem]"
              >
                {{ item.title }}
              </h3>

              <p class="mt-3 text-[0.9rem] leading-[1.68] text-[#656a72]">
                {{ item.description }}
              </p>
            </article>
          </div>

          <div
            class="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#5b6169]/45 pt-8 sm:grid-cols-2 xl:grid-cols-4"
          >
            <article
              v-for="item in heroContent.stats"
              :key="item.value + item.label"
              class="rounded-[1rem] border border-[#5b6169]/40 bg-white/20 px-3 py-4 text-center shadow-[0_10px_24px_rgba(16,24,40,0.12)] backdrop-blur-[8px]"
            >
              <p
                class="text-[2.6rem] font-semibold leading-none tracking-[-0.04em] text-[#191c24] sm:text-[3.15rem] lg:text-[3.45rem]"
              >
                {{ item.value }}
              </p>
              <p class="mx-auto mt-2 max-w-[8.75rem] text-[0.875rem] leading-[1.48] text-[#6b7078]">
                {{ item.label }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-root {
  font-family: "Manrope", "Segoe UI", sans-serif;
}
</style>
