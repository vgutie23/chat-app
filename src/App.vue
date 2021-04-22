<!--Vanessa Gutierrez 04/22/2021-->
<template>
  <NavBar />
  <div v-if="isAuthenticated">
    <Messages />
  </div>
  <div v-else>
    <NoAuth />
    <Footer />
  </div>
</template>

<script setup>
import { authentication } from '~/helpers/useFirebase'

const { isAuthenticated } = authentication()
</script>
