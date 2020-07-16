<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldInput',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, field, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;
    const { placeholder } = fieldProps;

    return <el-input value={value} props={fieldProps} placeholder={placeholder} onInput={emitInput} />;
  },
};
</script>
