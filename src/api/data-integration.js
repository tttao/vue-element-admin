import request from '@/utils/realRequest'
import { base_url } from '@/api/api-baseurl'

export function fetchList(query) {
  const url = base_url + '/log/all/'
  return request({
    url: url,
    method: 'get',
    params: query
  })
}
