import { App } from '@tinyhttp/app'

const app = new App()

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(3000)
