<template>
  <div>
    <div class="osusume"><!--おすすめ-->
      <div class="os_naka">
        <img :src="sortPayAndReturnRate[0].imgPathBig"/>
          <div class="os_article">
            <p class="none">{{sortPayAndReturnRate[0].name}}</p>
            <p>還元率<span>{{sortPayAndReturnRate[0].rate}}</span></p>
          </div>
        <button class="clear_button">ボタン</button>
      </div>
    </div><!--おすすめ終了-->

    <section class="wrapwarap"><!--決済比較マン-->
    <div class="hikaku"><!--決済比較マン-->
      <ul>
        <li v-for="sparr in sortPayAndReturnRate.slice(1)" v-bind:key="sparr.name">
            <ul class="hi_naka">
                <li class="kikanbo"><a class="clear_button"><img :src="sparr.imgPathSmall"/></a></li>
                <li><a class="clear_button"><p><span>{{sparr.name}}</span></p></a></li>
                <li><a class="clear_button"><p>還元率<br><span>{{sparr.rate}}</span>％</p></a></li>
            </ul>
        </li>
        <!--<li><div class="lines"></div></li>-->
      </ul>
    </div><!--決済比較終わり-->
        <div class="open">
        <input type="checkbox" id="hika_ako">
        <label for="hika_ako">
          <span id="na_info">開く</span>
        </label>
      </div>
    </section><!--決済比較終わり-->
    <div class="quick">
      <h3>クイック起動</h3>
      <ul>
        <li v-for="sparr in sortPayAndReturnRate" v-bind:key="sparr.name">
          <a class="clear_button" v-bind:href="sparr.link">
          <!--{{sparr.name}}-->
          <img :src="sparr.imgPathSmall"/>
          <!--{{sparr.rate}}-->
          </a>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <div class="prpr">
      <h3>お知らせキャンペーン</h3>
    </div>

    <div class="speacing"></div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
moment.locale('ja')

export default {
  data () {
    return {
      bestPayReturnRate: 0,
      sortPayAndReturnRate: Array(JSON.parse('{"name": "' + 'お店に入るとお得な決済方法を表示します' + '", ' + '"rate": ' + 0 + '}'))
    }
  },
  created () {},
  mounted () {
    // axios.get('/payboxjs/static/campaign.json').then((response) => {
    //   console.log(response)
    // })

    this.getPosition()
      .then((position) => {
        // GPS 取得した後の処理
        console.log('position', position)
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        console.log(latitude, ', ', longitude)
        this.getStoreRequest(latitude, longitude)
      })
      .catch((err) => {
        console.error(err.message)
      })
  },
  methods: {
    // GPS 取得
    getPosition: function () {
      return new Promise(function (resolve) {
        navigator.geolocation.getCurrentPosition(resolve)
      })
    },
    // ソート用比較関数
    compare: function (a, b) {
      let r = 0
      if (a['distance'] < b['distance']) {
        r = -1
      } else {
        // if ( a['distance'] > b['distance'] )
        r = 1
      }
      return r
    },
    // Payソート用比較関数
    comparePay: function (a, b) {
      let r = 0
      if (a['rate'] > b['rate']) {
        r = -1
      } else {
        // if ( a['rate'] < b['rate'] )
        r = 1
      }
      return r
    },
    // 一覧から一番お得なPayを返す
    bestPay: function (pays) {
      let bestPay = ''
      let firstLoop = true
      for (let payKey in pays) {
        if (firstLoop) {
          bestPay = payKey
          firstLoop = false
        }
        if (pays[payKey] > pays[bestPay]) {
          bestPay = payKey
        }
      }
      return bestPay
    },
    getUsePayAndReturnRate: function () {
      let usePayAndReturnRate = this.$localStorage.get('usePayAndReturnRate')
      usePayAndReturnRate = JSON.parse(usePayAndReturnRate)
      for (let uparr in usePayAndReturnRate) {
        let tmp = {'name': uparr}
        // tmp['name'] = uparr
        tmp['rate'] = usePayAndReturnRate[uparr]

        // add img path Big and Small
        if (tmp['name'] === 'クレジットカード') {
          tmp['imgPathBig'] = './static/test/home_kessai/card.svg'
          tmp['imgPathSmall'] = './static/test/kessai/card.svg'
          tmp['link'] = 'javascript:void(0)'
          tmp['label'] = 'クレジットカードで支払ってください'
        } else if (tmp['name'] === 'PayPay(現金チャージ)') {
          tmp['imgPathBig'] = './static/test/home_kessai/paypay.svg'
          tmp['imgPathSmall'] = './static/test/kessai/paypay.svg'
          tmp['link'] = 'paypay://'
          tmp['label'] = 'アプリを開く'
        } else if (tmp['name'] === 'visa LINE Payカード') {
          tmp['imgPathBig'] = './static/test/home_kessai/visa_line.svg'
          tmp['imgPathSmall'] = './static/test/kessai/visa_line.svg'
          tmp['link'] = 'javascript:void(0)'
          tmp['label'] = 'visa LINE Payカードで支払ってください'
        } else if (tmp['name'] === 'LINE Pay') {
          tmp['imgPathBig'] = './static/test/home_kessai/line.svg'
          tmp['imgPathSmall'] = './static/test/kessai/line.svg'
          tmp['link'] = 'line://pay/generateQR://'
          tmp['label'] = 'アプリを開く'
        } else if (tmp['name'] === '楽天Pay') {
          tmp['imgPathBig'] = './static/test/home_kessai/r.svg'
          tmp['imgPathSmall'] = './static/test/kessai/r.svg'
          tmp['link'] = 'rakutenpay://'
          tmp['label'] = 'アプリを開く'
        } else if (tmp['name'] === 'auPay') {
          tmp['imgPathBig'] = './static/test/home_kessai/au.svg'
          tmp['imgPathSmall'] = './static/test/kessai/au.svg'
          tmp['link'] = 'auwallet://'
          tmp['label'] = 'アプリを開く'
        } else if (tmp['name'] === 'd払い') {
          tmp['imgPathBig'] = './static/test/home_kessai/d.svg'
          tmp['imgPathSmall'] = './static/test/kessai/d.svg'
          tmp['link'] = 'https://payment-urllink.smt.docomo.ne.jp'
          tmp['label'] = 'アプリを開く'
        } else if (tmp['name'] === 'メルペイ') {
          tmp['imgPathBig'] = './static/test/home_kessai/mel.svg'
          tmp['imgPathSmall'] = './static/test/kessai/mel.svg'
          tmp['link'] = 'https://mercari.jp/app/launch'
          tmp['label'] = 'アプリを開く'
        } else if (tmp['name'] === 'Kyash Card') {
          tmp['imgPathBig'] = './static/test/home_kessai/kyash.svg'
          tmp['imgPathSmall'] = './static/test/kessai/kyash.svg'
          tmp['link'] = 'javascript:void(0)'
          tmp['label'] = 'Kyash Cardで支払ってください'
        }

        usePayAndReturnRate[uparr] = tmp
      }
      return usePayAndReturnRate
    },
    getStoreRequest: async function (latitude, longitude) {
      try {
        let range = 10.011111
        // latitude = 35.695443// for test2
        // longitude = 139.7000// for test2
        let url = 'https://ykrytk.ddo.jp/api/shops?latitude=' + String(latitude) + '&longitude=' + String(longitude) + '&range=' + String(range)
        // url = 'http://160.251.15.239/api/shops?latitude=61.00000&longitude=41.0000' // for test
        console.log('REST url: ', url)

        // (1) http://localhost:4000/comments (コメント一覧のWeb API)にGETリクエストして、コメント一覧のレスポンスを取得しましょう (Fetch APIを使います)
        const response = await fetch(url)
        if (!response.ok) {
          console.error('エラーレスポンス', response)
          return
        }

        // (2) レスポンスのボディを取得して、変数に代入しましょう (ボディはJSON形式です)
        let stores = await response.json()
        stores = stores['data']
        // console.log('stores: ', stores)

        // 店にいない時
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------

        // 現在位置から店までの距離取得
        for (let key in stores) {
          stores[key]['distance'] = Math.pow(Number(stores[key]['latitude']) - latitude, 2) + Math.pow(Number(stores[key]['longitude']) - longitude, 2)
        }

        // 近い店順に並び替え
        stores.sort(this.compare)
        console.log('stores: ', stores)

        // 1番近い店名文字列分割
        let mostNearStore = stores[0]
        // let mostNearStoreName = mostNearStore.name.split('-')[0]
        console.log('mostNearStore: ', mostNearStore)

        // キャンペーン中のPayを取得
        let jsonUrl
        if (location.href.match(/localhost/)) {
          jsonUrl = '/static/campaign/campaign.json'
        } else {
          jsonUrl = 'https://yosipy.github.io/payboxjs/static/campaign/campaign.json'
        }
        console.log('jsonUrl: ', jsonUrl)
        axios.get(jsonUrl).then((response) => {
          let campaign = response.data
          console.log('campaign: ', campaign)

          // 設定している決済方法一覧を取得
          let usePayAndReturnRate = this.getUsePayAndReturnRate()
          console.log('usePayAndReturnRate: ', usePayAndReturnRate)

          // キャンペーンの還元率を考慮
          let now = moment() // 今の日時
          for (let payName in usePayAndReturnRate) { // 自分の登録Pay
            if (campaign[payName] !== undefined) {
              let jStores = campaign[payName]
              for (let storeName in jStores) {
                if (storeName === 'all store') {
                  let date = jStores[storeName]['date'].split('~')
                  let start = date[0]
                  let end = date[1]
                  console.log('date: ', date)
                  if (now.isAfter(start) && now.isBefore(end)) {
                    let bonus = Number(jStores[storeName]['bonus'])
                    usePayAndReturnRate[payName]['rate'] = Number(usePayAndReturnRate[payName]['rate']) + bonus
                  }
                }
              }
            }
          }
          console.log('usePayAndReturnRate: ', usePayAndReturnRate)

          // sort Pay
          this.sortPayAndReturnRate = Array(usePayAndReturnRate.length)
          let i = 0
          for (let uparrKey in usePayAndReturnRate) {
            // this.sortPayAndReturnRate[i] = JSON.parse('{"name": "' + uparrKey + '", ' + '"rate": ' + String(usePayAndReturnRate[uparrKey]) + '}')
            this.sortPayAndReturnRate[i] = usePayAndReturnRate[uparrKey]
            ++i
          }
          this.sortPayAndReturnRate.sort(this.comparePay)
          console.log('sortPayAndReturnRate', this.sortPayAndReturnRate)
        })
      } catch (error) {
        console.log('例外をキャッチしたよ！')
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.clearfix::after {
   content: "";
  display: block;
  clear: both;
}

/*おすすめ */

.osusume{
  margin: -60px auto 10px auto;
  padding:40px 0 20px 0;
  width: 100%;
  height: 230px;
  background: red;
  position: relative;

  border-radius: 0 0 20px 20px;
  z-index: 9000;

  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.5);
}

.osusume img{
  width: 70%;
  max-height: 100px;
}

.osusume button{
  margin: 10px auto 0 auto;
  display: inline-block;
  width: 60%;
  height: 40px;
  border-radius: 50px;
  border: none;
  background-color: #FFF;
  padding-top: 10px;

}

.osusume button::after{
  text-align: center;
  width: 103%;
  height: 46px;
  content:"";
  display: block;
  position: relative;
  bottom: 36px;
  right: 6px;
  border-radius: 50px;
  border:solid 2px #FFF;
}

.osusume div.os_naka{
  position: relative;
  bottom: -30px;
}

.os_article p{
  background-color: transparent;
  min-width: 10%;
  margin:7px auto 7px auto;
  min-width: 70px;
  width: 40%;
  padding:5px;

  border-radius: 50px;
  border:solid 2px #FFF;
  font-weight: 700;
  color:white;
}

.none{
  display: none;
}

/*決済比較 */

.hikaku{
  padding-top:50px;
  z-index: 1;
  overflow: hidden;
  padding-bottom: 50px;
}

.wrapwarap{
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0 0 20px 20px;
}

.hikaku ul li:not(.hi_naka) {
  list-style: none;
}

.hikaku ul:not(.hi_naka) {
  width: 100%;
}

.hikaku li:not(.hi_naka) {
  margin: 0 auto;
  width: 80%;
  height: 80px;
}

/*
.hikaku ul {
  background-color: teal;
}

.hikaku li {
  list-style: none;
  margin: 0 auto;
  width: 85%;
  height: 80px;
  background-color: tomato;
}

.hikaku li p{
  display: inline-block;
  font-size: 20px;
}

.hikaku li button{
  padding:8px;
  width: 100%;
  height: 100%;
  border: none;
  text-align: left;
}

.hikaku li img{
  width: 65px;
  border: none;
}
*/

a.clear_button{
  display: block;
  width: 100%;
  height: 50px;
  box-sizing:border-box;
}

.clear_button span{
  font-weight: 700;
}

.hi_naka{
  box-sizing:border-box;
}

.hi_naka ul li{
  width: 100%;
  list-style: none;
}

ul.hi_naka{
  width: 100%;
  height: 70px;
  border-bottom: solid 1px #696969;
}

.hi_naka li{
  display: block;
  height: 50px;
  margin-top: 10px;
}

.hi_naka li:nth-child(1){
  width: 20%;
  height: 70px;
  float: left;
  box-sizing:border-box;
}

.hi_naka li:nth-child(2){
  width: 60%;
  float: left;
  font-size:4.2vmin;
  height: 65px;
  padding: 20px 0 0 0;
  box-sizing:border-box;
}

.hi_naka li:nth-child(3){
  width: 20%;
  float: left;
  height: 65px;
  padding: 5px 0 0 0;
  box-sizing:border-box;
}

.hi_naka  li a img{
  width: 65px;
  height: 65px;
  object-fit: cover;
  border: none;
}

.hikaku a.clear_button ul li img{
  width: 70px;
  border:none;
}

/*開く閉じる*/
.open input{
  display: none;
  border-radius: 0 0 20px 20px;
}

.open label{
  display: block;
  height: 50px;
  background: tomato;
  border-radius: 0 0 20px 20px;
}

.open input:checked + label{
  font-size: 0px;
}

.open input:checked + label::before{
  font-size: 16px;
  content:"とじる";
}

.open input:checked ~ .hikaku{
  bottom:100px;
  background: red;
}

.lines{
  width: 80%;
  height: 2px;
  background: #696969;
}

.quick{
  all:unset;
  margin-top: 30px;
  width: 80%;
}

.quick a{
  all:unset;
}

.quick ul li{

}

.quick ul{
  width: 80%;
  margin:0 auto;
}

.quick li{
  width: 75px;
  display: inline-block;
  text-align: center;
  float:left;
  margin-bottom: 10px;
}

.quick li img{
  width: 60px;
  border-radius: 100px;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
}

h3{
  color: #505050;
  font-size: 16px;
  text-align: left;
  width: 80%;
  margin: 20px auto 20px auto;
}

.prpr p{
  all:unset;
  clear: both;
}

.speacing{
  margin-bottom: 200px;
}

</style>
