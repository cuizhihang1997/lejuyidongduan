import request from  "@/api/requse.js"



function getOrderList(data) {
    return request({
      url: '/api/leju/front/order/list',
      method: 'get',
      data
    })
}

function doBackOrder(data) {
  return request({
    url: '/api/leju/front/order/backOrder',
    method: 'post',
    data
  })
}


function doAllDone(data) {
  return request({
    url: '/api/leju/front/order/allDone',
    method: 'post',
    data
  })
}




export default  { getOrderList  ,doBackOrder  ,doAllDone} 