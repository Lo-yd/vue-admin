<template>
  <a-layout>
    <!-- sider -->
    <SiderLayout />
    <a-layout>
      <HeaderLayout />
      <ContentLayout />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import SiderLayout from "./components/Sider/SiderLayout.vue";
import HeaderLayout from "./components/Header/HeaderLayout.vue";
import ContentLayout from "./components/Main/ContentLayout.vue";
export default defineComponent({
  components: {
    SiderLayout,
    HeaderLayout,
    ContentLayout,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
