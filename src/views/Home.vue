<template>
  <div>
    <!-- 時間 -->
    <div class="d-flex justify-content-center">
      <div class="maru bg-primary text-white">
        <span id="time">{{ get_time() }}</span>
      </div>
    </div>

    <hr />

    <div class="d-flex justify-content-center">
      <div class="row bg-light">
        <div class="shikaku">
          <span id="left">{{ get_left() }}</span>
        </div>
        <div class="shikaku">
          <span id="sign">{{ get_sign() }}</span>
        </div>
        <div class="shikaku">
          <span id="right">{{ get_right() }}</span>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <div class="row">
        <div style="font-size: 70px;">=</div>
        <div class="maru bg-warning">
          <span id="ans">{{ get_ans() }}</span>
        </div>
      </div>
    </div>

    <hr />

    <div class="d-flex justify-content-center">
      <button
        type="button"
        class="btn btn-success"
        id="yes"
        @click="yes(get_result())"
      >
        YES
      </button>

      <button
        type="button"
        class="btn btn-danger"
        id="no"
        @click="no(get_result())"
      >
        NO
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Calculation } from '@/Calculation';
import { CalculationModule } from '@/store/modules/calculation';

export default {
  data() {
    return {};
  },
  methods: {
    yes(result: boolean) {
      result ? alert('正解') : alert('不正解');
      Calculation.get_instance().start();
    },

    no(result: boolean) {
      result ? alert('不正解') : alert('正解');
      Calculation.get_instance().start();
    },

    get_time() {
      return CalculationModule.time;
    },

    get_left() {
      return CalculationModule.left;
    },

    get_sign() {
      return CalculationModule.sign;
    },

    get_right() {
      return CalculationModule.right;
    },

    get_ans() {
      return CalculationModule.ans;
    },

    get_result() {
      return CalculationModule.result;
    }
  },
  created() {
    Calculation.get_instance().start();
  }
};
</script>
