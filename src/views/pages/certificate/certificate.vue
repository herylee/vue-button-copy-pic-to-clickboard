<template>

<div>
            <el-button  type="primary" icon="search" size="small" @click="test">生成凭证</el-button> 

            <canvas  ref="canvas" width="600" :height="900" style="display:none;"></canvas>

           <div class="canvasImg"  style=" float:left; display:inline">

            <img src="" id="canvasImg"/>

 </div>
              <!-- 复制电子凭证按钮 -->

           <el-button  type="primary" icon="search" size="small" @click="copycert">复制电子凭证</el-button> 

  
  

<div class="qrcodeImg" style=" display:inline">
  <!-- 在线生成二维码网址 http://www.topscan.com/pingtai  -->

<!-- 此处的复制函数可以把button的名字“复制二维码都复制到剪贴板！！”-->

<img src="" style="display:inline" id="qrcodeImg">

</div> 
 <el-button   type="primary" icon="search" size="small" @click="copyqrcode">复制二维码</el-button> 







</template>




<script>
import axios from "axios";

import $ from "jquery";
// import { constants } from 'http2';

//import { mapState, mapActions } from 'vuex';

export default {
  created() {},

  components: {
    Qrcode
  },

  data() {
    return {
      urlLink: "",
      certpath: "",
      qrcodepath: "",

      showQrcode: false
    };
  },
  methods: {
    test() {
      document.getElementById("qrcodeImg").src =
        "http://qr.topscan.com/api.php?text=https://github.com/herylee";

      this.canvas();
    },

    //向接口传入一个请求地址，标志号为号，然后获取二维码地址,传到网上获取二维码的图片地址
    //       let Thirdcaseurl =
    //         "url"+(this.fm.registno);

    //     this.$axios //异步请求
    //         .get(Thirdcaseurl)
    //         .then(response => {
    //           this.showQrcode = true;
    //           this.qrcodepath = response.data.data.urlLink;

    //            console.log(this.qrcodepath);

    // //  'http://qr.topscan.com/api.php?text='+ (this.qrcodepath);
    //         })
    //         .catch(function(error) {});
    // },

    //  此复制函数来自于   https://github.com/owaisafaq/copier-js

    SelectText(element) {
      var doc = document;
      if (doc.body.createTextRange) {
        var range = document.body.createTextRange();

        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
        console.log(selection);
      }
    },

    //点击按钮复制电子凭证，需要后期把图片base64上传到服务器上,此处未实现
    //从服务器获取电子凭证的图片地址，然后赋值给canvasImg
    copycert() {
      $(".canvasImg").attr("contenteditable", true);

      // console.log($(".canvasImg")); // '.canvasImg' 是类名    选id就是#
      this.SelectText($(".canvasImg").get(0)); //取第一位   this调用了实例上的东西
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      $(".canvasImg").removeAttr("contenteditable");
      alert("电子凭证已复制!");
    },

    // 点击按钮复制二维码，需要二维码是图片的格式，此处未实现，从网上在线获取转换成二维码图片的的地址

    copyqrcode() {
      $(".qrcodeImg").attr("contenteditable", true);
      // console.log($(".qrcodeImg"));
      // '.canvasImg' 是类名    选id就是#
      //获取DOM元素，需document.querySelector（".qrcodeImg"）获取这个dom节点，然后再获取qrcodeImg的值。

      this.SelectText($(".qrcodeImg").get(0)); //取第一位   this调用了实例上的东西
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      $(".qrcodeImg").removeAttr("contenteditable");

      alert("二维码已复制!");
    },

    canvas() {
      //向接口传入一个请求地址，标志号为报案号，然后获取电子凭证的图片的路径地址
      //   let Secondcaseurl =  '';
      // url
      // url

      //   this.$axios //异步请求

      //     .get(Secondcaseurl)

      //     .then(response => {

      //        let pp1 = response.data.data[0].path;
      //       // this.certpath = response.data ;

      //       console.log(pp1);
      //       let pp2 =   "url"+pp1;

      //       this.certpath =  pp2;

      //     })
      //     .catch(function(error) {});

      document.getElementById("canvasImg").src =
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3431924074,2850839948&fm=27&gp=0.jpg";
    }
  }
};

</script>

<style scodpe>
p.img {
  cursor: pointer;
  width: 100px;
  height: 200px;
  margin-right: 20px;
}
</style>