import nodemailer from 'nodemailer';
import 'dotenv/config.js'

const transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth :{
        user : process.env.emailUser,
        pass : process.env.emailpass
    }
})

function sendEmail(username, email, bookemail, dueDate){
    const mailOptions = {
        from: process.env.emailUser,
        to: email,
        subject:'Reminder: Book Due Date Approaching',
        html : `
                <html>
                    <head>
                        <meta charset="UTF-8">
                        <title>Library Due Date Reminder</title>
                    </head>
                    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                        <table style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px #ccc;">
                            <tr>
                                <td>
                                    <h2 style="color: #333;">Library Due Date Reminder</h2>
                                    <p>Dear <strong>${ username }</strong>,</p>
                                    <p>This is a friendly reminder that your borrowed book is due soon.</p>
                                    <p><strong>Book:</strong>"${ bookemail }"</p>
                                    <p><strong>Due Date:</strong> ${ dueDate }</p>
                                    <p>Please return or renew the book before the due date to avoid late fees.</p>
                                    <p>Thank you for using our library services!</p>
                                    <p>Best regards,</p>
                                    <p><strong>Your Library Team</strong></p>
                                </td>
                            </tr>
                        </table>
                    </body>
                </html>
                `
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else { 
            console.log("Email sent:", info.response);
        }
})
}

export default sendEmail 
