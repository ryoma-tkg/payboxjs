<template>
 <div>
  <h1>店舗検索</h1>
  <div id="searching">
    <input type="text" v-model="keyword">
    <button @click="Clear">クリア</button>
    <table>
      <tr v-for="store in filteredStores" v-bind:key="store">
        <td><p>店舗名：</p>{{ store.storeName }}</td>
        <td><p>カテゴリ：</p>{{ store.storeCategory }}</td>
        <!-- <td><p>住所：</p>{{ store.storeAddress }}</td> -->
        <!--
        <div>
          <h3>カテゴリで検索</h3>
          <div>
            <button @click="CategorySearch"><img src="" alt="カテゴリ.img"></button>
            <button @click="CategorySearch"><img src="" alt="カテゴリ.img"></button>
          </div>
        </div>
        -->
      </tr>
    </table>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      stores: [
        {
          storeName: 'セブンイレブンセルリアン店',
          storeCategory: 'コンビニエンスストア',
          storeAddress: '渋谷区セルリアンタワー'
        },
        {
          storeName: 'ローソンフクラス店',
          storeCategory: 'コンビニエンスストア',
          storeAddress: '渋谷区フクラス'
        },
        {
          storeName: '焼肉一番セルリアンタワー店',
          storeCategory: '焼肉',
          storeAddress: '渋谷区セルリアンタワー'
        },
        {
          storeName: 'セイコーマートセルリアン店',
          storeCategory: 'スーパーマーケット',
          storeAddress: '渋谷区セルリアンタワー'
        }
      ]
    }
  },
  computed: {
    filteredStores: function () {
      var stores = []
      for (var i in this.stores) {
        var store = this.stores[i]
        if ((store.storeName.indexOf(this.keyword) === 0 || store.storeCategory.indexOf(this.keyword) === 0 || store.storeAddress.indexOf(this.keyword) === 0) && this.keyword !== '') {
          stores.push(store)
        }
      }
      return stores
    }
  },
  methods: {
    Clear: function () {
      this.keyword = ''
    },
    CategorySearch: function () {
      this.keyword = ''
    }
  }
}
</script>

<style>
</style>
