<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(() =>
  queryCollection("content").path(route.path).first(),
);
</script>

<template>
  <article v-if="post" class="prose prose-invert max-w-none">
    <h1>{{ post.title }}</h1>

    <ContentRenderer :value="post" />
  </article>
</template>
