<template>
  <v-card>
    <v-card-text>
      <v-row align="center" justify="start">
        <v-col cols="12" md="2">
          <v-label>Category</v-label>
        </v-col>
        <v-col cols="12" md="8">
          <v-select
            v-model="selectedCategory"
            :items="categories"
            clearable
          />
        </v-col>
        <v-col cols="12" md="2">
          <v-btn @click="search" color="primary">Search</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <SearchResultCard v-if="searchResult" :searchResult="searchResult" />
  </v-card>
</template>

<script>
import SearchResultCard from "@/components/SearchResultCard.vue";
import { getCategories, getRandomJoke } from "@/services/apiService.js";

export default {
  components: {SearchResultCard},
  data() {
    return {
      selectedCategory: null,
      categories: [],
      searchResult: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    /**
     * fetch categories
     */
    fetchCategories() {
      getCategories()
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },

    /**
     * get random joke
     */
    search() {
      getRandomJoke(this.selectedCategory)
        .then(response => {
          this.searchResult = response.data;
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  }
};
</script>

<style scoped>
</style>
