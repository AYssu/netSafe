<template>
    <div class="ondutyToday-main">
        <el-container>
            <el-card style="width: 600px;">
                <itleLayout info="今日值班"></itleLayout>
                <el-row>
                    <span>今日值班民警</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />

                </el-row>
                <el-row>
                    <span>值班辅警</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>所属企业</span>
                    <el-select size="small" v-model="value" placeholder="请输入" style="width: 140px" clearable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-row>

                <el-row>
                    <span>企业联勤安保负责人</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                </el-row>

                <el-row>
                    <span>在岗企业保安</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>人。</span>
                </el-row>
                <itleLayout info="值班占比" style="margin-top: 20px;"></itleLayout>
                <el-row>
                    <span>平安志愿者</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>人， 民辅警</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>人， 企业保安</span>
                    <el-input v-model="input" size="small" style="width: 80px;margin: 0 5px;" placeholder="" />
                    <span>人。</span>
                </el-row>

                <el-row justify="end">
                    <el-button type="primary">保存</el-button>
                </el-row>
            </el-card>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import itleLayout from '@/components/TitleLayout.vue'


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


const input = ref<any>()
</script>

<style scoped lang="less">
.ondutyToday-main {
    .el-row {
        margin-top: 15px;
    }

    .el-select {
        margin: 0 10px;
    }
}
</style>