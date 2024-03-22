<template>
  <div class="threeMentions-main">
    <el-container>
      <el-card class="card1">
        <itleLayout info="常态走访"></itleLayout>
        <el-row>
          <span>本月走访企业</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 个/次,</span>
        </el-row>
        <el-row>
          <span>提出意见建议</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>条,</span>
        </el-row>
        <el-row>
          <span>企业解决问题</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>个;</span>
        </el-row>

        <el-row>
          <span>今年以来，累计走访企业</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 个/次,</span>
        </el-row>
        <el-row>
          <span>反映问题</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>条,</span>
        </el-row>
        <el-row>
          <span>解决企业困难问题</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>个,</span>
        </el-row>
        <el-row justify="end">
          <el-button type="primary">保存</el-button>
        </el-row>
      </el-card>

      <el-card class="card2">
        <itleLayout info="03月月度类别占比"></itleLayout>
        <el-row>
          <span>治安类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>城建规划类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span> 交通管理类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>民生事务类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>

        <el-row>
          <span> 涉法涉诉类占比数量 </span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>其他类占比数量 </span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row justify="end">
          <el-button type="primary">保存</el-button>
        </el-row>

        <itleLayout info="月度类别占比"></itleLayout>
        <el-row>
          <span>治安类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>城建规划类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span> 交通管理类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>民生事务类占比数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>

        <el-row>
          <span> 涉法涉诉类占比数量 </span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>其他类占比数量 </span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row justify="end">
          <el-button type="primary">保存</el-button>
        </el-row>
      </el-card>

      <el-card class="card3">
        <itleLayout info="年度类别占比"></itleLayout>
        <el-row>
          <el-col>
            <span>问题来源</span>
            <el-select
              v-model="limitData.questionSource"
              placeholder="请输入"
              class="selects"
              clearable
            >
              <el-option
                v-for="(item, index) in questionSource"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>企业名称</span>
            <el-select v-model="value" placeholder="请输入" class="selects" clearable>
              <el-option
                v-for="item in groupData"
                :key="item.id"
                :label="item.groupName"
                :value="item.id"
              />
            </el-select>
            <span>问题类别</span>
            <el-select v-model="value" placeholder="请输入" class="selects" clearable>
              <el-option
                v-for="item in questionCategory"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>处理方式</span>
            <el-select v-model="value" placeholder="请输入" class="selects" clearable>
              <el-option
                v-for="item in handlingMethod"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>

          <el-col style="margin: 10px 0">
            <span>完成时间</span>
            <el-date-picker
              v-model="value1"
              placeholder="完成时间"
              style="width: 130px; margin-left: 10px"
            />
            <el-button type="primary" style="margin-left: 10px">查询</el-button>
            <el-button @click="(visibleDrawer = true), (questionForm.type = 2),questionForm={}">添加</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-table
            ref="singleTableRef"
            :data="tableData"
            highlight-current-row
            style="width: 100%"
            @current-change="handleCurrentChange"
            :header-cell-style="{ backgroundColor: '#f5f5f5', fontSize: '14px' }"
          >
            <el-table-column type="index" lable="序号" width="50" />
            <el-table-column property="questionSource" label="问题来源" width="140" />

            <el-table-column property="enterpriseName" label="企业名称" width="140" />
            <el-table-column property="questionContent" label="反映内容" width="220" />
            <el-table-column property="requestTime" label="反映时间" width="240" />
            <el-table-column property="questionCategory" label="问题类别" width="140" />
            <el-table-column property="handlingMethod" label="处理方式" width="140">
              <template #default="scope">
                <span v-if="scope.row.handlingMethod === '1'">直接受理</span>
                <span v-else-if="scope.row.handlingMethod === '2'">转交其他单位</span>
                <span v-else>其他</span>
              </template>
            </el-table-column>
            <el-table-column property="questionThing" label="办理情况" width="140">
            </el-table-column>
            <el-table-column property="finishTime" label="完成时间" width="240" />
            <el-table-column fixed="right" property="address" label="操作" width="150">
              <template #default="row">
                <div class="fun">
                  <span @click="(dialogImageUrl = row.row.questionPic), (dialogVisible = true)"
                    >查看图片</span
                  >
                  <span @click="updateQuestion(row.row.id)">修改</span>
                  <span @click="delectQuestion(row)">删除</span>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </el-container>
  </div>

  <el-drawer
    v-model="visibleDrawer"
    :title="questionForm.type == 2 ? '问题处理数据' : '修改问题'"
    direction="rtl"
    size="35%"
  >
    <!-- 添加文章表单 -->
    <el-form :model="questionForm" label-width="100px">
      <el-form-item label="问题来源">
        <el-select
          v-model="questionForm.questionSource"
          placeholder="请输入"
          class="selects"
          clearable
        >
          <el-option
            v-for="(item, index) in questionSource"
            :key="index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="企业名称">
        <el-select
          v-model="questionForm.enterpriseName"
          placeholder="请输入"
          class="selects"
          clearable
        >
          <el-option
            v-for="item in groupData"
            :key="item.id"
            :label="item.groupName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="反映问题">
        <el-input
          v-model="questionForm.questionContent"
          :rows="2"
          type="textarea"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item label="反映时间">
        <el-date-picker
          v-model="questionForm.requestTime"
          placeholder="完成时间"
          style="width: 100%"
        />
      </el-form-item>

      <el-form-item label="问题类别">
        <el-select
          v-model="questionForm.questionCategory"
          placeholder="请输入"
          class="selects"
          clearable
        >
          <el-option
            v-for="item in questionCategory"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="办理情况">
        <el-input
          v-model="questionForm.questionThing"
          :rows="2"
          type="textarea"
          placeholder="请输入内容     "
        />
      </el-form-item>

      <el-form-item label="处理方式">
        <el-select
          v-model="questionForm.handlingMethod"
          placeholder="请输入"
          class="selects"
          clearable
        >
          <el-option
            v-for="item in handlingMethod"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="完成时间">
        <el-date-picker
          v-model="questionForm.finishTime"
          placeholder="完成时间"
          style="width: 100%"
        />
      </el-form-item>

      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="true"
          action="/api/file/upload"
          name="file"
          :headers="{ Authorization: tokenStore.token }"
          :on-success="uploadSuccess"
        >
          <img v-if="questionForm.questionPic" :src="questionForm.questionPic" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button v-if="questionForm.type == 1" type="primary" @click="updateQuestioTo()"
          >修改信息</el-button
        >
        <el-button v-if="questionForm.type == 2" type="primary" @click="addQuestion()"
          >添加</el-button
        >
      </el-form-item>
    </el-form>
  </el-drawer>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup lang="ts">
import itleLayout from '@/components/TitleLayout.vue'
import { onMounted, ref } from 'vue'

const input = ref<number>()
const visibleDrawer = ref(false)
const value = ref('')
const value1 = ref<any>()
const limitData = ref<any>({
  questionSource: null,
  enterpriseName: null,
  questionCategory: null,
  handlingMethod: null,
  finishTime: null
})
const dialogImageUrl = ref<any>()
const dialogVisible = ref<boolean>(false)
const uploadSuccess = (img: any) => {
  console.log(img)
  //img就是后台响应的数据，格式为：{code:状态码，message：提示信息，data: 图片的存储地址}
  questionForm.value.questionPic = img.data
}

const formatTime = (time: any) => {
  if (time) {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // 月份是从0开始的，所以要加1
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }
  return '' // 如果没有选择时间，返回空字符串
}
import { useTokenStores } from '@/stores/token.js'
const tokenStore = useTokenStores()

const questionForm = ref<any>({
  type: null,
  questionSource: null,
  enterpriseName: null,
  questionContent: null,
  requestTime: null,
  questionCategory: null,
  questionThing: null,
  handlingMethod: null,
  finishTime: null,
  questionPic: null
})

const questionSource = ref<any>([
  {
    value: '1',
    label: '走访采集'
  },
  {
    value: '2',
    label: '企业提出'
  },
  {
    value: '3',
    label: '外部反馈'
  },
  {
    value: '4',
    label: '其他'
  }
])

const questionCategory = ref<any>([
  {
    value: '1',
    label: '治安类'
  },
  {
    value: '2',
    label: '交通管理类'
  },
  {
    value: '3',
    label: '城建规划类'
  },
  {
    value: '4',
    label: '民生事务类'
  },
  {
    value: '4',
    label: '涉法涉诉'
  }
])

const handlingMethod = ref<any>([
  {
    value: '1',
    label: '直接受理'
  },
  {
    value: '2',
    label: '转交其他单位'
  }
])

import { ElMessage, ElTable, ElMessageBox, Action } from 'element-plus'

interface User {
  departmentName: string
  catogory: number
  leve: number
  time: string
  content: string
  department: string
  state: number
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}

const tableData = ref([])
const groupData = ref<any>()
import {
  groupGetService,
  questionAddService,
  questionGetService,
  questionUpdateService,
  questionDeletedService
} from '@/api/user.ts'

const groupGet = async () => {
  const result = await groupGetService()
  groupData.value = result.data
  console.log(groupData.value)
}
const originData = ref<any>()
const getQuestion = async () => {
  const result = await questionGetService()
  tableData.value = result.data
  originData.value = JSON.parse(JSON.stringify(result.data))
  tableData.value.forEach((item: any) => {
    groupData.value.forEach((item1: any) => {
      if (Number(item.enterpriseName) === item1.id) {
        item.enterpriseName = item1.groupName
      }
    })
  })
  tableData.value.forEach((item: any) => {
    questionSource.value.forEach((item1: any) => {
      if (item.questionSource === item1.value) {
        item.questionSource = item1.label
      }
    })
  })

  tableData.value.forEach((item: any) => {
    questionCategory.value.forEach((item1: any) => {
      if (item.questionCategory === item1.value) {
        item.questionCategory = item1.label
      }
    })
  })

  console.log(tableData.value)
}
onMounted(() => {
  groupGet()
  getQuestion()
})

const addQuestion = async () => {
  questionForm.value.requestTime = formatTime(questionForm.value.requestTime)
  questionForm.value.finishTime = formatTime(questionForm.value.finishTime)
  const result = await questionAddService(questionForm.value)
  ElMessage.success(result.data ? result.data : '添加成功')
  visibleDrawer.value = false
  questionForm.value = {}
  getQuestion()
}

const updateQuestion = (id) => {
  originData.value.forEach((item: any) => {
    if (item.id == id) {
      questionForm.value = item
    }
  })
  questionForm.value.enterpriseName = Number(questionForm.value.enterpriseName)
  questionForm.value.type = 1
  visibleDrawer.value = true
}
const delectQuestion = async (row) => {
  ElMessageBox.alert('确定要删除这条数据吗？', '删除数据', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: '确定',
    callback: async (action: Action) => {
      if (action === 'confirm') {
        const parmas = new URLSearchParams()
        parmas.append('id', row.row.id)
        console.log(parmas)

        const result = await questionDeletedService(parmas)
        ElMessage.success(result.data ? result.data : '删除成功')
        getQuestion()
      } else {
        ElMessage.info('已取消操作')
      }
    }
  })
}
const updateQuestioTo = async () => {
  questionForm.value.requestTime = formatTime(questionForm.value.requestTime)
  questionForm.value.finishTime = formatTime(questionForm.value.finishTime)

  const result = await questionUpdateService(questionForm.value)
  ElMessage.success(result.data ? result.data : '修改成功')
  visibleDrawer.value = false
  questionForm.value = {}
  getQuestion()
}
</script>

<style scoped lang="less">
.avatar-uploader {
  .avatar {
    // width: 178px;
    height: 178px;
    display: block;
  }

  .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
}

.el-dialog {
  //   width: 100%;
  // max-width:00px;
}
.el-dialog img {
  // max-height:1000px
}

.threeMentions-main {
  width: 100%;
  height: calc(100vh - 160px);

  .card1 {
    width: 600px;
    height: 350px;
  }

  .card2 {
    width: 700px;
    margin-left: 10px;
    height: 630px;
  }

  .card3 {
    width: 100vw;
    margin-left: 10px;
    height: calc(100vh - 160px);
  }

  .selects {
    width: 110px;
  }

  .el-row {
    margin-top: 13px;
  }

  .el-select {
    margin: 0 5px;
  }

  .table {
    margin-top: 30px;
  }

  .fun {
    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 12px;
      cursor: pointer;
      color: #365cd3;
    }
  }
}
</style>
