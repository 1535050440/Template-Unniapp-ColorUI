<template>
	<view>
		<cu-custom :bgColor="bgColorFind" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">一键换色</block>
		</cu-custom>
		111111111111111111111111111111111111111111111111111111111111111111
		<!-- <view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>淡色背景
			</view>
		</view>
		<view class="grid col-3 bg-white padding-sm">
			<view class="padding-sm" v-for="(item,index) in ColorList" :key="index" v-if="index<12">
				<view class="padding radius text-center light" :class="'bg-' + item.name" @click="onCheckBgColor('bg-' + item.name)">
					<view class="text-lg">{{item.title}}</view>
					<view class="margin-top-sm text-Abc">{{item.name}}</view>
				</view>
			</view>
		</view> -->
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>渐变背景
			</view>
		</view>
		<view class="grid col-2 padding-sm">
			<view class="padding-sm" v-for="(item,index) in ColorBgList" :key="index">
				<view class="padding radius text-center shadow-blur" :class="item.bgColor" @click="onCheckBgColor(item.bgColor)">
					<view class="text-lg">{{item.text}}</view>
					<view class="margin-top-sm text-Abc">{{item.colorText}}</view>
				</view>
			</view>
		</view>
		
		<view class="cu-tabbar-height"></view>
		
	
	</view>
</template>


<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				bgColorFind: this.bgColorFind,
				ColorList: this.ColorList,
				ColorBgList: this.ColorBgList,
				ad_show: true
			}
		},
		created() {
			this._created()
		},
		_created(){
			this.ad_show = this.$isAd
		},
		methods:{
			onCheckBgColor(e){
				console.log(e)
				Vue.prototype.bgColorFind = e
				this.bgColorFind = e
			}
		}
	}
</script>

<style>
</style>
