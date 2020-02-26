<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="Configuration générale">
        <div style="margin:0 0 10px 0px"><el-checkbox>API</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>FTP</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Batch (extractions)</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>JDBC/ODBC</el-checkbox></div>
      </el-tab-pane>
      <el-tab-pane label="Configuration API" disabled />
      <el-tab-pane label="Configuration FTP" disabled />
      <el-tab-pane label="Configuration Batch" disabled />
      <el-tab-pane label="Configuration JDBC/ODBC" disabled />
      <el-tab-pane label="Droits d'accès / Permissions Jeux de données" disabled />
    </el-tabs>
    <el-button
      type="success"
      size="small"
      icon="el-icon-check"
    >
      Appliquer
    </el-button>
  </div>
</template>
