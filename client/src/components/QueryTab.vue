<template>
  <v-card>
    <v-card-text>
      <v-row align="center" justify="start">
        <v-col cols="12" md="2">
          <v-label>Free Text</v-label>
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="query"
            :rules="[value => !!value || 'Field is required']"
          />
        </v-col>
        <v-col cols="12" md="2">
          <v-btn color="primary" :disabled="!this.query" @click="search">Search</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <SearchResultCard v-if="this.resultCount > 0" :searchResult="this.searchResults[this.selectedIndex]" />
    <v-container v-if="this.resultCount > 0" class="pa-0 text-caption">
      <v-btn
        icon="mdi-menu-left"
        size="small"
        variant="plain"
        :disabled="this.selectedIndex === 0"
        @click="--this.selectedIndex"
      />
      Page {{ this.selectedIndex + 1 }} of {{ this.resultCount }}
      <v-btn
        icon="mdi-menu-right"
        size="small"
        variant="plain"
        :disabled="this.selectedIndex === this.resultCount - 1"
        @click="++this.selectedIndex"
      />
    </v-container>
  </v-card>
</template>

<script>
import { searchJokes } from "@/services/apiService.js";
import SearchResultCard from "@/components/SearchResultCard.vue";

export default {
  components: {
    SearchResultCard

  },
  data() {
    return {
      query: '',
      searchResults: [],
      selectedIndex: 0,
      resultCount: 0,
    };
  },
  methods: {
    /**
     * search jokes by query
     */
    search() {
      if (this.query) {
        searchJokes(this.query)
          .then(response => {
            this.searchResults = response.data.result;
            this.resultCount = response.data.total;
            this.selectedIndex = 0;

            if (this.resultCount === 0) {
              alert('No results found');
            }
          })
          .catch(error => {
            console.error('Error fetching search results:', error);
          });
      } else {
        alert('Field is required');
      }
    }
  }
};
</script>

<style scoped>
</style>
