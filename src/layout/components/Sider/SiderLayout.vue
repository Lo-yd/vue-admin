<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">11</div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
// import {
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from "@ant-design/icons-vue";
// import { defineComponent, ref } from "vue";
// export default defineComponent({
//   components: {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//   },
//   setup() {
//     return {
//       selectedKeys: ref<string[]>(["1"]),
//       collapsed: ref<boolean>(false),
//     };
//   },
// });
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>

<style></style>
