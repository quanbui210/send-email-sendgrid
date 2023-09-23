const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
const sendEmailTest = async(req, res) => {
    let testAccount = nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'brando31@ethereal.email',
            pass: '6FEbFeUXrAHTPtu68t'
        }
    })
    let info = await transporter.sendMail({
        from: '"Quan Bui <quanbui021001@gmail.com>"',
        to: 'bdq0210@gmail.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    })
    res.json(info)
}

const sendEmail = async(req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'bdq0210@gmail.com',
        from: 'quanbui021001@gmail.com',
        subject: 'Sending Email',
        text: 'I am testing the email feature with sendgrid',
        html: '<h1>SEND EMAILLLLLL</h1>'
    }
    const info = await sgMail.send(msg)
    res.json(info)
}

module.exports = sendEmail