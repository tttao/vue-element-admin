<template>
  <div class="app-container">
    <div style="margin:0 0 10px 0px">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-circle-plus-outline"
        @click="dialogNewVisible = true"
      >
        Nouvelle source
      </el-button>

    </div>
    <el-dialog :visible.sync="dialogNewVisible" title="Nouvelle source de données" placeholder="Dialogue">
      <el-form :label-position="right" label-width="100px" :model="formLabelAlign" placeholder="Nouvelle source de données">
        <el-form-item label="Nom (pattern fichier)">
          <el-input size="small" />
        </el-form-item>
        <el-form-item label="Description">
          <el-input />
        </el-form-item>
        <el-form-item label="Priorité">
          <template>
            <el-select :value="priorite" placeholder="Select Priorite" @input="dispatchPriorite">
              <el-option
                v-for="item in priorites"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-circle-plus-outline"
              disabled
              @click="dialogNewVisible = false"
            >
              Propriétés avancées
            </el-button>
          </template>
        </el-form-item>
        <el-form-item label="Type">
          <template>
            <el-select :value="type" placeholder="Select Type" @input="dispatchType">
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-circle-plus-outline"
              disabled
              @click="dialogNewVisible = false"
            >
              Propriétés avancées
            </el-button>
          </template>
        </el-form-item>
        <el-form-item label="Format">
          <template>
            <el-select :value="format" placeholder="Select Format" @input="dispatchFormat">
              <el-option
                v-for="item in formats"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-circle-plus-outline"
              disabled
              @click="dialogNewVisible = false"
            >
              Propriétés avancées
            </el-button>
          </template>
        </el-form-item>
        <el-form-item />
      </el-form>
      <el-button
        type="success"
        size="small"
        icon="el-icon-check"
        @click="dialogNewVisible = true"
      >
        OK
      </el-button>
      <el-button
        type="danger"
        size="small"
        icon="el-icon-close"
        @click="dialogNewVisible = true"
      >
        Annuler
      </el-button>
    </el-dialog>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Nom">
        <template slot-scope="{row}">
          <span>{{ row.nom }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Description">
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Priorité">
        <template slot-scope="{row}">
          <svg-icon v-for="n in + row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Statut" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Type" width="110">
        <template slot-scope="{row}">
          <span>{{ row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Format" width="110">
        <template slot-scope="{row}">
          <span>{{ row.format }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/data-source'

export default {
  name: 'InlineEditTable',
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
  data() {
    return {
      priorite: '',
      type: '',
      format: '',
      dialogNewVisible: false,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      formats: [{ value: 'CSV', label: 'CSV' }, { value: 'JSON', label: 'JSON' }, { value: 'XML', label: 'XML' }, { value: 'Autre', label: 'Autre' }],
      types: [{ value: 'Fichier', label: 'Fichier' }, { value: 'REST API', label: 'REST API' }, { value: 'Autre', label: 'Autre' }],
      priorites: [{
        value: 'Haute',
        label: 'Haute'
      }, {
        value: 'Normale',
        label: 'Normale'
      }, {
        value: 'Basse',
        label: 'Basse'
      }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
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
