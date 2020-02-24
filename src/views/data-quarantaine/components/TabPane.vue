<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="Chargement des données..."
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Nom">
      <template slot-scope="scope">
        <span>{{ scope.row.nom }}</span>
      </template>
    </el-table-column>

    <el-table-column width="380px" align="center" label="Description">
      <template slot-scope="scope">
        <span>{{ scope.row.description }}</span>
      </template>
    </el-table-column>

    <el-table-column width="80px" align="center" label="Format">
      <template slot-scope="scope">
        <span>{{ scope.row.format }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Date intégration">
      <template slot-scope="scope">
        <span>{{ scope.row.date_integration }}</span>
      </template>
    </el-table-column>

    <el-table-column width="150px" align="center" label="Statut intégration">
      <template slot-scope="scope">
        <span>{{ scope.row.status }}</span>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import { fetchList } from '@/api/data-security'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    status: {
      type: String,
      default: 'OK'
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        status: this.status,
        sort: '+id'
      },
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      this.$emit('create') // for test
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.loading = false
      })
    }
  }
}
</script>

