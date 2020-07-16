<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldSwitch',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, field, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;

    return <el-switch value={value} props={fieldProps} onInput={emitInput} />;
  },
};
</script>
