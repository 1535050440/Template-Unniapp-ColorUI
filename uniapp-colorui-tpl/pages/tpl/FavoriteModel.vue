<template>
	<view style="">
		<!-- 收藏我的小程序start -->
		<view v-if="showModel"
		 @click="onClose"
		class="box" style="margin-top: 120upx;">
		  <view class='arrow'></view>
		  <view class='body' >
		    <text>{{text}}</text>
		  </view>
		</view>
		<!-- 收藏我的小程序end -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				showModel: true,
				secondNumber: 0
			}
		},
		props: {
			// 提示文字
			text: {
			  type: String,
			  default: '点击「添加小程序」，下次访问更便捷 ^_^'
			},
			// 几秒后关闭
			second: {
				type: Number,
				default: 6
			}
		},
		created() {
			console.log('☆☆☆☆☆☆---进入-我的收藏小程序组件--------☆☆☆☆☆☆')
			// 判断是否已经显示过（是否已存入缓存）
			console.log(this.text,this.second)
			const alertStorage = uni.getStorageSync('alertStorage');
			console.log(alertStorage)
			if (alertStorage) {
				//	已显示过，直接返回
				this.showModel = false
				return
			} else {
				//	未显示过，则存入缓存
				uni.setStorageSync('alertStorage', 'ture');
				this.secondNumber = this.second
				var interval = setInterval(() => {
				    --this.secondNumber
					console.log('倒计时：' + this.secondNumber)
				}, 1000)
				setTimeout(() => {
				   clearInterval(interval)
				   this.showModel = false
				}, this.second * 1000)
			}
		},
		methods:{
			// 显示全屏添加说明
			onClose: function () {
			  this.showModel = false
			  uni.setStorageSync('alertStorage', 'ture');
			}
			// 
		}
	}
</script>

<style>
	/*  */
	.box {
	  position: fixed;
	  top: 0;
	  /* left: 0; */
	  right: 0;
	  z-index: 999;
	  display: flex;
	  justify-content: flex-end;
	  align-items: flex-end;
	  flex-direction: column;
	  width: 600rpx;
	  opacity: 0.9;
	}
	.arrow {
	  width: 0;
	  height: 0;
	  margin-right: 120rpx;
	  border-width: 20rpx;
	  border-style: solid;
	  border-color:  transparent transparent #34b5e2 transparent;
	}
	.body {
	  background-color: #34b5e2;
	  box-shadow: 0 10rpx 20rpx -10rpx #34b5e2;
	  border-radius: 12rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 84rpx;
	  padding: 0 20rpx;
	  margin-right: 40rpx;
	}
	.body > text {
	  color: #FFF;
	  font-size: 28rpx;
	  font-weight: 400;
	}
	
	/*  */
</style>
