<template>
  <el-row :gutter="20" style="margin: 20px 10px 0 10px">
    <el-col class="drawer-divider" :span="24" >
      <router-link 
        :to="{ name: 'WorkPage', 
        params: {lang} }" >  
          <el-tooltip
          popper-class="tooltip-box"
          placement="right"
          effect="customized"
          v-model:visible="visible"
          >
            <template #content>
              <el-row justify="center" align="middle">  
                <span v-if="lang === 'en'"> View my work </span>              
                <span v-if="lang === 'zh'"> 展示所有项目 </span>              
                <span v-if="lang === 'vn'"> Xem tất cả dự án </span>              
                <img   
                  :src="require('../assets/link64.png')"
                  alt="link"
                  class="tooltip-link-icon"
                  style="width: 1rem; margin-left: 0.5rem"
                />
              </el-row>    
              </template>
            <img :src="require('../assets/folder64.png')" 
              @mouseenter="visible = true" 
              @mouseleave="visible = false"
              @click="visible=false"
              width="48"
              alt="gitIcon"
              class="drawer-divider-icon bounce-1"/>
            </el-tooltip>
      </router-link> 
    </el-col>
    <el-col :span="24" style="padding: 40px 0 20px 0">
      <el-carousel :interval="4000" 
      type="card" height="170px">
        <el-carousel-item  v-for="(o,i) in portData" :key="i">
            <div class="carousel-content">
            <p class="carousel-img-caption">{{ o.project[lang] }}</p>
            <a :href="o.displaySrc" target="_blank">
              <el-image
                :src="o.imgSrc"
                class="carousel-img"
                :fit="fit"
              />
            </a>
            </div>
        </el-carousel-item>    
      </el-carousel>
    </el-col>  
  </el-row>
</template>
<script>
  import { ref } from 'vue'
  
  import focusCover from '../assets/focusCover.png'
  import focus from '../assets/focus.gif'
  import drumCover from '../assets/drumCover.png'
  import drum from '../assets/Drum.gif'
  import calCover  from '../assets/calCover.png'
  import cal from '../assets/cal.gif'
  import ranCover from '../assets/ranCover.png'
  import ranQuote from '../assets/ranQuote.gif'
  import todoCover from '../assets/todoCover.png'
  import todoList from '../assets/todoList.gif'
  import eyeIcon from '../assets/eyeIcon.png'
  import codeIcon from '../assets/codeIcon.png'
  import reactIcon from '../assets/reactIcon.png'
  import vueIcon from '../assets/vueIcon.png'
  import htmlIcon from '../assets/htmlIcon.png'
  import markCover from '../assets/markCover.png'
  import markdown from '../assets/markdown.gif'
  import techCover from '../assets/techCover.png'
  import techPage from '../assets/techPage.gif'
  import jackCover from '../assets/jackCover.png'
  import jackMa from '../assets/jackMa.gif'
  import eve from '../assets/eve.png'
  
export default {
  name: 'PortCarousel',
  props:{ lang: String },
  components: {  },
  setup(){
    const visible = ref(false) ;
    const portData = [
        { 
          'id': 1,
          'hover': ref(false),
          'logo': reactIcon,
          'type': 'react',
          'project': {
            en: 'StayFocused',
            zh: 'StayFocused',
            vn: 'StayFocused',
          },
          'imgSrc': focusCover,
          'gifSrc': focus,
          'displaySrc': 'https://qrious-coder.github.io/react-stayFocused',
          'codeSrc':"https://github.com/Qrious-Coder/react-stayFocused.git",
        },
        { 
          'id': 2,
          'hover': ref(false),
          'logo': reactIcon,
          'type': 'react',
          'project': {
            en: 'Drumming for Dummies',
            zh: '鼓手入门',
            vn: 'Đánh trống Online'
          } ,
          'imgSrc': drumCover,
          'gifSrc': drum,
          'displaySrc':"https://qrious-coder.github.io/react-drum",
          'codeSrc':"https://github.com/Qrious-Coder/react-drum.git",
        },
        { 
          'id': 3,
          'hover': ref(false),
          'logo': reactIcon,
          'type': 'react',
          'project': {
            en: 'Javascript Calculator',
            zh: 'Javascript计算器',
            vn: 'Máy tính Javascript'
          },
          'imgSrc': calCover,
          'gifSrc': cal,
          'displaySrc':"https://qrious-coder.github.io/react-calculator",
          'codeSrc':"https://github.com/Qrious-Coder/react-calculator.git",
        },
        { 
          'id': 4,
          'hover': ref(false),
          'type': 'react',
          'logo': reactIcon,
          'project': {
            en: 'Random Quotes',
            zh: '随机引语生成器',
            vn: 'Tìm danh ngôn hay ngẫu nhiên'
          },
          'imgSrc': ranCover,
          'gifSrc': ranQuote,
          'displaySrc':"https://qrious-coder.github.io/react-randomquote",
          'codeSrc':"https://github.com/Qrious-Coder/react-randomquote.git",
        },
        { 
          'id': 5,
          'hover': ref(false),
          'type': 'vue',
          'logo': vueIcon,
          'project': {
            en: 'To Do or not To Do',
            zh: 'To Do or not To Do',
            vn: 'To Do or not To Do', 
          },
          'imgSrc': todoCover,
          'gifSrc': todoList,
          'displaySrc':"https://qrious-coder.github.io/vue-todo",
          'codeSrc':"https://github.com/Qrious-Coder/vue-todo/tree/master",
        },
        { 
          'id': 6,
          'hover': ref(false),
          'type': 'react',
          'logo': reactIcon,
          'project': {
            en: 'Markdown Previewer',
            zh: 'Markdown预览器',
            vn: 'Markdown -> HTML',
          },
          'imgSrc': markCover,
          'gifSrc': markdown,
          'displaySrc':"https://qrious-coder.github.io/react-marked",
          'codeSrc':"https://github.com/Qrious-Coder/react-marked.git",
        },
        { 
          'id': 7,
          'hover': ref(false),
          'type': 'others',
          'logo': htmlIcon,
          'project': {
            en: 'JavaScript Documentation',
            zh: 'JavaScript语言参考手册',
            vn: 'Tài liệu Javascript',
          },
          'imgSrc': techCover,
          'gifSrc': techPage,
          'displaySrc':"https://qrious-coder.github.io/technical-page",
          'codeSrc':"https://github.com/Qrious-Coder/technical-page.git",
        },
        { 
          'id': 8,
          'hover': ref(false),
          'type': 'others',
          'logo': htmlIcon,
          'project': {
            en: 'A brief of JackMa' ,
            zh: '向马云致敬页',
            vn: '7 điều tạo nên Jackma',
          },
          'date': {
            en: 'Updated on 2021 October',
            zh: '更新于2021年10月',
            vn: '7 điều tạo nên Jackma'
          },
          'imgSrc': jackCover,
          'gifSrc': jackMa,
          'displaySrc':"https://qrious-coder.github.io/tribute-to-Ma",
          'codeSrc':"https://github.com/Qrious-Coder/tribute-to-Ma.git",
        },
        { 
          'id': 9,
          'hover': ref(false),
          'type': 'vue',
          'logo': vueIcon,
          'project': {
            en: 'Q\'s Porfolio',
            zh: '个人作品集网页',
            vn: 'Trang dự án cá nhân'
          } ,
          'imgSrc': eve,
          'gifSrc': jackMa,
          'displaySrc':"https://qrious-coder.github.io/vue-my-porfolio",
          'codeSrc':"https://github.com/Qrious-Coder/vue-my-porfolio.git",
        },
      ]
    
    return{
      portData,
      eyeIcon, 
      codeIcon,
      htmlIcon,
      visible
    }
  }
  
}
</script>
<style>
  /* ---------- carousel ----------- */
  .el-carousel__item {
  color: #383a42;
  font-size: 14px;
  opacity: 0.75;
  line-height: 170px;
  text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    border-radius: 5%;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    border-radius: 5%;
  }

  .carousel-content {
    position: relative;

  }
  .carousel-img{
    width: 45%;
    height: auto;
    margin-top: 5px;
  }

  .carousel-img-caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1px;
  }
  /* ----------drawer ----------- */
  .drawer-divider{
    position: relative;
    width: 100%;
    height: 1px;
    border-top: #c5a332 1px dashed;
    text-align: right;
    font-size: 1rem;
    color:#ce9887;
  }

  .drawer-divider-icon{
    position: absolute;
    left: 50%;
    background: #f9f9f9;
    padding: 15px;
    transform: translateX(-50%) translateY(-50%);
  }

  .drawer-divider-icon:hover {
      border-radius: 20%;
      border: dashed 1px rgb(54, 145, 255);
      padding: 7px;
  }

  /* ----------tooltip ----------- */
  .el-popper.is-customized {
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(54, 145, 255), rgb(40, 44, 52));
  font-size: 1rem !important;
  }

  .el-popper.is-customized .el-popper__arrow::before {
    background: rgb(54, 145, 255);
    right: 0;
  }

  .tooltip-link-icon {
    width: 0.8rem; 
    margin-left: 0.2rem;
  }
</style>