import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  setup(props) {
    console.log(props);
  },

  render() {
    return (
      <div id="app">
        <h1>Vue3 App!</h1>
      </div>
    );
  },
});
