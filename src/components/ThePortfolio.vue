<template>
<el-main>
 <el-tabs 
  type="card" 
  justify="space-between"
  align="center"
  >
    <!-- Main Tab -->
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon :size="25" 
          style="background-color: #282c34; margin-right: 5px">
             <MenuIcon />
          </el-icon>
          <span v-if="lang==='en'">All</span>
          <span v-if="lang==='zh'">全部</span>
          <span v-if="lang==='vn'">Tất cả</span>
        </span>
      </template>
      <el-row>
        <el-col
          v-for="(o,i) in portData"
          :key="i"
          :sm="24"
          :lg="8"
          :offset="index > 0 ? 3 : 0"
          class="mainCard-ctn"
        >
        <!-- 1st tab - lg screen -->
          <el-card
          class="card hidden-xs-only"
          :body-style="{ padding: '0px' }"    
          >
            <template #header>
              <span class="card-header">
                <span>{{ o.project[lang] }}</span>
                <span>
                  <img :src="o.logo" width="50" height="50"/>
                </span>
              </span>
            </template>
            <div>
            <el-button-group class="card-float-btn" type="text">
              <el-button class="card-float-btn-left" type="text">
                  <a :href="o.displaySrc" target="_blank">
                    <img :src="eyeIcon" alt="eyeIcon" width="50" height="50" />
                  </a>
              </el-button>
              <el-button class="card-float-btn-right" type="text" >
                <a :href="o.codeSrc" target="_blank">
                  <img :src="codeIcon" alt="codeIcon" width="50" height="50" />
                </a>
              </el-button>
            </el-button-group>
            <img
              :src="o.hover.value === false ? o.imgSrc : o.gifSrc"
                @mouseover="o.hover.value = true"
                @mouseleave="o.hover.value = false"
              :class="!o.hover.value ? 'card-img' : 'card-gif' "
            />
            </div>
            <div class="card-project-info">
              <span >{{ o.brief[lang] }}</span>
            </div>
          </el-card>
        <!-- 1st tab - sml screen -->
          <el-card
          class="small-scr-card hidden-sm-and-up"
          :body-style="{ padding: '0px' }"    
          >
            <template #header>
              <span class="card-header">
                <span>{{ o.project[lang] }}</span>
                <span>
                  <img :src="o.logo" width="50" height="50"/>
                </span>
              </span>
            </template>
            <div>
            <el-button-group class="card-float-btn" type="text">
              <el-button class="card-float-btn-left" type="text" >
                <img :src="eyeIcon" alt="eyeIcon" width="50" height="50" />
              </el-button>
              <el-button class="card-float-btn-right" type="text" >
                <img :src="codeIcon" alt="codeIcon" width="50" height="50" />
              </el-button>
            </el-button-group>
            <img
              :src="o.hover.value === false ? o.imgSrc : o.gifSrc"
                @mouseover="o.hover.value = true"
                @mouseleave="o.hover.value = false"
              :class="!o.hover.value ? 'card-img' : 'card-gif' "
            />
            </div>
            <div class="card-project-info">
              <span >{{ o.brief[lang] }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-tab-pane>
    <!-- 2nd Tab -->
    <el-tab-pane class="hidden-xs-only">
      <template #label>
          <span class="custom-tabs-label">
            <img class="custom-tabs-icon" 
            :src="reactSvg" alt="reactSvg" 
            width="25" height="25" />
            React
          <span></span>
        </span>
      </template>
      <template
        v-for="(o,i) in portData"
        :key="i"
      >
        <el-row
          :gutter="20"
          justify="center"
          align="center"
          v-if="o.type === 'react'"
        >
          <el-col span="24"
            class="tab-col-img-box bounce-2"
            >
              <img
                :src="o.hover.value === false ? o.imgSrc : o.gifSrc"
                :fit="cover"
                @mouseover="o.hover.value = true"
                @mouseleave="o.hover.value = false"
                :class="!o.hover.value ? 'tab-card-img' : 'tab-card-gif' "
              />
          </el-col>
          <el-col span="24" style="width: 90vw" 
          justify="center">
            <h3 style="color: #9f7efe">{{ o.project[lang] }}</h3>
            <p class="sub-card-brief">{{ o.brief[lang] }}</p>
            <el-button type="text" class="tab-btn">
              <span v-if="lang==='en'">View my project</span>
              <span v-if="lang==='zh'">github项目预览</span>
              <span v-if="lang==='vn'">Xem dự án trên Github </span>
                <img :src="require('../assets/git64.png')" alt="github" 
                  width="50" height="50"
                  style="margin-left: 3px" />
            </el-button>
            <el-divider direction="vertical" />
              <el-button type="text" class="tab-btn">
                <span v-if="lang==='en'">Check my code on Github</span>
                <span v-if="lang==='zh'">github项目源码</span>
                <span v-if="lang==='vn'">Xem mã nguồn dự án</span>
              <img :src="require('../assets/code64.png')" alt="code" 
                  width="50" height="50"
                  style="margin-left: 3px" />
            </el-button>
            <p class="tags-ctn">
              <span v-if="lang==='en'">Applied skills:</span>
              <span v-if="lang==='zh'">技术要点::</span>
              <span v-if="lang==='vn'">Ứng dụng chính:</span>
            <el-tag 
            class="tab-tag"
            v-for="(tag, i) in o.tags" :key="i">
              {{tag}}
            </el-tag>
            </p>
          </el-col >
            <el-col  class="divider" :span="24">
              <span class="divider-text">{{ o.date[lang] }}</span>
            </el-col>
        </el-row>
      </template>
    </el-tab-pane>
    <!-- 3rd Tab -->
    <el-tab-pane class="hidden-xs-only"> 
      <template #label>
          <span class="custom-tabs-label">
            <img class="custom-tabs-icon" :src="vueSvg" alt="vueSvg" 
            width="25" height="25" />
          <span>Vue</span>
        </span>
      </template>
      <template
        v-for="(o,i) in portData"
        :key="i"
      >
        <el-row
          :gutter="10"
          justify="center"
          align="center"
          v-if="o.type === 'vue'"
        >
          <el-col span="24"
            v-if="o.type === 'vue'"
            class="tab-col-img-box bounce-2"
            >
              <img
                :src="o.hover.value === false ? o.imgSrc : o.gifSrc"
                :fit="fit"
                @mouseover="o.hover.value = true"
                @mouseleave="o.hover.value = false"
                :class="!o.hover.value ? 'tab-card-img' : 'tab-card-gif' "   
              />
          </el-col>
          <el-col span="24"
          v-if="o.type === 'vue'" style="width: 90vw" 
          justify="center">
            <h3 style="color: #9f7efe">{{ o.project[lang] }}</h3>
            <p class="sub-card-brief">{{ o.brief[lang] }}</p>
            <el-button type="text" class="tab-btn">
              <span v-if="lang==='en'">View my project</span>
              <span v-if="lang==='zh'">github项目预览</span>
              <span v-if="lang==='vn'">Xem dự án trên Github </span>
                <img :src="require('../assets/git64.png')" alt="github" 
                  width="50" height="50"
                  style="margin-left: 3px" />
            </el-button>
            <el-divider direction="vertical" />
              <el-button type="text" class="tab-btn">
                <span v-if="lang==='en'">Check my code on Github</span>
                <span v-if="lang==='zh'">github项目源码</span>
                <span v-if="lang==='vn'">Xem mã nguồn dự án</span>
              <img :src="require('../assets/code64.png')" alt="code" 
                  width="50" height="50"
                  style="margin-left: 3px" />
            </el-button>
            <p class="tags-ctn">
              <span v-if="lang==='en'">Applied skills:</span>
              <span v-if="lang==='zh'">技术要点::</span>
              <span v-if="lang==='vn'">Ứng dụng chính:</span>
            <el-tag 
            class="tab-tag"
            v-for="(tag, i) in o.tags" :key="i">
              {{tag}}
            </el-tag>
            </p>
          </el-col >
            <el-col  class="divider" :span="24"  v-if="o.type === 'vue'">
              <span class="divider-text">{{ o.date[lang] }}</span>
            </el-col>
        </el-row>
      </template>
    </el-tab-pane>
    <!-- 4rd Tab -->
    <el-tab-pane class="hidden-xs-only">
      <template #label>
          <span class="custom-tabs-label">
            <img class="custom-tabs-icon" :src="htmlSvg" alt="htmlSvg" 
            width="25" height="25" />
            <span v-if="lang==='en'">Other</span>
            <span v-if="lang==='zh'">其他</span>
            <span v-if="lang==='vn'">Khác</span>
        </span>
      </template>
      <template
        v-for="(o,i) in portData"
        :key="i">
       <el-row
          :gutter="10"
          justify="center"
          align="center"
          v-if="o.type === 'others'">
         <el-col span="24"
          class="tab-col-img-box bounce-2">
            <img
              :src="o.hover.value === false ? o.imgSrc : o.gifSrc"
              :fit="fit"
              @mouseover="o.hover.value = true"
              @mouseleave="o.hover.value = false"
              :class="!o.hover.value ? 'tab-card-img' : 'tab-card-gif' "   
            />
         </el-col>
         <el-col span="24"  
         style="width: 90vw" 
         justify="center">
           <h3 style="color: #9f7efe">{{ o.project[lang] }}</h3>
           <p class="sub-card-brief">{{ o.brief[lang] }}</p>
           <el-button type="text" class="tab-btn">
             <span v-if="lang==='en'">View my project</span>
             <span v-if="lang==='zh'">github项目预览</span>
             <span v-if="lang==='vn'">Xem dự án trên Github </span>
              <img :src="require('../assets/git64.png')" alt="github" 
                width="50" height="50"
                style="margin-left: 3px" />
           </el-button>
           <el-divider direction="vertical" />
            <el-button type="text" class="tab-btn">
             <span v-if="lang==='en'">Check my code on Github</span>
             <span v-if="lang==='zh'">github项目源码</span>
             <span v-if="lang==='vn'">Xem mã nguồn dự án</span>
             <img :src="require('../assets/code64.png')" alt="code" 
                width="50" height="50"
                style="margin-left: 3px" />
           </el-button>
            <p class="tags-ctn" v-if="lang==='en'">
              <span v-if="lang==='en'">Applied skills:</span>
              <span v-if="lang==='zh'">技术要点::</span>
              <span v-if="lang==='vn'">Ứng dụng chính:</span>
           <el-tag 
           class="tab-tag"
           v-for="(tag, i) in o.tags" :key="i">
             {{tag}}
           </el-tag>
           </p>
         </el-col >
          <el-col  class="divider" :span="24" >
            <span class="divider-text">{{ o.date[lang] }}</span>
          </el-col>
       </el-row>
      </template>
    </el-tab-pane> 
  </el-tabs>     
</el-main>
</template>

<script>
  import { ref } from "vue"
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
  import markCover from '../assets/markCover.png'
  import markdown from '../assets/markdown.gif'
  import techCover from '../assets/techCover.png'
  import techPage from '../assets/techPage.gif'
  import jackCover from '../assets/jackCover.png'
  import jackMa from '../assets/jackMa.gif'
  import eve from '../assets/eve.png'
  import perPort from '../assets/perPort.gif'
  import eyeIcon from '../assets/eyeIcon.png'
  import codeIcon from '../assets/codeIcon.png'
  import reactIcon from '../assets/reactIcon.png'
  import vueIcon from '../assets/vueIcon.png'
  import htmlIcon from '../assets/htmlIcon.png'
  import reactSvg from '../assets/reactSvg.svg'
  import vueSvg from '../assets/vueSvg.svg'
  import htmlSvg from '../assets/htmlSvg.svg'
 
  import { Menu as MenuIcon } from "@element-plus/icons-vue"
  
  export default {
    name: 'ThePortfolio',
    components: { MenuIcon },
    props:{ lang: String},
    setup(){
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
          'date': {
            en: 'Updated on 2022/04',
            zh: '更新于2022年4月',
            vn: 'Hoàn thành vào 04/2022'
          },
          'imgSrc': focusCover,
          'gifSrc': focus,
          'brief': { 
            en: 'A Pomodoro Timer app helps users to set their work intervals with short breaks and relaxing music.',
            zh: '一款时间跟踪应用程序，帮助用户设计专注工作期间及休息间隔，加上听音乐与提醒闹钟的功能',
            vn: 'Ứng dụng quản lý thời gian theo phương pháp pomodoro (25\' làm việc xen kẽ 5\' nghỉ ngơi).'
          
          },
          'intro': {
            en: 'A time-tracking app allows users to set up their focus time with short breaks, easily start and stop the timer, optionally turn on/off relaxing background music.',
            zh: '该项目是一款时间跟踪应用程序，帮助用户设计专注工作期间及休息间隔，加上听音乐与提醒闹钟的功能',
            vn: 'Ứng dụng quản lý thời gian theo phương pháp pomodoro. Người dùng có thể thiết lập khung giờ làm việc xen kẽ khoảng nghỉ ngắn. Ví dụ, sau mỗi 25 phút làm việc, sẽ có chuông báo nghỉ 5 phút, kèm chức năng bật nhạc thư giãn.'
          },
          'displaySrc': 'https://qrious-coder.github.io/react-stayFocused',
          'codeSrc':"https://github.com/Qrious-Coder/react-stayFocused.git",
          'tags':['reactJs', 'tailwindCSS', 'useEffect'],
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
          'date': {
            en: 'Updated on 2022/03',
            zh: '更新于2022年3月',
            vn: 'Hoàn thành vào 03/2022'
          },
          'imgSrc': drumCover,
          'gifSrc': drum,
          'brief': {
            en:'Use the keyboard to learn drumming, play and record your own drum song.',
            zh:'想打打鼓可没有架子鼓？此React架子鼓给你使用键盘来创作鼓乐曲',
            vn: 'Đánh trống bằng bàn phím, thu âm, chỉnh sửa phát soạn nhạc.'
          },
          'intro': {
            en:'Wanna play drum but don\'t have a drum set? The app uses 9 keys of your keyboard to play the most common 9 drum pads. The playing tones could be recorded, deleted or saved to be replayed and editted.',
            zh:'想打打鼓可没有架子鼓？在此应用上用户可使用键盘上的个9建来发9个最经典的架子鼓节奏型',
            vn:'Muốn đánh trống nhưng không có nhạc cụ? Ứng dụng này cho phép bạn gõ phím như đánh trống. Tiếng trống phát ra sẽ lưu lại để nghe lại, sửa hoặc xóa để tạo bài nhạc trống hoàn chỉnh.'
          },
          'displaySrc':"https://qrious-coder.github.io/react-drum",
          'codeSrc':"https://github.com/Qrious-Coder/react-drum.git",
          'tags':['reactJs', 'tailwindCSS'],
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
          'date': { en: 'Updated on 2022/02',
                    zh: '更新于2022年2月',
                    vn: 'Hoàn thành vào 02/2022',
                  },
          'imgSrc': calCover,
          'gifSrc': cal,
          'brief': {
            en: 'Bulid a Javascript calculator with 2 different React hooks: useState() and useReducer()',
            zh: '该项目展示如何使用两个hook(钩子)useState()与useReducer()来开发一款Javascript计算器',
            vn: 'Code một chiếc máy tính bằng 2 react hook:  useState() và useReducer().'
            },
          'intro': {
            en: 'The app is to show how a Javascript calculator could be built by two different React hooks: useState() and useReducer().',
            zh: '该项目展示如何使用两个hook钩子useState()与useReducer()来开发一款Javascript计算器',
            vn: 'So sánh và thực hiện code một chiếc máy tính bằng 2 react hook:  useState() và useReducer().'
          },
          'displaySrc':"https://qrious-coder.github.io/react-calculator",
          'codeSrc':"https://github.com/Qrious-Coder/react-calculator.git",
          'tags':['reactJs', 'tailwindCSS', 'useState', 'useReducer'],
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
          'date': {
            en: 'Updated on 2022/01' ,
            zh: '更新于2022年1月', 
            vn: 'Hoàn thành vào 01/2022'
          },
          'imgSrc': ranCover,
          'gifSrc': ranQuote,
          'brief': {
            en: 'Run a random search for thousand good quotes and pretty images',
            zh: '心情不好？鼠标点击就取到一句励志引语及精彩背景图片。',
            vn: 'Click chuột tìm lời hay ý đẹp ảnh lạ ngẫu nhiên.'
          },
          'intro': {
            en:'Run a random search for thousand good quotes and pretty images.',
            zh:'心情不好？鼠标点击就取到一句励志引语及精彩背景图片。' ,
            vn: 'Click chuột tìm một trong hàng ngàn danh ngôn hay và ảnh đẹp mắt.'
          },
          'displaySrc':"https://qrious-coder.github.io/react-randomquote",
          'codeSrc':"https://github.com/Qrious-Coder/react-randomquote.git",
          'tags':['reactJs', 'tailwindCSS', 'fetch API'],
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
          'date': {
            en: 'Updated on 2022/03',
            zh: '更新于2022年3月',
            vn: 'Hoàn thành vào 03/2022'
          },
          'imgSrc': todoCover,
          'gifSrc': todoList,
          'brief': {
            en: 'Record your to-do list and track progress by a colorful dashboard',
            zh: '一个任务清单应用，提供用户更新每日或每周待办事项列表,通过动态的彩色仪表板跟踪进度',
            vn: 'Tạo và quản lý danh sách công việc hằng ngày, cập nhật tiến độ bằng biểu đồ sinh động',
          },
          'intro': {
            en: 'A to-do app allows users to record their daily tasks, edit/delete, track the progress by dynamic colorful dashboard',
            zh:'该项目是一个任务清单应用，提供用户更新每日或每周待办事项列表,通过动态的彩色仪表板来跟踪任务进度',
            vn: 'Giúp người dùng tạo và quản lý danh sách công việc hằng ngày. Tiến độ được lưu lại ở local storage, theo dõi bằng bảng biểu sinh động.',
          },
          'displaySrc':"https://qrious-coder.github.io/vue-todo",
          'codeSrc':"https://github.com/Qrious-Coder/vue-todo/tree/master",
          'tags':['reactJs', 'Element+', 'useEffect', 'fetchAPI','localStorage'],
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
          'date': {
            en:'Updated on 2021/10',
            zh:'更新于2021年12月',
            vn: 'Hoàn thành vào 12/2021'
          },
          'imgSrc': markCover,
          'gifSrc': markdown,
          'brief': {
            en:'An online converter of Markdown into HTML language and output to your web browser.',
            zh:'使用reactJs构建一款在线MarkDown转换为HTML的工具,分屏预览实时效果',
            vn: 'Clone công cụ chuyển đổi từ Markdown qua HTML.'
          }
,
          'intro': {
            en: 'An online converter of Markdown into HTML language and display output to web view.',
            zh: '使用reactJs构建一款在线MarkDown转换为HTML的工具,分屏预览实时效果',
            vn: 'Clone công cụ chuyển đổi trực tiếp từ ngôn ngữ Markdown qua ngôn ngữ HTML, từ HTML ra giao diện web.',
          },
          'displaySrc':"https://qrious-coder.github.io/react-marked",
          'codeSrc':"https://github.com/Qrious-Coder/react-marked.git",
          'tags':['reactJs', 'tailwindCSS'],
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
          'date': {
            en: 'Updated on 2021/11',
            zh: '更新于2021年11月',
            vn: 'Hoàn thành vào 11/2021',
          },
          'imgSrc': techCover,
          'gifSrc': techPage,
          'brief': {
            en: 'Use pure HTML/Css/Javascript to build a Javascrit Documnentation',
            zh: '使用HTML/CSS/JS来构建一张JavaScript技术文档页面',
            vn: 'Sử dụng HTML/CSS/JS xây dựng tài liệu kiến thức về Javascript.',
          }
          ,
          'intro':{
            en: 'Use pure HTML/Css/Javascript to build a Javascrit Documnentation',
            zh: '使用HTML/CSS/JS来构建一张JavaScript技术文档页面',
            vn: 'Sử dụng HTML/CSS/JS xây dựng trang tài liệu kiến thức về Javascript.',
          },
          'displaySrc':"https://qrious-coder.github.io/technical-page",
          'codeSrc':"https://github.com/Qrious-Coder/technical-page.git",
          'tags':['html/css/js'],
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
            en: 'Updated on 2021/05',
            zh: '更新于2021年10月',
            vn: '7 điều tạo nên Jackma'
          },
          'imgSrc': jackCover,
          'gifSrc': jackMa,
          'brief': {
            en: 'Build a tribute page to the Chinese trillionaire, with pure HTML/Css/Js',
            zh: '使用HTML/CSS/JS来制作一张向马云致敬页',
            vn: 'Sử dụng HTML/SS/JS xây dựng trang giới thiệu về tỷ phú Jackma. Linh động thay đổi màu nền.'
          },
          'intro':{
            en: 'Use pure HTML/Css/Javascript to build a tribute page to Jackma, a Chinese trillionaire.',
            zh: '该项目使用HTML/CSS/JS来制作一张向马云致敬页',
            vn: 'Sử dụng HTML/SS/JS xây dựng trang giới thiệu về tri ân tỷ phú Jackma. Màu sắc và hình ảnh biến đổi linh hoạt thích ứng với khung giao diện tùy chỉnh.'
          },
          'displaySrc':"https://qrious-coder.github.io/tribute-to-Ma",
          'codeSrc':"https://github.com/Qrious-Coder/tribute-to-Ma.git",
          'tags':['html/css/js'],
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
          'date': {
            en: 'Updated on 2022/05',
            zh: '更新于2022年5月',
            vn: 'Hoàn thành vào 05/2022'
          },
          'imgSrc': eve,
          'gifSrc': perPort,
          'brief': {
            en:'Reveal my creative work and myself to the Front-end world',
            zh: '一个简介美观的自我介绍网站，展示到目前前端开发项目整合，展示与下载在线个人简历, 中、英、越三门语言转换' ,
            vn: 'Điểm lại hành trình học + làm Frontend, giới thiệu bản thân qua hồ sơ cá nhân, cập nhật các dự án đã hoàn thành.'
          },
          'intro': {
            en: 'A full display of my creative work. A story of my journey to the Front-end world ',
            zh: '一个简介美观的自我介绍网站，展示到目前前端开发项目整合，展示与下载在线个人简历, 中、英、越三门语言转换',
            vn: 'Dự án điểm lại hành trình học + làm Frontend, giới thiệu bản thân qua hồ sơ cá nhân, cập nhật các dự án đã hoàn thành.'
          },
          'displaySrc':"https://qrious-coder.github.io/vue-my-porfolio",
          'codeSrc':"https://github.com/Qrious-Coder/vue-my-porfolio.git",
          'tags':['vuejs, element+', 'vue router', 'emailJs'],
        },
      ]

      return {
        portData,
        eyeIcon,
        codeIcon,
        reactSvg,
        vueSvg,
        htmlSvg,   
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

  .custom-tabs-label {
    font-size: 1.1rem !important;
  }

  .card-header {
    font-size: 1.3rem;
  }


    .small-scr-card {
    max-width: 95vw !important;
    height: 50vh !important;
  }

  .card-img {
    width: 8rem !important;
    height: 8rem !important;
  }

  .card-gif {
    width: 100% !important;
    height: 150% !important;
    display: inline;
  }


  .card-float-btn{
    top: 35% !important;
    left: 20% !important;
  }

  .card-float-btn-left{
    border-top-left-radius:5em; 
    border-bottom-left-radius:5em;
    width: 4rem !important;
    height: 7rem !important;
  }

  .card-float-btn-left:hover {
    background-color: #ff78f8;
    opacity: .9;
  }

  .card-float-btn-right {
    width: 4rem !important;
    height: 7rem !important;
  }

  .card-float-btn-right:hover {
    background-color: #10b1fe;
    opacity: .9;
  }

  .card-project-info {
    font-size: 1rem !important;
    line-height: 1.2rem !important;
  }

}
/* --------------- small screen ending ------------------ */
  .el-tab-pane {
    font-size: 1.8rem ;
    font-weight: 600;
    color: #abb2bf;
  } 

  .custom-tabs-label {
    font-size: 1.5rem ;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-tabs-label:hover {
    color: #3691ff;
  }

  .custom-tabs-icon{
    margin-right: 3rem ;
    background-color: #282c34
  }

  .mainCard-ctn {
    position: relative;  
  }
    
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3691ff;
  }
/* gradient animated border */
  .card {
    position: relative;
    max-width: 25vw;
    height: 65vh;
    background-color: #1a1110;
    color: #abb2bf;
    margin: 10px 0 20px 0;
    overflow: hidden;
    border: 2px double;
    filter: drop-shadow(16px 16px 15px black);
     --angle: 0deg;
    border-image: linear-gradient(var(--angle), rgba(54, 145, 255, 1),  transparent) 1;
    animation: 5s rotate linear infinite;
  }
  .card:hover {
    filter: drop-shadow(5px 5px 15px rgba(54, 145, 255, 1));
    top: 5px;
  }
  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  
  .small-scr-card {
    max-width: 70vw;
    height: 60vh;
    background-color: #1a1110;
    color: #abb2bf;
    margin: 10px 0 10px 0;
  }

  .card-img {
    margin: 50px !important;
    width: 250px;
    height: 250px;
    object-fit: cover;
  }

  .card-gif {
    width: 100%;
    height: 350px;
    display: inline;
    object-fit: cover;
     
  }


  .card-float-btn{
    top: 40%;
    left: 38%;
    position: absolute;
    z-index: 1000;  
    border: 2px #abb2bf dashed;
    border-radius:5em; 
    padding: 2px;
  }

  .card-float-btn-left{
    background-color: white;
    opacity: .4;
    border-top-left-radius:5em; 
    border-bottom-left-radius:5em;
    width: 70px;
    height: 140px;
  }

  .card-float-btn-left:hover {
    background-color: #ff78f8;
    opacity: .9;
  }

  .card-float-btn-right {
    background-color: #abb2bf;
    opacity: .3;
    border-top-right-radius:5em; 
    border-bottom-right-radius:5em;
    width: 70px;
    height: 140px;
  }

  .card-float-btn-right:hover {
    background-color: #10b1fe;
    opacity: .9;
  }

  .card-project-info {
    font-size: 1.1rem;
    line-height: 1.7rem;
    position: absolute;  
    bottom: 0;
    left: 0;
    margin: 8px;
    padding: 20px;
  }

  .tab-col-img-box {
    margin-top: 20px !important;
    box-shadow: 0 5px 20px rgba(54,145,255,0.9);
    border-radius: 50%;
    background-color: rgba(54,145,255,0.2);
    filter: drop-shadow(16px 16px 10px black);
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  .bounce-2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }
  @keyframes bounce-2 {
      0%   { transform: translateY(0); }
      50%  { transform: translateY(-10px); }
      100% { transform: translateY(0); }
  }

  .tab-col-img-box:hover {
    padding: 20px 10px 20px 10px;
    width: 30%;
    height: auto;
    box-shadow: 0 5px 20px rgba(54,145,255,0.9);
    border-radius: 10%;
    background-color: black;
    animation-duration: 1s;
    animation-iteration-count: 1;
  }

  .tab-card-img {
    margin: 80px;
    width: 200px;
    height: 200px;
  }

  .tab-card-gif {
    width: 90%;
    height: auto;
    display: block;
  }

  .sub-card-brief {
    font-size: 1.2rem !important;
    line-height: 1.8rem;
  }

  .tags-ctn{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  .tab-tag {
    margin-right: 5px;
    background-color: transparent;
    font-size: 1.2rem;
    border: none !important;
  }


  .divider{
    margin: 30px auto 50px auto !important;
    width: 100%;
    height: 1px;
    border-top: #636d83 1px dashed;
    text-align: right;
    font-size: 1rem;
    color:#ce9887
  }

  .divider-text{
    position: absolute;
    left: 80%;
    background: #282c34;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%)
  }

  .tab-btn{
    border: #7f11e0 2px outset;
    border-right-width: 0px;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(127, 17, 224, 0.5);
    padding: 20px 0px 20px 20px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0.9;
    font-size: 1.2rem;
    transition: 0.5s;
    background-size: 200% auto;
    color: #abb2bf;
    font-family: 'Anonymous Pro', monospace;  
  }

  .tab-btn:hover{
    color: whitesmoke;
    box-shadow: 0 5px 20px rgba(127, 17, 224, 0.8);
    border:  rgba(127, 17, 224, 0.5) 2px inset;
    border-right-width: 0px;
    background-position: right center;
    background-image: linear-gradient(to right, #ff78f8 10%,  rgba(127, 17, 224, 0.5) 51%, black 100%);
  }
  
</style>