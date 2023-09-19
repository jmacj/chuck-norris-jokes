<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <h1 class="text-center text-h3 font-weight-bold mb-10"><u>Chuck Norris Jokes</u></h1>
      <Jokes/>
      <div class="py-14" />
    </v-responsive>
  </v-container>
</template>

<script setup>
  import Jokes from '@/components/Jokes.vue'
</script>
