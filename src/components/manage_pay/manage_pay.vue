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
      kyash_credit: 0,
      usePayAndReturnRate: JSON.parse('{}')
    }
  },
  methods: {
    register: function () {
      // var myPaysHold = {}
      // 還元率計算
      if (this.paypayMoney) {
        this.usePayAndReturnRate['PayPay(現金チャージ)'] = 0.5
        console.log(this.usePayAndReturnRate)
      }
      // this.$localStorage.set(key,value)
    }
  }
}
</script>

<style>
</style>
