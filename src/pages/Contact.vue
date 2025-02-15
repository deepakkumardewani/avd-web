<script setup lang="ts">
import { ref } from 'vue'

// Form state
const form = ref({
  name: '',
  email: '',
  message: ''
})

const formRef = ref()
const isSubmitting = ref(false)
const showSuccessAlert = ref(false)
const image = `${import.meta.env.VITE_DO_BASE_URL}/assets/mor-pankh.png`

// Form rules
const rules = {
  name: [(v: string) => !!v || 'Name is required'],
  email: [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
  ],
  message: [(v: string) => !!v || 'Message is required']
}

// Form submission
const submit = async () => {
  const { valid } = await formRef.value?.validate()

  if (!valid) return

  isSubmitting.value = true
  try {
    // TODO: Add your API call here
    showSuccessAlert.value = true
    form.value = { name: '', email: '', message: '' }
    await formRef.value?.reset()
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="tw-min-h-screen tw-bg-gray-50 tw-py-12">
    <div class="tw-container tw-mx-auto tw-px-4">
      <div class="tw-max-w-5xl tw-mx-auto">
        <h1 class="tw-text-3xl tw-font-bold tw-text-center tw-mb-8 tw-text-gray-800">Contact Us</h1>

        <v-card class="pa-6 rounded-xl">
          <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
            <div>
              <h2 class="tw-text-xl tw-font-semibold tw-mb-6 tw-text-gray-700">
                Send us a message
              </h2>
              <v-form ref="formRef" @submit.prevent="submit" class="tw-space-y-6">
                <v-text-field
                  v-model="form.name"
                  :rules="rules.name"
                  label="Name"
                  variant="outlined"
                  clearable
                  density="comfortable"
                  class="tw-mb-4"
                />

                <v-text-field
                  v-model="form.email"
                  :rules="rules.email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  clearable
                  density="comfortable"
                  class="tw-mb-4"
                />

                <v-textarea
                  v-model="form.message"
                  :rules="rules.message"
                  label="Message"
                  variant="outlined"
                  clearable
                  auto-grow
                  rows="4"
                  density="comfortable"
                  class="tw-mb-6"
                />

                <v-btn
                  :loading="isSubmitting"
                  color="primary"
                  type="submit"
                  block
                  size="large"
                  elevation="2"
                >
                  Send
                </v-btn>
              </v-form>

              <v-alert
                v-if="showSuccessAlert"
                type="success"
                variant="tonal"
                class="tw-mt-6"
                closable
              >
                Thank you. Your message has been received! We will get back to you shortly.
              </v-alert>
            </div>

            <div
              class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-50 tw-rounded-lg tw-p-8"
            >
              <v-img
                :src="image"
                alt="morpankh image"
                width="300"
                height="300"
                cover
                class="tw-rounded-lg tw-shadow-lg tw-mb-6"
              />
              <div class="tw-text-center">
                <h3 class="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">Get in Touch</h3>
                <p class="tw-text-gray-600">
                  We'd love to hear from you. Please fill out the form and we'll get back to you as
                  soon as possible.
                </p>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.v-field) {
  border-radius: 8px;
}
</style>
