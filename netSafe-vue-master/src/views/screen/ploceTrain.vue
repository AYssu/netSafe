<template>
  <div class="threeMentions-main">
    <el-container>
      <el-card style="width: 600px; height: calc(100vh - 500px)">
        <itleLayout info="警企联训"></itleLayout>
        <el-row>
          <span>本月培训申请</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 个,</span>
        </el-row>
        <el-row>
          <span>已完成</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 个,</span>
        </el-row>
        <el-row>
          <span>培训员工</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 人,</span>
        </el-row>

        <el-row>
          <span>今年以来培训申请</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 个,</span>
        </el-row>
        <el-row>
          <span>已完成</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 个,</span>
        </el-row>
        <el-row>
          <span>总培训员工</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span> 人,</span>
        </el-row>
        <el-row justify="end">
          <el-button type="primary">保存</el-button>
        </el-row>
      </el-card>

      <el-card style="width: 700px; margin-left: 10px; height: calc(100vh - 160px)">
        <itleLayout info="03月月度类别占比"></itleLayout>
        <el-row>
          <span>禁毒宣传数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>专项法治培训数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>党建党务</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>内保业务</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span> 典型案例警示教育数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>反诈宣传数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>

        <el-row>
          <span> 保安应急技能培训数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>其他培训数量</span>
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
          <span>禁毒宣传数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>专项法治培训数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>党建党务</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>内保业务</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span> 典型案例警示教育数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>反诈宣传数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>

        <el-row>
          <span> 保安应急技能培训数量</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
        </el-row>
        <el-row>
          <span>其他培训数量</span>
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

      <el-card style="width: 100vw; margin-left: 10px; height: calc(100vh - 160px)">
        <itleLayout info="年度类别占比"></itleLayout>
        <el-row>
          <el-col>
            <span>企业名称</span>
            <el-select v-model="value" placeholder="请输入" style="width: 110px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>培训内容</span>
            <el-select v-model="value" placeholder="请输入" style="width: 110px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>培训牵头单位</span>
            <el-select v-model="value" placeholder="请输入" style="width: 110px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>是否受理</span>
            <el-select v-model="value" placeholder="请输入" style="width: 110px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>

          <el-col style="margin: 10px 0">
            <span>培训效果</span>
            <el-select v-model="value" placeholder="请输入" style="width: 110px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button type="primary" style="margin-left: 10px">查询</el-button>
            <el-button>添加</el-button>
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
            <el-table-column property="departmentName" label="企业名称" width="140" />

            <el-table-column property="catogory" label="矛盾分类" width="140">
              <template #default="scope">
                <span v-if="scope.row.catogory == '1'">治安类</span>
                <span v-else-if="scope.row.catogory == '2'">稳定类</span>
                <span v-else-if="scope.row.catogory == '3'">交通管理类</span>
                <span v-else-if="scope.row.catogory == '4'">综合执法类</span>
                <span v-else-if="scope.row.catogory == '5'">环境保护类</span>
                <span v-else>其他类</span>
              </template>
            </el-table-column>
            <el-table-column property="leve" label="风险等级" width="120">
              <template #default="scope">
                <span v-if="scope.row.leve == '1'" style="color: red">高</span>
                <span v-else-if="scope.row.leve == '2'" style="color: greenyellow">中</span>
                <span v-else-if="scope.row.leve == '3'">低</span>
              </template>
            </el-table-column>
            <el-table-column property="time" label="受理时间" width="140" />
            <el-table-column property="content" label="简要内容" width="140" />
            <el-table-column property="department" label="联调部门" width="140" />
            <el-table-column property="state" label="联调效果" width="140">
              <template #default="scope">
                <span v-if="scope.row.state == 1">好</span>
                <span v-else-if="scope.row.state == 2">一般</span>
                <span v-else-if="scope.row.state == 3">未达到效果</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" property="address" label="操作" width="150">
              <div class="fun">
                <span>查看图片</span>
                <span>修改</span>
                <span>删除</span>
              </div>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import itleLayout from '@/components/TitleLayout.vue'
import { ref } from 'vue'

const input = ref<number>()

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]

import { ElTable } from 'element-plus'

interface User {
  departmentName: string
  catogory: number
  leve: number
  time: string
  content: string
  department: string
  state: number
}

interface thins {
  name?: string
  content?: string
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}
const bottomTable = ref<thins[]>([
  {
    name: '张三',
    content: '抢劫'
  },
  {
    name: '李氏',
    content: '袭警'
  },
  {
    name: '王二麻子',
    content: '他干了一件非常牛逼的事情'
  },
  {
    name: '张三',
    content: '抢劫'
  },
  {
    name: '李氏',
    content: '袭警'
  },
  {
    name: '王二麻子',
    content: '他干了一件非常牛逼的事情'
  }
])
const tableData: User[] = [
  {
    departmentName: '额日版',
    catogory: 1,
    leve: 1,
    time: '2024-12-12',
    content: 'haohaohaohao',
    department: '公安部',
    state: 1
  },
  {
    departmentName: '额日版',
    catogory: 1,
    leve: 1,
    time: '2024-12-12',
    content: 'haohaohaohao',
    department: '公安部',
    state: 1
  },
  {
    departmentName: '额日版',
    catogory: 1,
    leve: 1,
    time: '2024-12-12',
    content: 'haohaohaohao',
    department: '公安部',
    state: 1
  }
]
</script>

<style scoped lang="less">
.threeMentions-main {
  width: 100%;
  height: calc(100vh - 160px);

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
