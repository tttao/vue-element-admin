import Mock from 'mockjs'

const SecurityList = []
const count = 1

for (let i = 0; i < count; i++) {
  SecurityList.push(Mock.mock({
    id: '1',
    nom: 'espaces_vert_20200220.csv',
    description: 'OpenData : Urbanisme (Espaces verts Paris)',
    date_integration: '2020/02/20',
    status : 'OK',
    format: 'CSV',
  }))
}


export default [
  {
    url: '/vue-element-admin/data-security/list',
    type: 'get',
    response: config => {
      const { importance, status, title, page = 1, limit = 20, sort } = config.query

      let mockList = SecurityList.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (status && item.status !== status) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
