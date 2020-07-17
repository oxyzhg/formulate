<template>
  <div class="formulate">
    <h2>Formulate!</h2>

    <el-form ref="form" :model="form" label-width="80px">
      <field-builder v-for="(item, index) in formatedDescriptor" :key="index" :field="item" />

      <hr />

      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import config from './common/config';
import { parseIntoRealForm, assignForm, formatNormalDescriptor } from './common/utils';
import { configurableProps } from './common/constant';
import { looseEqual } from './shared';
import FieldBuilder from './fieldBuilder';

export default {
  name: 'Formulate',

  components: {
    FieldBuilder,
  },

  props: {
    value: Object,
    descriptor: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default: _ => ({}),
    },
    rules: {
      type: Object,
      default: _ => ({}),
    },
    asyncErrors: {
      type: Object,
      default: _ => ({}),
    },
    formProps: {
      type: Object,
      default: _ => ({}),
    },
    showActions: Boolean,
    confirmBtnText: {
      type: String,
      default: '确定',
    },
  },

  provide() {
    return {
      form: this.form,
      rules: this.rules,
      options: this.options,
      errors: this.errors,
    };
  },

  data() {
    return {
      form: {},
      errors: {},

      config,
      ...configurableProps,

      formatedDescriptor: [],
    };
  },

  watch: {
    descriptor: {
      immediate: true,
      deep: true,
      handler(descriptor, initial) {
        if (looseEqual(descriptor, initial)) return;
        initial === undefined && this.init();
      },
    },
    value: {
      immediate: true,
      deep: true,
      handler(form) {
        if (looseEqual(form, this.form)) return;
        this.init();
      },
    },
  },

  methods: {
    init() {
      // init form
      console.log('init form');

      const formatedDescriptor = formatNormalDescriptor(this.descriptor);
      const generatedForm = parseIntoRealForm(formatedDescriptor);
      const mergedForm = assignForm(this.value, generatedForm);

      this.form = mergedForm;
      this.formKeys = Object.keys(mergedForm);
      this.formatedDescriptor = formatedDescriptor;
    },

    initDescriptor() {},
    initForm() {},
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
