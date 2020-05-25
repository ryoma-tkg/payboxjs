<template>
  <div>
    <h1>支払い管理</h1>
    <div>
      <div>
        <img src="" alt="決済方法1">
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </div>
      <div>
        <img src="" alt="決済方法2">
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </div>
      <div>
        <img src="" alt="決済方法3">
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </div>
      <div>
        <img src="" alt="決済方法4">
        <button type="button">変更</button>
        <button @click="Delete">削除</button>
      </div>
      <button type="button"><img src="" alt="新規決済追加ボタン"></button>
    </div>
  </div>
</template>

<script>
module.exports = {
  // 登録済決済方法一覧(初回読み込み時)
  payWay: function () {
    return {
      payWays: [
        {image: '使用可能な決済アイコン1'},
        {image: '使用可能な決済アイコン2'}
      ]
    }
  },
  methods: {
    // 変更ボタン押下時処理
    Update: function () {
      // 登録内容の変更ページへ遷移
    },
    // 削除ボタン押下時処理
    Delete: function () {
      const result = window.confirm('本当にこの決済方法を削除しますか？')
      if (result) {
        // 決済方法を削除するコード
        alert('削除しました')
      }
    }
  }
}
</script>

<style>
</style>
