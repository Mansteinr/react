import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
        JsonP(options.url, {
            param: 'callback'
        }, function (err, response) {
            if (response.status === 'success') {
                resolve(response);
            } else {
                reject(response.messsage);
            }
        })
    })
  }

  static ajax (url, method = 'get', params = {}) {
    let loading = null, baseApi = 'https://www.easy-mock.com/mock/5b62c926061b7876217a9de3/api'
    loading = document.getElementById('ajaxLoading')
    loading.style.display = 'block'
    return new Promise((resolve, reject) => {
      axios({
        url,
        method,
        baseURL: baseApi,
        params
      }).then((response, err) => {
        loading.style.display = 'none'
        if (response.status === 200) {
          if (response.data.code === 0) {
            resolve(response.data)
          } else {
            Modal.info({
              title: '提示',
              content: response.data.msg
            })
          }
        } else {
          reject(err)
        }
      })
    }).catch(function (err) {
      loading.style.display = 'none'
      Modal.info({
        title: '提示',
        content: err.messsage
      })
    })
  }
}