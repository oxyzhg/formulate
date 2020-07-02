<template>
  <el-form-item v-bind="field[FORMITEM_PROPS]" :prop="presentKey" :error="errors[presentKey]">
    <slot :name="presentKey">
      <componentc
        :is="detectComponent(field.type)"
        :value.sync="presentValue"
        :form="form"
        :field="field"
        :field-key="presentKey"
        :field-props="field[FIELD_PROPS]"
        :options="field.options || options[presentKey] || []"
        v-on="field.on"
      />
    </slot>
  </el-form-item>
</template>

<script>
import { configurableProps } from './common/constant';
import FieldInput from './packages/field-input';

export default {
  name: 'FieldBuilder',

  components: {
    FieldInput,
  },

  props: {
    field: Object,
    options: Object,
    form: Object,
    errors: Object,
  },

  data() {
    return {
      ...configurableProps,
    };
  },

  computed: {
    presentKey() {
      return this.field.key;
    },
    presentValue: {
      get() {
        return this.form[this.presentKey];
      },
      set(value) {
        this.form[this.presentKey] = value;
      },
    },
  },

  methods: {
    detectComponent(type) {
      const actions = new Map([
        ['input', 'FieldInput'],
        ['input-number', 'FieldInputNumber'],
        ['radio', 'FieldRadio'],
        ['select', 'FieldSelect'],
        ['checkbox', 'FieldCheckbox'],
        ['textarea', 'FieldTextarea'],
        ['datepicker', 'FieldDatePicker'],
        ['dateranger', 'FieldDateRanger'],
        ['switch', 'FieldSwitch'],
        ['select-multi', 'FieldSelectMulti'],
        ['select-tree', 'FieldSelectTree'],
        ['transfer', 'FieldTransfer'],
        ['image-upload', 'ImageUpload'],
        ['select-priority', 'SelectPriority'],
        ['select-severity', 'SelectSeverity'],
        ['richtext', 'TinymceEditor'],
        ['title', 'GroupLabel'],
        ['text', 'PlainText'],
      ]);

      return actions.get(type);
    },
  },
};
</script>
