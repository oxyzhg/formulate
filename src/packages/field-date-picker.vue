<script>
import fieldMixin from './fieldMixin';
import { format2date, parseMoment } from '../shared';

export default {
  name: 'FieldDatePicker',
  mixins: [fieldMixin],

  methods: {
    emitInput(value) {
      this.$emit('input', parseMoment(value));
    },
  },

  render(h) {
    const { value, form, field, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;

    // 转换成 moment 日期
    const realDate = format2date(value);

    return <el-date-picker value={realDate} props={fieldProps} style={{ width: '100%' }} onInput={emitInput} />;
  },
};
</script>
