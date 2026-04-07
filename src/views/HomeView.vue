<script setup>
import HeroApp from '../components/HeroApp.vue'
import AboutSection from '../components/AboutSection.vue'
</script>

<template>
  <main class="home-view">
    <HeroApp />

    <section class="section_all">
      <video
        class="section_all__video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      >
        <source src="/videos/video-bg.MP4" type="video/mp4" />
      </video>

      <div class="section_all__overlay"></div>

      <div class="section_all__content">
        <AboutSection />
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-view {
  width: 100%;
}

.section_all {
  position: relative;
  overflow: hidden;
  width: 100%;
  
}

.section_all__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.section_all__overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(245, 248, 252, 0.3) 0%,
    rgba(246, 249, 253, 0.42) 100%
  );
  backdrop-filter: blur(1.5px);
}

.section_all__content {
  position: relative;
  z-index: 3;
}
</style>
