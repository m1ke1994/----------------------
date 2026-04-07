<template>
  <section id="contacts" class="contacts-root w-full scroll-mt-28 pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-14 lg:pt-10">
    <div class="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[760px] text-center">
        <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6b7280]">
          контакты
        </p>
        <h2
          class="mt-3 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[2.8rem] lg:text-[3.2rem]"
        >
          Контакты
        </h2>
      </div>

      <div class="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:items-stretch">
        <article
          class="rounded-[1.25rem] border border-[#5b6169]/25 bg-white/55 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-[6px] sm:p-6 lg:p-8"
        >
          <h3
            class="text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#111827] sm:text-[1.8rem]"
          >
            Связаться с нами
          </h3>

          <div class="mt-6 space-y-4">
            <div class="flex items-start gap-3">
              <span
                class="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/30 bg-white/70 text-[#374151]"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4.5 w-4.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z" />
                  <circle cx="12" cy="11" r="2.2" />
                </svg>
              </span>

              <div>
                <p class="text-[0.9rem] font-medium text-[#6b7280]">Адрес</p>
                <p class="mt-0.5 text-[1rem] font-semibold text-[#111827]">Москва</p>
                <p class="text-[0.94rem] leading-[1.55] text-[#4b5563]">ул. Примерная, 12</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span
                class="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/30 bg-white/70 text-[#374151]"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4.5 w-4.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 3.18 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L7.1 8.9a16 16 0 0 0 8 8l1.44-1.18a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
                  />
                </svg>
              </span>

              <div>
                <p class="text-[0.9rem] font-medium text-[#6b7280]">Телефон</p>
                <a
                  href="tel:+79991234567"
                  class="mt-0.5 inline-block text-[1rem] font-semibold text-[#111827] transition hover:text-[#1f2937]"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span
                class="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/30 bg-white/70 text-[#374151]"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4.5 w-4.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>

              <div>
                <p class="text-[0.9rem] font-medium text-[#6b7280]">E-mail</p>
                <a
                  href="mailto:info@company.ru"
                  class="mt-0.5 inline-block text-[1rem] font-semibold text-[#111827] transition hover:text-[#1f2937]"
                >
                  info@company.ru
                </a>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span
                class="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5b6169]/30 bg-white/70 text-[#374151]"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4.5 w-4.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 8v4l2.5 2.5" />
                </svg>
              </span>

              <div>
                <p class="text-[0.9rem] font-medium text-[#6b7280]">Режим работы</p>
                <p class="mt-0.5 text-[1rem] font-semibold text-[#111827]">Пн–Пт: 9:00 – 18:00</p>
              </div>
            </div>
          </div>

        </article>

        <article
          class="relative overflow-hidden rounded-[1.25rem] border border-[#5b6169]/25 bg-white/50 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-[6px] sm:p-5 lg:p-6"
        >
          <div
            class="h-full min-h-[22rem] w-full overflow-hidden rounded-[1rem] border border-[#5b6169]/20 bg-[#f8fafc] lg:min-h-[26rem]"
          >
            <iframe
              title="Карта: Москва, ул. Примерная, 12"
              src="https://www.google.com/maps?q=Москва,+ул.+Примерная,+12&output=embed"
              class="h-full min-h-[22rem] w-full border-0 lg:min-h-[26rem]"
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
