<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style></style>
