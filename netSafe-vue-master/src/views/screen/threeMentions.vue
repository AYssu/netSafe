<template>
    <div class="threeMentions-main">
        <el-container>
            <el-card style="width: 700px;height: 360px;">
                <itleLayout info="常态走访"></itleLayout>
                <el-row>
                    <span>本月涉企案件类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件, 已办结</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件;</span>
                </el-row>
                <el-row>
                    <span>涉企纠纷类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件, 已办结</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件;</span>
                </el-row>
                <el-row>
                    <span>涉企政务服务类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件, 已办结</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件;</span>
                </el-row>
                <el-row>
                    <span>今年涉企案件类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件, 已办结</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件;</span>
                </el-row>
                <el-row>
                    <span>涉企纠纷类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件, 已办结</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件;</span>
                </el-row>
                <el-row>
                    <span>涉企政务服务类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件, 已办结</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>件;</span>
                </el-row>
                <el-row justify="end">
                    <el-button type="primary">保存</el-button>
                </el-row>
            </el-card>
            <el-card style="width: 100vw;margin-left: 10px;height: calc(100vh - 160px);">
                <itleLayout info="表单事务"></itleLayout>
                <el-row>
                    <el-col>
                        <span>涉企事务类别</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 190px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>企业名称</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 190px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>是否完成</span>
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
                        @current-change="handleCurrentChange"
                        :header-cell-style="{ backgroundColor: '#f5f5f5', fontSize: '14px' }">
                        <el-table-column type="index" lable="序号" width="50" />
                        <el-table-column property="catagory" label="涉企事务类别" width="140" />
                        <el-table-column property="groupName" label="企业名称" width="180" />
                        <el-table-column property="content" label="主要内容" width="200" />
                        <el-table-column property="time" label="受理时间" width="140" />
                        <el-table-column property="master" label="牵头局领导" width="140" />

                        <el-table-column property="people" label="专班人员" width="140" />

                        <el-table-column property="success" label="是否完成" width="140">
                            <template #default="scope">
                                <el-tag v-if="scope.row.success = 1" type="success">已完成</el-tag>
                                <el-tag v-else type="danger">正在办理</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column property="finishTime" label="完成时间" width="140" />
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
    catagory: string,
    groupName: string,
    content: string,
    time: string,
    master: string,
    people: string,
    success: number,
    finishTime: string
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
        catagory: "涉企纠纷类",
        groupName: "会比较火爆狂飙",
        content: "天府新区环境问题解决",
        time: "2024-02-01",
        master: "2024-02-01",
        people: "刘明",
        success: 1,
        finishTime: "2024-02-21"
    },
    {
        catagory: "涉企纠纷类",
        groupName: "会比较火爆狂飙",
        content: "天府新区环境问题解决",
        time: "2024-02-01",
        master: "2024-02-01",
        people: "刘明",
        success: 1,
        finishTime: "2024-02-21"
    }
    , {
        catagory: "涉企纠纷类",
        groupName: "会比较火爆狂飙",
        content: "天府新区环境问题解决",
        time: "2024-02-01",
        master: "2024-02-01",
        people: "刘明",
        success: 1,
        finishTime: "2024-02-21"
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
