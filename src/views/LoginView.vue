<template>
  <div class="login-container">
    <section class="login-form">
      <a-form
        class="form"
        :model="formState"
        name="loginForm"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <h3 class="title">Login Form</h3>
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item name="remember">
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
<style lang="less" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  background-color: #b6b6b6;
  .login-form {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    height: 400px;
    width: 400px;
    .form {
      height: 100%;
      width: 100%;
      padding: 30px;
      .title {
        font-size: 26px;
        // color: #eee;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: 700;
      }
      .ant-form-item {
        .ant-input-affix-wrapper {
          height: 50px;
          input.ant-input {
            // padding: 20px;
            background-color: pink;
          }
        }
      }
    }
  }
}
</style>
