<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldRadio',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, field, options, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;

    return (
      <el-radio-group value={value} props={fieldProps} onInput={emitInput}>
        {options.map(option => (
          <el-radio key={option.value} props={{ label: option.value }}>
            {option.label}
          </el-radio>
        ))}
      </el-radio-group>
    );
  },
};
</script>
