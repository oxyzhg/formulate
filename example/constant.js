export const schema = [
  {
    key: 'name',
    type: 'input',
    label: '活动名称',
    placeholder: '请输入活动名称',
  },
  [
    {
      key: 'region',
      type: 'select',
      label: '活动区域',
      span: 10,
      placeholder: '请选择活动区域',
      columnProps: {
        class: 'form-item region',
      },
    },
    {
      key: 'range',
      type: 'input',
      label: '活动范围',
      placeholder: '请选择活动范围',
      disabled: true,
      span: 14,
    },
  ],
  {
    key: 'date',
    type: 'datepicker',
    label: '活动日期',
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
  [
    {
      span: 16,
      class: 'custom-column',
      children: [
        {
          key: 'col_1',
          type: 'input',
          label: 'COL-1',
        },
        {
          key: 'col_2',
          type: 'input',
          label: 'COL-2',
        },
      ],
    },
    {
      span: 8,
      class: 'custom-column',
      style: 'margin-left:24px;margin-top: 16px;',
      children: [
        {
          key: 'col_3',
          type: 'input',
          label: 'COL-3',
        },
      ],
    },
  ],
  {
    flex: true,
    span: 16,
    children: [
      {
        key: 'col_4',
        type: 'input',
        label: 'COL-4',
      },
      {
        key: 'col_5',
        type: 'input',
        label: 'COL-5',
      },
    ],
  },
];

export const rules = {};

export const options = {
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
};