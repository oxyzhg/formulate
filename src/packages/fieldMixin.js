import { configurableProps } from '../common/constant';

export default {
  props: {
    value: [String, Number, Boolean, Array],
    form: Object,
    options: Array,
    field: Object,
  },

  data() {
    return {
      ...configurableProps,
    };
  },

  methods: {
    emitInput(value) {
      this.$emit('input', value);
    },
  },
};
