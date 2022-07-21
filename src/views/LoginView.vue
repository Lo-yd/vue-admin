<template>
  <div class="login-container">
    <section class="login-form">
      <a-form
        class="form"
        :model="formState"
        name="loginForm"
        autocomplete="off"
        scrollToFirstError
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <h3 class="title">Login Form</h3>
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入账号！' }]"
        >
          <a-input v-model:value="formState.username" allowClear>
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
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
          <a-button type="primary" html-type="submit">登录</a-button>
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
  remember: false,
});
const onFinish = (values: FormState) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: FormState) => {
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

          /deep/.ant-input {
            padding: 12px 5px 12px 10px;
          }
        }
      }

      .ant-btn-primary {
        width: 100%;
        height: 40px;
      }
    }
  }
}
</style>
