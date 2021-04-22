<template>
  <div
    class="container mx-auto flex my-4 rounded-full"
    :class="isUser ? 'bg-pink-500' : 'bg-violet-500'"
  >
    <div>
      <img
        class="rounded-full h-12"
        :src="message.userPhotoURL"
        :alt="`Avatar for ${message.userName}`"
      />
    </div>
    <div class="flex flex-grow">
      <div
        class="flex flex-grow items-center justify-between mx-5 font-light text-lg text-violet-200"
      >
        <p>{{ message.text }}</p>
        <p class="text-base italic">{{ message.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import { authentication } from '~/helpers/useFirebase'

const { user } = authentication()

const isUser = computed(() => user.value.uid === props.message.userId)

const props = defineProps({
  message: {
    type: Object,
    default: () => ({
      userName: '',
      userId: '',
      userPhotoURL: '',
      text: '',
      createdAt: '',
    }),
  },
})
</script>
