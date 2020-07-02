<script>
import fieldMixin from './fieldMixin';

export default {
  name: 'FieldInput',
  mixins: [fieldMixin],

  render(h) {
    const { value, form, fieldKey, fieldProps, emitInput } = this;

    return <el-input value={value} placeholder="请输入" {...fieldProps} onInput={emitInput} />;
  },
};
</script>
