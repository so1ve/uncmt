<script setup lang="ts">
// @ts-expect-error Ignore type
import { Waline as _Waline } from "@waline/client/dist/component.mjs";
import "@waline/client/dist/waline.css";
import type { ConfigMap } from "../types";

const props = defineProps<{
  config: ConfigMap["waline"]
}>();

// Workaround
const Waline = defineComponent<ConfigMap["waline"]>(_Waline);
</script>

<template>
  <Waline v-bind="props.config" />
</template>
