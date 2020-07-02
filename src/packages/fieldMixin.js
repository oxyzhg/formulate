export default {
  props: {
    value: [String, Number, Boolean, Array],
    form: Object,
    options: Array,
    field: Object,
    fieldKey: String,
    fieldProps: Object,
  },

  methods: {
    emitInput(value) {
      this.$emit('update:value', value);
    },
  },
};
