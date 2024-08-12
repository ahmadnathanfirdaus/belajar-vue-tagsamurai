<script setup lang="ts">
import Chip from 'primevue/chip';

const props = defineProps<{
  label: string;
  severity: string;
}>();

let style: string = '';

switch (props.severity) {
  case 'primary':
    style = '!text-blue-700 !dark:text-white !bg-blue-100 !dark:bg-surface-700';
    break;
  case 'secondary':
    style = '!text-gray-700 !dark:text-white !bg-gray-200 !dark:bg-surface-700';
    break;
  case 'success':
    style =
      '!text-green-700 !dark:text-white !bg-green-100 !dark:bg-surface-700';
    break;
  case 'warning':
    style =
      '!text-yellow-700 !dark:text-white !bg-yellow-100 !dark:bg-surface-700';
    break;
  case 'danger':
    style = '!text-red-700 !dark:text-white !bg-red-100 !dark:bg-surface-700';
    break;
  default:
    style = '!text-blue-700 !dark:text-white !bg-blue-100 !dark:bg-surface-700';
    break;
}
</script>

<template>
  <Chip :class="'' + style" :label="props.label" />
</template>
