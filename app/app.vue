<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const theme = useState("theme", () => "dark");

watch(theme, (value) => {
  document.documentElement.classList.toggle("light", value === "light");
});
</script>
