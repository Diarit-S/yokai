const axios = require('axios')
// var crypto = require('crypto')

exports.handler = async (event, context) => {
  try {
    // const email = event.queryStringParameters.email
    // if (!email) {
    //   return {
    //     statusCode: 500,
    //     body: 'email query paramter required'
    //   }
    // }

    // https://gist.github.com/kitek/1579117
    // let emailhash = crypto
    //   .createHash('md5')
    //   .update(email)
    //   .digest('hex')

    return axios({
      method: 'post',
      url: 'https://us1.api.mailchimp.com/3.0/lists/20e9588e46/members/',
      data: {
        email_address: 'polipol@polds.fr',
        status: 'subscribed'
      },
      auth: {
        username: 'anythingreally',
        password: 'b00ed0acc0c16fe38d494edd6d719bd0-us1'
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
