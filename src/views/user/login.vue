<template>
  <div class="login-bg">
    <a-form
      layout="inline"
      :model="formInline"
      @submit="handleSubmit"
      @submit.native.prevent
      style="padding-top: 250px"
    >
      <div class="login-text">P-FRONT登录</div>
      <div>
        <a-form-item>
          <a-input
            v-model:value="formInline.user"
            size="large"
            placeholder="Username"
            class="ip-class"
          >
            <template v-slot:prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
      </div>
      <div style="padding: 12px 0">
        <a-form-item>
          <a-input
            v-model:value="formInline.password"
            type="password"
            size="large"
            placeholder="Password"
            class="ip-class"
          >
            <template v-slot:prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
      </div>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formInline.user === '' || formInline.password === ''"
        >
         登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang='ts'>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      console.log(this.formInline);
    },
  },
};
</script>
<style lang="scss" scoped>
.login-bg {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  text-align: center;
}
.login-text{
    font-size: 26px;
    color: #eee;
    margin: 0 auto 15px auto;
    text-align: center;
    font-weight: 700;
}
.ip-class {
  width: 300px;
}
</style>