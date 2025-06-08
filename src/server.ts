import { app } from './app'
import { env } from './env'

const port = env.PORT

app.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`HTTP Server is running on ${address}`)
})
