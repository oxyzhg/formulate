import { isObject, isArray } from './index';

/**
 * 将 Map 转换成键值对形式的对象
 * @param {Map} map 转换目标
 * @param {Number} index 转换后的对象值对应的索引，仅在 Map 值为数组的情况下生效
 */
export function map2obj(map, index = 0) {
  if (map instanceof Map) {
    return [...map.entries()].reduce((ret, item) => {
      const [key, value] = item;

      ret[key] = isArray(value) ? value[index] : value;

      return ret;
    }, {});
  }

  return {};
}

/**
 * 将 Object 对象转换成列表
 * @param {object} source 转换目标
 * @param {string} value 转换后对象的 value 键值
 * @param {string} label 转换后对象的 label 键值
 */
export function obj2arr(source, value = 'value', label = 'label') {
  if (isObject(source)) {
    return Object.entries(source).map(([k, v]) => ({
      [label]: v,
      [value]: k,
    }));
  }

  return [];
}

/**
 * 将对象转换成可供组件选择的 option 项
 * @param {object} source 转换目标
 * @param {string} vkey 转换后 value 值对应转换目标中的键
 * @param {string} lkey 转换后 label 值对应转换目标中的键
 */
export function format2opt(source, vkey = 'id', lkey = 'name') {
  if (isObject(source)) {
    return {
      label: source[lkey],
      value: source[vkey],
    };
  }

  return {};
}

/**
 * 将数组通过分组转换成供 switcher 使用的可选项
 * @param {array} source 转换目标
 * @param {object} patterns 转换分组依据，键是分组依据，值是显示分组名称
 */
export function format2switcher(source, patterns) {
  if (isArray(source) && isObject(patterns)) {
    const patternCols = Object.entries(patterns);

    return patternCols
      .map(([key, name]) => ({
        label: name,
        options: source.filter(item => item.status === key).map(item => format2opt(item)),
      }))
      .filter(item => item.options.length);
  }

  return [];
}
