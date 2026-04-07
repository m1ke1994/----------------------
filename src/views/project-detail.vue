<script setup>
import ProjectsSection from '../components/sections/ProjectsSection.vue'
</script>

<template>
  <main class="projects-page w-full">
    <section class="projects-hero w-full bg-[#f2f4f7] text-[#181a21]">
      <div class="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-12 lg:pb-12 lg:pt-12">
        <div class="rounded-[1.5rem] border border-white/75 bg-white/55 px-6 py-8 shadow-[0_14px_32px_rgba(15,23,42,0.08)] backdrop-blur-[8px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <p class="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
            Портфолио
          </p>

          <h1 class="mt-4 max-w-[52rem] text-[2rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#111827] sm:text-[2.8rem] lg:text-[3.5rem]">
            Реализованные проекты в архитектурном стекле
          </h1>

          <p class="mt-4 max-w-[46rem] text-[1rem] leading-[1.72] text-[#4b5563] sm:text-[1.0625rem]">
            Подборка выполненных объектов по душевым стеклам, зеркальным панно, перегородкам и ограждениям. Каждое решение проектируется под задачу и реализуется с инженерной точностью.
          </p>
        </div>
      </div>
    </section>

    <section class="relative w-full">
      <video
        class="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      >
        <source src="/videos/video-bg.MP4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,248,252,0.35)_0%,rgba(246,249,253,0.45)_100%)] backdrop-blur-[1.5px]" />

      <div class="relative z-10">
        <ProjectsSection :show-view-all-button="false" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
  font-family: "Manrope", "Segoe UI", sans-serif;
}
</style>
