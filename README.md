# Formulate

:rocket: Automatic form builder.

## 配置参数

### AutoFrom Attributes

| 参数          | 说明                                              | 类型    | 是否必填 |
| ------------- | ------------------------------------------------- | ------- | -------: |
| value         | 支持双向绑定的表单值，即 `form`                   | object  |       是 |
| descriptor    | 定义表单项的配置列表，子项类型可以是 array/object | array   |       是 |
| options       | 列表类表单的可选项，以 key 为唯一索引             | object  |       否 |
| rules         | 表单项的校验规则，以 key 为唯一索引               | object  |       否 |
| asyncErrors   | 异步校验错误信息，即用户可自定义错误信息          | object  |       否 |
| formProps     | `form` 组件参数对象                               | object  |       否 |
| showActions   | 是否显示表单按钮组，若是能触发 submit 事件        | boolean |       否 |
| submitBtnText | 表单按钮组确定按钮的文本内容                      | string  |       否 |

#### Descriptor Item options

| 参数          | 说明                                                | 类型          | 是否必填 |
| ------------- | --------------------------------------------------- | ------------- | -------- |
| key           | 表单项唯一标识                                      | string        | 是       |
| type          | 表单项类型                                          | string        | 是       |
| fieldProps    | 组件实例配置                                        | object        | 否       |
| formItemProps | `form-item` 组件配置                                | object        | 否       |
| columnProps   | 仅在 descriptor 子项为数组时，`column` 配置列的参数 | object        | 否       |
| children      | 支持布局的子项                                      | array         | 否       |
| label         | formItemProps.label 简写形式                        | string        | 否       |
| required      | formItemProps.required 简写形式                     | boolean       | 否       |
| disabled      | fieldProps.disabled 简写形式                        | boolean       | 否       |
| placeholder   | fieldProps.placeholder 简写形式                     | string        | 否       |
| span          | columnProps.span 简写形式                           | string        | 否       |
| offset        | columnProps.offset 简写形式                         | string        | 否       |
| class         | columnProps.class 简写形式                          | string        | 否       |
| style         | columnProps.style 简写形式                          | string        | 否       |
| width         | 表单宽度，数组类型配置请使用 `gs-ui/layout` 布局    | string/number | 否       |
| on            | 表单项的事件（适配性不太好）                        | function      | 否       |

## 布局

Formulate 组件支持配置项布局，布局基于 Element 栅格布局，`el-row` 默认使用 flex 属性，与 `el-col` 相关的属性可以使用 `columnProps` 配置项属性传入，组件会自动适配样式。

目前暂不支持引入自定义的配置，后续会考虑启用相关的功能与配置。
