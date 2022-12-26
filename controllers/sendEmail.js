const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req,res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'brent72@ethereal.email',
            pass: 'FgnKpWE9ueJjcRm3A3'
        }
    });

    let info = await transporter.sendMail({
        from: "Sahil <sahilmangla7@gmail.com",
        to: 'bar@example.com',
        subject: 'Hello',
        html: '<h2>Sending Emails with Node.js</h2>'
    })

    res.json(info);
}

const sendEmail = async (req,res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: '2021csb1128@gmail.com', // Change to your recipient
    from: 'sahilmangla7@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    const info = await sgMail.send(msg)
    res.json(info)
}

module.exports = sendEmail