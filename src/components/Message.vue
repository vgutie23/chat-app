<!--Vanessa Gutierrez 04/22/2021-->
<template>
  <div
    @click.stop="copyMessage"
    class="container mx-auto flex my-4 rounded-full transform transition cursor-pointer hover:scale-105"
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
  <transition @leave="(el, done) => motions.notification.leave(done)">
    <div
      v-motion-pop="'notification'"
      class="bg-amber-400 fixed py-3 px-6 rounded-full bottom-16 right-4 z-10"
      v-if="copied"
    >
      <p class="text-gray-800">Message was Copied!</p>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { useMotions } from '@vueuse/motion'

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

const source = ref('')
const { copy, copied } = useClipboard({ source })
const copyMessage = () => {
  source.value = `${props.message.text} by ${props.message.userName}`
  copy()
}

const motions = useMotions()
</script>
