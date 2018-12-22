<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style>
#app {
	font-family:PingFangSC-Regular;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	height: 100%;
}
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}
.iconfont {
	font-family:"iconfont" !important;
	font-size:18px;
	font-style:normal;
	margin-right: 5px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.view-container {
	height: 100%;
}
.main-container {
    background-color:#f0f2f5;
}
.op-container {
    background-color:#f0f2f5;
    margin: 0 30px;
    padding: 0;
}
.zyheader {
	height:80px;
	padding:0;
}
.show-box {
    padding:0 40px 40px 40px;
}
.show-box-title {
    text-align: left;
    font-size: 22px;
    margin-bottom: 30px;
}
.mouse_pointer {
	cursor: pointer;
}
</style>
