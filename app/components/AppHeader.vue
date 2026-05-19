<template>
  <header class="w-full border-b border-gray-200 bg-white">
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <div class="flex items-center gap-2">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold"
        >
          A
        </div>
        <span class="text-lg font-semibold text-gray-900">AppName</span>
      </div>

      <nav class="hidden items-center gap-6 md:flex">
        <a
          href="#"
          class="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Dashboard
        </a>
        <a
          href="#"
          class="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Projects
        </a>
        <a
          href="#"
          class="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Team
        </a>
        <a
          href="#"
          class="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Settings
        </a>
      </nav>

      <div class="flex items-center gap-4">
        <div class="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            class="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          🔔
        </button>

        <button
          class="flex items-center gap-2 rounded-lg hover:bg-gray-100 p-1"
        >
          <img
            src=""
            alt="User avatar"
            class="h-9 w-9 rounded-full object-cover"
          />
          <span class="hidden text-sm font-medium text-gray-700 sm:block">
            name
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
