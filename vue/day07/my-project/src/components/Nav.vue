<template>
  <div>
    <div class="top_menu_bar">
      <div class="top_menu_more">
        <div class="list_shadow"></div>
        <a class="more_btn" href="javascript:void(0)">
          <span class="cross"></span>
        </a>
      </div>
      <div class="top_menu_list">
        <a
          v-for="(item,index) in  btnlist"
          v-text="item.title"
          :class="{btn:1, cur:cur===index}"
          @click="tab(index)"
          :key="index"
        ></a>
      </div>
    </div>
    <div class="tab-con">
      <div :class="{all:1,active:cur===0}">
        <content id="pageletListContent" class="feed-list-container">
          <!-- react-empty: 33 -->
          <div class="list_content" data-pull-fresh="1">
            <section
              class="has_action"
              data-hot-time="1564393684"
              data-group-id="6718665232463430157"
              data-item-id="6718665232463430157"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="general_positive_video"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">原创时政微视频丨峥嵘岁月 永不褪色</h3>
                  <div class="item_info">
                    <div>
                      <span class="stick_label space">置顶</span>
                      <!-- react-text: 405 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">央视新闻</span>
                      <span class="cmt space">
                        <!-- react-text: 408 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 409 -->
                        580
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:48">4分钟前</span>
                      <span data-id="6718665232463430157" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564393681"
              data-group-id="6718864097653293582"
              data-item-id="6718864097653293582"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="news_politics"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">联播+丨两封贺信背后的绿色故事</h3>
                  <div class="item_info">
                    <div>
                      <span class="stick_label space">置顶</span>
                      <!-- react-text: 419 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">央视网新闻</span>
                      <span class="cmt space">
                        <!-- react-text: 422 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 423 -->
                        373
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:48">4分钟前</span>
                      <span data-id="6718864097653293582" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="middle_mode has_action"
              data-hot-time="1564393678"
              data-group-id="6718987202765783560"
              data-item-id="6718987202765783560"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="news_politics"
                class="article_link clearfix"
              >
                <div class="item_detail desc">
                  <h3 class="dotdot line3 image-margin-right">港澳办驳“违法达义”：暴力就是暴力 违法就是违法</h3>
                  <div class="item_info">
                    <div>
                      <span class="hot_label space">热</span>
                      <span class="src space">人民日报海外网</span>
                      <span class="cmt space">
                        <!-- react-text: 435 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 436 -->
                        35
                        <!-- /react-text -->
                      </span>
                      <span data-id="6718987202765783560" class="dislike-news fr mid-space"></span>
                    </div>
                  </div>
                </div>
                <div class="list_img_holder">
                  <img src="https://p3.pstatp.com/list/pgc-image/RXb2hxH6X68lqX" />
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564393675"
              data-group-id="6718980062445568516"
              data-item-id="6718980062445568516"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="news_society"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">凌晨2点，400余警察突查街头娱乐场所，带走62名可疑人员</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/f7120e3ee8c04c989119d52fcb752445"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/73753df4257f41df88d2f3ac391cc098"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/91021528fec14770bf7ff9d32863fe16"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 454 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">乙图</span>
                      <span class="cmt space">
                        <!-- react-text: 457 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 458 -->
                        302
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:47">5分钟前</span>
                      <span data-id="6718980062445568516" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564393672"
              data-group-id="6717907962460897799"
              data-item-id="6717907962460897799"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">赌王何鸿燊：从落魄贵公子到豪门巨富，如今每天花掉86万用钱续命</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/dfic-imagehandler/2b0101c1-2d9d-4b2b-8f43-53e23dea374c"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/dfic-imagehandler/a9ff6bc3-3832-4238-82bf-80fe7e50c173"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/dfic-imagehandler/0ceda1bb-5a7d-490c-8b8d-098d1fa22399"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 475 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">财经无忌</span>
                      <span class="cmt space">
                        <!-- react-text: 478 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 479 -->
                        37
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:47">5分钟前</span>
                      <span data-id="6717907962460897799" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564393669"
              data-group-id="6718898171579204110"
              data-item-id="6718898171579204110"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="news"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">速效救心丸对突发心梗根本没用，最重要的应对方法是这个！</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/7d67fae610774bab8a2c0746070ba03a"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/2d78335589f34e728d6de7a0c2be2559"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/1967c7e74a9c471483b27e41712dd56a"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 496 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">北京协和医院</span>
                      <span class="cmt space">
                        <!-- react-text: 499 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 500 -->
                        120
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:47">5分钟前</span>
                      <span data-id="6718898171579204110" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>

            <section
              class="has_action"
              data-hot-time="1564393663"
              data-group-id="6718923707500200462"
              data-item-id="6718923707500200462"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_headline"
                data-tag="news_food"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">天热茄子不要炒着吃了，大厨教蒜泥蒸茄子最入味的方法，简单实用</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 538 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">第一美食</span>
                      <span class="cmt space">
                        <!-- react-text: 541 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 542 -->
                        9
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:47">5分钟前</span>
                      <span data-id="6718923707500200462" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
          </div>
          <div class="list_bottom">
            <section class="loadmoretip">
              <a href="#">加载中...</a>
            </section>
          </div>
        </content>
      </div>
      <div :class="{all:1,active:cur===1}">
        <content id="pageletListContent" class="feed-list-container">
          <!-- react-empty: 33 -->
          <div class="list_content" data-pull-fresh="1">
            <section
              class="has_action"
              data-hot-time="1564398593"
              data-group-id="6718935855441904140"
              data-item-id="6718935855441904140"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">被男友承认后，徐璐大方走机场，身穿杨幂同款紧身衣也没在怕</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/052a20c8b19f4841818666336132dcea"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/46923cff05874877bf613f43399ebab7"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/1ebe53bb78244cdf8f32993f567a6080"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 450 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">RINKA的时尚日记</span>
                      <span class="cmt space">
                        <!-- react-text: 453 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 454 -->
                        29
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 19:09">11分钟前</span>
                      <span data-id="6718935855441904140" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="middle_mode has_action"
              data-hot-time="1564397993"
              data-group-id="6719032699429847566"
              data-item-id="6719032699429847566"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news"
                class="article_link clearfix"
              >
                <div class="item_detail desc">
                  <h3 class="dotdot line3 image-margin-right">SNH48李艺彤专访：不再哭不再怯懦 女生要勇敢追梦|说好的六点见</h3>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 463 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">头条娱乐</span>
                      <span class="cmt space">
                        <!-- react-text: 466 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 467 -->
                        43
                        <!-- /react-text -->
                      </span>
                      <span data-id="6719032699429847566" class="dislike-news fr mid-space"></span>
                    </div>
                  </div>
                </div>
                <div class="list_img_holder">
                  <img
                    src="http://p9-tt.byteimg.com/video1609/tos-cn-i-0000/006db7f0b1ed11e997bdac1f6b0ecbaa"
                  />
                  <span class="video-btn"></span>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564397393"
              data-group-id="6716748418464612867"
              data-item-id="6716748418464612867"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">巩俐的替身，刘德华的替身，吴京的替身都输给了周冬雨的替身</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/dfic-imagehandler/23bfcfaa-ed05-4f6e-b1f0-5061f7b0eaa5"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/1ced22fa134449928ac18f8c1158e9f1"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/f13fd9519da24030b98a5c024d3c34e6"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 486 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">娱乐凯凯</span>
                      <span class="cmt space">
                        <!-- react-text: 489 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 490 -->
                        21
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 18:49">31分钟前</span>
                      <span data-id="6716748418464612867" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section class="has_action">
              <a href="http://d.toutiao.com/UMHE/" class="article_link ad-material-link clearfix">
                <h3 class="dotdot line3">
                  <!-- react-text: 496 -->
                  <!-- /react-text -->
                  <!-- react-text: 497 -->
                  <!-- /react-text -->
                </h3>
                <div class="list_img_holder_large">
                  <img
                    src="http://s2.pstatp.com/site/promotion/landing_page/img/灌篮高手_f8c2fc51255042721be338c131b1dabd.jpg"
                  />
                </div>
                <div class="item_info">
                  <span class="ad-material space">APP</span>
                  <span class="src">今日头条</span>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564396793"
              data-group-id="6718945390197998093"
              data-item-id="6718945390197998093"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">吴君如87岁父亲罕见现身，大夏天包裹严实，拄拐杖紧牵发妻</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/4e38edd25a804caa8f2ed6e6f274f109"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/fd339e3e77d24a36b13cbedc2c48fb18"
                        />
                      </li>
                      <li class="list_img_holder">
                        <img
                          src="https://p3.pstatp.com/list/pgc-image/02340e631044419ab25aa490901827ec"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 517 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">猫眼娱乐</span>
                      <span class="cmt space">
                        <!-- react-text: 520 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 521 -->
                        4
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 18:39">41分钟前</span>
                      <span data-id="6718945390197998093" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564396193"
              data-group-id="6718974354777965060"
              data-item-id="6718974354777965060"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_comic"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">五大国漫力证国漫崛起，一部也不能错过</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 538 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">KIWI酱说电影</span>
                      <span class="cmt space">
                        <!-- react-text: 541 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 542 -->
                        62
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 18:29">51分钟前</span>
                      <span data-id="6718974354777965060" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564395593"
              data-group-id="6690109146349437452"
              data-item-id="6690109146349437452"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">歌手出道身家超十亿，今小十七岁娇妻成功生子，两人爱情让人羡慕</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 559 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">三春辉聊娱乐</span>
                      <span class="cmt space">
                        <!-- react-text: 562 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 563 -->
                        24
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 18:19">1小时前</span>
                      <span data-id="6690109146349437452" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564394993"
              data-group-id="6718913678558626317"
              data-item-id="6718913678558626317"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">黄晓明杜江致敬英雄 杨紫携消防员父亲亮相红毯</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 580 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">1905电影网</span>
                      <span class="cmt space">
                        <!-- react-text: 583 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 584 -->
                        20
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 18:09">1小时前</span>
                      <span data-id="6718913678558626317" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
            <section
              class="has_action"
              data-hot-time="1564394393"
              data-group-id="6719036381726769677"
              data-item-id="6719036381726769677"
              data-format="0"
            >
              <a
                href="javascript: void(0)"
                data-action-label="click_news_entertainment"
                data-tag="news_entertainment"
                class="article_link clearfix"
              >
                <div class="item_detail">
                  <h3 class="dotdot line3">揭秘丨李安又炫技：50岁史密斯怎样对阵20岁自己</h3>
                  <div class="list_image">
                    <ul class="clearfix">
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                      <li class="list_img_holder">
                        <img />
                      </li>
                    </ul>
                  </div>
                  <div class="item_info">
                    <div>
                      <!-- react-text: 601 -->
                      0
                      <!-- /react-text -->
                      <span class="src space">新京报Fun娱乐</span>
                      <span class="cmt space">
                        <!-- react-text: 604 -->
                        评论
                        <!-- /react-text -->
                        <!-- react-text: 605 -->
                        0
                        <!-- /react-text -->
                      </span>
                      <span class="time" title="2019-07-29 17:59">1小时前</span>
                      <span data-id="6719036381726769677" class="dislike-news fr"></span>
                    </div>
                  </div>
                </div>
              </a>
            </section>
          </div>
          <div class="list_bottom">
            <section class="loadmoretip">
              <a href="#">加载中...</a>
            </section>
          </div>
        </content>
      </div>
    </div>

   
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnlist: [
        {
          title: "推荐"
        },
        {
          title: "视频"
        },
        {
          title: "热点"
        },
        {
          title: "社会"
        },
        {
          title: "娱乐"
        },
        {
          title: "军事"
        },
        {
          title: "科技"
        },
        {
          title: "汽车"
        },
        {
          title: "房产"
        },
        {
          title: "家居"
        },
        {
          title: "体育"
        },
        {
          title: "财经"
        }
      ],
      cur: 0,
      bool: false
    };
  },
  methods: {
    tab(index) {
      this.cur = index;
    }
  }
};
</script>

<style scoped>
.all {
  display: none;
}
.active {
  display: block;
  padding-top: 81px;
}
</style>

