export default {
  formatDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getUTCFullYear() + '-' + (date.getMonth() + 1) + '-' + add(date.getDate()) + ' ' + add(date.getHours()) + ':' + add(date.getMinutes()) + ':' + add(date.getSeconds())
  },
  pagination (data, callback) {
    return {
      onChange: (current) => {
        callback(current)
      },
      current: data.result.page,
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal: () => {
        return `共${data.result.total}条`
      },
      showQuickJumper: true
    }
  }
}
function add (val) {
  return val < 10 ? '0'+val : val
}

