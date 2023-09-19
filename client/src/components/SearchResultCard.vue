<!-- src/components/SearchResultCard.vue -->
<template>
  <v-card variant="outlined">
    <v-card-subtitle class="pa-4">{{ formatDate(searchResult.created_at) }}</v-card-subtitle>
    <v-card-text class="text-body-1">{{ searchResult.value }}</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn size="small" variant="plain" :href="searchResult.url">Joke Page</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    searchResult: {
      type: Object,
      required: true
    }
  },
  methods: {
    /**
     * format date
     * @param date
     * @returns {*}
     */
    formatDate(date) {
      return dayjs(date).format('YYYY-MM-DD HH:mm');
    }
  }
};
</script>

<style scoped>
</style>
