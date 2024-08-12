<script setup lang="ts">
import InputText from 'primevue/inputtext';

const model = defineModel({ type: String });

defineProps<{
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  isError: boolean;
  errorMessage: string;
}>();
</script>

<template>
  <div>
    <label
      class="block text-sm font-medium leading-6 text-gray-900"
      for="{{ name }}"
    >
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>
    <div class="mt-2">
      <InputText
        :id="name"
        v-model="model"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :type="type"
        autocomplete=""
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
    <span v-if="isError" class="text-red-400">{{ errorMessage }}</span>
  </div>
</template>
