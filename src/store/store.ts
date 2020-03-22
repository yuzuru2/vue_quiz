import Vue from 'vue';
import Vuex from 'vuex';

import { ICalculationState } from '@/store/modules/calculation';

Vue.use(Vuex);

export interface State {
  calculation: ICalculationState;
}
export default new Vuex.Store<State>({});
