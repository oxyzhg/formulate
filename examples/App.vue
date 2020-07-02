<template>
  <div id="app">
    <formulate v-model="form" :descriptor="descriptor" :rules="rules" :options="options"></formulate>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      form: {
        name: '',
        region: '',
        delivery: '',
        type: [],
        resource: '',
        desc: '',
      },
      descriptor: [
        {
          key: 'name',
          type: 'input',
          label: '活动名称',
        },
        {
          key: 'region',
          input: 'select',
          label: '活动区域',
        },
        {
          key: 'delivery',
          type: 'switch',
          label: '即时配送',
        },
        {
          key: 'type',
          type: 'checkbox',
          label: '活动性质',
        },
        {
          key: 'resource',
          type: 'radio',
          label: '特殊资源',
        },
        {
          key: 'desc',
          type: 'textarea',
          label: '活动形式',
        },
      ],
      rules: {},
      options: {
        region: [
          { label: '区域一', value: 'shanghai' },
          { label: '区域二', value: 'beijing' },
        ],
        type: [
          { label: '美食/餐厅线上活动', value: 't1' },
          { label: '地推活动', value: 't2' },
          { label: '线下主题活动', value: 't3' },
          { label: '单纯品牌曝光', value: 't4' },
        ],
        resource: [
          { label: '线上品牌商赞助', value: 'r1' },
          { label: '线下场地免费', value: 'r2' },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>
