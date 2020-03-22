import {
  Mutation,
  MutationAction,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';
import store from '@/store/store';

export interface ICalculationState {
  time: number;
  left: string;
  sign: string;
  right: string;
  ans: string;
  result: boolean;
}

@Module({ dynamic: true, store, name: 'calculation', namespaced: true })
class Calculation extends VuexModule implements ICalculationState {
  // state
  time: number = 0;
  left: string = '';
  sign: string = '';
  right: string = '';
  ans: string = '';
  result: boolean = false;

  // mutation
  @Mutation
  public SET_TIME(time: number) {
    this.time = time;
  }

  @Mutation
  public SET_LEFT(left: string) {
    this.left = left;
  }

  @Mutation
  public SET_SIGN(sign: string) {
    this.sign = sign;
  }

  @Mutation
  public SET_RIGHT(right: string) {
    this.right = right;
  }

  @Mutation
  public SET_ANS(ans: string) {
    this.ans = ans;
  }

  @Mutation
  public SET_RESULT(result: boolean) {
    this.result = result;
  }
}

export const CalculationModule = getModule(Calculation);
