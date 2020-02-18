<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<!-- <sign v-if="PageCur=='sign'"></sign> -->
		<!-- <colorbg v-if="PageCur=='colorbg'"></colorbg> -->
		<!-- <news v-if="PageCur=='news'"></news> -->
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<!-- <avatar v-if="PageCur=='avatar'"></avatar> -->
		<plugin v-if="PageCur=='plugin'"></plugin>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'text-green':'text-gray'">首页</view>
			</view>
			
		<!-- 	<view class="action" @click="NavChange" data-cur="sign">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur=='sign'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='sign'?'text-green':'text-gray'">签名</view>
			</view> -->

			<!-- <view class="action" @click="NavChange" data-cur="colorbg">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur=='colorbg'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='colorbg'?'text-green':'text-gray'">颜色</view>
			</view> -->
			
			
			
			
			
			
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
			</view>
			
			
			<!-- <view class="action" @click="NavChange" data-cur="avatar">
					<view class='cuIcon-cu-image'>
						<image :src="'/static/tabbar/basics' + [PageCur == 'avatar'?'_cur':''] + '.png'"></image>
					</view>
					<view :class="PageCur=='avatar'?'text-green':'text-gray'">扩展</view>
				</view> -->
			<!--  -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log(e.currentTarget.dataset.cur)
			}
		},
		//	转发
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
		      title: '个性签名居中',
		      path: ''
		    }
		}
		// 
	}
</script>

<style>

</style>
