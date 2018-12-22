<template>
    <div class="cls-tab">
        <el-row>
            <el-col :span="5">
                <el-select v-model="option1" placeholder="学院"
                    @change="changeCollege($event)">
                    <el-option v-for="item in options1"
                        :key="item.collegeId"
                        :label="item.collegeName"
                        :value="item.collegeId">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :offset="1" :span="4">
                <el-select v-model="option2" placeholder="专业"
                    @change="changeMajor($event)">
                    <el-option v-for="item in options2"
                        :key="item.majorId"
                        :label="item.majorName"
                        :value="item.majorId">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :offset="1" :span="5">
                <el-select v-model="option3" placeholder="班级"
                    @change="changeClass($event)">
                    <el-option v-for="item in options3"
                        :key="item.classId"
                        :label="item.className"
                        :value="item.classId">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api'

export default {
    name: 'ChooseClassTab',
    data() {
        return {
            option1: null,
            option2: null,
            option3: null,
            options1: [],
            options2: [],
            options3: []
        }
    },
    mounted() {
        let that = this
        api.tab.getColleges().then(function(resp) {
            console.log(resp.data) 
            if(resp.data.code == 200) {
                that.options1 = resp.data.data
            }
        }).catch(function (err) {
            console.log(err)
        })
    },
    methods: {
        changeCollege(value) {
            this.options2 = []
            this.option2 = null
            this.options3 = []
            this.option3 = null
            this.options2 = this.options1.find(college => college.collegeId === value)['majors']
        },
        changeMajor(value) {
            let that = this
            that.options3 = []
            that.option3 = null
            api.tab.getClassesByMajor(value).then(function (resp) {
                console.log(resp.data)
                if (resp.data.code == 200) {
                    that.options3 = resp.data.data
                }
            }).catch(function (err) {
                console.log(err)
            })
        },
        changeClass(value) {
            this.$emit("listenClassChange", value)
        }
    }
}
</script>
