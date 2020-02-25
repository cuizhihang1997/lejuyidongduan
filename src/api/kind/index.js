import request from  "@/api/requse.js"



function getKindList(data) {
    return request({
      url: '/api/leju/front/kind/list',
      method: 'get',
      data
    })
}


export default  { getKindList  } 