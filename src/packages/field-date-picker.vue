<script>
import fieldMixin from './fieldMixin';
import moment from 'moment';

export default {
  name: 'FieldDatePicker',
  mixins: [fieldMixin],

  methods: {
    emitInput(value) {
      let date = moment(value);
      date = date.isValid() ? date.format('YYYY-MM-DD') : '';
      this.$emit('input', date);
    },
  },

  render(h) {
    const { value, form, field, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;

    // 转换成 moment 日期
    const format2date = str => (moment(str).isValid() ? moment(str) : '');

    const realValue = format2date(value);

    return <el-date-picker value={realValue} props={fieldProps} style={{ width: '100%' }} onInput={emitInput} />;
  },
};
</script>
