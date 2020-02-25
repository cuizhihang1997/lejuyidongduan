
import request from  "@/api/requse.js"



function doAdd(data) {
    return request({
      url: '/api/leju/front/address/save',
      method: 'post',
      data
    })
}


export default  { doAdd  } 
