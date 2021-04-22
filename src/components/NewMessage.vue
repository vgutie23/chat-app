<!--Vanessa Gutierrez 04/22/2021-->
<template>
  <div
    class="fixed bottom-0 left-0 right-0 flex focus-within:ring-2 focus-within:ring-violet-400"
  >
    <input
      v-model="newMessage"
      type="text"
      class="flex-grow text-lg font-light focus:outline-none bg-gray-50"
      @change="send"
    />
    <button
      class="bg-violet-500 px-7 focus:outline-none hover:bg-violet-600"
      @click="send"
    >
      <mdi:send-circle class="text-xl" />
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmit } from 'vue'
import { database } from '~/helpers/useFirebase'
const { sendMessage } = database()
const newMessage = ref(null)
const emit = defineEmit(['added'])
const send = () => {
  if (newMessage.value?.length > 0) {
    sendMessage(newMessage.value)
    newMessage.value = null
    emit('added')
  }
}
</script>
