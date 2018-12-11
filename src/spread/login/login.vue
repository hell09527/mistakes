<template>
<div>
  <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsinline autoplay muted loop>
    <!--http://thenewcode.com/assets/videos/polina.mp4-->
    <!--<source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">-->
    <source src=" https://static.bonnieclyde.cn/Pexels%20Videos%201572342.mp4" type="video/mp4">
  </video>
  <div id="polina">
    <h1>登录</h1>
    <input type="text" placeholder="请输入你的用户名" v-model="usename">

    <input  class="password" type="text"   placeholder="请输入账号密码" v-model="password">
    <!--<a href="http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video"></a>-->
    <el-button
      plain
      @click="login()">
      RegiSter
      </el-button>
    <!--<button  ></button>-->
  </div>
</div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return {
              usename:'',
              password:''
            }
        },
        mounted(){
        },
        methods: {
          login(){
              let _that=this

                if(_that.usename=='admin' && _that.password ==1234){
                  this.$router.push('prime')
                }else{
                  this.$notify.error({
                    title: '错误',
                    message: '您输入的账号或密码错误'
                  })
                }



          }
        },
        components: {

        }

    }
</script>

<style lang="scss" scoped="" type="text/css">
  body {
    margin: 0;
    background: #000;
  }
  .password{
    margin-top: 20px;
  }
  input {
    /*background-color: transparent;*/
    background:rgba(0, 0, 0, 0);
    width: 90%;
    height: 48px;
    color: #fff;
    padding-left: 15px;
    font-size:14px;
  }

  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background: url('//demosthenes.info/assets/images/polina.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
  }
  .stopfade {
    opacity: .5;
  }
  #polina {
    font-family: Agenda-Light, Agenda Light, Agenda, Arial Narrow, sans-serif;
    font-weight:100;
    background: rgba(0,0,0,0.3);
    color: white;
    padding: 2rem;
    width: 30%;
    /*margin:2rem;*/
    margin-right: 35%;
    float: right;
    font-size: 1.2rem;
  }
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    margin-top: 0;
    letter-spacing: .3rem;
  }
  #polina button {
    display: block;
    width: 100%;
    padding: .4rem;
    border: none;
    margin: 1rem auto;
    font-size: 1.3rem;
    height: 48px;
    background: rgba(255,255,255,0.23);
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    transition: .3s background;
  }
  #polina button:hover {
    background: rgba(0,0,0,0.5);
  }

  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    background:rgba(0,0,0,0.5);
    padding: .5rem;
    transition: .6s background;
  }
  a:hover{
    background:rgba(0,0,0,0.9);
  }
  @media screen and (max-width: 500px) {
    div{width:70%;}
  }
  @media screen and (max-device-width: 800px) {
    html { background: url(https://thenewcode.com/assets/images/polina.jpg) #000 no-repeat center center fixed; }
    #bgvid { display: none; }
  }

</style>
