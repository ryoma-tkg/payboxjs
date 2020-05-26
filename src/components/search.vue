<template>
  <div class="search_css">
    <h1>店舗検索</h1>
    <div id="searching">
      <div class="search">
        <input type="text" v-model="keyword" placeholder="何をお探しですか？">
        <!-- 検索アイコン(虫眼鏡) -->
        <img src="../../static/test/icons/mini_mushi.svg" alt="search_icon">
      </div>
      <button @click="Clear">クリア</button>
      <div class="wrap">
        <div class="top_speas_s"></div>
        <!--検索結果です-->
        <!--検索結果が表示されるとき、カテゴリや、近くのお店が隠れる感じにしたいです。-->
        <section class="wrap_s">
          <ul>
            <li v-for="store in filteredStores" v-bind:key='store'>
              <ul class="kekka">
                <!--お店の画像を入れる-->
                <li><img src="../../static/test/47365_main.jpg" alt="お店の画像"></li>
                <div class="nakami">
                  <li>
                    <h3>{{ store.storeName }}</h3>
                  </li>
                  <li>
                    <h4>{{ store.storeCategory }}</h4>
                  </li>
                  <!-- 決済アイコンの表示 -->
                  <li><img src="../../static/test/kessai/au.svg" alt="決済アイコン"></li>
                </div>
                <!-- <td><p>住所：</p>{{ store.storeAddress }}</td> -->
                <!-- 上の住所表示は保留 -->
              </ul>
            </li>
          </ul>
        </section>
        <!--検索結果終わり-->
        <!--カテゴリ_開始-->
        <div class="mo">
          <h2>カテゴリ</h2>
        </div>
        <section class="category">
          <div class="newses">
            <!--新機能-->
            <div class="recommends">
              <ul class="carousel">
                <li>
                  <!--liが増えると項目が増えます。-->
                  <a href="任意の記事URL" class="recommend-entry">
                    <img src="../../static/test/47365_main.jpg" class="recommend-img" />
                    <p class="recommend-title">食事</p>
                  </a>
                <li>
                  <a href="任意の記事URL" class="recommend-entry">
                    <img src="../../static/test/47365_main.jpg" class="recommend-img" />
                    <p class="recommend-title">ファッション</p>
                  </a>
                </li>
                <li>
                  <a href="任意の記事URL" class="recommend-entry">
                    <img src="../../static/test/47365_main.jpg" class="recommend-img" />
                    <p class="recommend-title">焼肉</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <!--カテゴリ終わり-->
        <!--近くにある店_開始-->
        <div class="mo">
            <h2>近くのお店</h2>
        </div>
        <section class="wrap_s">
          <ul>
            <li>
              <ul class="kekka">
                <li><img src="../../static/test/47365_main.jpg" alt="お店の画像"></li>
                <!--お店の画像を入れる-->
                <div class="nakami">
                  <li>
                    <h3>”お店の名前”</h3>
                  </li>
                  <li>
                    <h4>"お店のカテゴリ"</h4>
                  </li>
                  <!-- 決済アイコンの表示 -->
                  <!-- <li><img src="../../static/test/kessai/au.svg" alt="決済アイコン"></li> -->
                </div>
                <!-- <td><p>住所：</p>{{ store.storeAddress }}</td> -->
              </ul>
            </li>
          </ul>
        </section>
        <!--近くにある店終わり-->
      </div>
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
* {
  margin: 0;
  padding: 0;
}

.search_css h1 {
  display: none;
}

.search_css .search {
  position: relative;
  margin: 0 auto;
}

.search_css .search input[type=text] {
  width: 77%;
  height: 45px;
  border: solid 2px #DDD;
  border-radius: 50px;
  padding-left: 50px;
  padding-top: 2px;
  padding-bottom: 5px;
  font-size: 17px;
  color: #707070;

  -webkit-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;
}

.search_css .search input::placeholder {
  font-size: 14px;
  color: #6E7FAA;
}

.search_css .search input:focus {
  border: solid 2px #0B74DD;
  -webkit-box-shadow: 0px 2px 20px 0px rgba(11, 116, 221, 0.25);
  -moz-box-shadow: 0px 2px 20px 0px rgba(11, 116, 221, 0.25);
  box-shadow: 0px 2px 20px 0px rgba(11, 116, 221, 0.25);

}

.search_css .search img {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 7.5px;
  left: 30px;
  padding: 9px 8px;
  object-fit: cover;
}

.search_css .kekka {
  margin: 30px 0px 20px 0px;
}

.search_css .kekka ul li {
  list-style: none;
}

.search_css .kekka ul {
  margin-top: 10px;
  list-style: none;
  height: 150px;
}

.search_css ul.kekka {
  -webkit-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
}

.search_css .kekka li {
  width: 100%;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  list-style: none;
}

.search_css .kekka h3,
h4 {
  font-size: 18px;
  line-height: 20px;
  text-align: left;
}

.search_css .kekka h3 {
  text-align: left;
}

.search_css .kekka h4 {
  color: #989898;
  font-size: 16px;
}

.search_css .kekka img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
}

.search_css .nakami {
  position: relative;
  bottom: 1px;
  right: -5px;
  margin-left: auto;
  width: 260px;
}

.search_css .nakami img {
  width: 60px;
  height: 60px;
  position: absolute;
  top: -30px;
  left: -70px;
  object-fit: cover;
}

_::-webkit-full-page-media,
_:future,
:root .wrap {
  width: 90%;
  margin: 0 auto;
  line-height: 20px;
}

_::-webkit-full-page-media,
_:future,
:root ul li {
  list-style: none;
}

_::-webkit-full-page-media,
_:future,
:root h4,
h3 {
  line-height: 20px;
}

_::-webkit-full-page-media,
_:future,
:root .nakami {
  bottom: 1px;
}

.search_css .newses {}

.search_css .mo h2 {
  margin: 0 auto;
  width: 85%;
  text-align: left;
  font-size: 16px;
  color: #707070;
}

/* ↓↓はてなユーザーは横幅がMAXにならない場合入れた方が良いかも↓↓ */
.search_css .category #top-editarea {
  width: 100%;
  margin: 0 auto 0 auto;
}

/* ↓↓大衆向け↓↓ */
.search_css .category .recommends {
  margin: 0;
  width: 100%;
}

.search_css .category .recommends .carousel {
  list-style-type: none;
  width: 100%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  margin: 0 auto;
}

.search_css .category .carousel ul {
  padding: 0 20px 0 20px;
}

.search_css .category .recommends .carousel li {
  margin: 20px 10px 30px 10px;
  text-align: center;
  display: inline-block;
  word-break: break-all;
  border-radius: 30px;
  width: 150px;
  height: 100px;

  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
}

.search_css .category .recommends a.recommend-entry {
  display: block;
  width: 150px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  line-height: 1.5;
  border-radius: 30px;
  height: 100%;

  text-decoration: none;
  color: #505050;
}

.search_css .category .recommend-title {
  display: block;
  word-break: break-all;
  width: 100px;
  text-align: center;
  color: #FFF;

  position: relative;
  bottom: 80px;
  left: 5px;
}

.search_css .category .recommend-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px
}

.search_css .wrap_s {
  margin: 0 auto;
  width: 90%;
}

.search_css .wrap_s ul {
  border-radius: 30px;
}

.search_css .wrap_s li {
  list-style: none;

}

.search_css .top_speas_s {
  margin-top: 30px;
}

.search_css .top_speas_b{
  margin-bottom: 150px;
}
</style>
