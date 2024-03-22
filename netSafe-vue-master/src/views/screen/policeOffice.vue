<template>
  <div class="threeMentions-main">
    <el-container>
      <el-card style="width: 700px; height: 450px">
        <itleLayout info="警情联处"></itleLayout>
        <el-row>
          <span>12月涉企警情</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起，已处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>139机制处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>01月涉企警情</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起，已处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>139机制处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>02月涉企警情</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起，已处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>139机制处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>今年以来涉企警情</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起，已处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>
        <el-row>
          <span>139机制处置</span>
          <el-input
            v-model="input"
            size="small"
            style="width: 80px; margin: 0 5px"
            placeholder=""
          />
          <span>起, </span>
        </el-row>

        <el-row justify="end">
          <el-button type="primary">保存</el-button>
        </el-row>
      </el-card>
      <el-card style="width: 100vw; margin-left: 10px; height: calc(100vh - 160px)">
        <itleLayout info="表单数据"></itleLayout>
        <el-row>
          <el-col>
            <span>涉及企业</span>
            <el-select v-model="value" placeholder="请输入" style="width: 120px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>警情类型</span>
            <el-select v-model="value" placeholder="请输入" style="width: 120px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>是否启动“139”快反机制</span>
            <el-select v-model="value" placeholder="请输入" style="width: 120px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <span>联处效果</span>
            <el-select v-model="value" placeholder="请输入" style="width: 120px" clearable>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
          <el-col style="margin: 10px 0">
            <el-button type="primary">查询</el-button>
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
            <el-table-column property="time" label="发生时间" width="140" />
            <el-table-column property="office" label="涉及企业" width="180" />
            <el-table-column property="type" label="警情类型" width="200">
              <template #default="scope">
                <span v-if="scope.row.type === 1">治安类</span>
                <span v-else-if="scope.row.type === 2">刑事类</span>
                <span v-else>刑事类</span>
              </template>
            </el-table-column>
            <el-table-column property="content" label="警情内容" width="300" />
            <el-table-column property="start" label="是否启动“139”快反机制" width="140">
              <template #default="scope">
                <span v-if="scope.row.start == 1">是</span>
                <span v-else>否</span>
              </template>
            </el-table-column>

            <el-table-column property="department" label="联处部门" width="140" />

            <el-table-column property="state" label="联处效果" width="140">
              <template #default="scope">
                <span v-if="scope.row.state == 1">好</span>
                <span v-else-if="scope.row.state == 2">一般</span>
                <span v-else-if="scope.row.state == 3">未达到效果</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" property="address" label="操作" width="100" class="fun">
              <div class="fun">
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
  time: string
  office: string
  type: number
  content: string
  start: number
  department: string
  state: number
}

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}
const tableData: User[] = [
  {
    time: '2024-02-06',
    office: '班级2',
    type: 1,
    content: '这是一个风险很高的警情，需要加急处理...',
    start: 1,
    department: '警情联处三',
    state: 1
  },
  {
    time: '2024-02-08',
    office: '班级1',
    type: 2,
    content: '这是一个风险很高的警情，需要加急处理...',
    start: 3,
    department: '警情联处三',
    state: 2
  },
  {
    time: '2024-02-06',
    office: '班级2',
    type: 3,
    content: '这是一个风险很高的警情，需要加急处理...',
    start: 3,
    department: '警情联处三',
    state: 1
  }
]
</script>

<style scoped lang="less">
.threeMentions-main {
  width: 100%;
  height: calc(100vh - 160px);

  .el-row {
    margin-top: 15px;
  }

  .el-select {
    margin: 0 10px;
  }

  .fun {
    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      cursor: pointer;
      color: #365cd3;
    }
  }
}
</style>
