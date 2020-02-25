import request from '@/utils/realRequest'
import { base_url } from '@/api/api-baseurl'

export function fetchList(query) {
  return request({
    url: base_url + '/urbanisme/countByCodePostal/',
    method: 'get',
    params: query
  })
}
