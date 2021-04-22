<template>
  <div
    class="absolute bottom-0 left-0 right-0 flex focus-within:ring-2 focus-within:ring-violet-400"
  >
    <input
      v-model="newMessage"
      type="text"
      class="flex-grow text-lg font-light focus:outline-none bg-gray-50"
      @change="send"
    />
    <button class="bg-violet-400 px-7 focus:outline-none" @click="send">
      <mdi:send-circle class="text-xl" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { database } from '~/helpers/useFirebase'
const { sendMessage } = database()
const newMessage = ref(null)
const send = () => {
  if (newMessage.value?.length > 0) {
    sendMessage(newMessage.value)
    newMessage.value = null
  }
}
</script>
