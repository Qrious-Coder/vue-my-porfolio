 <template>
  <el-row class="form-ctn">
    <el-col class="drawer-divider" 
    :span="24" 
    >
      <img :src="require('../assets/chat64.png')" 
        width="48"
        alt="gitIcon"
        class="drawer-divider-icon"/>
    </el-col>
    <p
      class="contact-note" 
      v-if="lang ==='en'" 
      style="margin-top: 40px">
      Thank you for viewing my work. Your feedback is always welcome: 
    </p>
    <p v-if="lang ==='zh'">好友留言</p>
    <p v-if="lang ==='vn'">Gửi tin nhắn cho Q</p>
    <!-- contact form -->
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      >
      <el-row :gutter="5">
        <el-col :span="12">
          <el-form-item prop="firstName"
            :rules="[{
            required: true,
            message: '(!)First name required',
            trigger: 'blur',
            }]">
              <el-input 
                type="text"
                name="firstName"
                placeholder="First name"
                v-model="ruleForm.firstName">
                  <template #prepend>
                    <el-icon class="el-input__icon" color="#275fe4">
                      <UserIcon />
                    </el-icon>
                  </template>
              </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="lastName"
            :rules="[{
              required: true,
              message: 'Last name',
              trigger: 'blur',
            }]">
            <el-input 
              :placeholder="lastName"
              v-model="ruleForm.lastName"
              name="lastName">  
            </el-input>
          </el-form-item>
        </el-col>
      
        <el-col :span="24">
          <el-form-item prop="email" 
            :rules="[
              {
                required: true,
                message: '(!) Email required',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: '(!) Invalid email',
                trigger: ['change', 'blur']
              }
            ]"
            >
            <el-input 
            placeholder="Your-email@gmail.com"
            v-model="ruleForm.email"
            name="email"
            >
              <template #prepend>
                <el-icon class="el-input__icon" 
                color="#275fe4"
                >
                  <MessageIcon />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item prop="content"
            :rules="[{
              required: true,
              message: 'Empty text!',
              trigger: 'blur',
            }]">
            <el-input v-model="ruleForm.content"
              name="message"
              placeholder="Leave your message here..."
              cols="30" rows="5"
              type="textarea"
              maxlength="100"
              show-word-limit     
              size="small"
              :suffix-icon="EditIcon">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn send"
              @click="submitForm(ruleFormRef)"
              type="text">
              Send
            </el-button>
            <el-button 
            class="btn reset" 
            @click="resetForm(ruleFormRef)">
              Reset
            </el-button>
          </el-form-item> 
        </el-col>
      </el-row>
    </el-form>
    <el-footer :span="24" 
    class="back-btn">
      <a href="/">
        <img :src="require('../assets/home64.png')" width="30" alt="gitIcon"/>
        <img :src="require('../assets/back64.png')" width="15" alt="gitIcon"/>
      </a>
    </el-footer>
  </el-row>
</template>

<script >
import { ref } from 'vue'
import { Message as MessageIcon } from "@element-plus/icons-vue"
import { User as UserIcon } from "@element-plus/icons-vue"
import emailjs from 'emailjs-com';
import { ElMessage, ElMessageBox } from 'element-plus';

export default {
  name: 'ContacForm',
  components:{ MessageIcon, UserIcon } ,
  props:{lang: String},
  setup(){
    const lastName = ref('Last name')
    const ruleFormRef = ref(null)
    const ruleForm = ref({
      firstName: '',
      lastName:'',
      email: '',
      content: '',
    })

    const submitForm = async (ruleFormRef) => {
      if(!ruleFormRef) return
      await ruleFormRef.validate((valid, fields) => {
        if(valid){
          console.log('OK', fields)                
            emailjs.send('service_i34g98m', 'template_coea8s9', {firstName: ruleForm.value.firstName, 
            lastName: ruleForm.value.lastName,
            email: ruleForm.value.email, 
            message: ruleForm.value.content } ,'OeQ29NfwvAgBRJ7K3') 
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
              console.log('FAILED...', error.text);
            });

            // message box 
            ElMessageBox.confirm(
            'Your message will be sent to Q_coder at q81188118@gmail.com. Continue?',
            'Warning',
            {
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
              type: 'warning',
              draggable: true,
            }
          )
            .then(() => {
              ElMessage({
                type: 'success',
                message: 'Thank you! I have received your message. We will be in touch within 24h!',
              })
            })
            .catch(() => {
              ElMessage({
                type: 'info',
                message: 'The message is UNSENT.',
              })
            })
          
        } else {
          console.log('submit error', fields)
        }
      })
    }

    const resetForm = (ruleFormRef) => {
      if(!ruleFormRef) return
      ruleFormRef.resetFields()
    }

    return {
      ruleFormRef,
      ruleForm,
      submitForm,
      resetForm,
      lastName
    }
  }
}
</script>

<style>
.form-ctn {
  font-family: 'Yomogi', cursive !important;
  margin: 0 10px 0 10px
}
.btn { 
  padding: 5px 20px 5px 20px !important;
  color: #f9f9f9 !important;
  opacity: 0.9;
  font: 1rem 'Yomogi' !important;
}

.btn.send{
  background-color: #275fe4 !important;
}

.btn.reset{
  background-color: #c5a332 !important;
}

.btn.send:hover{
  opacity: 1 !important;
}

.btn.reset:hover{
  opacity: 2 !important;
}

.back-btn {
  margin-left: auto; 
  display: block;
  opacity: 0.7;
}
.back-btn:hover {
  opacity: 2 !important;
}

</style>