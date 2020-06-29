import Formulate from './main';

/* istanbul ignore next */
Formulate.install = function (Vue) {
  Vue.component(Formulate.name, Formulate);
};

export default Formulate;
