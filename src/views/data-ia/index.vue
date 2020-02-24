<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="Business mode">
        <div style="margin:0 0 10px 0px"><el-checkbox><b>Predict!</b> Définissez la valeur cible à prédire et laissez nos algorithmes vous trouver le meilleur moyen de prédire les valeurs futures de votre variable</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox><b>Classify!</b> A partir d'observations labellisées, laissez nos algorithmes prédire à quelle catégorie fait partie vos autres données en apprenant automatiquement à partir des données initialement téléchargées</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox><b>Cluster</b> Si vos données ne contiennent aucune indication de catégorie (données non labellisées), <b>Cluster!</b> se charge de créer la segmentation optimale des observations de vos données</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox><b>Cluster (basic)</b>Détecter uniquement les valeurs anormales</el-checkbox></div>
        <el-button
          type="success"
          size="small"
          icon="el-icon-s-tools"
        >
          Start Business Artificial Intelligence Engine
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="Expert mode">
        <div style="margin:0 0 10px 0px"><el-checkbox>KNN</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Decision Tree</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Random Forest</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Gradient Tree Boosting</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>XGBoost</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Extra Random Trees</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Support Machine Vector (SVM)</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Stochastic Gradient Descent</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Logistic Regression</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Neural Networks</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>KMeans</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Isolation Forest</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Mini-Batch KMeans</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Agglomerative Clustering</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Spectral Clustering</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>DBSCAN</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Gaussian Mixture</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>Interactive Clustering</el-checkbox></div>
        <div style="margin:0 0 10px 0px"><el-checkbox>One-Class SVM</el-checkbox></div>
        <el-button
          type="success"
          size="small"
          icon="el-icon-s-tools"
        >
          Start Expert Artificial Intelligence Engine
        </el-button>
      </el-tab-pane>
      <el-tab-pane label="Business mode advanced properties" disabled />
      <el-tab-pane label="Expert mode advanced properties" disabled />
    </el-tabs>

  </div>
</template>
