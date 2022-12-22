<script setup lang="ts">
import Waline from "./providers/Waline.vue";
import type { ConfigMap, SupportedProviders } from "./types";

const props = defineProps<{
  type: SupportedProviders
  config: ConfigMap[SupportedProviders]
}>();

const componentMap = {
  waline: Waline,
};
</script>

<template>
  <component :is="componentMap[props.type]" :config="props.config" />
</template>
