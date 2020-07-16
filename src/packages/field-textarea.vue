<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldTextarea',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, field, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;

    return <el-input value={value} type="textarea" props={fieldProps} onInput={emitInput} />;
  },
};
</script>
