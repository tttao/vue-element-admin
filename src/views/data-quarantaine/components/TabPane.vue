<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      label="Nom"
      width="200"
      element-loading-text="Chargement des données..."
    >
      <template slot-scope="scope">
        <span>{{ scope.row.fileName }}</span>
      </template>
    </el-table-column>

    <el-table-column width="380px" align="center" label="Description">
      <span>OpenData : Urbanisme (Espaces verts Paris)</span>
    </el-table-column>

    <el-table-column width="80px" align="center" label="Format">
      <span>CSV</span>
    </el-table-column>

    <el-table-column width="180px" align="center" label="Date intégration">
      <template slot-scope="scope">
        <span>{{ scope.row.start | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
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
import { fetchList } from '@/api/data-integration'

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
      default: 'SUCCESS'
    }
  },
  data() {
    return {
      dummyId: 1,
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
        this.list = response.data
        if (this.status === 'ERROR') {
          this.list = null
        }
        this.loading = false
      })
    }
  }
}
</script>

