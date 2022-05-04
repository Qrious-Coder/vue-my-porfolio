<template>
    <div class="work-page-ctn"
      v-for="(o, i) in workContent"
      :key="i"
    >
      <el-header >
        <el-row>
        <el-col :span="20">
          <el-breadcrumb class='breadcrumb' separator=">" >
            <el-breadcrumb-item :to="{ path: '/' }" >
              <el-icon :size="40">
                <HomeFilled style="color: #ff78f8"/>
              </el-icon>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span style="color: #3691ff"
              >{{o[lang].menu}}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="3"
        class="affix-ctn"
        style="">
          <el-affix  :offset="0">
              <a href="https://docs.google.com/document/d/1lJApT6FbovV6kRwCgvCFuu5S1U4yG3DkgPhCmX63Gq4/edit?usp=sharing" target="_blank">
                <img :src="require('../assets/clip128bl.png')" 
                class="affix" style="width: 3rem" alt="cv"/>
              </a>
          </el-affix>
        </el-col>
   </el-row>
      </el-header>
      <el-main>
        <el-row
        justify="center" 
        style="text-align:center; margin-bottom: 10px"
        align="middle"
        gutter="40"
        >
          <el-col :sm="24" :lg="8" >
            <el-avatar :size="300" alt="Avatar" 
            :src="require('../assets/eveFront.png')"
            style="margin: 5px; padding: 20px; background:#636d83 ">
            </el-avatar>
          </el-col>
          <el-col :sm="24" :lg="16" align="left" style="color: #abb2bf">
            <div id="typewriter">
            <span class="var-highlight">const </span><span id="title-style">{{o[lang].pos}}</span> = {
              <br><span class="tab"></span>{{ o[lang].name }}: <span class="string-highlight">'Doan Hoa'</span>,
              <br><span class="tab"></span>{{ o[lang].aka }}: <span class="string-highlight">'Q coder'</span>,
              <br><span class="tab"></span>{{ o[lang].lv }}: <span class="string-highlight">{{ o[lang].jun }}</span>,
              <br><span class="tab"></span>{{ o[lang].sk }}:
                [<span class="string-highlight">'reactJs'</span>,
                <span class="string-highlight">'vueJs'</span>,
                <span class="string-highlight">'TailwindCss'</span>,
                <span class="string-highlight">'Element+'</span>,
                <span class="string-highlight">'HTML/CSS/JS'</span>,
                <span class="string-highlight">'GitHub'</span>];
              <br>
                <span class="tab"></span>{{o[lang].ct}}:[<span class="string-highlight">
                  <a href="https://github.com/Qrious-Coder" target="_blank" rel="noreferrer noopener">
                    <img :src="require('../assets/git64.png')" width="30" alt="gitIcon"/>
                  </a>
                </span>,
                <span class="string-highlight">
                  <a href="https://t.me/Q_Duan" target="_blank" rel="noreferrer noopener">
                    <img :src="require('../assets/tele64.png')" width="30" alt="teleIcon"/>  
                  </a>
                </span>,
                <span class="string-highlight">
                  <a href="https://mail.google.com/mail/?view=cm&to=q81188118@gmail.com&su=Email+To+Q_coder&body=Write+your+message+here&bcc=h20218888@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img :src="require('../assets/email64.png')" width="30" alt="mailIcon"/> 
                  </a> 
                </span>,
                <span class="string-highlight" >
                  <a href="https://www.messenger.com/t/100001670613328/" target="_blank" rel="noreferrer noopener">
                    <img :src="require('../assets/messengerIcon.png')" width="30" alt="messIcon"/> 
                  </a> 
                </span>];
            <br>}; 
            </div>
          </el-col>
        </el-row>
        <el-row>
          <ThePortfolio :lang='lang'/>
        </el-row>
      </el-main>
      
      <el-footer class="workpage-footer">
        <small>This project is built with <strong>Vue 3</strong> and <strong>Element+</strong>.
        Copyright © 2022 Q_coder
        <span>
          <a href="https://github.com/Qrious-Coder" target="_blank">
            <img
              style="height:1.4rem"
              :src="require('../assets/github-64-w.png')"       
            />
          </a>
        </span>
        . All Rights Reserved.</small>
      </el-footer>
    <el-backtop target=".work-page-ctn" :bottom="7" style="background-color: #282c34 !important">
      <img
        class="backtop-icon bounce-1"
        :src="require('../assets/backtop64.png')"       
      />
    </el-backtop>
  </div>
</template>
<script >
import ThePortfolio from '../components/ThePortfolio.vue'
import { ArrowRight as ArrowRight, HomeFilled as HomeFilled } from "@element-plus/icons-vue"

export default {
  name: 'WorkPage',
  props:{ lang: String},
  components:{ ThePortfolio, HomeFilled }  ,
  setup(){

    const workContent = [
      {
        en:{
          menu: 'View my portfolio',
          pos: 'frontEndDev',
          name: 'name',
          aka: 'aka',
          lv: 'level',
          jun: 'Junior Dev',
          sk: 'skills',
          ct: 'contact',
          },
        zh:{
          menu: '私人项目',
          name: '姓名',
          pos: '前端开发工程师',
          aka: '艺名',
          lv: '等级',
          jun: '初级',
          sk: '技能',
          ct: '联系方式'
          },
        vn:{
          menu: 'Dự án của Q',
          name: 'Tên',
          pos: 'frontEndDev',
          aka: 'Ký_danh',
          jun: 'Junior Dev',
          lv: 'Cấp_độ',
          sk: 'Kỹ_năng',
          ct: 'Liên_hệ'
          }
        }
      ]
    return {
      ArrowRight,
      workContent
    }
  }
}

</script>

<style scoped>

@media only screen and (min-width: 1200px) { 
  .hidden-sm-and-up { 
  display: none !important; 
  }


}

/* --------------- small screen ------------------ */
@media only screen and (max-width: 1200px) { 
  .hidden-xs-only { display: none !important; 
  }

  .el-breadcrumb__item {
  font-size: 1.1rem !important ;
  justify-content: center;
  align-items: center; 
}


  .work-page-ctn {
    font-size: 1rem !important;
  }

  #typewriter{
  font-size: 1rem !important;
  }
}


.work-page-ctn {
  background-color: #282c34;
  margin: 0 !important;
  width: 100%;
  height: 100vh; 
  overflow-y: auto;
}

.backtop-icon {
  height:3rem;
  background-color: #282c34 !important;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.bounce-1 {
  animation-name: bounce-1;
  animation-timing-function: ease;
}
@keyframes bounce-1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-5px); }
    100% { transform: translateY(0); }
}

.el-breadcrumb {
  display: flex;
  align-content: center; 
}

.el-breadcrumb__item {
  font-size: 1.5rem ;
  justify-content: center;
  align-items: center; 
}

.affix-ctn {
  margin-right: 0.5vw !important; 
  margin-top: 1vh!important;
  border-radius: 5%;
  width: 3rem;
  position: relative;

}
.affix {
  filter: drop-shadow(16px 16px 10px black);
  position: absolute;
  top: 0;
  right: -5rem;
}

.el-icon {
  background-color: #282c34;
}

.var-highlight{
	color: #3691ff;
}
.string-highlight{
	color: #f9c859;
}

#typewriter{
  font-size: 1.5rem;
  margin: 0;
  font-family: "Courier New";
}

#typewriter:after{
  content: "|";
  animation: blink 500ms linear infinite alternate;
}

@-webkit-keyframes blink{
	0%{opacity: 0;}
	100%{opacity: 1;}
}

@-moz-keyframes blink{
	0%{opacity: 0;}
	100%{opacity: 1;}
}

@keyframes blink{
	0%{opacity: 0;}
	100%{opacity: 1;}
}

.tab{
  display: inline-block;
  padding-left: 2rem;
}

#title-style{
  color: #ff78f8;
}

.workpage-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  opacity: 0.3;
  color: aliceblue;
}

</style>