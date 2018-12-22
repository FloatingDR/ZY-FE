import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'

import ZteacherInfo from '@/views/info/Zteacher'
import WteacherInfo from '@/views/info/Wteacher'
import StudentInfo from '@/views/info/Student'
import ClassInfo from '@/views/info/Class'
import CompanyInfo from '@/views/info/Company'
import ImportInfo from '@/views/info/Import'

import CourseQuery from '@/views/course/Query'
import CourseSetting from '@/views/course/Setting'

import ScoreQuery from '@/views/score/Query'
import ScoreCollection from '@/views/score/Collection'
import ScoreEdit from '@/views/score/Edit'

import PaperView from '@/views/paper/View'
import PaperUpload from '@/views/paper/Upload'
import TeacherAssign from '@/views/paper/Assign'

import Query from '@/views/Query'
import Apply from '@/views/Apply'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Index
		}, {
			path: '/login',
			component: Index
		}, {
			path: '/info',
			component: ZteacherInfo
		}, {
			path: '/info/zteacher',
			component: ZteacherInfo
		}, {
			path: '/info/wteacher',
			component: WteacherInfo
		}, {
			path: '/info/student',
			component: StudentInfo
		}, {
			path: '/info/class',
			component: ClassInfo
		}, {
			path: '/info/company',
			component: CompanyInfo
		}, {
			path: '/info/import',
			component: ImportInfo
		}, {
			path: '/course',
			component: CourseQuery
		}, {
			path: '/course/query',
			component: CourseQuery
		}, {
			path: '/course/setting',
			component: CourseSetting
		}, {
			path: '/score',
			component: ScoreQuery
		}, {
			path: '/score/query',
			component: ScoreQuery
		}, {
			path: '/score/collection',
			component: ScoreCollection
		}, {
			path: '/score/edit',
			component: ScoreEdit
		}, {
			path: '/paper',
			component: PaperView
		}, {
			path: '/paper/view',
			component: PaperView
		}, {
			path: '/paper/upload',
			component: PaperUpload
		}, {
			path: '/paper/assign',
			component: TeacherAssign
		}, {
			path: '/query',
			component: Query
		}, {
			path: '/apply',
			component: Apply
		}
	]
})
