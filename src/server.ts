import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  return res.json({ status: 'OK' })
})

app.listen(PORT, () => console.log(`🔥 running on http://localhost:${PORT}`))
