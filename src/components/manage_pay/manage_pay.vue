<template>
  <div>
    <p>支払方法登録</p>

    <!-- PayPay -->
    <div>
      <input
        id="paypayMoney"
        type="checkbox"
        v-model="paypayMoney"
      >
      <label for="paypayMoney">PayPay(現金チャージ)</label>
    </div>

    <!-- visa Line Pay Card -->
    <div>
      <input
        id="visaLinePay"
        type="checkbox"
        v-model="visaLinePay"
      >
      <label for="visaLinePay">visa LINE Payカード</label>
    </div>

    <!-- Line Pay -->
    <div>
      <input
        id="linePay"
        type="checkbox"
        v-model="linePay"
      >
      <label for="linePay">LINE Pay</label>
      <select v-model="lineRank">
        <option disabled value="">ランクを選択</option>
        <option>レギュラー</option>
        <option>シルバー</option>
        <option>ゴールド</option>
        <option>プラチナ</option>
      </select>
    </div>

    <!-- Kyash -->
    <div>
      <input
        id="kyash"
        type="checkbox"
        v-model="kyash"
      >
      <label for="kyash">Kyash Card</label>
      <select v-model="kyash_credit">
        <option disabled value="">登録クレジットカード還元率選択</option>
        <option>現金チャージ</option>
        <option>0.5%</option>
        <option>1%</option>
      </select>
    </div>

    <button v-on:click="register">登録</button>
  </div>
</template>

<script>
// import Vue from 'vue'
// import axios from 'axios'
// import _json from '../assets/pay_test.json'
export default {
  data () {
    return {
      paypayMoney: false,
      visaLinePay: false,
      linePay: false,
      lineRank: '',
      kyash: false,
      kyash_credit: '',
      // value
      usePayAndReturnRate: JSON.parse('{}')
    }
  },
  methods: {
    register: function () {
      // 初期化
      this.usePayAndReturnRate = {}
      // 還元率計算
      // PayPay 現金
      if (this.paypayMoney) {
        this.usePayAndReturnRate['PayPay(現金チャージ)'] = 0.5
      }
      // Visa Line Pay クレジットカード
      if (this.visaLinePay) {
        this.usePayAndReturnRate['visa LINE Payカード'] = 3

        if (this.linePay) {
          if (this.lineRank === 'レギュラー') {
            this.usePayAndReturnRate['LINE Pay'] = 1
          }
          if (this.lineRank === 'シルバー') {
            this.usePayAndReturnRate['LINE Pay'] = 1.5
          }
          if (this.lineRank === 'ゴールド') {
            this.usePayAndReturnRate['LINE Pay'] = 2
          }
          if (this.lineRank === 'プラチナ') {
            this.usePayAndReturnRate['LINE Pay'] = 3
          }
        }
      } else {
        this.usePayAndReturnRate['LINE Pay'] = 0
      }

      // kyash
      if (this.kyash) {
        this.usePayAndReturnRate['Kyash Card'] = 1

        if (this.kyash_credit === '0.5%') {
          this.usePayAndReturnRate['Kyash Card'] += 0.5
        }
        if (this.kyash_credit === '1%') {
          this.usePayAndReturnRate['Kyash Card'] += 1
        }
      }

      console.log(this.usePayAndReturnRate)
      // this.$localStorage.set(key,value)
    }
  }
}
</script>

<style>
</style>
