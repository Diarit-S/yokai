 
const axios = require('axios')

exports.handler = async (event, context) => {
  try {
    const url = "https://api.netlify.com/api/v1/sites/0f726a40-a5e0-4a73-ae78-a10f3bc2b770"
    
    const apiKey = "7g-eh3IEQwbeKYrZFiNy8sJwRYVpIlVMIV5ZXeJQ1Xo"
    
    return axios({
      method: 'post',
      url: url,
      data: {
        build_settings: {env: {TEST_ENV: 'depuislafunction'}},
      },
      headers: {
        Authorization: `Bearer ${apiKey}`
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
    
    
    
    
    
    
    
    
    
    
//     const email = event.queryStringParameters.email
//     if (!email) {
//       return {
//         statusCode: 500,
//         body: 'email query paramter required'
//       }
//     }

//     return axios({
//       method: 'post',
//       url: 'https://us1.api.mailchimp.com/3.0/lists/20e9588e46/members/',
//       data: {
//         email_address: email,
//         status: 'subscribed'
//       },
//       auth: {
//         username: 'anythingreally',
//         password: process.env.MC_API
//       }
//     })
      
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
