<!--Vanessa Gutierrez 04/22/2021-->
<template>
  <div class="fixed top-0 left-0 right-0 bg-black text-violet-300 py-6 z-10">
    <div class="container mx-auto flex justify-between items-center">
      <div class="brand flex space-x-2 text-2xl">
        <mdi:message-text-outline class="text-pink-500" />
        <h1 class="font-thin">
          Convenient<span class="font-bold text-pink-500">ChitChat</span>
        </h1>
      </div>
      <div class="menu">
        <div v-if="!isAuthenticated">
          <button
            class="px-4 py-2 text-violet-100 bg-pink-600 rounded-full hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500"
            @click="googlePopup"
          >
            Login
          </button>
        </div>
        <div v-else class="flex items-center space-x-8">
          <p class="text-violet-100">Welcome {{ user?.displayName }}</p>
          <button
            class="px-4 py-2 text-violet-50 bg-violet-500 rounded-full hover:bg-violet-600 focus:outline-none focus:ring-4 focus:ring-violet-300"
            @click="signOut"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { authentication } from '~/helpers/useFirebase'
const { isAuthenticated, user, googlePopup, signOut } = authentication()
</script>
