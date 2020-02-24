<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="Processing options">
        <div style="margin:0 0 10px 0px"><el-checkbox>Data Transformation</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Data Cleaning</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Pivoting and Reshaping</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Renaming Variables</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Filtering Outliers</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Data Wrangling and Merging</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Check Data Quality</el-checkbox></div>
      </el-tab-pane>
      <el-tab-pane label="Advanced properties" disabled />
    </el-tabs>
    <el-button
      type="success"
      size="small"
      icon="el-icon-s-tools"
    >
      Launch data processing
    </el-button>
  </div>
</template>
