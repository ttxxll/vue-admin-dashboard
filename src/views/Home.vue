<template>
    <div class="home-page">
      <!-- 标签栏，可根据实际需求用 Element UI 等组件实现 -->
      <el-tag-group class="tag-group">
        <el-tag type="primary">首页</el-tag>
        <el-tag>商户业务</el-tag>
        <el-tag>商户管理</el-tag>
        <el-tag>充值记录</el-tag>
      </el-tag-group>
      <!-- 统计卡片区域 -->
      <el-row :gutter="20" class="stats-card-row">
        <el-col :span="6">
          <el-card class="stat-card">
            <div slot="header">今日收卡</div>
            <div class="stat-value">0</div>
            <i class="el-icon-picture el-icon--right"></i>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div slot="header">今日取卡</div>
            <div class="stat-value">0</div>
            <i class="el-icon-shopping-cart-full el-icon--right"></i>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div slot="header">今日收码</div>
            <div class="stat-value">0</div>
            <i class="el-icon-trash el-icon--right"></i>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div slot="header">今日取码</div>
            <div class="stat-value">0</div>
            <i class="el-icon-plug el-icon--right"></i>
          </el-card>
        </el-col>
      </el-row>
      <!-- 图表区域 -->
      <el-card class="chart-card">
        <div slot="header">最近一周数据统计</div>
        <div id="data-chart" style="width: 100%; height: 400px;"></div>
      </el-card>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts'
  export default {
    mounted() {
      this.renderChart()
    },
    methods: {
      renderChart() {
        const chartDom = document.getElementById('data-chart')
        const myChart = echarts.init(chartDom)
        const option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['收卡', '取卡', '收码', '取码']
          },
          xAxis: {
            type: 'category',
            data: ['2025-07-13', '2025-07-14', '2025-07-15', '2025-07-16', '2025-07-17', '2025-07-18', '2025-07-19']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '收卡',
              type: 'line',
              data: [2000, 2000, 0, 0, 0, 0, 0],
              color: '#48b0f7'
            },
            {
              name: '取卡',
              type: 'line',
              data: [2000, 3000, 11000, 0, 0, 0, 0],
              color: '#71e6a8'
            },
            {
              name: '收码',
              type: 'line',
              data: [1000, 1500, 6000, 0, 0, 0, 0],
              color: '#666ee8'
            },
            {
              name: '取码',
              type: 'line',
              data: [0, 0, 0, 0, 0, 0, 0],
              color: '#b393f5'
            }
          ]
        }
        myChart.setOption(option)
      }
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    padding: 20px;
  }
  .tag-group {
    margin-bottom: 20px;
  }
  .stats-card-row {
    margin-bottom: 20px;
  }
  .stat-card {
    text-align: center;
  }
  .stat-value {
    font-size: 24px;
    margin: 10px 0;
  }
  .chart-card {
    height: calc(100% - 40px);
  }
  </style>