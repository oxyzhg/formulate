<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldCheckbox',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, field, options, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;

    return (
      <el-checkbox-group value={value} props={fieldProps} onInput={emitInput}>
        {options.map(option => (
          <el-checkbox key={option.value} label={option.value} props={fieldProps}>
            {option.label}
          </el-checkbox>
        ))}
      </el-checkbox-group>
    );
  },
};
</script>
