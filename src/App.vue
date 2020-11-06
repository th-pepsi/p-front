<template>
  <div class="view-dev">
    <router-view v-if="loginStatus" />
    <a-layout id="components-layout-demo-top" v-else class="layout">
      <a-layout-header style="position: relative">
        <div>
          <img
            class="logo"
            src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg"
            alt=""
          />
        </div>
        <div class="userPhoto">
           <a-dropdown>
          <img
            @click="(e) => e.preventDefault()"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt=""
          /><DownOutlined />
            <template v-slot:overlay>
              <a-menu>
                <a-menu-item style="padding:0 30px">
                  <a href="javascript:;">详情</a>
                </a-menu-item>
                <a-menu-item style="padding:0 30px">
                  <router-link to='/login'>退出</router-link>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>

        <a-menu
          theme="dark"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">首页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/boiling">沸点</router-link>
          </a-menu-item>
          <a-menu-item key="3">话题</a-menu-item>
          <a-menu-item key="3">小册</a-menu-item>
          <a-menu-item key="3">活动</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 20px; height: 100%">
        <div :style="{ background: '#fff', padding: '24px', height: '100%' }">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
 
  setup() {
    const router = useRouter()
    let state = reactive({
      selectedKeys: ["2"],
    });
    let loginStatus = computed(()=>{
      return router.currentRoute.value.name == "Login";
    })
    return {
      ...toRefs(state),
      loginStatus
    };
  },
};
</script>
<style lang="scss">
.view-dev {
  height: 100%;
}
#components-layout-demo-top {
  height: 100%;
  overflow: hidden;
  .userPhoto {
    position: absolute;
    right: 50px;
  }
  & img {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    cursor: pointer;
  }
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
