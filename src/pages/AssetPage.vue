<script setup lang="ts">
import TSHeader from '@/components/common/TSHeader.vue';
import AssetServices from '@/services/assets.service';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Breadcrumb from 'primevue/breadcrumb';

import { GetAssetsQueryParams } from '@/dto/asset.dto';
import { onMounted, ref } from 'vue';
import TSChip from '@/components/common/TSChip.vue';

const assets = ref();
const searchQuery = ref('');

const home = ref({
  icon: 'pi pi-home',
});
const items = ref([{ label: 'Asset' }]);

const initAsset = async (): Promise<void> => {
  const response = await AssetServices.getAvailableAssets();
  const { data } = response.data;
  // eslint-disable-next-line no-console
  console.log(data);
  assets.value = data.data;
};

onMounted(() => initAsset());

const onSearch = async (): Promise<void> => {
  const query: GetAssetsQueryParams = {
    search: searchQuery.value,
  };
  const response = await AssetServices.getAvailableAssets(query);
  const { data } = response.data;
  // eslint-disable-next-line no-console
  console.log(data);
  assets.value = data.data;
};
</script>

<template>
  <TSHeader v-model="searchQuery" :on-search="onSearch" />
  <Breadcrumb :home="home" :model="items" />
  <div class="p-8">
    <DataTable
      :rows="10"
      :rows-per-page-options="[5, 10, 25, 50, 100]"
      :value="assets"
      paginator
      size="small"
    >
      <Column field="name.nameWithSequence" header="Name" sortable />
      <Column field="group.name" header="Group" sortable>
        <template #body="slotProps">
          <TSChip :label="slotProps.data.group.name" severity="primary" />
        </template>
      </Column>
      <Column field="category.name" header="Category" sortable>
        <template #body="slotProps">
          <TSChip :label="slotProps.data.category.name" severity="primary" />
        </template>
      </Column>
      <Column field="brand.name" header="Brand" sortable>
        <template #body="slotProps">
          <TSChip :label="slotProps.data.brand.name" severity="secondary" />
        </template>
      </Column>
      <Column field="model.name" header="Model/Type" sortable>
        <template #body="slotProps">
          <TSChip :label="slotProps.data.model.name" severity="secondary" />
        </template>
      </Column>
      <Column field="tagType" header="Tag Type" sortable />
    </DataTable>
  </div>
</template>
