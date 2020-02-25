import request from  "@/api/requse.js"




function getDetil(data) {
    return request({
      url:'/api/leju/front/product/detail',
      method: 'get',
      data
    })
}


export default  { getDetil  } 