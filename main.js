import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
// import Echarts from 'echarts'
import alarmClock from '@/components/alarm-clock/index.vue'
import upperTable from '@/components/upper-table/index.vue'
import footNav from '@/components/foot-nav/foot-nav.vue'
import chartCurve from '@/components/canvas-curve/index.vue'
import canvasGame from '@/components/canvas-game.vue'
import store from './store'
// 小程序分享
import share from 'static/share.js'

// import Vconsole from 'vconsole';
Vue.prototype.$store = store
// Vue.prototype.echarts = Echarts
Vue.mixin(share)
Vue.use(uView)
//点击音效
Vue.prototype.ScanAudio = function() {
	var music = null;
	music = uni.createInnerAudioContext(); //创建播放器对象
	music.src = "/package3/static/assets/speed/yinxiao.mp3";
	music.play(); //执行执行播放
	music.onEnded(() => {
		//音频播放结束
		music = null;

	});
}
// Vue.use(Echarts)
// let vConsole = new Vconsole();
// 如此配置即可
// uni.$u.config.unit = 'rpx'
Vue.prototype.naozhongKey = false
Vue.prototype.naozhongTimer = null
Vue.prototype.globalVideoCover = ''
Vue.config.productionTip = false
Vue.component('foot-nav', footNav)
Vue.component('alarm-clock', alarmClock);
Vue.component('upper-table', upperTable);
Vue.component("canvas-curve", chartCurve);
Vue.component("canvas-game", canvasGame);

App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
