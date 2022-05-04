<template>
  <el-tooltip
    popper-class="tooltip-box"
    placement="left">
    <template #content>
      <el-row justify="center" align="middle">  
        <span v-if="lang==='en'">Reach me here!</span>              
        <span v-if="lang==='zh'">联系本人</span>              
        <span v-if="lang==='vn'">Tìm Q tại đây!</span>              
        <img   
          :src="require('../assets/arrowRight64.png')"
          alt="arrow"
          class="tooltip-arrow"
        />
      </el-row> 
    </template>
    <el-button 
      type="text"
      @click="drawer = true">
      <span  v-if="drawerSize=='35'">
        <img    
          style="height: 4rem;"
          :src="require('../assets/phone128.png')"  
          class="home-icon"       
        />
      </span>
      <span  v-if="drawerSize=='100'">
        <img
          style="height: 2.5rem; margin-bottom: 0.1rem"
          :src="require('../assets/phone128.png')"  
          class="home-icon"       
        />
      </span>
    </el-button>
  </el-tooltip>
  <el-drawer
    v-model="drawer"
    direction="ltr"
    :show-close="false"
    :size="drawerSize+'%'"
  >
    <template #title>
      <span class="drawer-header">
        <el-row >
          <el-col :span="10" justify="center" align="middle">
            <div class="drawer-avatar-border">
              <img
                class="drawer-avatar"
                :src="require('../assets/squareAva.png')" />
            </div>
          </el-col>
          <el-col :span="14" justify="center" align="start" style="padding-left: 5px">
            <h1 class="drawer-name"> Đoàn Hoa (樊梨花)</h1>
            <h3 class="drawer-name" v-if="lang==='en'"> aka. Q_coder</h3>
            <h3 class="drawer-name" v-if="lang==='zh'"> 英名: Q_coder</h3>
            <h3 class="drawer-name" v-if="lang==='vn'"> Biệt hiệu: Q_coder</h3>
            <p>Travel. Code. Travel</p>
              <a href="https://github.com/Qrious-Coder" target="_blank" rel="noreferrer noopener">
                <img :src="require('../assets/git32.png')" class="drawer-icon" style="width: 1.6rem"  alt="gitIcon"/>   
              </a>   
              <a href="https://www.messenger.com/t/100001670613328/" target="_blank" rel="noreferrer noopener">
                <img :src="require('../assets/fbme64.png')" class="drawer-icon" style="width: 1.5rem" alt="fbIcon" />
               </a> 
               <a href="https://t.me/Q_Duan" target="_blank" rel="noreferrer noopener">
                <img :src="require('../assets/tele64.png')" class="drawer-icon" style="width: 1.5rem"  alt="teleIcon" />
              </a>
              <a href="https://docs.google.com/document/d/1lJApT6FbovV6kRwCgvCFuu5S1U4yG3DkgPhCmX63Gq4/edit?usp=sharing">
                <img :src="require('../assets/clip32.png')" class="drawer-icon" style="width: 1.5rem" alt="cv"/>
              </a>
            <span class="drawer-icon"
              id="down-icon"
              justify="center" 
              align="center">
              <a href="https://drive.google.com/uc?export=download&id=1I8JIgqtm94eHWuosEwLnwMHjwl_yGdCf" target="_blank">
                <img :src="require('../assets/down32.png')" style="width: 1.5rem" alt="down"/>
              </a>
            </span>
          </el-col>
        </el-row>
      </span>
    </template>
    <span >
      <PortCarousel :lang="lang"/>
     </span>
    <span>
      <ContactForm :lang="lang"/>
    </span>
  </el-drawer>
</template>

<script >
import { ref } from 'vue'
import ContactForm from "../components/ContactForm.vue"
import PortCarousel from "../components/PortCarousel.vue"
import folderIcon from "../assets/folderIcon.png"
import resumeIcon from "../assets/resumeIcon.png"

export default {
  name: 'ContactBtn',
  components:{ ContactForm, PortCarousel }  ,
  props:{lang: String,
        drawerSize: String},
  setup(){
    const drawer = ref(false)
    return {
      drawer,
      folderIcon,
      resumeIcon,
    }
  }
}

</script>

<style>
.el-drawer {
  background-color: #f9f9f9 !important;
  color: #a0a1a7;
  height: 100vh;
  font-weight: bolder;
}
::-webkit-scrollbar {
    display: none;
}
.drawer-avatar-border {
  width: 10rem; 
  height: auto; 
  background: linear-gradient(-80deg, #275fe4, #f9f9f9,#275fe4, #f9f9f9) ;
  background-size: 300% 100%;
  border-radius: 50rem;
  padding: 4px;
  filter: drop-shadow(0px 16px 20px rgb(192,192,192, 1)); 
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.drawer-avatar {
  width: 10rem; 
  height: auto; 
  border-radius: 50rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.drawer-header{
  height: 15vh;
  width: 100%;
}

.drawer-icon {
  mix-blend-mode: multiply;
  border-right: 1px dashed #275fe4;
  padding: 0 10px 0 10px;
}
.drawer-icon:hover {
  filter: drop-shadow(10px 6px 20px black) invert(100%);
  transform: scale(1.2, 1.2);
}
.drawer-name{
  font-family: 'Yomogi', cursive;
  line-height: 1rem;
  color: #275fe4;
}
#down-icon{
  border-right: 0;
}


.el-icon {
  background-color: transparent;
}
.el-col {
   margin: 0 !important;
}

</style>