<template>
	<!--  v-if="$route.path" -->
	<view id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- <alarm-clock ref="alarmClockRefs"></alarm-clock> -->
	</view>
</template>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log(uni.getStorageSync("token"))
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			forum_id: ''
		}
	}
</script>

<style lang="scss">
	//隐藏滚动条
	// ::-webkit-scrollbar {
	// 	display: none;
	// 	width: 0 !important;
	// 	height: 0 !important;
	// 	-webkit-appearance: none;
	// 	background: transparent;
	// }

	/*每个页面公共css */
	@import "uview-ui/index.scss";

	* {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
	}

	a,
	input,
	button,
	li {

		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

		-webkit-tap-highlight-color: transparent;
		/*特殊的安卓4.0版本一下也会存在高亮效果，利用这点可做到消除*/

	}
</style>
