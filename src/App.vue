<script setup lang="ts">
import LoginPage from '@/pages/LoginPage.vue';
import AssetPage from '@/pages/AssetPage.vue';

const token = localStorage.getItem('token');
</script>

<template>
  <LoginPage v-if="token === null" />
  <AssetPage v-else />
</template>
