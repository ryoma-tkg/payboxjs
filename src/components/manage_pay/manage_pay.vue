<template>
  <div>
    <p>支払方法登録</p>
    <input
      id="paypayMoney"
      type="checkbox"
      v-model="paypayMoney"
    >
    <label for="paypayMoney">PayPay(現金チャージ)</label>
    {{paypayMoney}}
  </div>
</template>

<script>
// import Vue from 'vue'
// import axios from 'axios'
// import _json from '../assets/pay_test.json'
export default {
  data () {
    return {
      paypayMoney: false
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
