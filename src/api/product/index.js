import request from  "@/api/requse.js"



function getProductList(data) {
    return request({
      url: '/api/leju/front/product/list',
      method: 'get',
      data
    })
}


export default  { getProductList  } 