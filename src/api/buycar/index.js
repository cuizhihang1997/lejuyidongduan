
import request from  "@/api/requse.js"



function addOrders(data) {
    return request({
      url: '/api/leju/front/order/addOrders',
      method: 'post',
      data
    })
}



export default  { addOrders } 
