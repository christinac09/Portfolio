<template>
  <header class="border-b border-gray-800">
    <nav class="max-w-5xl mx-auto flex justify-between p-4">
      <NuxtLink to="/" class="font-bold text-lg text-primary"
        >christina.chen</NuxtLink
      >

      <div class="flex gap-4">
        <NuxtLink to="/projects" class="hover:text-cyan-400 text-text"
          >Projects</NuxtLink
        >
        <NuxtLink to="/blog" class="hover:text-cyan-400">Blog</NuxtLink>
        <NuxtLink to="/about" class="hover:text-cyan-400">About</NuxtLink>
        <button @click="theme = theme === 'dark' ? 'light' : 'dark'">
          <p>{{ theme }}</p>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const theme = useState<"light" | "dark">("theme");
</script>

<style scoped></style>
