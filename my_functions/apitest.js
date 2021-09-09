const axios = require('axios')

exports.handler = async (event, context) => {
  try {
    return axios({
      method: 'post',
      url: 'https://api.netlify.com/api/v1/sites/0f726a40-a5e0-4a73-ae78-a10f3bc2b770/builds',
      headers: {
        Authorization: 'Bearer 7g-eh3IEQwbeKYrZFiNy8sJwRYVpIlVMIV5ZXeJQ1Xo'
      }
    })
      .then(res => {
        return {
          statusCode: 200,
          body: JSON.stringify(res.data)
        }
      })
      .catch(err => {
        console.log('returning from here', err.response.data.detail)
        return { statusCode: 500, body: JSON.stringify(err.response.data) }
      })
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
