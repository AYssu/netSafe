<template>
  <div class="motice-layout">
    <el-container>
      <el-card>
        <itleLayout info="群公告" />
        <el-row style="display: flex; align-items: center; margin-top: 20px">
          <span>标题</span>
          <el-input placeholder="请输入内容" style="width: 300px; margin-left: 10px"></el-input>
        </el-row>

        <el-row style="display: flex; align-items: center; margin-top: 20px">
          <span>发送范围</span>
        </el-row>
        <el-row style="display: flex; align-items: center; margin-top: 20px">
          <el-radio-group v-model="radio">
            <el-radio :value="1">系统公告</el-radio>
            <el-radio :value="2">群公告</el-radio>
          </el-radio-group>
        </el-row>
        <el-row v-if="radio == 2" style="display: flex; align-items: center; margin-top: 20px">
          <el-select v-model="value" placeholder="Select" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            />
          </el-select>
        </el-row>
        <el-row style="display: flex; align-items: center; margin-top: 20px">
          <span>内容</span>
        </el-row>
        <el-row style="display: flex; align-items: center; margin-top: 20px">
          <el-input
            v-model="textarea2"
            style="width: 500px"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
          />
        </el-row>
        <el-row style="margin-top: 20px">
          <el-button type="primary">发布</el-button>
        </el-row>
      </el-card>
      <el-card>
        <itleLayout info="历史公告" />
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-card>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import itleLayout from '@/components/TitleLayout.vue'
import { ref } from 'vue'
const radio = ref(1)
const textarea2 = ref('')
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true
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

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="less" scoped>
.motice-layout {
  .el-card {
    margin: 10px 10px;
    width: 100%;
    height: calc(100vh - 100px);
  }
}
</style>
