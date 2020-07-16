<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldSelect',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, field, options, emitInput, KEY, FIELD_PROPS } = this;
    const { [KEY]: key, [FIELD_PROPS]: fieldProps } = field;
    const availableOptions = options || field.options || [];

    return (
      <el-select value={value} props={fieldProps} style={{ width: '100%' }} onInput={emitInput}>
        {availableOptions.map(option => (
          <el-option key={option.value} props={option} />
        ))}
      </el-select>
    );
  },
};
</script>
