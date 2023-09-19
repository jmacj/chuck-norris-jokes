<template>
  <v-container class="max-width-container" fluid>
    <v-responsive class="align-center justify-center">
      <v-tabs v-model="activeTab">
        <v-tab value="category">Category</v-tab>
        <v-tab value="query">Free Text</v-tab>
      </v-tabs>
      <CategoryTab v-if="(activeTab === 'category')"/>
      <QueryTab v-if="(activeTab === 'query')"/>
    </v-responsive>
  </v-container>
</template>

<script>
import CategoryTab from "@/components/CategoryTab.vue";
import QueryTab from "@/components/QueryTab.vue";

export default {
  components: {
    QueryTab,
    CategoryTab
  },
  data() {
    return {
      activeTab: 'categories',
    };
  },
};
</script>

<style scoped>
.max-width-container {
  max-width: 800px; /* Adjust this value as needed */
  margin: 0 auto; /* Centers the container */
}
</style>
