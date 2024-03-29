const axios = require('axios')

exports.handler = async (event, context) => {
  try {
    const email = event.queryStringParameters.email
    if (!email) {
      return {
        statusCode: 500,
        body: 'email query paramter required'
      }
    }

    return axios({
      method: 'post',
      url: 'https://us1.api.mailchimp.com/3.0/lists/20e9588e46/members/',
      data: {
        email_address: email,
        status: 'subscribed'
      },
      auth: {
        username: 'anythingreally',
        password: process.env.MC_API
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
        return { statusCode: 503, body: JSON.stringify(err) }
      })
  } catch (err) {
    return { statusCode: 504, body: err.toString() }
  }
}
