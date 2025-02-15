<script setup lang="ts">
const title = 'SHRI MADHUSUDAN BAPUJI'
const bannerImage = `${import.meta.env.VITE_DO_BASE_URL}/assets/SMB.jpg`
</script>

<template>
  <div class="tw-container tw-mx-auto tw-px-4 tw-py-8">
    <div class="tw-mt-10 tw-flex tw-justify-center">
      <img
        :src="bannerImage"
        alt="Shri Madhusudan Bapuji"
        class="tw-w-full tw-max-w-4xl tw-h-auto tw-rounded-lg tw-shadow-lg"
      />
    </div>

    <div class="tw-max-w-4xl tw-mx-auto tw-mt-12">
      <h1 class="tw-text-5xl tw-text-center font-dosis tw-mb-6">{{ title }}</h1>

      <div class="tw-w-36 tw-h-1 tw-bg-black tw-mx-auto tw-mb-8"></div>

      <div class="tw-border-b tw-border-gray-200 tw-mb-8">
        <h2 class="tw-text-2xl tw-text-center font-dosis tw-mb-4">BRIEF HISTORY ABOUT HIS LIFE</h2>
      </div>

      <div class="tw-space-y-6 tw-text-lg tw-leading-relaxed font-karla tw-text-gray-700">
        <p class="tw-text-center">
          By following the orders of his Spiritual Master Kirtananand Swami Srila Bhaktipada,
          Madhusudan Bapuji arrived in Ulhasnagar (India) in October 1992. Accepting new challenges
          and facing all struggles, He started preaching in India. His lectures and actions were
          creating a desire to live spiritually and enlightened pure love for Lord Krishna among
          everyone. While preaching the Lord's name, He was also simultaneously working tirelessly
          to build a beautiful temple in which everyone can chant the holy name. And His dream soon
          came true on 3rd September 1999, when Lord Shri Shri Radha Vrindavanchandra got installed
          in Anand Vrindavan Dham, which has now become one of the most beautiful temples within
          Thane district. A centre for Devotional service of the Lord in which daily lectures are
          conducted on Bhagavad Gita and Srimad Bhagwatam, which fills the entire atmosphere with
          positivity through the holy name of Shri Krishna.
        </p>

        <p class="tw-text-center">
          He is a Spiritual Philosopher who gives discourses on Spiritual topics, mainly on Shrimad
          Bhagavad Geeta. His Divine Mission is to preach the holy name of Lord Krishna and make
          people chant the Divine Mantra Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare Hare Rama Hare
          Rama Rama Rama Hare Hare. & He struggles tirelessly to accomplish His mission &
          transforming people's material lives. Presently His main centre is in Ulhasnagar where He
          gives spiritual lectures on regular basis which are then circulated all over the world. He
          also has His centres in the cities of India such as Nagpur, Jaipur, Gujrat, Ahmedabad, and
          also out side India in Dubai, USA etc.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-dosis {
  font-family:
    'Dosis',
    Trebuchet MS,
    Helvetica,
    Arial,
    sans-serif;
}

.font-karla {
  font-family: 'Karla', sans-serif;
}
</style>
