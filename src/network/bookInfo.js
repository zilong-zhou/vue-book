import axios from 'axios'

export function selectBookInfoAll(currentPage) {
  console.log(currentPage);
  return axios ({
    method: 'post',
    url: "/book/selectBookInfoAll",
    data: {
      currentPage: currentPage
    }
  })
}

