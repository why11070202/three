<template>
  <div>
    <div class="userlogobar">
      <!--已登录 会员头像 -->
      <div class="userlogo after">
        <div class="imgborder">
          <div class="imgborder2">
            <div class="img">
              <img src="http://my.m.qilong.com/Public/web/default/Images/nopic.gif" alt="why0202" />
            </div>
          </div>
        </div>
        <div class="fl usertext">
          <p>why0202</p>
          <span class="level">普通会员</span>
        </div>
      </div>
      <div class="settingicon">
        <a href="/info/index"></a>
      </div>
      <div class="plusmemberlink">
        <a href="/PrivilegeInfo/getPrivilegeInfo?privilegeId=2"></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.userlogobar {
  height: 176px;
  overflow: hidden;
  width: 100%;
  background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/userbg.jpg)
    no-repeat 50% 0%;
  background-size: 100% 100%;
  max-width: 750px;
  position: relative;
  .userlogo {
    padding: 40px 0 10px 40px;
    margin: 0 auto;
    text-align: left;
    .imgborder {
      border-radius: 100%;
      width: 74px;
      height: 74px;
      background: rgba(255, 255, 255, 0.2);
      padding: 3px;
      float: left;
      .imgborder2 {
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 100%;

        .img {
          width: 70px;
          height: 70px;
          overflow: hidden;
          border-radius: 100%;
          img {
            width: 110%;
            height: 110%;
            position: relative;
            top: -2px;
            left: -2px;
          }
        }
      }
    }
    .usertext {
      padding-top: 18px;
      p {
        color: #fff;
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 5px;
        text-indent: 12px;
      }
      .level {
        display: block;
        font-size: 11px;
        color: #fff;
        background: #cc450e;
        border-radius: 2px;
        text-align: center;
        margin-left: 10px;
        padding: 0;
        display: block;
        height: 15px;
        line-height: 15px;
        width: 64px;
      }
    }
  }
  .settingicon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 26px;
    height: 26px;
    a {
      width: 26px;
      height: 26px;
      display: block;
      background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/icon_setting.png)
        no-repeat;
      background-size: 26px;
    }
  }
  .plusmemberlink {
    position: absolute;
    width: 90px;
    height: 40px;
    right: 0;
    bottom: 10px;
    a {
      background: url(http://my.m.qilong.com/Public/newmobile/default/Images/member/qilong_my_plus3.png)
        no-repeat 0 0;
      background-size: 90px;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
