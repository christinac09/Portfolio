<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Blogs</h1>

    <div class="space-y-4">
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="block p-4 border border-gray-800 rounded hover:border-cyan-500"
      >
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="text-text">{{ post.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find(),
);
</script>

<style scoped></style>
