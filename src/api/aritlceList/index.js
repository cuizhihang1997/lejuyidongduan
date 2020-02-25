
import request from  "@/api/requse.js"



function getList(data) {
    return request({
      url: '/api/leju/front/find/aritlceList',
      method: 'get',
      data
    })
}

function getDetil(data) {
    return request({
      url: '/api/leju/front/address/detail',
      method: 'post',
      data
    })
}


export default  { getList  } 
