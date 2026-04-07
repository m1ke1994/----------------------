<template>
  <section class="contacts-root w-full pb-10 pt-4 sm:pb-12 sm:pt-5 lg:pb-14 lg:pt-6">
    <div class="w-full px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
      <div class="grid gap-4 lg:grid-cols-[minmax(19rem,28rem)_minmax(0,1fr)]">
        <article class="rounded-[1.25rem] border border-[#5b6169]/30 bg-white/55 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.1)] backdrop-blur-[6px] sm:p-6 lg:p-7">
          <h2 class="text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111827] sm:text-[2.4rem]">
            Контакты
          </h2>

          <div class="mt-6 space-y-4">
            <div class="flex items-start gap-3">
              <span class="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/35 bg-white/70 text-[#374151]">
                <svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
                  <circle cx="12" cy="11" r="2.2" />
                </svg>
              </span>
              <div>
                <p class="text-[0.9rem] font-medium text-[#374151]">Адрес</p>
                <p class="mt-0.5 text-[1rem] font-semibold text-[#111827]">Москва</p>
                <p class="text-[0.92rem] leading-[1.55] text-[#4b5563]">ул. Примерная, 12</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/35 bg-white/70 text-[#374151]">
                <svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L7.1 8.9a16 16 0 0 0 8 8l1.44-1.18a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div>
                <p class="text-[0.9rem] font-medium text-[#374151]">Телефон</p>
                <a href="tel:+79991234567" class="mt-0.5 inline-block text-[0.98rem] font-semibold text-[#111827] transition hover:text-[#1f2937]">
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/35 bg-white/70 text-[#374151]">
                <svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <p class="text-[0.9rem] font-medium text-[#374151]">E-mail</p>
                <a href="mailto:info@company.ru" class="mt-0.5 inline-block text-[0.98rem] font-semibold text-[#111827] transition hover:text-[#1f2937]">
                  info@company.ru
                </a>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/35 bg-white/70 text-[#374151]">
                <svg viewBox="0 0 24 24" class="h-4.5 w-4.5" fill="none" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l2.5 2.5" />
                </svg>
              </span>
              <div>
                <p class="text-[0.9rem] font-medium text-[#374151]">Режим работы</p>
                <p class="mt-0.5 text-[0.98rem] font-semibold text-[#111827]">Пн–Пт: 9:00 – 18:00</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="mt-7 inline-flex items-center rounded-full border border-[#4b5563]/40 bg-white/70 px-6 py-2.5 text-[0.9rem] font-medium text-[#111827] shadow-[0_8px_20px_rgba(15,23,42,0.1)] transition duration-200 hover:-translate-y-[1px] hover:border-[#374151]/55 hover:bg-white"
          >
            Оставить заявку
          </button>
        </article>

        <article class="relative overflow-hidden rounded-[1.25rem] border border-[#5b6169]/30 bg-white/50 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.1)] backdrop-blur-[6px] sm:p-5 lg:p-6">
          <div class="h-full min-h-[20rem] w-full overflow-hidden rounded-[1rem] border border-[#5b6169]/25 bg-[#f8fafc]">
            <iframe
              title="Карта: Москва, ул. Примерная, 12"
              src="https://www.google.com/maps?q=Москва,+ул.+Примерная,+12&output=embed"
              class="h-full min-h-[20rem] w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-root {
  font-family: "Manrope", "Segoe UI", sans-serif;
}
</style>
