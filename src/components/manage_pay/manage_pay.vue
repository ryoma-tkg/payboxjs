<template>
  <div>
    <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">決済方法の登録</h1>
    </div>

    <div class="top_speas"></div>
    <div class="pay_m">
    <ul>
    <!-- クレジットカード -->
    <li>
      <div class="article yajirusi">
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
      </li>
    <li>
      <!-- PayPay -->
      <div class="article">
        <input
          id="paypayMoney"
          type="checkbox"
          v-model="paypayMoney"
        >
        <label for="paypayMoney">PayPay(現金チャージ)</label>
      </div>
      </li>
    <li>
      <!-- visa Line Pay Card -->
      <div class="article">
        <input
          id="visaLinePay"
          type="checkbox"
          v-model="visaLinePay"
        >
        <label for="visaLinePay">visa LINE Payカード</label>
      </div>
      </li>
    <li>
      <!-- Line Pay -->
      <div class="article yajirusi">
        <input
          id="linePay"
          type="checkbox"
          v-model="linePay"
        >
        <label for="linePay">LINE Pay</label>
        <select v-model="lineRank" class="line_s">
          <option disabled value="">ランクを選択</option>
          <option>レギュラー</option>
          <option>シルバー</option>
          <option>ゴールド</option>
          <option>プラチナ</option>
        </select>
      </div>
      </li>
    <li>
      <!-- 楽天Pay -->
      <div class="article yajirusi">
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
    </li>
    <li>
      <!-- auPay -->
      <div class="article yajirusi">
        <input
          id="auPay"
          type="checkbox"
          v-model="auPay"
        >
        <label for="auPay" class="aup_1 yajirusi_aup">auPay</label>
        <select v-model="auPayCredit" class="aus">
          <option disabled value="">登録クレジットカード還元率選択</option>
          <option>ポイント利用のみ</option>
          <option>0.5%</option>
          <option>1%</option>
        </select>
        <select v-model="isAu" class="aus_2">
          <option disabled value="ケータイキャリア"></option>
          <option>auユーザー</option>
          <option>au以外のユーザー</option>
        </select>
      </div>
      </li>
    <li>
      <!-- d払い -->
      <div class="article yajirusi">
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
      </li>
    <li>
      <!-- メルペイ -->
      <div class="article">
        <input
          id="meruPay"
          type="checkbox"
          v-model="meruPay"
        >
        <label for="meruPay">メルペイ</label>
      </div>
   </li>
   <li>
      <!-- Kyash -->
      <div class="article yajirusi">
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
    </li>
    </ul>
    </div>
    <button v-on:click="register" class="touroku">登録</button>
    <div class="bottom_space"></div>
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
      lineRank: 'レギュラー',
      rakutenPay: false,
      rakutenPayCredit: '1%',
      auPay: false,
      auPayCredit: '1%',
      isAu: 'au以外のユーザー',
      dPay: false,
      dPayCredit: '1%',
      meruPay: false,
      kyash: false,
      kyash_credit: '1%',
      // value
      usePayAndReturnRate: JSON.parse('{}')
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    saveData: function () {
      let save = JSON.parse('{}')
      save['creditcard'] = this.creditcard
      save['creditcardCredit'] = this.creditcardCredit
      save['paypayMoney'] = this.paypayMoney
      save['visaLinePay'] = this.visaLinePay
      save['linePay'] = this.linePay
      save['lineRank'] = this.lineRank
      save['rakutenPay'] = this.rakutenPay
      save['rakutenPayCredit'] = this.rakutenPayCredit
      save['auPay'] = this.auPay
      save['auPayCredit'] = this.auPayCredit
      save['isAu'] = this.isAu
      save['dPay'] = this.dPay
      save['dPayCredit'] = this.dPayCredit
      save['meruPay'] = this.meruPay
      save['kyash'] = this.kyash
      save['kyash_credit'] = this.kyash_credit

      this.$localStorage.set('save', JSON.stringify(save))
    },
    loadData: function () {
      let save = this.$localStorage.get('save')
      if (save !== null) {
        save = JSON.parse(save)
        this.creditcard = save['creditcard']
        this.creditcardCredit = save['creditcardCredit']
        this.paypayMoney = save['paypayMoney']
        this.visaLinePay = save['visaLinePay']
        this.linePay = save['linePay']
        this.lineRank = save['lineRank']
        this.rakutenPay = save['rakutenPay']
        this.rakutenPayCredit = save['rakutenPayCredit']
        this.auPay = save['auPay']
        this.auPayCredit = save['auPayCredit']
        this.isAu = save['isAu']
        this.dPay = save['dPay']
        this.dPayCredit = save['dPayCredit']
        this.meruPay = save['meruPay']
        this.kyash = save['kyash']
        this.kyash_credit = save['kyash_credit']
      }
    },
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

        /* if (this.isAu === 'auユーザー') {
          this.usePayAndReturnRate['isAu'] = true
        } else {
          this.usePayAndReturnRate['isAu'] = false
        } */
      }

      // d払い
      if (this.dPay) {
        this.usePayAndReturnRate['d払い'] = 0.5
        if (this.dPayCredit === 'ポイント利用のみ') {
          this.usePayAndReturnRate['d払い'] = 0.5
        }
        if (this.dPayCredit === '0.5%') {
          this.usePayAndReturnRate['d払い'] += 0.5
        }
        if (this.dPayCredit === '1%') {
          this.usePayAndReturnRate['d払い'] += 1
        }
      }

      // メルペイ
      if (this.meruPay) {
        this.usePayAndReturnRate['メルペイ'] = 0
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
      this.saveData()

      // ホームへ移動
      // this.$router.push('/')
      this.$router.push('https://yosipy.github.io/payboxjs/#/')
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.wrap{
   width: 90%;
   margin:0 auto;
}

.top_speas {
  margin-top: 120px;
}

.title {
  z-index: 200000;
  height: 45px;
  width: 100%;
  background-color: #FFF;
  text-align: center;
  padding-top: 25px;
  color: #626262;
  font-size: 10px;

  border-radius: 0 0 30px 30px;

  margin-bottom: 30px;

  position: fixed;
  top: 0px;

  -webkit-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
}

.title button,
.title img {
  z-index: 200000;
  width: 15px;
  border: none;
}

.sub_con {
  padding-right: 60px;
  text-align: center;
}

.title button {
  z-index: 1000;
  margin-left: 30px;
  width: 33px;
  height: 33px;
  float: left;
  background-color: #FFF;
}

.pay_m{
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.pay_m div ul, .pay_m div li{
  list-style: none;
  display: inline;
}

.pay_m div.article {
  width: 99%;
}
.pay_m li{
  text-align: center;
  margin:10px auto 10px auto;
  background: transparent;
  list-style: none;
  height: 60px;
}

.pay_m input{
  display: none;
}

.pay_m label{
  margin:0 auto;
  display: inline-block;
  text-align:left;
  width: 85%;
  height: 30px;
  padding-bottom: 12px;
  padding-top: 16px;
  padding-left: 20px;
  background-color: #FFF;
  border:solid 1px #AAA;
  border-radius: 20px;

  color: #505050;
  font-weight: 700;

  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease;
}

.pay_m input:checked + label{
  border:solid 3px #FFA200;
  padding-top: 13px;
}

.pay_m .aup{
  width: 39%;
}

.pay_m select{
  margin-top: 5px;
  border-radius: 100px;;
  background:#FFF;
  width:70px;
  height: 50px;
  padding-left: 10px;
  font-size: 16px;
  position: absolute;
  right: 30px;

  border:none;
  text-decoration: none;
  outline: none;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  border:solid 2px #696969;
  z-index: 50;
}

.pay_m .yajirusi::before {
  content: "";
  display: inline-block;
  border-color: #696969 transparent transparent transparent;
  border-style: solid;
  border-width: 10px 8px 0 8px;
  position: absolute;
  border-radius: 3px;
  margin-top: 25px;
  left: 315px;
  z-index: 100;
}

.pay_m .yajirusi_aup::before {
  content: "";
  display: inline-block;
  border-color: #696969 transparent transparent transparent;
  border-style: solid;
  border-width: 10px 8px 0 8px;
  position: absolute;
  border-radius: 3px;
  margin-top: 7px;
  left: 160px;
  z-index: 100;
}

.pay_m select.aus{
  width: 70px;
  right: 185px;
}

.pay_m select.aus_2{
  width: 150px;
  right: 30px;
}

.pay_m select.line_s{
  width: 150px;
  right: 30px;
}

.bottom_space{
  margin-bottom: 150px;
}

.touroku{
  margin-top:20px;
  background-color: #FFF;
  width: 100%;
  height: 50px;;
  border:none;

  font-size: 20px;
  color: #41A541;

  font-weight: 800;

  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);

}

@media screen and (min-width:319px) {
    /*画面サイズが480pxからはここを読み込む*/
    .pay_m .yajirusi::before {
      left: 255px;
    }

    .pay_m .yajirusi_aup::before {
      left: 105px;
    }
}

@media screen and (min-width:360px) {
    /*画面サイズが480pxからはここを読み込む*/
    .pay_m .yajirusi::before {
      left: 300px;
    }

    .pay_m .yajirusi_aup::before {
      left: 145px;
    }
}

@media screen and (min-width:375px) {
    /*画面サイズが480pxからはここを読み込む*/
    .pay_m .yajirusi::before {
      left: 315px;
    }

.pay_m .yajirusi_aup::before {
      left: 160px;
    }
}

@media screen and (min-width:411px) {
    /*画面サイズが480pxからはここを読み込む*/
    .pay_m .yajirusi::before {
      left: 355px;
    }

    .pay_m .yajirusi_aup::before {
          left: 200px;
        }
}

@media screen and (min-width:414px) {
    /*画面サイズが480pxからはここを読み込む*/

    .pay_m .yajirusi::before {
      left: 350px;
    }

    .pay_m .yajirusi_aup::before {
      left: 200px;
    }
}

@media screen and (min-width:415px) and (max-width:640px) {

    .pay_m .yajirusi::before {
      left: 90%;
    }

    .pay_m .yajirusi_aup::before {
      left: 65%;
    }

    .pay_m select{
      right: 9.5%;
    }

    .pay_m select.aus{
      right: 38%;
    }
    .pay_m select.aus_2{
      right: 9.5%;
    }
    .pay_m select.line_s{
      right: 9.5%;
    }
}

@media screen and (min-width:640px)  and (max-width:1200px) {

    .pay_m .yajirusi::before {
      left: 87%;
    }

    .pay_m .yajirusi_aup::before {
      left: 73%;
    }

    .pay_m select{
      right: 9.5%;
    }

    .pay_m select.aus{
      right: 32%;
    }
    .pay_m select.aus_2{
      right: 9.5%;
    }
    .pay_m select.line_s{
      right: 9.5%;
    }
}

</style>
