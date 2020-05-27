<template>
  <div class="share">
    <div class="title">
      <!-- 戻るボタン -->
      <router-link to="/setting"><button><img src="../../../static/test/modoru_kuro.svg" alt=""></button></router-link>
      <h1 class="sub_con">友達に紹介</h1>
    </div>
    <div class="top_speas"></div>
    <section class="bunsho">
      <h2>お友達を紹介しよう！</h2>
      <p>お友達を紹介すると</p>
      <p>いい感じなのでお願いします！</p>
    </section>
    <ul>
      <li>
        <a href="https://twitter.com/intent/tweet?text=<?php echo urlencode( get_the_title() . ' - ' . get_bloginfo('name') ); ?>&amp;url=<?php echo urlencode( get_permalink() ); ?>&amp;via=ここにtwitterのアカウントがあればIDを挿入" onclick="window.open(this.href, 'SNS', 'width=500, height=300, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-tw">
          <i class="fa fa-twitter"></i>
          <p><span>Twitter</span> でシェア</p>
        </a>
      </li>
      <li>
        <a href="http://www.facebook.com/share.php?u=<?php echo urlencode( get_permalink() ); ?>" onclick="window.open(this.href, 'SNS', 'width=500, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-fb">
          <i class="fa fa-facebook"></i>
          <p><span>Facebook</span> でシェア</p>
        </a>
      </li>
      <li>
        <a href="https://social-plugins.line.me/lineit/share?url=######" onclick="window.open(this.href, 'SNS', 'width=500, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-gp">
          <i class="fa fa-google-plus"></i>
          <p><span>LINE</span> でシェア</p>
        </a>
      </li>
      <li>
        <a href="http://b.hatena.ne.jp/add?mode=confirm&url=【URL】&title=【タイトル】" onclick="window.open(this.href, 'SNS', 'width=500, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-hb">
          <i class="hatenaB"></i>
          <p><span>hatena</span> でシェア</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.top_speas {
  margin-top: 120px;
}

.title {
  height: 45px;
  width: 100%;
  background-color: #FFF;
  text-align: center;
  padding-top: 25px;
  color: #626262;
  font-size: 10px;

  border-radius: 0 0 30px 30px;

  margin-bottom: 30px;

  position: fixed;
  top: 0px;

  -webkit-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 50px 0px rgba(0, 0, 0, 0.2);
}

.title button,
.title img {
  z-index: 200000;
  width: 15px;
  border: none;
}

.sub_con {
  padding-right: 60px;
  text-align: center;
}

.title button {
  z-index: 1000;
  margin-left: 30px;
  width: 33px;
  height: 33px;
  float: left;
  background-color: #FFF;
}

/* シェアボタン */
.share {
  margin-top: 40px;
  clear: both;
}

.share ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.share li a {
  display: block;
  text-align: center;
  padding: 10px 5px;
  color: #ffffff;
  font-size: 12px;
  text-decoration: none;
  border-radius: 30px;
}

.share li a:hover {
  opacity: 0.8;
}

.share ul:after {
  content: "";
  display: block;
  clear: both;
}

.share li {
  margin: 20px auto;
  width: 90%;

  list-style: none;
  border-radius: 30px;
  width: 90%;
  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.3);
}

.share li p {
  display: inline-block;
  padding-top: 10px;
}

.bunsho {
  text-align: center;
  margin: 30px auto;
}

.share-tw {
  height: 40px;
  background-color: #55acee;
}

.share-fb {
  height: 40px;
  background-color: #3b5998;
}

.share-gp {
  height: 40px;
  background-color: #00B900;
}

.share-hb {
  height: 40px;
  background-color: #2c6ebd;
}

.hatenaB:before {
  content: 'B!';
  font-style: normal;
}

@media (max-width: 599px) {
  .share span {
    display: inline-block;
    text-indent: -9999px;
  }

  .share li a {
    padding: 8px 10px;
  }
}

</style>
