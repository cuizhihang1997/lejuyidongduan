import request from  "@/api/requse.js"



function getBanners(data) {
    return request({
      url: '/api/leju/front/home/banners',
      method: 'get',
      data
    })
}



function getBrandList(data) {
  return request({
    url: '/api/leju/front/home/brandList',
    method: 'get',
    data
  })
}


export default  { getBanners , getBrandList  } 