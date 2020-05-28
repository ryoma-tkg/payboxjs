<template>
  <div>
    <div class="wrapper">
      <!-- 固定/解除したい要素 -->
      <div class="sticky"></div>

    <section class="header content">
      <ul class="inline-block">
        <li>
          <h2>一発でお得を</h2>
          <p>Payboxは多すぎる電子マネーを
          一括管理、今いるお店で最もお得な決済手段を
          自動で提案します。</p>
          <p>インストール不要で、すぐにご利用いただけます。</p>

          <button>スマートフォンで利用開始！</button>
          <!--ボタンを押したらアプリが始まる感じでお願いします-->
          <div class="spe"></div>
        </li>
        <li>
          <img src="../../static/test/pr_images/home_moc.png" alt="">
        </li>
      </ul>
    </section>

    <section class="article content">
      <ul>
        <li>
        </li>
        <li>
          <h2>様々なサービスに対応</h2>
          <p>インストールされている決済サービスを</p>
          <p>クイックに起動できる
          Payboxは複数の決済サービスに対応、必要な時に
            すぐに呼び出せます。
          </p>
        </li>
      </ul>

      <ul class="pays">
        <li><img src="../../static/test/kessai/au.svg" alt=""></li>
        <li><img src="../../static/test/kessai/d.svg" alt=""></li>
        <li><img src="../../static/test/kessai/paypay.svg" alt=""></li>
        <li><img src="../../static/test/kessai/line.svg" alt=""></li>
        <li><img src="../../static/test/kessai/j-coin.svg" alt=""></li>
        <li><img src="../../static/test/kessai/r.svg" alt=""></li>
        <li><img src="../../static/test/kessai/mel.svg" alt=""></li>
        <li><img src="../../static/test/kessai/quo.svg" alt=""></li>
        <li><img src="../../static/test/kessai//ic.svg" alt=""></li>
      </ul>
    </section>
    </div>
  </div>
</template>

<!--app.vueを出さないようにしたい。-->

<script>
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}

.wrapper {
  margin-top:-60px;
  width: 100%;
  height: 2000px;
}

.sticky {
  background-color: #009688;
  width: 100%;
  height: 10vh;
  position: -webkit-sticky; /* Safariに対応する */
  position: sticky; /* 要素を固定/解除する */
  top: 0; /* 縦方向の閾値 */
  left: 0; /* 横方向の閾値 */
}

.header{
  width: 100%;
  max-height: 72vh;

  background-image: url("../../static/test/pr_images/main_visual.jpg");
  background-position: center;
  background-size: cover;
}

_::-webkit-full-page-media, _:future, :root .header {
    max-height: 80vh;
}

.article{
  width: 100%;
  height: 100vh;
  background:#FFF;
}

.content ul li{
  display : table ;
  margin: 0 auto;
  list-style-type: none;
  vertical-align : middle ;
}

.content ul{
  margin: 0 auto;
  padding-top:30px;
}

.content li{
  font-weight: 600;
  margin-right: 5px;
  margin-left: 5px;
}

.content li:first-child{
  text-align: left;
}

.header .content h2{
  text-shadow:0px 0px 6px rgba(0,0,0,1)
  ,0px 0px 6px rgba(0,0,0,1) ,0px 0px 6px rgba(0,0,0,0.3);
}

.header .content p{
  text-shadow:0px 0px 6px rgba(0,0,0,1)
  ,0px 0px 6px rgba(0,0,0,1) ,0px 0px 6px rgba(0,0,0,0.3);
}

.content h2{
  color: #FFF;
  font-size: 50px;
}

.content .inline-block li {
  display: inline-block;
  color: #FFF;
}

.content .inline-block li:first-child {
  max-width: 400px;
}

.content .inline-block li:nth-child(2){
  min-width: 310px;
  max-width: 24vw;
}

.content img{
  min-width: 310px;
  max-width: 24vw;
}

.content .inline-block li:first-child button{
  margin-top: 20px;
  width: 100%;
  height: 50px;

  border-radius: 10px;
  border:solid 1px #FFF;
  text-decoration: none;

  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  background-color: rgba(00, 00, 00, 0.5);

  pointer-events: none;

  transition:all 0.3s ease;
}

.content .inline-block li:first-child button:hover{
  background-color: #3391de;
}

.content .inline-block li:first-child button:active{
  background-color: #3391de;
}

.article{
  margin-top: 40px;
  height: 100vn;
}

.article h2{
  margin: 0 auto;
  width: 100%;
  color: #505050;
  font-size: 40px;
}

.article p{
  color: #505050;
}

.article ul li{
  margin: 0 auto;
  text-align: center;
  width: 100%
}

section .pays ul{
  display: block;
  width: 100px;
}

section .pays li{
  width: 100px;
  height: 100px;
  background-color: red;
  display:inline-block;
}

.spe{
  height: 100px;
}

@media screen and (max-width:320px) {
    /*画面サイズが480pxからはここを読み込む*/

      .content li:first-child{
        margin: 0 auto;
        width: 250px;
      }

      .content h2{
        color: #FFF;
        font-size: 40px;
        margin: 10px 0 10px 0;
      }

      .content p{
        color: #FFF;
        font-size: 16px;
      }

      .header{
        max-height: 105vh;
      }

      .content .inline-block li:first-child button{
        margin-top: 30px;
        font-size: 0px;

        pointer-events: auto;
      }

      .content .inline-block li:first-child button:before{
        font-size: 16px;
        content: "今すぐ利用";
      }

      .article{
        width: 100%;
      }
      .article h2{
        font-size: 30px;
      }
      .article p{}
      .article ul li{
        width: 85%;
      }

      .spe{
        height: 10px;
      }

}

@media screen and (min-width:320px) and (max-width:375px) {
    /*画面サイズが480pxからはここを読み込む*/

      .content li:first-child{
        margin: 0 auto;
        width: 300px;
      }

      .content h2{
        color: #FFF;
        font-size: 45px;
        margin: 10px 0 10px 0;
        text-align: center;
      }

      .content p{
        color: #FFF;
        font-size: 16px;
        text-align: center;
      }

      .content .inline-block li:first-child button{
        margin-top: 30px;
        font-size: 0px;
      }

      .content .inline-block li:first-child button:before{
        font-size: 16px;
        content: "今すぐ利用";
      }

      .spe{
        height: 10px;
      }

      .article{
        margin-top:300px;
        height: 100vh;
      }

      .article h2{
        color: #505050;
        font-size: 30px;
      }

      .article p{
        color: #505050;
      }

      .article ul li{
        width: 85%;
      }
}
@media screen and (min-width:375px) and (max-width:420px) {
      .article{
        margin-top:300px;
        }
}
</style>
