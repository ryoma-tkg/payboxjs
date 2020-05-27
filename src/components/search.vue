<template>
  <div class="wrap_all">
  <div class="search_css">
    <h1>店舗検索</h1>
    <div id="searching">
      <div class="search">
        <input type="text" v-model="keyword" placeholder="何をお探しですか？">
        <!-- 検索アイコン(虫眼鏡) -->
        <img src="../../static/test/icons/mini_mushi.svg" alt="search_icon">
      </div>
      <button @click="Clear" class="clear_button"><img src="../../static/test/icons/batsu.svg" alt="clear"></button>
      <div class="wrap">
        <div class="top_speas_s"></div>
        <!--検索結果です-->
        <!--検索結果が表示されるとき、カテゴリや、近くのお店が隠れる感じにしたいです。-->
        <section class="wrap_s">
          <ul>
            <li>
            </li>
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
        </div><!--wrapの終焉-->
        </div>
        <section class="category">
          <div class="newses">
            <!--新機能-->
            <div class="recommends">
              <ul class="carousel">
                <li>
                  <!--liが増えると項目が増えます。-->
                  <div class="recommend-entry">
                    <button @click="eating"><img src="../../static/test/47365_main.jpg" class="recommend-img" /></button>
                    <p class="recommend-title">食事</p>
                  </div>
                <li>
                  <div class="recommend-entry">
                    <button @click="fassion"><img src="../../static/test/47365_main.jpg" class="recommend-img" /></button>
                    <p class="recommend-title">ファッション</p>
                  </div>
                </li>
                <li>
                  <div class="recommend-entry">
                    <button @click="convenienceStore"><img src="../../static/test/47365_main.jpg" class="recommend-img" /></button>
                    <p class="recommend-title">コンビニ</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <!--カテゴリ終わり-->
        <div class="wrap_all">
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
                  <li><img src="../../static/test/kessai/au.svg" alt="決済アイコン"></li>
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
  <div class="bottom_space"></div>
  </div>
</template>

<script>
// GPS 取得
function getPosition () {
  return new Promise(function (resolve) {
    navigator.geolocation.getCurrentPosition(resolve)
  })
}

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

// 検索用
async function searchStores (latitude, longitude) {
  try {
    let range = 10.011111
    let url = 'https://ykrytk.ddo.jp/api/shops?latitude=' + String(latitude) + '&longitude=' + String(longitude) + '&range=' + String(range)
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
  } catch (error) {
    console.log('例外をキャッチしたよ！')
    console.error(error)
  }
}

export default {
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    filteredStores: function () {
      getPosition()
        .then((position) => {
          // GPS 取得した後の処理
          console.log('position', position)
          let latitude = position.coords.latitude
          let longitude = position.coords.longitude
          console.log(latitude, ', ', longitude)
          // nearStoresList(latitude, longitude)
          searchStores(latitude, longitude)
        })
        .catch((err) => {
          console.error(err.message)
        })
      let stores = []
      for (var i in searchStores.stores) {
        let store = searchStores.stores[i]
        if ((store.name.indexOf(this.keyword) !== -1 || store.category_name.indexOf(this.keyword) !== -1) && this.keyword !== '') {
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
    eating: function () {
      this.keyword = '食事'
    },
    fassion: function () {
      this.keyword = 'ファッション'
    },
    convenienceStore: function () {
      this.keyword = 'コンビニエンスストア'
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrap_all{
  width: 100%;
  margin:0 auto;
}

.recommends button {
    width: auto;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
    border-radius: 20px;
}

.recommends button img{
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
}

_::-webkit-full-page-media,
_:future,
:root .recommends button img{
  position: relative;
  top:3px;
  width: 100%;
  max-height: 100px;
  object-fit: cover;
}

_::-webkit-full-page-media,
_:future,
:root .recommends button{
  width: 100%;
  max-height: 97px;
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
.clear_button img{
  width: 20px;
  height: 100%;
}

.clear_button{
  border:none;
  width:30px;
  height:30px;
  position: relative;
  bottom: 43px;
  left: 130px;
  background-color: transparent;
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
  border-radius: 20px;
  width: 150px;
  height: 100px;
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
  bottom: 65px;
  left: 15%;
  font-weight: 900;
}

/*
.search_css .category .recommend-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px
}*/

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

.search_css .top_speas_b{
  margin-bottom: 150px;
}

.bottom_space{
  margin-bottom: 200px;
}
</style>
