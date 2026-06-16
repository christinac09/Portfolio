<script setup>
const route = useRoute();

const { data: post } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne(),
);
</script>

<template>
  <article v-if="post" class="prose prose-invert max-w-none">
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template>

<script setup lang="ts"></script>

<style scoped></style>
