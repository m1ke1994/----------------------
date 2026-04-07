<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRequestModal } from '../composables/useRequestModal'
import { heroContent } from '../data'

const heroPhrases = [
  'ИНЖЕНЕРИЯ. ТОЧНОСТЬ. НАДЁЖНОСТЬ.',
  'МЕТАЛЛОКОНСТРУКЦИИ ЛЮБОЙ СЛОЖНОСТИ',
  'СОВРЕМЕННЫЕ ФАСАДЫ',
  'ПАНОРАМНОЕ ОСТЕКЛЕНИЕ',
  'СТРОИМ ПРОСТРАНСТВО, В КОТОРОМ ХОЧЕТСЯ ЖИТЬ',
]

const activePhraseIndex = ref(0)
const phraseStepMs = 1800
let phraseTimer = null

const { openRequestModal } = useRequestModal()

const handlePrimaryAction = () => {
  openRequestModal('hero')
}

onMounted(() => {
  phraseTimer = setInterval(() => {
    if (activePhraseIndex.value < heroPhrases.length - 1) {
      activePhraseIndex.value += 1
      return
    }

    if (phraseTimer) {
      clearInterval(phraseTimer)
      phraseTimer = null
    }
  }, phraseStepMs)
})

onBeforeUnmount(() => {
  if (phraseTimer) {
    clearInterval(phraseTimer)
    phraseTimer = null
  }
})
</script>

<template>
  <section class="hero-root w-full overflow-hidden border-b border-[#e2e5ea] bg-[#f2f3f5] text-[#181a21]">
    <div class="grid w-full items-stretch overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div class="z-10 flex min-w-0 w-full items-center px-4 py-5 sm:px-6 sm:py-6 lg:justify-center lg:px-10 lg:py-0 xl:px-14">
        <div class="w-full max-w-[42rem]">
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
            class="mt-3 max-w-[42rem] whitespace-pre-line text-[1.95rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[#14161d] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.35rem]"
          >
            {{ heroContent.title }}
          </h1>

          <p class="mt-3 max-w-[42rem] text-[0.98rem] leading-[1.62] text-[#5d6169] sm:text-[1rem]">
            {{ heroContent.description }}
          </p>

          <button
            type="button"
            class="mt-4 inline-flex items-center gap-3 rounded-xl bg-[#181b24] px-6 py-2.5 text-[0.875rem] font-medium text-white transition duration-200 hover:-translate-y-[1px] hover:bg-black"
            @click="handlePrimaryAction"
          >
            <span>{{ heroContent.primaryAction }}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      <div class="relative min-w-0 w-full overflow-hidden bg-[#edf0f3]">
        <div class="h-[13.5rem] w-full overflow-hidden sm:h-[16.5rem] md:h-[33.5rem] lg:h-[33.5rem] xl:h-[43rem]">
          <video
            class="block h-full w-full object-cover object-[30%_70%] sm:object-[30%_70%] lg:object-[30%_70%]"
            autoplay
            muted
            playsinline
            preload="auto"
          >
            <source src="/videos/12345.MP4" type="video/mp4" />
          </video>
        </div>

        <div class="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-5 sm:px-8 lg:px-10">
          <Transition name="hero-phrase" mode="out-in">
            <p
              :key="activePhraseIndex"
              class="hero-phrase-text max-w-[92%] text-center text-[1.02rem] font-semibold uppercase leading-[1.35] tracking-[0.08em] text-[#d7dde8] sm:text-[1.3rem] md:text-[1.55rem] lg:text-[1.85rem]"
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
