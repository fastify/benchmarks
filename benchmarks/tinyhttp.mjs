import { App } from '@tinyhttp/app'

const app = new App()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
