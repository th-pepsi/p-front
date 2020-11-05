<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template v-slot:renderItem="{ item, index }">
      <a-list-item class="list-li" @click="intoDetail(index)">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template v-slot:title>
            <span>
              {{ item.title }}
            </span>
          </template>
          <template v-slot:avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    let state = reactive({
      data: [
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
      ],
    });
    const intoDetail = (idx) => {
      router.push(`/detail/${idx}`)
    };
    return {
      ...toRefs(state),
      intoDetail,
    };
  },
};
</script>
<style lang="scss" scoped>
.list-li {
  cursor: pointer;
}
</style>
