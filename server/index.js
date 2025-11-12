import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `QLeap Contact - ${name}`,
      text: message,
    })

    res.status(200).json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Something went wrong!' })
  }
})

app.get('/', (req, res) => {
  res.status(200).json({
    message: '🩺 QLeap.ai backend is healthy and running smoothly.',
    status: 'OK',
    uptime: `${process.uptime().toFixed(2)}s`,
  });
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
