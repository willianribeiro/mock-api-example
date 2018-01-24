import mockUtils from './mockUtils'
import postApiJson from './postApi.json'

// EXPORT
export default {
  list,
  get,
  save,
  remove
}

// API
function list() {
  const response = postApiJson.list
  return mockUtils.mockPromise(response)
}

function get(id) {
  const response = postApiJson.get
  return mockUtils.mockPromise(response)
}

function save(entry) {
  const response = postApiJson.save
  return mockUtils.mockPromise(response)
}

function remove(id) {
  const response = postApiJson.remove
  return mockUtils.mockPromise(response)
}
