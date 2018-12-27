export default {
  formatDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return date.getUTCFullYear() + '-' + (date.getMonth() + 1) + '-' + add(date.getDate()) + ' ' + add(date.getHours()) + ':' + add(date.getMinutes()) + ':' + add(date.getSeconds())
  }
}
function add (val) {
  return val < 10 ? '0'+val : val
}