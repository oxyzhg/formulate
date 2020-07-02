/**
 * @author Oxyzhg
 * @since 2020-02-26
 */

// 可配置属性常量
export const configurableProps = {
  // 表单项 Key 键值
  KEY: 'key',

  // 配置项中 `form-item` 组件的参数集键值
  FORMITEM_PROPS: 'formItemProps',

  // 配置项中 `input` 组件的参数集键值
  FIELD_PROPS: 'fieldProps',

  // 配置项中列组件参数集键值（仅在数组项中有效）
  COLUMN_PROPS: 'columnProps',
};

// 可选项键名
export const optionProps = {
  LABEL: 'label',
  VALUE: 'value',
};

// 表单组件可简写属性
export const shortProps = ['label', 'required'];

// 表单项可简写属性
export const fieldShortProps = ['disabled', 'placeholder'];

// 防抖时间间隔
export const debounceDelay = 500;
