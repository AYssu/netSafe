<script lang="ts" setup>
import { ref } from 'vue'
import { Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)




const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}


const uploadSuccess = (result: any) => {
    dialogImageUrl.value = result.data
}
</script>
<template>
    <el-upload action="/api/file/upload" list-type="picture-card" :limit="1" :show-file-list="true" :auto-upload="true"
        name="file" :on-success="uploadSuccess">
        <el-icon>
            <Plus />
        </el-icon>

        <template #file="{ file }">
            <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <el-icon><zoom-in /></el-icon>
                    </span>
                </span>
            </div>
            <img :src="dialogImageUrl" style="width: 100px;height: 100px;" />
        </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

</template>
