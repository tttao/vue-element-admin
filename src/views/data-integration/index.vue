<template>
  <div class="app-container">
    <div style="margin:0 0 10px 0px">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-refresh"
        @click="getList()"
      >
        Refresh
      </el-button>

    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="Nom" width="300">
        <template slot-scope="{row}">
          <span>{{ row.fileName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Statut" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Data Count" width="150">
        <template slot-scope="{row}">
          <span>{{ row.count }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Start Time" width="150">
        <template slot-scope="{row}">
          <span>{{ row.start | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="End Time" width="150">
        <template slot-scope="{row}">
          <span>{{ row.end | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/data-integration'

export default {
  name: 'InlineEditTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        SUCCESS: 'success',
        ERROR: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      dialogNewVisible: false,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      this.list = data
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    },

    dispatchPriorite(e) {
      this.$emit('input', e)
      this.priorite = e
    },

    dispatchFormat(e) {
      this.$emit('input', e)
      this.format = e
    },

    dispatchType(e) {
      this.$emit('input', e)
      this.type = e
    }
  }
}
</script>

<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 10px;
  }
</style>
