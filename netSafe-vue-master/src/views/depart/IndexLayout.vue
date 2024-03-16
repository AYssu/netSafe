<template>
    <el-main class="depart-main">
        <el-space size="large" wrap>
            <el-card class="box-card" style="width: 310px">
                <template #header>
                    <div class="card-header">
                        <div class="left-icon"></div>
                        <span>组织架构</span>
                        <el-button class="add" type="primary" size="small" @click="addDepart">添加</el-button>
                        <el-dropdown>
                            <el-button size="small">批量导入</el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Action 1</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </template>
                <div v-for="(item, index) in groupData" :key="index" class="left-item">
                    <div class="left-box">
                        <span class="left-text">{{ item.groupName }}</span>
                        <div class="right-box">
                            <span @click="editGroup(item)">修改</span>
                            <span>群管理</span>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" style="width: calc(100vw - 400px)">
                <template #header>
                    <div class="card-header">
                        <div class="left-icon"></div>
                        <span>组织架构/保安列表</span>
                    </div>
                </template>
                <div class="top-bar">
                    <span>姓名</span>
                    <el-input v-model="limitData.name" style="width: 90px" size="small" placeholder="请输入姓名" clearable />
                    <span>电话</span>
                    <el-input v-model="limitData.phone" style="width: 120px" size="small" placeholder="请输入手机号"
                        clearable />
                    <span>公司</span>
                    <el-select v-model="limitData.company" placeholder="请选择" size="small" style="width: 130px"
                        clearable>
                        <el-option v-for="c in groupData" :key="c.id" :label="c.groupName" :value="c.id">
                        </el-option>
                    </el-select>
                    <span>状态</span>
                    <el-select v-model="limitData.state" placeholder="请选择" size="small" style="width: 90px" clearable>
                        <el-option v-for="item in states" :key="item.label" :label="item.label" :value="item.value" />
                    </el-select>
                    <div class="right-box">
                        <el-button class="add" type="primary" size="small" @click="getGuard">查询</el-button>
                        <el-button size="small"
                            @click="guardForm = {}, visibleDrawer = true, guardForm.type = 1">新增</el-button>
                    </div>
                </div>

                <el-table size="small" ref="multipleTableRef" :data="tableData" style="width: 100%;"
                    @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="姓名" width="130">
                        <template #default="scope">{{ scope.row.guardName }}</template>
                    </el-table-column>
                    <el-table-column property="phone" label="电话" width="130" />
                    <el-table-column property="company" label="公司" width="160" />
                    <el-table-column property="master" label="是否为队长" width="90">
                        <template #default="scope">
                            <el-tag v-if="scope.row.master === '是' && scope.row.state !== 1" type="success">是</el-tag>
                            <el-tag v-else type="danger">否</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column property="state" label="状态" width="90">
                        <template #default="scope">
                            <el-tag v-if="scope.row.state === 0" type="success">已通过</el-tag>
                            <el-tag v-else-if="scope.row.state === 1" type="danger">已禁用</el-tag>
                            <el-tag v-else type="warning">待审核</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column property="createTime" label="注册时间" width="180" />
                    <el-table-column fixed="right" label="操作" width="160">
                        <template #default="{ row }">
                            <div class="fun-list">
                                <span @click="reviewFun(row)">审核</span>
                                <span @click="disableFun(row)">禁用</span>
                                <span @click="handleEdit(row)">编辑</span>
                                <span @click="rePassword(row)">重置密码</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>

                <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" small="small"
                    background="background" layout=" prev, pager, next, jumper,total" :total="pageTotle"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    style="justify-content: flex-end;margin-top: 20px;" />
            </el-card>
        </el-space>
    </el-main>


    <el-drawer v-model="visibleDrawer" :title="guardForm.type == 2 ? '修改保安信息' : '添加保安'" direction="rtl" size="50%">
        <!-- 添加文章表单 -->
        <el-form :model="guardForm" label-width="100px">
            <el-form-item label="保安姓名">
                <el-input v-model="guardForm.guardName" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="guardForm.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="选择组织">
                <el-select placeholder="请选择" v-model="guardForm.cid">
                    <el-option v-for="c in groupData" :key="c.id" :label="c.groupName" :value="c.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="队长职位">
                <el-select placeholder="请选择" v-model="guardForm.master">
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="状态">
                <el-select placeholder="请选择" v-model="guardForm.state">
                    <el-option v-for="item in states" :key="item.label" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button v-if="guardForm.type == 1" type="primary" @click="addGuard">新增保安</el-button>
                <el-button v-if="guardForm.type == 2" type="primary" @click="updateGuard">修改信息</el-button>
                <el-button v-if="guardForm.type == 2" type="danger" @click="delectGuard">删除保安</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>
<script lang="ts" setup>

import { ref, onMounted } from 'vue';

import { ElTable } from 'element-plus'

interface User {
    type?: number,
    id?: number,
    guardName?: string,
    phone?: string,
    company?: string,
    master?: string,
    state?: number | string | null,
    cid?: string | number | null,
    createTime?: string
}
//控制抽屉是否显示
const visibleDrawer = ref(false)
//添加表单数据模型
const guardForm = ref<User>({
    "id": 0,
    "guardName": "",
    "phone": "",
    "cid": null,
    "master": "否",
    "state": null
})

const currentPage4 = ref(1)
const pageSize4 = ref(15)
const pageTotle = ref(100)

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
}

const states = [
    { label: '已通过', value: 0 },
    { label: '已禁用', value: 1 },
    { label: '待审核', value: 2 }
]


const limitData = ref<any>({
    name: '',
    phone: '',
    company: '',
    state: null
})

import { groupGetService, groupUpdateService, groupCreateService, guardCreateService, guardGetService, guardReviewService, guardUpdateService, guardrePassService } from "@/api/user.ts";

const groupData = ref<any[]>([]);

const groupGet = async () => {
    const result = await groupGetService();
    groupData.value = result.data;

}

const getGuard = async () => {

    const parmas = new URLSearchParams();
    parmas.append("curren", currentPage4.value.toString())
    parmas.append("guardName", limitData.value.name)
    parmas.append("phone", limitData.value.phone)
    parmas.append("company", limitData.value.company)
    parmas.append("state", limitData.value.state)
    const result = await guardGetService(parmas);

    tableData.value = result.data.items;
    pageTotle.value = result.data.total;

    for (let index = 0; index < groupData.value.length; index++) {
        const element = groupData.value[index];
        const gid = element.id;
        for (let index2 = 0; index2 < tableData.value.length; index2++) {
            const element = tableData.value[index2];
            const cid = element.cid;
            if (gid == cid) {
                tableData.value[index2].company = groupData.value[index].groupName;
            }
        }
    }
}
onMounted(() => {
    groupGet()
    getGuard()
})


let tableData = ref<User[]>([])
const handleEdit = (row: User) => {
    //深拷贝 不影响原本的那行数据
    guardForm.value = JSON.parse(JSON.stringify(row));
    guardForm.value.type = 2;
    visibleDrawer.value = true;
}



const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
    getGuard()
}


import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

const reviewFun = (row: any) => {
    if (row.state === 2) {
        ElMessageBox.alert('确定要通过' + row.guardName + "的申请吗？", '通过申请', {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: '确定',
            callback: async (action: Action) => {
                if (action === 'confirm') {
                    const parmas = new URLSearchParams();
                    parmas.append("id", row.id);
                    parmas.append("type", "0");
                    const result = await guardReviewService(parmas)
                    ElMessage.success(result.data ? '操作失败' : "操作成功")
                    getGuard()
                } else {
                    ElMessage.info('已取消操作')
                }

            },
        })
    } else {
        ElMessage.info("不需要审核")
    }

}

const disableFun = (row: any) => {
    if (row.state !== 1) {
        ElMessageBox.alert('确定要禁用' + row.guardName + "吗？", '禁用用户', {
            // if you want to disable its autofocus
            // autofocus: false,
            confirmButtonText: '确定',
            callback: async (action: Action) => {
                if (action === 'confirm') {
                    const parmas = new URLSearchParams();
                    parmas.append("id", row.id.toString());
                    parmas.append("type", "1");
                    const result = await guardReviewService(parmas)
                    ElMessage.success(result.data ? '操作失败' : "操作成功")
                    getGuard()
                } else {
                    ElMessage.info('已取消操作')
                }
            },
        })
    } else {
        ElMessageBox.alert('确定要解禁' + row.guardName + "吗？", '解禁用户', {

            confirmButtonText: '确定',
            callback: async (action: Action) => {
                if (action === 'confirm') {
                    ElMessage.success('操作成功')
                    const parmas = new URLSearchParams();
                    parmas.append("id", row.id);
                    parmas.append("type", "1");
                    const result = await guardReviewService(parmas)
                    ElMessage.success(result.data ? '操作失败' : "操作成功")
                    getGuard()
                } else {
                    ElMessage.info('已取消操作')
                }
            },
        })
    }
}

const rePassword = (row: any) => {

    ElMessageBox.alert('确定要重置' + row.guardName + "的用户密码吗？", '重置密码', {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: '确定',
        callback: async (action: Action) => {
            if (action === 'confirm') {
                const parmas = new URLSearchParams();
                parmas.append("id", row.id);
                const result = await guardrePassService(parmas)
                ElMessageBox.alert(row.guardName + "的用户密码为：\n"+result.data, '新密码', {
                    confirmButtonText: '确定',
                    callback: async (action: Action) => {
                        ElMessage.info('请妥善保管')
                    },
                })
            } else {
                ElMessage.info('已取消操作')
            }

        },
    })

}

const editGroup = (row: any) => {
    ElMessageBox.prompt('修改 ' + row.groupName + ' 组织名为:', '修改名称', {
        confirmButtonText: '确定修改',
        cancelButtonText: '取消',
        inputPlaceholder: row.groupName
    })
        .then(async ({ value }) => {
            const parmas = new URLSearchParams();
            parmas.append('id', row.id);
            parmas.append('groupName', value);
            const result: any = await groupUpdateService(parmas)
            ElMessage.success(result.data ? result.data : '修改成功')
            groupGet()

        })
        .catch((error) => {
            console.log(error);

            ElMessage({
                type: 'info',
                message: '取消操作',
            })
        })

}

const addDepart = () => {
    ElMessageBox.prompt('请输入你要创建的组织名称', '新增组织', {
        confirmButtonText: '创建',
        cancelButtonText: '取消'
    })
        .then(async ({ value }) => {
            const parmas = new URLSearchParams();
            parmas.append('groupName', value);

            const result: any = await groupCreateService(parmas)
            ElMessage.success(result.data ? result.data : '创建成功')
            groupGet()

        })
        .catch((error) => {
            console.log(error);

            ElMessage({
                type: 'info',
                message: '取消操作',
            })
        })
}

const addGuard = async () => {
    const result = await guardCreateService(guardForm.value)
    ElMessage.success(result.data ? result.data : '创建成功')
    getGuard()
    visibleDrawer.value = false
}

const updateGuard = async () => {
    const result = await guardUpdateService(guardForm.value);
    ElMessage.success(result.data ? result.data : '更新数据成功')
    getGuard()
    guardForm.value = {};
    visibleDrawer.value = false
}

const delectGuard = async () => {

}
</script>

<style lang="less">
.depart-main {
    height: calc(100vh - 100px);
    padding: 0;

    .box-card {
        height: calc(100vh - 100px);

        .card-header {
            display: flex;
            align-items: center;

            .add {
                margin-left: 60px;
                margin-right: 10px;
            }

            span {
                margin-right: 1px;
            }
        }

        .left-icon {
            width: 3px;
            height: 12px;
            margin-right: 5px;
            background-color: #365cd3;
            color: transparent;
        }

        .left-item {
            border-bottom: 1px solid rgba(128, 128, 128, 0.188);

            .left-box {
                display: flex;
                padding: 5px 0;
                justify-content: space-between;

                .left-text {
                    font-size: 14px;
                }

            }

            .right-box {
                display: grid;
                grid-template-columns: auto auto;
                gap: 10px;
                font-size: 12px;
                color: #365cd3;

                span {
                    cursor: pointer;
                }
            }
        }

        .top-bar {
            position: relative;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;

            span {
                font-size: 12px;
                margin: 0 5px;
                margin-left: 10px;
            }

            .right-box {

                background-color: white;
                position: absolute;
                right: 0;
                top: 0;
                box-sizing: border-box;
                padding-left: 20px;
                height: 50px;
                display: flex;
                align-items: center;
                margin-right: 10px;
            }


        }

        .fun-list {
            span {
                margin: 0 5px;
                cursor: pointer;
                font-size: 10px;
                color: #365cd3;


            }
        }

        .el-input__wrapper {
            padding: 0;
            margin: 0;

            input {
                margin-left: 10px;
                margin-top: 1px;
                margin-bottom: 1px;
            }


        }

        .el-input__suffix {
            margin-left: 30px;
            padding: 0;
            margin: 0;

            .el-input__suffix-inner {

                font-size: inherit;
                padding: 0;
                margin: 0;
            }
        }
    }
}
</style>