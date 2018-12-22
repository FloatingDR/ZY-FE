<template>
    <div class="show-box">
        <p class="show-box-title">论文上传</p>
        <br>
        <el-card :body-style="{padding : '40px'}"  style="text-align:left; width: 800px;">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="题目：">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small"><i class="el-icon-upload2"></i> 点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">支持拓展名：.rar, .zip, .doc, .pdf, .jpg...</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="任务书：">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small"><i class="el-icon-upload2"></i> 点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">支持拓展名：.rar, .zip, .doc, .pdf, .jpg...</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="开题报告：">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small"><i class="el-icon-upload2"></i> 点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">支持拓展名：.rar, .zip, .doc, .pdf, .jpg...</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="论文：">
                    <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">支持拓展名：.rar, .zip, .doc, .pdf, .jpg...</div>
                    </el-upload>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'PaperUpload',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>


<style scoped>
.el-icon-upload2 {
    font-size: 14px;
}
.el-upload__tip {
    color: rgba(0,0,0,0.45);
}
</style>
