<template>
  <header class="border-b border-gray-800 bg-base-100">
    <nav class="max-w-5xl mx-auto flex justify-between p-4">
      <NuxtLink to="/" class="font-bold text-lg text-primary"
        >christina.chen</NuxtLink
      >

      <div class="flex gap-4">
        <NuxtLink to="/projects" class="hover:text-cyan-400 text-neutral"
          >Projects</NuxtLink
        >
        <NuxtLink to="/blog" class="hover:text-cyan-400">Blog</NuxtLink>
        <NuxtLink to="/about" class="hover:text-cyan-400">About</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
