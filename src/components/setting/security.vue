<template>
    <div>
    <div class="title">
        <!-- 戻るボタン -->
        <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
        <h1 class="sub_con">セキュリティ</h1>
      </div>
      <div class="top_speas"></div>
    <h2 class="position">位置情報サービス</h2>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
    <p>※位置情報サービスは、お客様の位置を取得し、</p>
    <p>今いるお店や周辺のお店を割り出すことにのみ使われます。</p>
    <h2 class="settlement">決済情報取り扱いに関して</h2>
    <p class="explanation">本アプリは決済手段の種類のみを取得しており、</p>
    <p class="explanation">お客様の決済情報は一切取得しておりません。</p>
    <p class="explanation">アプリ使用によって、お客さまの決済情報が</p>
    <p class="explanation">流出することはございません。</p>
    </div>
</template>

<script>
</script>

<style>
p{
  position: relative;
  top: 200px;
}

.settlement{
  position: fixed;
  top: 360px;
  left: 60px;
}

.explanation{
  position: relative;
  top: 300px;
}

.position{
  position: fixed;
  top: 200px;
  left: 60px;
}

.switch {
  position: fixed;
  top: 200px;
  right: 80px;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
