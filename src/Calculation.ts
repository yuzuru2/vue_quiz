import { CalculationModule } from '@/store/modules/calculation';

export class Calculation {
  private static instance: Calculation;

  private time_id: number;

  // シングルトン
  private constructor() {}

  // 問題セット
  private set_question(left: string, sign: string, right: string) {
    CalculationModule.SET_LEFT(left);
    CalculationModule.SET_SIGN(sign);
    CalculationModule.SET_RIGHT(right);
  }

  // 答えセット
  private set_answer(ans: string) {
    CalculationModule.SET_ANS(ans);
  }

  // 足し算
  private sum(result: boolean) {
    const _left = Math.floor(Math.random() * 100) + 1;
    const _right = Math.floor(Math.random() * 100) + 1;

    this.set_question(String(_left), '+', String(_right));

    if (result) {
      CalculationModule.SET_RESULT(true);
      this.set_answer(`${_left + _right}`);
      return;
    }

    CalculationModule.SET_RESULT(false);

    // 不正解作成パターン1
    if (Math.floor(Math.random() * 2) === 0) {
      this.set_answer(
        `${_left + _right + (Math.floor(Math.random() * 3) + 1)}`
      );
    } else {
      // 不正解作成パターン2
      this.set_answer(
        `${_left + _right - (Math.floor(Math.random() * 3) + 1)}`
      );
    }
  }

  // 引き算
  private minus(result: boolean) {
    const _left = Math.floor(Math.random() * 100) + 1;
    const _right = Math.floor(Math.random() * 100) + 1;

    this.set_question(String(_left), '-', String(_right));

    if (result) {
      CalculationModule.SET_RESULT(true);
      this.set_answer(`${_left - _right}`);
      return;
    }

    CalculationModule.SET_RESULT(false);

    // 不正解作成パターン1
    if (Math.floor(Math.random() * 2) === 0) {
      this.set_answer(
        `${_left - _right + (Math.floor(Math.random() * 3) + 1)}`
      );
    } else {
      // 不正解作成パターン2
      this.set_answer(
        `${_left - _right - (Math.floor(Math.random() * 3) + 1)}`
      );
    }
  }

  // 掛け算
  private multiplication(result: boolean) {
    const _left = Math.floor(Math.random() * 10) + 1;
    const _right = Math.floor(Math.random() * 10) + 1;

    this.set_question(String(_left), '×', String(_right));

    if (result) {
      CalculationModule.SET_RESULT(true);
      this.set_answer(`${_left * _right}`);
      return;
    }

    CalculationModule.SET_RESULT(false);

    // 不正解作成パターン1
    if (Math.floor(Math.random() * 2) === 0) {
      this.set_answer(
        `${_left * _right + (Math.floor(Math.random() * 3) + 1)}`
      );
    } else {
      // 不正解作成パターン2
      this.set_answer(
        `${_left * _right - (Math.floor(Math.random() * 3) + 1)}`
      );
    }
  }

  // 割り算
  private division(result: boolean) {
    let _left: number;
    let _right: number;

    while (1) {
      _left = Math.floor(Math.random() * 100) + 1;
      _right = Math.floor(Math.random() * 10) + 1;
      if (_left % _right === 0) {
        break;
      }
    }

    this.set_question(String(_left), '÷', String(_right));

    if (result) {
      CalculationModule.SET_RESULT(true);
      this.set_answer(`${_left / _right}`);
      return;
    }

    CalculationModule.SET_RESULT(false);

    // 不正解作成パターン1
    if (Math.floor(Math.random() * 2) === 0) {
      this.set_answer(
        `${_left / _right + (Math.floor(Math.random() * 3) + 1)}`
      );
    } else {
      // 不正解作成パターン2
      this.set_answer(
        `${_left / _right - (Math.floor(Math.random() * 3) + 1)}`
      );
    }
  }

  // リセット
  private reset() {
    // タイマー処理
    const time_method = () => {
      CalculationModule.SET_TIME(CalculationModule.time - 1);

      if (CalculationModule.time === 0) {
        alert('タイムアップ');
        this.reset();
        return;
      }
      this.time_id = setTimeout(time_method, 1000);
    };

    clearTimeout(this.time_id);

    CalculationModule.SET_TIME(15);
    this.time_id = setTimeout(time_method, 1000);

    // 正解・不正解どちらの問題を出すか決める
    const result = Math.floor(Math.random() * 2) === 0;

    // 計算種類
    const _sign = Math.floor(Math.random() * 4);

    switch (_sign) {
      case 0:
        this.sum(result);
        break;

      case 1:
        this.minus(result);
        break;

      case 2:
        this.multiplication(result);
        break;

      case 3:
        this.division(result);
        break;

      default:
        break;
    }
  }

  // シングルトン 単一のインスタンスを返す
  public static get_instance(): Calculation {
    if (!this.instance) {
      this.instance = new Calculation();
    }

    // 生成済みのインスタンスを返す
    return this.instance;
  }

  // クイズをスタートする
  public start() {
    this.reset();
  }
}
