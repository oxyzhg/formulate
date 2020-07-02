import { isEmpty, isUndefined, assignWith, merge, pick } from 'lodash-es';
import { isArray, isObject, hasOwn } from '../shared';
import { configurableProps, shortProps, fieldShortProps } from './constant';

const { KEY, FORMITEM_PROPS, FIELD_PROPS } = configurableProps;

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
function formatNormalDescriptor(descriptor) {
  // 校验空值和参数类型
  if (isEmpty(descriptor)) return {};

  const mergeProps = area => {
    if (isObject(area) && hasOwn(area, KEY)) {
      area[FORMITEM_PROPS] = merge(area[FORMITEM_PROPS], pick(area, shortProps));
      area[FIELD_PROPS] = merge(area[FIELD_PROPS], pick(area, fieldShortProps));
    }
  };

  for (let item of descriptor) {
    if (isArray(item)) {
      for (let field of item) mergeProps(field);
    } else {
      mergeProps(item);
    }
  }
}

/**
 * 解析真实表单项及对应值
 * @param {object} descriptor 表单配置描述对象
 */
export const parseIntoRealForm = descriptor => {
  // 校验空值和参数类型
  if (isEmpty(descriptor)) return {};

  formatNormalDescriptor(descriptor);

  const realForm = descriptor.reduce((form, item) => {
    // 类型区分
    if (isArray(item)) {
      for (const { key, type } of item) {
        if (key && type) form[key] = parseFieldDataType(type);
      }
    } else if (isObject(item) && hasOwn(item, KEY)) {
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
