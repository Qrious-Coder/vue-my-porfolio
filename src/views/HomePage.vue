<template>
  <el-container class="container"
      v-for="(o, i) in homeContent"
      :key="i">
    <el-header height="5vh" class="lang-bar">
        <el-button class="lang-btn" 
          :class="lang === 'en' ? 'active' : '' " 
          @click="switchToEn" circle>
          En
        </el-button>
        <el-icon :size="10"><Dash /></el-icon>
        <el-button class="lang-btn" 
          :class="lang === 'zh' ? 'active' : ''" 
          @click="switchToZh" circle>中</el-button>
        <el-icon :size="10"><Dash /></el-icon>
        <el-button class="lang-btn" 
          :class="lang === 'vn' ? 'active' : ''" 
          @click="switchToVn" circle>
          VN
        </el-button>
    </el-header>
    
    <!-- main lg screen -->
    <el-main height="90vh">
      <el-row class="hidden-xs-only" 
      justify="center" 
      style="text-align:center"
      align="middle"
      >
        <el-col :span="6">
        </el-col>
        <el-col :span="6">
          <div>
            <div style="margin-bottom: 10px">
              <a href="https://docs.google.com/document/d/1lJApT6FbovV6kRwCgvCFuu5S1U4yG3DkgPhCmX63Gq4/edit?usp=sharing">
                <el-tooltip
                  popper-class="tooltip-box"
                  placement="left"
                >
                  <template #content>
                      <el-row justify="center" align="middle">  
                        <span> {{ o[lang].tooltip1 }} </span>              
                        <img   
                          :src="require('../assets/arrowRight64.png')"
                          alt="arrow"
                          class="tooltip-arrow"
                        />

                      </el-row>    
                  </template>
                    <img
                      :src="require('../assets/clip128.png')"  
                      class="home-icon"                   
                    />
                </el-tooltip>
              </a>
              <el-tooltip
                popper-class="tooltip-box"
                placement="right"
              >
                <template #content>
                  <el-row justify="center" align="middle">               
                    <img   
                      :src="require('../assets/arrowLeft64.png')"
                      alt="arrow"
                      class="tooltip-arrow"
                    />
                  <span>{{ o[lang].tooltip2 }}  </span> 
                  </el-row> 
                  </template>
                  <a href="https://drive.google.com/uc?export=download&id=1I8JIgqtm94eHWuosEwLnwMHjwl_yGdCf" target="_blank">
                    <img
                      style="height: 3.2rem; border-left: 1px #10b1fe dashed; padding-left: 15px; margin-left: 15px;"
                      :src="require('../assets/down128.png')"
                      class="home-icon"   
                    />
                  </a>
                </el-tooltip>
            </div>
              <el-icon :size="60" color="#10b1fe" >
                <ArrowUp />
              </el-icon>
          </div>
        </el-col>
        <el-col :span="6"><div></div></el-col>
      </el-row>
      <el-row class="hidden-xs-only" justify="center" align="middle">
        <el-col :span="6"
          style="text-align:right"
        ><div div class="flex-content">
            <el-col :span="20" 
              style="text-align:right;">
              <ContactBtn :lang="lang" :drawerSize="35" />
            </el-col>
              <el-col :span="4"  
                style="text-align:right"
            >
              <el-icon :size="60" color="#10b1fe" >
                <ArrowLeft />
              </el-icon>
            </el-col>
          </div>
        </el-col>
        <!-- flip image -->
        <el-col :span="6" class="flip-box bounce-1">
            <div class="flip-box-inner">
              <div class="flip-box-front ">
                <img
                  :src="require('../assets/eve.png')" 
                  class="front-avatar"      
                />
              </div>
              <div class="flip-box-back">
                <img   
                  :src="require('../assets/eveHover.jpg')"
                  alt="avatar"
                  class="back-avatar"
                />
              </div>
            </div>
        </el-col>
        <el-col :span="6">
          <div class="flex-content">
              <el-icon :size="60" color="#10b1fe"  
              class="fa-arrow-right">
                <ArrowRight />
              </el-icon>

              <!-- pass props through router link -->
            <el-tooltip
              popper-class="tooltip-box"
              placement="right"
            >
              <template #content>
                <el-row justify="center" align="middle">               
                <img   
                  :src="require('../assets/arrowLeft64.png')"
                  alt="hand"
                  class="tooltip-arrow"
                />
                <span>{{o[lang].tooltip3}} </span> 
                </el-row>    
              </template>
              <router-link 
              :to="{ name: 'WorkPage', 
              params: {lang} }" >  
                <img
                  align="start"
                  style="justify-self: left"
                  :src="require('../assets/folder128.png')"
                  class="home-icon"  
                  @mouseenter="visible = true" 
                  @mouseleave="visible = false"
                  @click="visible=false"      
                />
              </router-link>  
            </el-tooltip>
          </div>
        </el-col>
      </el-row>
      <el-row class="hidden-xs-only" justify="center" align="middle">
        <el-col :span="6"></el-col>
        <el-col :span="6"> 
          <el-icon :size="60" color="#10b1fe" >
            <ArrowDown />
          </el-icon>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    <!-- small screen  -->
      <el-row class="hidden-sm-and-up" 
        justify="center" align="middle"
        style="margin: 3rem 0 3rem 0">
        <!-- flip image -->
        <el-col :span="24" class="flip-box bounce-1">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img
                  :src="require('../assets/eve.png')"
                  class="front-avatar"       
                />
              </div>
              <div class="flip-box-back">
                <img   
                  :src="require('../assets/eveHover.jpg')"
                  alt="avatar"
                  class="back-avatar "
                />
              </div>
            </div>
        </el-col>
      </el-row>
    <!-- intro section -->
      <el-row class="intro-row" justify="center" align="middle">
        <el-col :span="24" style="margin-top: 2rem">
          <h1 class="intro-header">
            <span class="hand-wave">
              <img   
                :src="require('../assets/hand128.png')"
                alt="hand"
                style="height: 4rem"
              />
            </span>
            <span style="color: #ff78f8">{{ o[lang].intro1 }}</span>
            <span style="color: #10b1fe">{{ o[lang].intro2 }}</span>
            <span class="q-letter "> <span> Q </span> </span>
            <span class="my-name" style="color: #10b1fe; margin: 0 2rem; font-size: 1.5rem">
              {{ o[lang].or }}
            </span>
            <span class="my-name letter-flip">      
              <span style="--i:1">Đ</span>
              <span style="--i:2">O</span>
              <span style="--i:3">À</span>
              <span style="--i:4 ; margin-right: 1rem">N</span>
              <span style="--i:5">H</span>
              <span style="--i:6">O</span>
              <span style="--i:7">A</span>
              <span style="--i:8">.</span>
            </span>
          </h1>
        </el-col>
        <el-col :span="24">
          <p style="margin-top: 2rem">
            <span class="intro-phrase phrase-1">
              {{ o[lang].tag1 }}
            </span>
            <span class="intro-phrase phrase-2">
              {{ o[lang].tag2 }}
            </span>
            <span class="intro-phrase phrase-3">
              {{ o[lang].tag3 }}
            </span>
            <span class="intro-phrase phrase-4">
              {{ o[lang].tag4 }}
            </span>
          </p>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="sm-scr-footer hidden-sm-and-up" >
      <el-row class="menuIcon hidden-sm-and-up" >
        <el-col :span="6">
          <a href="https://docs.google.com/document/d/1lJApT6FbovV6kRwCgvCFuu5S1U4yG3DkgPhCmX63Gq4/edit?usp=sharing">
            <img
              style="text-align: right"
              :src="require('../assets/clip128.png')"
              class="home-icon"          
            />
          </a>
        </el-col>
        <el-col :span="6">
          <span>
            <img
              :src="require('../assets/down128.png')" 
              class="home-icon"         
            />
          </span>
        </el-col>
        <el-col :span="6" >
          <ContactBtn :lang="lang" :drawerSize="100" />
        </el-col>
        <el-col :span="6" >
          <router-link 
            :to="{ name: 'WorkPage', 
            params: {lang} }" >  
              <img
                :src="require('../assets/folder128.png')"
                class="home-icon"        
              />
          </router-link>    
        </el-col>
    </el-row>
    </el-footer>
    <el-footer class="lg-scr-footer hidden-xs-only">
      <small>Copyright © 2022 Q_coder. All Rights Reserved.</small>
    </el-footer>
  </el-container>
</template>
    
<script>
import { ref } from 'vue'
import ContactBtn from '../components/ContactBtn.vue'
import { ArrowUp as ArrowUp, ArrowDown as ArrowDown, 
ArrowLeft as ArrowLeft, ArrowRight as ArrowRight, 
SemiSelect as Dash} from "@element-plus/icons-vue"

export default {
  name: 'HomePage',
  components:{ ContactBtn, ArrowUp, ArrowDown,
  ArrowLeft, ArrowRight, Dash},
  setup(){
    const lang =ref('en')
    const visible = ref(false) ;
    const homeContent = [
      {
        en:{ 
            intro1:' Hello! ',
            intro2: 'I\'m ',
            tag1:'A highly Q-rious ',
            tag2: 'Front-end Developer ',
            tag3:'loves seeking new challenge. ',
            tag4:'Shall you give me a challenge?',
            tooltip1: 'View my CV',
            tooltip2: 'Download my CV',
            tooltip3: 'View my work',
            tooltip4:'Reach me here!',
            or: 'or',
            },
        zh:{ 
            intro1: '您好!',
            intro2: '我叫 ',
            tag1:'一名爱追根究底(Q-rious)',
            tag2:'前段工程师',
            tag3:'在寻找挑战。',
            tag4:'您在有挑战？我愿意接受。',
            tooltip1: '个人简历',
            tooltip2: '下载简历 (.pdf)',
            tooltip3: '个人项目',
            tooltip4:'联系本人',
            or: '或',
            },
        vn:{ 
            intro1: 'Xin chào, ',
            intro2:'mình tên',
            tag1: 'Mình là ',
            tag2: 'một front-end developer ham học hỏi (Q-rious) ',
            tag3: 'đang đi tìm thách thức. ',
            tag4: 'Bạn có sẵn thách thức? Hãy gọi Q!',
            tooltip1: 'Hồ sơ của Q',
            tooltip2: 'Tải tệp hồ sơ (.pdf)',
            tooltip3: 'Xem dự án của Q',
            tooltip4:'Tìm Q tại đây!',
            or: 'hoặc'
            },
      }
    ]

    const switchToEn = () => {
      lang.value = 'en'
    }

    const switchToZh = () => {
      lang.value = 'zh'
    }

    const switchToVn = () => {
      lang.value = 'vn'
    }

    return {
      lang,
      switchToEn,
      switchToZh,
      switchToVn,
      homeContent,
      visible
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Coiny&family=Potta+One&display=swap');

@media only screen and (max-width: 1200px) { 
  .hidden-xs-only { 
  display: none !important;
  }
  .container {
  display: flex;
  height: 100vh;
  width: 100%;
  padding-top: 10px;
  font-size: 0.9rem !important;
  line-height: 1.5rem;
  }

  .menuIcon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 7vh !important;
  width: 100%;
  padding: auto;
  }

  .home-icon {
    filter: drop-shadow( 16px 16px 10px rgb(40, 44, 52, 0.3) );
    height: 2.3rem;
    padding: 0.5rem ;
    border-right: 2px dotted 	rgb(40, 44, 52, 0.2) ;
  }


  .home-icon:hover {
    transform: scale(1.1, 1.1);
  }

      /* hand waving */
  .hand-wave {
    animation-name: wave-animation; 
    animation-duration: 2.5s;       
    animation-iteration-count: 4;  
    transform-origin: 180% 180%;       
    display: inline-block;
    padding: 0;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  @keyframes wave-animation {
      0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) } 
    20% { transform: rotate(-4.0deg) }
    30% { transform: rotate(20.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) } 
    100% { transform: rotate( 0.0deg) }
  }
  .intro-row{
    line-height: 1.7rem;
  }
  .intro-header .q-letter{
    display: inline-block;
    font-size: 5rem;
    padding-left: 4px; 
    color: rgb(0, 255, 255);
    text-shadow: 5px 5px 0px rgb(16, 177, 254, 0.5),
                  10px 10px 0px rgba(175, 126, 207, 0.5),
                    15px 15px 0px rgb(16, 177, 254, 0.2);
    line-height: 1rem;
  }

  .intro-header  .my-name {
    display: none;
  }


  .intro-header:hover .my-name{
    display: inline-block;
    font-size: 1.2rem !important;
    color: rgb(0, 255, 255);
    width: fit-content;
    margin-top: 2rem;
  }

  /*-------------- flipping letter Q -------------*/
  .letter-flip {
    position: relative;
  }

  .letter-flip span {
    font-size: 2rem;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    animation: flip 2s infinite;
    animation-delay: calc(.2s * var(--i));
  }

  @keyframes flip {
    0%,80% {
      transform: rotateY(360deg) 
    }
  }

}
 /* -------------- large screen ------------------*/
@media only screen and (min-width: 1200px) { 
  .hidden-sm-and-up { 
    display: none !important; 
  }

    .container {
    display: flex;
    height: 100vh;
    width: 100%;
    padding-top: 10px;
  
  }

    .menuIcon {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 7vh !important;
    width: 100%;
    padding: auto;
  }

  .home-icon {
    filter: drop-shadow(16px 16px 10px black);
    height: 3.1rem;
  }

  .home-icon:hover {
    transform: scale(0.9, 0.9);
  }

    /* hand waving */
  .hand-wave {
    animation-name: wave-animation; 
    animation-duration: 2.5s;       
    animation-iteration-count: 4;  
    transform-origin: 180% 180%;       
    display: inline-block;
    padding: 0;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  @keyframes wave-animation {
      0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(14.0deg) } 
    20% { transform: rotate(-4.0deg) }
    30% { transform: rotate(20.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate( 0.0deg) } 
    100% { transform: rotate( 0.0deg) }
  }
  .intro-row{
    margin-top: -4rem !important;
  }
  .intro-header .q-letter{
    display: inline-block;
    font-size: 100px;
    padding-left: 4px; 
    color: rgb(0, 255, 255);
    text-shadow: 5px 5px 0px rgb(16, 177, 254, 0.5),
                  10px 10px 0px rgba(175, 126, 207, 0.5),
                    15px 15px 0px rgb(16, 177, 254, 0.2);
    margin-bottom: 0 !important;
  }

  .intro-header  .my-name {
    display: none;
  }


  .intro-header:hover .my-name{
    display: inline-block;
    font-size: 40px;
    color: rgb(0, 255, 255);
    width: fit-content;
  }

  /*-------------- flipping letter Q -------------*/
  
  .letter-flip {
    position: relative;
  }

  .letter-flip span {
    font-size: 3rem;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    animation: flip 2s infinite;
    animation-delay: calc(.2s * var(--i));
  }

  @keyframes flip {
    0%,80% {
      transform: rotateY(360deg) 
    }
  }

}

.lang-bar {
  display: flex;
  align-items: center;
  text-align: center;
  color: #3691ff;
  justify-content: center;
  margin-left: 5px;
  font-family: 'Yomogi', cursive !important;
  font: 1rem 'Yomogi' !important;
}

.lang-btn {
  color: #3691ff !important;
  background-color: transparent !important;
  border: 3px outset #3691ff !important;
  font-size: 24px;
  font-family: 'Anonymous Pro', monospace; 
  padding: 6px;
}


.active {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
  background-color: rgb(255, 120, 248, 0.3)!important;
  font-weight: bold !important;
  color: 	#10b1fe!important;
  border: 3px inset #ff78f8 !important;
}


.flex-content {
  display: flex;
  align-items: center;
  min-height: 25rem;
  font-size: 16px;
}

/* avatar bounce*/
.flip-box {
  perspective: 1000px;
  background-color: transparent;
  width: 40rem;
  height: 20rem;
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

/* flip image */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  background-color: transparent;
}

.flip-box-back { 
  transform: rotateY(180deg);
}

.back-avatar {
  height: 22rem; 
  border-radius: 50%;
  filter: drop-shadow(16px 16px 20px black);
  padding-bottom: 20px;
}

.front-avatar { 
  height:22rem; 
}



/* phrase */
.intro-phrase {
  animation: color-phrase 7s linear infinite;
  font-size: 1.2rem;
  font-size: bold !important;
  line-height: 0.5rem;
}

.phrase-1 {
  --color-1: #10b1fe;
  --color-2: #636d83;
  --color-3: #636d83;
}

.phrase-2 {
  --color-1: #ff78f8;
  --color-2: #ff78f8;
  --color-3: #ff78f8;
}

.phrase-3 {
  --color-1: #10b1fe;
  --color-2: #636d83;
  --color-3: #10b1fe;
}

.phrase-4 {
  --color-1: #ff78f8;
  --color-2: #636d83;
  --color-3: #636d83;
}

@keyframes color-phrase {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Arrow  */
.arrow {
  /* animation: bounce 2s; */
  animation-direction: normal;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%,
  25%,
  50%,
  75%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-12px);
  }
}

/* arrow bounce R */
@-webkit-keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  60% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
}
@-moz-keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-30px);
  }
  60% {
    transform: translateX(-15px);
  }
}

@keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -ms-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  60% {
    -ms-transform: translateX(-15px);
    transform: translateX(-15px);
  }
}

/* assign bounce */
.fa-arrow-right {
  -webkit-animation: bounceRight 2s infinite;
  animation: bounceRight 2s infinite;
  float:right;
}

.tooltip-box {
 font-family: 'Yomogi', cursive;
 font-size: 1.1rem !important;
 color: #f9c859 !important;
}

.tooltip-arrow {
  height: 1.1rem; 
  margin: 0 0.5rem 0 0.5rem;
}

.sm-scr-footer {
  display: flex;
  align-items: center;
  background-color: rgb(171, 178, 191, 0.3);
  height: 4rem;
}

.lg-scr-footer {
  color:#282c34;
}

.lg-scr-footer:hover {
  display: inline-block;
  text-align: center;
  align-items: flex-end;
  justify-content: center;
  margin: 2px 0 2px 0;
  color: #636d83;
}

</style>
