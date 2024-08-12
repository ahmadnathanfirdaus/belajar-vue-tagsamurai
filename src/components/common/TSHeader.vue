<script setup lang="ts">
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { onMounted } from 'vue';

const searchModel = defineModel({ type: String });

const props = defineProps<{
  onSearch: () => void;
}>();

onMounted(() => {
  // Add event listener to search field
  const searchField = document.getElementById('searchField');
  searchField?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      props.onSearch();
    }
  });
});
</script>

<template>
  <nav class="flex p-4 align-middle">
    <img alt="logoipsum" class="h-10 me-10" src="@/assets/img/logoipsum.png" />
    <i class="pi pi-bars text-2xl my-auto" />
    <div class="ms-5 me-10">
      <IconField>
        <InputText
          id="searchField"
          v-model="searchModel"
          class="w-96"
          placeholder="Search"
        />
        <InputIcon class="pi pi-search" />
      </IconField>
    </div>
    <div>
      <Button class="text-xs bg-blue-400 mx-px">Quick Action</Button>
      <Button class="text-xs bg-blue-400 mx-px">
        <i class="pi pi-sync me-1" /> Sync
      </Button>
      <Button class="text-xs bg-blue-400 mx-px">
        <i class="pi pi-instagram me-1" /> Search by TAG
      </Button>
    </div>
  </nav>
</template>
