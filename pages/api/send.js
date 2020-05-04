const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message, name } = req.body

  const content = {
    to: 'thomas.mueseler@gmail.com',
    from: {email: 'rotpunkt.dev@gmail.com', name: 'Website Nachrichtenformular'},
    subject: `New Message From - ${name} (${email})`,
    reply_to: `${email}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Nachricht erfolgreich verschickt.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Leider ging was schief :(')
  }
}