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
export default {
  data () {
    return {
      message: 'Hello world!',
      list: [],
      json: _json
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
