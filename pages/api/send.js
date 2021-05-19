const sgMail = require('@sendgrid/mail')

export default async function Send(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message, name } = req.body
  const recipient = process.env.NEXT_EMAIL_RECIPIENT
  const sender = process.env.NEXT_EMAIL_SENDER
  const content = {
    to: recipient,
    from: sender,
    subject: `Website: Neue Nachricht von - ${name}`,
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