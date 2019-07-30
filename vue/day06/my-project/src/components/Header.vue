<template>
  <div>
    <header id="indexHeader" class="index--toutiaoribao">
      <div class="top_bar">
        <div class="abs_m">
          <a href="#" class="refresh_title btn"></a>
          <div class="refreshBtn-container">
            <i :class="{refresh_btn:1, rotate:bool2}" @click="change"></i>
          </div>
        </div>
        <div class="abs_l">
          <a href="javascript:;" class="msg-box" @click="toggle"></a>
        </div>
        <div class="abs_r">
          <a href="###" class="btn search"></a>
        </div>
      </div>
    </header>

    <div>
      <div data-reactroot id="pageletPopupBanner" class="tt-modal" v-show="bool">
        <div class="popup">
          <div class="banner"></div>
          <p>已加载好您感兴趣的头条</p>
          <div class="download-btn" data-node="downloadBtn">立即打开</div>
          <div class="close" data-node="close" @click="toggle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: false,
      bool2: false,
      timer: null
    };
  },
  methods: {
    toggle() {
      this.bool = !this.bool;
    },
    change() {
      this.bool2 = !this.bool2;
      this.timer = setTimeout(function() {
        this.bool2 = !this.bool2;
      }, 1000);
    }
  }
};
</script>

