<script setup lang="ts">
const hindiImage = `${import.meta.env.VITE_DO_BASE_URL}/assets/hindi.png`
const englishImage = `${import.meta.env.VITE_DO_BASE_URL}/assets/english.jpg`
const hindiBook = `${import.meta.env.VITE_DO_BASE_URL}/NKM/Naam-Ki-Mahima-Hindi.pdf`
const englishBook = `${import.meta.env.VITE_DO_BASE_URL}/NKM/Naam-Ki-Mahima-English.pdf`
</script>
<template>
  <div class="tw-container tw-mx-auto tw-mt-12 tw-px-4 tw-max-w-6xl">
    <h1
      class="tw-text-center tw-text-5xl tw-mb-6 tw-font-dosis tw-tracking-tight tw-leading-tight tw-text-gray-800"
    >
      NAAM KI MAHIMA - GLORIES OF THE HOLY NAME
    </h1>

    <div class="tw-bg-gray-50 tw-p-6 tw-rounded-lg tw-mb-8">
      <h3
        class="tw-text-center tw-text-2xl tw-leading-normal tw-font-dosis tw-m-0 tw-text-gray-700"
      >
        "HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE
      </h3>
      <h3
        class="tw-text-center tw-text-2xl tw-leading-normal tw-font-dosis tw-m-0 tw-text-gray-700"
      >
        HARE RAMA HARE RAMA RAMA RAMA HARE HARE"
      </h3>
    </div>

    <p
      class="tw-text-gray-600 tw-text-lg tw-leading-relaxed tw-font-karla tw-mb-5 tw-text-justify tw-mx-auto tw-max-w-4xl"
    >
      In every era, there are different ways of realising God which are specific to that time
      period. However, in the present age of Kaliyug, it has become very easy to realise God by
      simply chanting the Holy names of Lord and participating in Hari Naam Sankirtan (The
      congregational chanting). There is no hard and fast rule to chant the Holy names of Krishna.
      The process of chanting is beyond the boundaries of country, time, circumstances, rituals and
      age. There is no difference between The Holy names of God and God Himself. Therefore, in this
      dark age of Kaliyug, the glories and the benefits of the Holy names are limitless. This
      booklet "The Glories of The Holy Name" is an effort to arise the Love of God, faith and trust
      within the core of your heart so that you surrender yourself to the transcendental sound of
      the Holy name and embark your journey back to home, back to Godhead.
    </p>

    <p class="tw-text-center tw-text-gray-700 tw-text-lg tw-font-medium tw-mb-8">
      — Shri Madhusudan Bapuji
    </p>

    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mx-auto tw-max-w-5xl">
      <div>
        <div
          class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-transition-transform hover:tw-scale-105"
        >
          <img
            class="tw-w-full tw-h-auto tw-object-cover"
            :src="hindiImage"
            alt="Hindi version cover"
          />
          <div class="tw-p-6 tw-text-center">
            <a
              class="tw-inline-block tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-bg-blue-700 tw-transition-colors tw-font-medium"
              target="_blank"
              :href="hindiBook"
            >
              Download Hindi Version
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-transition-transform hover:tw-scale-105"
        >
          <img
            class="tw-w-full tw-h-auto tw-object-cover"
            :src="englishImage"
            alt="English version cover"
          />
          <div class="tw-p-6 tw-text-center">
            <a
              class="tw-inline-block tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-full hover:tw-bg-blue-700 tw-transition-colors tw-font-medium"
              target="_blank"
              :href="englishBook"
            >
              Download English Version
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-pb-16"></div>
  </div>
</template>
