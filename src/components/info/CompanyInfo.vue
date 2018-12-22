<template>
    <div class="show-box">
        <p class="show-box-title">公司信息</p>
        <img src="../../assets/cbg.png" width="100%">
        <el-row type="flex" justify="space-between" class="content">
            <el-col :span="8">
                <el-card>
                    <div class="ctit"><span>公司介绍</span><i class="el-icon-edit-outline"></i></div>
                    <p>春秋航空（Spring Airlines）股份有限公司，是首个中国民营资本独资经营的低成本航空公司专线，也是首家由旅行社起家的廉价航空公司。春秋航空是中国首批民营航空公司之硕果仅存者，是国内首家低成本航空公司,2011 年净利润逾4.7 亿元，成为当前国内最成功的低成本航空公司，总部在上海，在上海虹桥机场、上海浦东机场、石家庄正定机场、沈阳桃仙机场、扬州泰州国际机场设有基地。春秋航空有限公司自2004年5月26日得到当时的中国民航总局（现交通部中国民用航空局）批准后开始筹建，由春秋旅行社创办，注册资本8000万元人民币，约一年左右成功开航。首航班机于2005年7月18日上午由上海虹桥机场起飞前往山东烟台。</p>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card>
                    <div class="ctit"><span>课程大纲</span><i class="el-icon-edit-outline"></i></div>
                    <p>春秋航空（Spring Airlines）股份有限公司，是首个中国民营资本独资经营的低成本航空公司专线，也是首家由旅行社起家的廉价航空公司。春秋航空是中国首批民营航空公司之硕果仅存者，是国内首家低成本航空公司,2011 年净利润逾4.7 亿元，成为当前国内最成功的低成本航空公司，总部在上海，在上海虹桥机场、上海浦东机场、石家庄正定机场、沈阳桃仙机场、扬州泰州国际机场设有基地。春秋航空有限公司自2004年5月26日得到当时的中国民航总局（现交通部中国民用航空局）批准后开始筹建，由春秋旅行社创办，注册资本8000万元人民币，约一年左右成功开航。首航班机于2005年7月18日上午由上海虹桥机场起飞前往山东烟台。</p>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card>
                    <div class="ctit"><span>师资力量</span><i class="el-icon-edit-outline"></i></div>
                    <p>春秋航空（Spring Airlines）股份有限公司，是首个中国民营资本独资经营的低成本航空公司专线，也是首家由旅行社起家的廉价航空公司。春秋航空是中国首批民营航空公司之硕果仅存者，是国内首家低成本航空公司,2011 年净利润逾4.7 亿元，成为当前国内最成功的低成本航空公司，总部在上海，在上海虹桥机场、上海浦东机场、石家庄正定机场、沈阳桃仙机场、扬州泰州国际机场设有基地。春秋航空有限公司自2004年5月26日得到当时的中国民航总局（现交通部中国民用航空局）批准后开始筹建，由春秋旅行社创办，注册资本8000万元人民币，约一年左右成功开航。首航班机于2005年7月18日上午由上海虹桥机场起飞前往山东烟台。</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api'
export default {
    name: 'CompanyInfo',
    mounted() {
    }
}
</script>

<style scoped>
.show-box {
    max-width: 1100px;
}
.content {
    position: relative;
    top: -50px;
    margin: 0 20px;
}
.ctit{
    display: flex;
    justify-content: space-between;
    margin: 20px 10px 30px 10px;
    font-size: 22px;
}
.ctit i {
    color: #999;
    cursor: pointer;
}
.content p {
    line-height: 30px;
    text-indent: 10%;
    font-size: 14px;
    color: #555;
}
</style>