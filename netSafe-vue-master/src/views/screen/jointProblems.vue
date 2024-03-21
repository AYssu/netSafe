<template>
    <div class="threeMentions-main">
        <el-container>
            <el-card style="width: 1200px;height:calc(100vh - 160px);">
                <itleLayout info="警保联勤"></itleLayout>
                <el-row>
                    <span>本月治安形势专项研判</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次, </span>
                </el-row>
                <el-row>
                    <span>涉企座谈会</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次,</span>
                </el-row>
                <el-row>
                    <span>联动部门</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>个,</span>
                </el-row>
                <el-row>
                    <span>开展专项整治 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次,</span>
                </el-row>
                <el-row>
                    <span>今年以来治安形势专项研判 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次,</span>
                </el-row>
                <el-row>
                    <span>涉企座谈会 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>期,</span>
                </el-row>
                <el-row>
                    <span>联动部门 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>个,</span>
                </el-row>
                <el-row>
                    <span>开展专项整治 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>次,</span>
                </el-row>

                <itleLayout info="典型案例" class="table"></itleLayout>
                <el-row>
                    <el-table ref="singleTableRef" max-height="200" :data="bottomTable" highlight-current-row
                        style="width: 100%;" @current-change="handleCurrentChange"
                        :header-cell-style="{ backgroundColor: '#f5f5f5', fontSize: '14px' }">
                        <el-table-column type="index" lable="序号" width="50" />
                        <el-table-column property="name" label="案例名称" width="120" />
                        <el-table-column property="content" label="内容简绍" width="300" />

                        <el-table-column fixed="right" property="address" label="操作" width="100">
                            <div class="fun">
                                <span>修改</span>
                                <span>删除</span>
                            </div>
                        </el-table-column>
                    </el-table>
                </el-row>

                <el-row justify="end">
                    <el-button type="primary">保存</el-button>
                </el-row>
            </el-card>
            <el-card style="width: 700px;margin-left: 10px; height: 660px;">
                <itleLayout info="月度类别占比"></itleLayout>
                <el-row>
                    <span>治安类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>稳定类 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />

                </el-row>
                <el-row>
                    <span>交通管理类 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>综合执法类 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>环境保护类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>其他问题数量</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row justify="end">
                    <el-button type="primary">保存</el-button>
                </el-row>

                <itleLayout info="月度类别占比"></itleLayout>
                <el-row>
                    <span>治安类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>稳定类 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />

                </el-row>
                <el-row>
                    <span>交通管理类 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>综合执法类 </span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>环境保护类</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row>
                    <span>其他问题数量</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>
                <el-row justify="end">
                    <el-button type="primary">保存</el-button>
                </el-row>
            </el-card>
            <el-card style="width: 100vw;margin-left: 10px;height: calc(100vh - 160px);">
                <itleLayout info="年度类别占比"></itleLayout>
                <el-row>
                    <el-col>
                        <span>问题类别</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 86px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>牵头部门</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 86px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>联治方式</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 86px" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                        <span>联治效果</span>
                        <el-select v-model="value" placeholder="请输入" style="width: 86px" clearable>
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
                        <el-table-column property="question" label="问题类别" width="140">
                            <template #default="scope">
                                <sapn v-if="scope.row.question == '1'">治安类</sapn>
                                <sapn v-else-if="scope.row.question == '2'">稳定类</sapn>
                                <sapn  v-else-if="scope.row.question == '3'">交通管理类</sapn>
                                <sapn  v-else-if="scope.row.question == '4'">综合执法类</sapn>
                                <sapn  v-else-if="scope.row.question == '5'">环境保护类</sapn>
                                <sapn  v-else >其他类</sapn>
                            </template>
                        </el-table-column>
                        <el-table-column property="masterdepartment" label="牵头部门" width="120" >
                            <template #default="scope">
                                <sapn v-if="scope.row.masterdepartment == '1'">党委政府</sapn>
                                <sapn v-else-if="scope.row.masterdepartment == '2'">公安</sapn>
                                <sapn  v-else-if="scope.row.masterdepartment == '3'">交警</sapn>
                                <sapn  v-else-if="scope.row.masterdepartment == '4'">综合执法</sapn>
                                <sapn  v-else-if="scope.row.masterdepartment == '5'">城建规划</sapn>
                                <sapn  v-else >其他类</sapn>
                            </template>
                        </el-table-column>
                        <el-table-column property="content" label="具体内容" width="140" />
                        <el-table-column property="number" label="联动部门数量" width="140" />
                        <el-table-column property="tytle" label="联治方式" width="140">
                            <template #default="scope">
                                <span v-if="scope.row.tytle=='1' ">开通治安形势专项研判</span>
                                <span v-else-if="scope.row.tytle=='2'">召开涉企座谈会</span>
                                <span v-else-if="scope.row.tytle=='3'">开展专项整治</span>
                            </template>
                        </el-table-column>
                        <el-table-column property="state" label="联勤效果" width="140">
                            <template #default="scope">
                                <span v-if="scope.row.state==1">好</span>
                                <span v-else-if="scope.row.state==2">一般</span>
                                <span v-else-if="scope.row.state==3">未达到效果</span>
                            </template>
                        </el-table-column>
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
    question: number,
    masterdepartment: number,
    content: string,
    number: number,
    tytle: number,
    state: number
}

interface thins {
    name?: string,
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
    }, {
        name: '李氏',
        content: '袭警'
    }, {
        name: '王二麻子',
        content: '他干了一件非常牛逼的事情'
    },
    {
        name: '张三',
        content: '抢劫'
    }, {
        name: '李氏',
        content: '袭警'
    }, {
        name: '王二麻子',
        content: '他干了一件非常牛逼的事情'
    }
]);
const tableData: User[] = [
    {
        question: 1,
        masterdepartment: 1,
        content: "有问题 有人超速",
        number: 2,
        tytle: 2,
        state: 1
    },
    {
        question: 2,
        masterdepartment: 2,
        content: "有问题",
        number: 12,
        tytle: 1,
        state: 2
    }
    , {
        question: 3,
        masterdepartment: 3,
        content: "有问题 有人超速",
        number: 11,
        tytle: 3,
        state: 3
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
            cursor: pointer;
            color: #365cd3;
        }
    }
}
</style>
