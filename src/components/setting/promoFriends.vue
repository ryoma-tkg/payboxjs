<template>
  <div class="share">
    <ul>
      <li>
        <a href="https://twitter.com/intent/tweet?text=<?php echo urlencode( get_the_title() . ' - ' . get_bloginfo('name') ); ?>&amp;url=<?php echo urlencode( get_permalink() ); ?>&amp;via=ここにtwitterのアカウントがあればIDを挿入"
    onclick="window.open(this.href, 'SNS', 'width=500, height=300, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-tw">
        <i class="fa fa-twitter"></i>
        <span>Twitter</span> でシェア
        </a>
      </li>
      <li>
        <a href="http://www.facebook.com/share.php?u=<?php echo urlencode( get_permalink() ); ?>"
    onclick="window.open(this.href, 'SNS', 'width=500, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-fb">
        <i class="fa fa-facebook"></i>
        <span>Facebook</span> でシェア
        </a>
      </li>
      <li>
        <a href="https://plus.google.com/share?url=<?php echo urlencode( get_permalink() ); ?>"
    onclick="window.open(this.href, 'SNS', 'width=500, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-gp">
        <i class="fa fa-google-plus"></i>
        <span>Google+</span> でシェア
        </a>
      </li>
      <li>
        <a href="http://b.hatena.ne.jp/bookmarklet?url=<?php echo urlencode( get_permalink() ); ?>"
    onclick="window.open(this.href, 'SNS', 'width=500, height=500, menubar=no, toolbar=no, scrollbars=yes'); return false;" class="share-hb">
        <i class="hatenaB"></i>
        <span>hatena</span> でシェア
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
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
    float: left;
    width: 25%;
  }
  .share-tw {
    background-color: #55acee;
  }
  .share-fb {
    background-color: #3b5998;
  }
  .share-gp {
    background-color: #dd4b39;
  }
  .share-hb {
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
