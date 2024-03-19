<template>
    <div class="screen-menu">
        <el-button  v-for="item in items" size="large" :key="item.id" :type="item.id==menuNum?'primary' : ''" @click="switchMenu(item)">{{item.name}}</el-button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const  menuNum = ref<number>(1);

const items = ref<any[]>([
    {
        id: 1,
        name: '一个问题盯到底',
        value: 'oneQuestion'
    },
    {
        id: 2,
        name: '警企联训',
        value: 'ploceTrain'
    },
    {
        id: 3,
        name: '矛盾联调',
        value: 'invesTigation'
    },
    {
        id: 4,
        name: '警情联处',
        value: 'policeOffice'
    },
    {
        id: 5,
        name: '问题联治',
        value: 'jointProblems'
    },
    {
        id: 6,
        name: '警保联勤',
        value: 'policeLogistics'
    },
    {
        id: 7,
        name: '今日值班',
        value: 'ondutyToday'
    },
    {
        id: 8,
        name: '三提及',
        value: 'threeMentions'
    }
])


import { useRoute } from 'vue-router';
const constomRouter = useRoute();
import router from '@/router/index.ts';

onMounted(()=>{
    //获取路由对象实例 因为刷新会变为默认 但是路由有缓存的实例对象
    const index = items.value.findIndex((obj)=>obj.value==constomRouter.name);
    menuNum.value = items.value[index].id;
    
})
const switchMenu = (item:any)=>{
    menuNum.value = item.id;
    // console.log(item.name);
    router.push({name:item.value})
}

</script>

<style scoped>

.screen-menu {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

</style>