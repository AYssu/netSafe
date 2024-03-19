<template>
    <div class="threeMentions-main">
        <el-container>
            <el-card style="width: 700px;height: 360px;">
                <itleLayout info="警保联勤"></itleLayout>
                <el-row>
                    <span>本月开展警保联勤巡逻</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次, </span>
                </el-row>
                <el-row>
                    <span>排查治安隐患</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>个,</span>
                </el-row>
                <el-row>
                    <span>解决</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>个,</span>
                </el-row>
                <el-row>
                    <span>今年以来开展警保联勤巡逻</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次,</span>
                </el-row>
                <el-row>
                    <span>排查治安隐患</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>个,</span>
                </el-row>
                <el-row>
                    <span>解决</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>个,</span>
                </el-row>
                <el-row justify="end">
                    <el-button type="primary">保存</el-button>
                </el-row>
            </el-card>
            <el-card style="width: 100vw;margin-left: 10px;height: calc(100vh - 160px);">
                <itleLayout info="表单数据"></itleLayout>
                <el-row>
                    <el-col>
                        <span>联勤任务</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 190px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>联勤区域</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 190px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>联勤效果</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 190px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                    <el-col style="margin: 10px 0;">
                        <el-button type="primary">查询</el-button>
                        <el-button>添加</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%;"
                        @current-change="handleCurrentChange"  :header-cell-style="{ backgroundColor: '#f5f5f5', fontSize: '14px' }"  >
                        <el-table-column type="index" lable="序号" width="50" />
                        <el-table-column property="time" label="联勤时间" width="140" />
                        <el-table-column property="task" label="联勤任务" width="120" />
                        <el-table-column property="totalP" label="参与民警" width="140"  />
                        <el-table-column property="totalG" label="参与保安" width="140" />
                        <el-table-column property="position" label="联勤区域"  width="140"/>
                        <el-table-column property="state" label="联勤效果" width="140" />
                        <el-table-column fixed="right" property="address" label="操作" width="100">
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
import { ref } from 'vue';

const input = ref<number>();

const value = ref('')

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]


import { ElTable } from 'element-plus'

interface User {
    time: string,
    task: string,
    totalP: number,
    totalG: number,
    position: string,
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
        time: "2024-02-02",
        task: "纠纷调查",
        totalP: 7,
        totalG: 12,
        position: "重点企业周边",
        state: 1
    }, {
        time: "2024-02-02",
        task: "纠纷调查",
        totalP: 7,
        totalG: 12,
        position: "重点企业周边",
        state: 1
    }, {
        time: "2024-02-02",
        task: "纠纷调查",
        totalP: 7,
        totalG: 12,
        position: "重点企业周边",
        state: 1
    },
    {
        time: "2024-02-02",
        task: "纠纷调查",
        totalP: 7,
        totalG: 12,
        position: "重点企业周边",
        state: 1
    }
    , {
        time: "2024-02-02",
        task: "纠纷调查",
        totalP: 7,
        totalG: 12,
        position: "重点企业周边",
        state: 1
    },
    {
        time: "2024-02-02",
        task: "纠纷调查",
        totalP: 7,
        totalG: 12,
        position: "重点企业周边",
        state: 1
    }
]
</script>

<style scoped>
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
