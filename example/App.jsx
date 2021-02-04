import { defineComponent, reactive } from 'vue';
import { schema, rules, options } from './constant';
import './style.scss';

export default defineComponent({
  name: 'App',

  setup(props) {
    console.log(props);

    // form data define
    const formData = reactive({
      name: '',
      region: '',
      date: '',
      delivery: true,
      type: [],
      resource: '',
      desc: '',
      col_1: '',
      col_2: '',
      col_3: '',
      col_4: '',
      col_5: '',
    });
  },

  render() {
    return (
      <div id="app">
        <h1>Vue3 App!</h1>
      </div>
    );
  },
});
