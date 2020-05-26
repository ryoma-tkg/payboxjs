<template>
  <div>
    <p>支払方法登録</p>

    <!-- クレジットカード -->
    <div>
      <input
        id="creditcard"
        type="checkbox"
        v-model="creditcard"
      >
      <label for="creditcard">クレジットカード</label>
      <select v-model="creditcardCredit">
        <option disabled value="">登録クレジットカード還元率選択</option>
        <option>0.5%</option>
        <option>1%</option>
      </select>
    </div>

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

    <!-- 楽天Pay -->
    <div>
      <input
        id="rakutenPay"
        type="checkbox"
        v-model="rakutenPay"
      >
      <label for="rakutenPay">楽天Pay</label>
      <select v-model="rakutenPayCredit">
        <option disabled value="">登録クレジットカード還元率選択</option>
        <option>ポイント利用のみ</option>
        <option>0.5%</option>
        <option>1%</option>
      </select>
    </div>

    <!-- auPay -->
    <div>
      <input
        id="auPay"
        type="checkbox"
        v-model="auPay"
      >
      <label for="auPay">auPay</label>
      <select v-model="auPayCredit">
        <option disabled value="">登録クレジットカード還元率選択</option>
        <option>ポイント利用のみ</option>
        <option>0.5%</option>
        <option>1%</option>
      </select>
    </div>

    <!-- d払い -->
    <div>
      <input
        id="dPay"
        type="checkbox"
        v-model="dPay"
      >
      <label for="dPay">d払い</label>
      <select v-model="dPayCredit">
        <option disabled value="">登録クレジットカード還元率選択</option>
        <option>ポイント利用のみ</option>
        <option>0.5%</option>
        <option>1%</option>
      </select>
    </div>

    <!-- メルペイ -->
    <div>
      <input
        id="meruPay"
        type="checkbox"
        v-model="meruPay"
      >
      <label for="meruPay">メルペイ</label>
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
      creditcard: false,
      creditcardCredit: '1%',
      paypayMoney: false,
      visaLinePay: false,
      linePay: false,
      lineRank: '',
      rakutenPay: false,
      rakutenPayCredit: '1%',
      auPay: false,
      auPayCredit: '1%',
      dPay: false,
      dPayCredit: '1%',
      meruPay: false,
      kyash: false,
      kyash_credit: '1%',
      // value
      usePayAndReturnRate: JSON.parse('{}')
    }
  },
  methods: {
    register: function () {
      // 初期化
      this.usePayAndReturnRate = {}
      // 還元率計算

      // クレジットカード
      if (this.creditcard) {
        this.usePayAndReturnRate['クレジットカード'] = 0
        if (this.creditcardCredit === '0.5%') {
          this.usePayAndReturnRate['クレジットカード'] = 0.5
        }
        if (this.creditcardCredit === '1%') {
          this.usePayAndReturnRate['クレジットカード'] = 1
        }
      }

      // PayPay 現金
      if (this.paypayMoney) {
        this.usePayAndReturnRate['PayPay(現金チャージ)'] = 0.5
      }
      // Visa Line Pay クレジットカード
      if (this.visaLinePay) {
        this.usePayAndReturnRate['visa LINE Payカード'] = 3

        if (this.linePay) {
          this.usePayAndReturnRate['LINE Pay'] = 1
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
        if (this.linePay) {
          this.usePayAndReturnRate['LINE Pay'] = 0
        }
      }

      // 楽天Pay
      if (this.rakutenPay) {
        this.usePayAndReturnRate['楽天Pay'] = 0
        if (this.rakutenPayCredit === 'ポイント利用のみ') {
          this.usePayAndReturnRate['楽天Pay'] = 0
        }
        if (this.rakutenPayCredit === '0.5%') {
          this.usePayAndReturnRate['楽天Pay'] = 0.5
        }
        if (this.rakutenPayCredit === '1%') {
          this.usePayAndReturnRate['楽天Pay'] = 1
        }
      }

      // auPay
      if (this.auPay) {
        this.usePayAndReturnRate['auPay'] = 0.5
        if (this.auPayCredit === 'ポイント利用のみ') {
          this.usePayAndReturnRate['auPay'] = 0.5
        }
        if (this.auPayCredit === '0.5%') {
          this.usePayAndReturnRate['auPay'] += 0.5
        }
        if (this.auPayCredit === '1%') {
          this.usePayAndReturnRate['auPay'] += 1
        }
      }

      // d払い
      if (this.dPay) {
        this.usePayAndReturnRate['dPay'] = 0.5
        if (this.dPayCredit === 'ポイント利用のみ') {
          this.usePayAndReturnRate['dPay'] = 0.5
        }
        if (this.dPayCredit === '0.5%') {
          this.usePayAndReturnRate['dPay'] += 0.5
        }
        if (this.dPayCredit === '1%') {
          this.usePayAndReturnRate['dPay'] += 1
        }
      }

      // メルペイ
      if (this.meruPay) {
        this.usePayAndReturnRate['meruPay'] = 0
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
      this.$localStorage.set('usePayAndReturnRate', JSON.stringify(this.usePayAndReturnRate))
    }
  }
}
</script>

<style>
</style>
