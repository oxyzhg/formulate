<script>
import components from './common/components';
import { configurableProps } from './common/constant';
import { detectDescriptorType } from './common/utils';
import { isArray, isObject, hasOwn } from './shared';

import FieldInput from './packages/field-input';
import FieldInputNumber from './packages/field-input-number';
import FieldSelect from './packages/field-select';
import FieldSwitch from './packages/field-switch';
import FieldCheckbox from './packages/field-checkbox';
import FieldRadio from './packages/field-radio';
import FieldTextarea from './packages/field-textarea';
import FieldDatePicker from './packages/field-date-picker';

export default {
  name: 'FieldBuilder',

  components: {
    FieldInput,
    FieldInputNumber,
    FieldSelect,
    FieldSwitch,
    FieldCheckbox,
    FieldRadio,
    FieldTextarea,
    FieldDatePicker,
  },

  props: {
    field: [Object, Array], // 支持两种类型，三种模式
    options: Object,
    form: Object,
    errors: Object,
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

    // 更新数据
    updateFormItem(key, value) {
      this.form[key] = value;
    },
  },

  render(h) {
    const { $slots, field, form, options, errors, detectComponent, updateFormItem } = this;
    const { FORMITEM_PROPS, FIELD_PROPS, COLUMN_PROPS } = configurableProps;

    // 判断表单项、表单组、表单列，根据情况渲染
    // 1.表单项，直接渲染，判断条件：存在 key
    // 2.表单项组，按照配置布局后，遍历渲染 children 各项，判断条件：存在 children
    // 3.表单项列，遍历渲染各项，判断条件：数组形式
    const descriptorType = detectDescriptorType(field); // 配置项的类型

    // 表单项渲染，一定是具体的表单项
    const formItemRender = config => {
      const { key, type, ...args } = config;
      const _value = form[key];
      const _options = options[key] || args.options || [];
      const _errors = errors[key];

      const componentName = detectComponent(type);

      // 表单项参数
      const formItemProps = {
        props: {
          ...args[FORMITEM_PROPS],
          errors: _errors,
        },
      };
      // 表单组件参数
      const fieldProps = {
        props: {
          value: _value,
          form: form,
          field: config,
          options: _options,
        },
        on: {
          input: value => updateFormItem(key, value),
        },
      };

      return h('ElFormItem', formItemProps, [componentName && h(componentName, fieldProps)].filter(Boolean));
    };

    return descriptorType === 'key' ? (
      formItemRender(field)
    ) : descriptorType === 'children' ? (
      <el-row>
        {field.children.map(item => (
          <el-col key={item.key}>{formItemRender(item)}</el-col>
        ))}
      </el-row>
    ) : descriptorType === 'array' ? (
      <el-row type="flex">
        {field.map(item => (
          <el-col props={item[COLUMN_PROPS]} class={item[COLUMN_PROPS].class}>
            {formItemRender(item)}
          </el-col>
        ))}
      </el-row>
    ) : null;
  },
};
</script>
