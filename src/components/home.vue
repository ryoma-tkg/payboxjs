<template>
  <div>
    <p>ホーム</p>
    <p>他の決済手段</p>
    <p>お知らせキャンペーン</p>
    {{json}}
  </div>
</template>

<script>
import axios from 'axios'
import _json from '../assets/pay_test.json'

// ソート用比較関数
function compare (a, b) {
  let r = 0
  if (a['distance'] < b['distance']) {
    r = -1
  } else {
    // if ( a['distance'] > b['distance'] )
    r = 1
  }
  return r
}

// GPS 取得
function getPosition () {
  return new Promise(function (resolve) {
    navigator.geolocation.getCurrentPosition(resolve)
  })
}

async function getStoreRequest (latitude, longitude) {
  try {
    // url = 'http://160.251.15.239/api/shops?latitude=2.3&longitude=2.3'
    let range = 10.011111
    let url // let url = 'http://160.251.15.239/api/shops?latitude='
    url = 'https://ykrytk.ddo.jp/api/shops?latitude='
    // latitude = 35.695443// for test2
    // longitude = 139.7000// for test2
    url += String(latitude) + '&longitude=' + String(longitude) + '&range=' + String(range)
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
    stores.sort(compare)
    console.log('stores: ', stores)

    // 1番近い店名文字列分割
    let storName = stores[0].name.split('-')[0]
    console.log('storName: ', storName)

    axios.get('/assets/json/campaign.json').then((response) => {
      console.log(response)
    })
  } catch (error) {
    console.log('例外をキャッチしたよ！')
    console.error(error)
  }
}

export default {
  data () {
    return {
      message: 'Hello world!',
      list: [],
      json: _json
    }
  },
  created () {
    axios.get('/static/campaign.json').then((response) => {
      console.log(response)
    })
    getPosition()
      .then((position) => {
        // GPS 取得した後の処理
        console.log('position', position)
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        console.log(latitude, ', ', longitude)
        getStoreRequest(latitude, longitude)
      })
      .catch((err) => {
        console.error(err.message)
      })
  },
  methods: {
  }
}
</script>

<style>
</style>
