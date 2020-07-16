import { isEmpty, isUndefined, assignWith, merge, pick, cloneDeep } from 'lodash-es';
import { isArray, isObject, hasOwn } from '../shared';
import { configurableProps, shortProps } from './constant';

const { KEY, FORMITEM_PROPS, FIELD_PROPS, COLUMN_PROPS, CHILDREN } = configurableProps;

/**
 * 合并最终表单值对象
 * @param {object} rawForm 传入的表单值对象
 * @param {object} generatedForm 生成的表单值对象
 */
export function assignForm(rawForm, generatedForm) {
  return assignWith(rawForm, generatedForm, (objValue, srcValue) => (isUndefined(objValue) ? srcValue : objValue));
}

/**
 * 解析表单项初始化值
 * @param {string} type 表单项类型
 */
export function parseFieldDataType(type) {
  switch (type) {
    case 'switch':
      return false;
    case 'checkbox':
    case 'select-multi':
    case 'select-tree':
    case 'dateranger':
    case 'transfer':
      return [];
    case 'input-number':
      return 0;
    case 'input':
    case 'radio':
    case 'select':
    case 'textarea':
    case 'datepicker':
    case 'richtext':
      return '';
    default:
      return '';
  }
}

/**
 * 生成标准格式表单配置描述对象
 * @param {object} descriptor 表单配置描述对象
 */
export function formatNormalDescriptor(descriptor) {
  // 校验空值和参数类型
  if (isEmpty(descriptor)) return {};

  const localDescriptor = cloneDeep(descriptor);

  const mergeProps = field => {
    // 存在 KEY 即认为是表单项，否则考虑是否为布局项
    if (isObject(field) && hasOwn(field, KEY)) {
      field[FORMITEM_PROPS] = merge(field[FORMITEM_PROPS], pick(field, shortProps.FORM));
      field[FIELD_PROPS] = merge(field[FIELD_PROPS], pick(field, shortProps.FILED));
      field[COLUMN_PROPS] = merge(field[COLUMN_PROPS], pick(field, shortProps.COLUMN));
    } else if (isObject(field) && hasOwn(field, CHILDREN)) {
      field[COLUMN_PROPS] = merge(field[COLUMN_PROPS], pick(field, shortProps.COLUMN));
      field[CHILDREN] = formatNormalDescriptor(field[CHILDREN]);
    }
  };

  for (let item of localDescriptor) {
    if (isArray(item)) {
      for (let field of item) mergeProps(field);
    } else {
      mergeProps(item);
    }
  }

  return localDescriptor;
}

/**
 * 解析真实表单项及对应值
 * @param {object} descriptor 表单配置描述对象
 */
export const parseIntoRealForm = descriptor => {
  // 校验空值和参数类型
  if (isEmpty(descriptor)) return {};

  // const formatedDescriptor = formatNormalDescriptor(descriptor);

  const realForm = descriptor.reduce((form, item) => {
    // 类型区分
    if (isArray(item)) {
      for (const { key, type } of item) {
        if (key && type) form[key] = parseFieldDataType(type);
      }
    } else if (isObject(item)) {
      form[item.key] = parseFieldDataType(item.type);
    }

    return form;
  }, {});

  return realForm;
};

/**
 * 生成表单校验规则
 * @param {object} rules 用户定义的表单校验规则
 * @param {array} descriptor 表单配置描述对象
 */
export function parseFormRules(rules, descriptor) {}

/**
 * 检出配置项的类型
 * @param {object|array} descriptor 配置项
 */
export function detectDescriptorType(descriptor) {
  if (isArray(descriptor)) {
    return 'array';
  } else if (isObject(descriptor) && hasOwn(descriptor, configurableProps.KEY)) {
    return 'key';
  } else if (isObject(descriptor) && hasOwn(descriptor, configurableProps.CHILDREN)) {
    return 'children';
  } else {
    return undefined;
  }
}

