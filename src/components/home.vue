<template>
  <div>
    <p>ホーム</p>
    <p>他の決済手段</p>
    <p>お知らせキャンペーン</p>
    {{json}}
  </div>
</template>

<script>
// import axios from 'axios'
import _json from '../assets/pay_test.json'
// 近くの店舗情報を取得
function getNearStores () {
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
    let range = 0.011111
    console.log(location.href)
    let url = 'http://160.251.15.239/api/shops?latitude='
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
    const resPos = await response.json()
    // (3) レスポンスの結果を、 console.log() で表示してみましょう
    console.log('resPos')
    console.log(resPos)
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
    getNearStores()
    console.log('hoge is: home')
  },
  methods: {
  }
}
</script>

<style>
</style>
