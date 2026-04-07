<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { heroContent } from '../data'

const heroPhrases = [
  'ИНЖЕНЕРИЯ. ТОЧНОСТЬ. НАДЁЖНОСТЬ.',
  'МЕТАЛЛОКОНСТРУКЦИИ ЛЮБОЙ СЛОЖНОСТИ',
  'СОВРЕМЕННЫЕ ФАСАДЫ',
  'ПАНОРАМНОЕ ОСТЕКЛЕНИЕ',
  'СТРОИМ ПРОСТРАНСТВО, В КОТОРОМ ХОЧЕТСЯ ЖИТЬ',
]

const activePhraseIndex = ref(0)
let phraseTimer = null

onMounted(() => {
  phraseTimer = setInterval(() => {
    activePhraseIndex.value = (activePhraseIndex.value + 1) % heroPhrases.length
  }, 1800)
})

onBeforeUnmount(() => {
  if (phraseTimer) {
    clearInterval(phraseTimer)
    phraseTimer = null
  }
})
</script>

<template>
  <section class="hero-root w-full border-b border-[#e2e5ea] bg-[#f2f3f5] text-[#181a21]">
    <div class="grid w-full items-stretch lg:grid-cols-[minmax(40rem,50rem)_minmax(0,1fr)]">
      <div class="z-10 flex w-full items-center px-4 py-5 sm:px-6 sm:py-6 lg:pl-10 lg:pr-7 lg:py-0">
        <div class="w-full">
          <p
            class="flex flex-wrap gap-x-2 gap-y-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[#8e929a] sm:text-[0.6875rem]"
          >
            <template
              v-for="(item, index) in heroContent.categories"
              :key="item"
            >
              <span>{{ item }}</span>
              <span v-if="index < heroContent.categories.length - 1">&bull;</span>
            </template>
          </p>

          <h1
            class="mt-3 max-w-[31rem] whitespace-pre-line text-[1.95rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#14161d] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.35rem]"
          >
            {{ heroContent.title }}
          </h1>

          <p class="mt-3 max-w-[24rem] text-[0.98rem] leading-[1.62] text-[#5d6169] sm:text-[1rem]">
            {{ heroContent.description }}
          </p>

          <button
            type="button"
            class="mt-4 inline-flex items-center gap-3 rounded-xl bg-[#181b24] px-6 py-2.5 text-[0.875rem] font-medium text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black"
          >
            <span>{{ heroContent.primaryAction }}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div class="relative w-full bg-[#edf0f3]">
        <div class="h-[13.5rem] w-full sm:h-[16.5rem] md:h-[19.5rem] lg:h-[21.5rem] xl:h-[33rem]">
          <video
            class="h-full w-full object-cover object-[64%_36%] sm:object-[67%_34%] lg:object-[72%_36%]"
            autoplay
            muted
            playsinline
            preload="auto"
          >
            <source src="/videos/12345.MP4" type="video/mp4" />
          </video>
        </div>

        <div class="pointer-events-none absolute inset-0 z-20" />

        <div class="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-5 sm:px-8 lg:px-10">
          <Transition name="hero-phrase" mode="out-in">
            <p
              :key="activePhraseIndex"
              class="hero-phrase-text max-w-[92%] text-center text-[1.02rem] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-[#f8fafc] sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.85rem]"
            >
              {{ heroPhrases[activePhraseIndex] }}
            </p>
          </Transition>
        </div>

        <div
          class="pointer-events-none absolute inset-y-0 left-0 hidden w-14 bg-gradient-to-r from-[#f2f3f5] via-[#f2f3f5]/80 to-transparent md:block lg:w-24"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

.hero-root {
  font-family: "Manrope", "Segoe UI", sans-serif;
}

.hero-phrase-text {
  text-shadow:
    0 1px 2px rgba(15, 23, 42, 0.4),
    0 10px 26px rgba(15, 23, 42, 0.4);
}

.hero-phrase-enter-active,
.hero-phrase-leave-active {
  transition:
    opacity 0.52s ease,
    transform 0.52s ease;
}

.hero-phrase-enter-from,
.hero-phrase-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
