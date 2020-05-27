<template>
  <div>
    <p>ホーム</p>
    <p>他の決済手段</p>
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
      message: 'Hello world!',
      list: []
    }
  },
  created () {},
  mounted () {
    axios.get('/static/campaign.json').then((response) => {
      console.log(response)
    })

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
        axios.get('/static/campaign/campaign.json').then((response) => {
          let campaign = response.data
          console.log('campaign: ', campaign)

          // 設定している決済方法一覧を取得
          let usePayAndReturnRate = this.$localStorage.get('usePayAndReturnRate')
          usePayAndReturnRate = JSON.parse(usePayAndReturnRate)
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
                    usePayAndReturnRate[payName] = Number(usePayAndReturnRate[payName]) + bonus
                  }
                }
              }
            }
          }

          console.log('paypay', usePayAndReturnRate)
        })
      } catch (error) {
        console.log('例外をキャッチしたよ！')
        console.error(error)
      }
    }
  }
}
</script>

<style>
</style>
