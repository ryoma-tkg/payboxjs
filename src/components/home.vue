<template>
  <div>
    <div class="osusume">
      <div class="os_naka">
        {{sortPayAndReturnRate[0].name}}
        {{sortPayAndReturnRate[0].rate}}
        <img :src="sortPayAndReturnRate[0].imgPathBig"/>
        <button class="clear_button">ボタン</button>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="sparr in sortPayAndReturnRate.slice(1)" v-bind:key="sparr.name">
          <button class="clear_button">
          {{sparr.name}}
          <img :src="sparr.imgPathSmall"/>
          {{sparr.rate}}
          </button>
        </li>
      </ul>
    </div>
    <div>
      <p>クイック起動</p>
      <ul>
        <li v-for="sparr in sortPayAndReturnRate" v-bind:key="sparr.name">
          <button class="clear_button">
          {{sparr.name}}
          <img :src="sparr.imgPathSmall"/>
          {{sparr.rate}}
          </button>
        </li>
      </ul>
    </div>
    <p>お知らせキャンペーン</p>
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
        } else if (tmp['name'] === 'PayPay(現金チャージ)') {
          tmp['imgPathBig'] = './static/test/home_kessai/paypay.svg'
          tmp['imgPathSmall'] = './static/test/kessai/paypay.svg'
        } else if (tmp['name'] === 'visa LINE Payカード') {
          tmp['imgPathBig'] = './static/test/home_kessai/visa_line.svg'
          tmp['imgPathSmall'] = './static/test/kessai/visa_line.svg'
        } else if (tmp['name'] === 'LINE Pay') {
          tmp['imgPathBig'] = './static/test/home_kessai/line.svg'
          tmp['imgPathSmall'] = './static/test/kessai/line.svg'
        } else if (tmp['name'] === '楽天Pay') {
          tmp['imgPathBig'] = './static/test/home_kessai/r.svg'
          tmp['imgPathSmall'] = './static/test/kessai/r.svg'
        } else if (tmp['name'] === 'auPay') {
          tmp['imgPathBig'] = './static/test/home_kessai/au.svg'
          tmp['imgPathSmall'] = './static/test/kessai/au.svg'
        } else if (tmp['name'] === 'd払い') {
          tmp['imgPathBig'] = './static/test/home_kessai/d.svg'
          tmp['imgPathSmall'] = './static/test/kessai/d.svg'
        } else if (tmp['name'] === 'メルペイ') {
          tmp['imgPathBig'] = './static/test/home_kessai/mel.svg'
          tmp['imgPathSmall'] = './static/test/kessai/mel.svg'
        } else if (tmp['name'] === 'Kyash Card') {
          tmp['imgPathBig'] = './static/test/home_kessai/kyash.svg'
          tmp['imgPathSmall'] = './static/test/kessai/kyash.svg'
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

.osusume{
  margin: -60px auto 10px auto;
  padding:40px 0 20px 0;
  width: 100%;
  height: 230px;
  background: red;

  border-radius: 0 0 20px 20px;
}

.osusume img{
  width: 70%;
  max-height: 100px;
}

.osusume button{
  margin: 20px auto 0 auto;
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
  width: 104%;
  height: 48px;
  content:"";
  display: block;
  position: relative;
  bottom: 38px;
  right: 8px;
  border-radius: 50px;
  border:solid 3px #FFF;
}

</style>
