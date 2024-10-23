import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign, verify} from 'hono/jwt'

const app = new Hono<{  // Generic mention types here
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>();

app.get('/', (c) => {
  return c.text('Hello, World!')
})

app.use('/api/v1/blog/*', async (c, next) => {
  // check if token present in header, if verified next() else 403
  const header = c.req.header("authorization")||""
  // Bearer token
  const token = header.split(" ")[1]

  const response = await verify(token, c.env.JWT_SECRET)
  if(response.id)
  {
    await next();
  }
  else{
    c.status(401)
    return c.json({error:"Unauthorized"})
  }

})

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL, // Get's this from wrangler.toml
  }).$extends(withAccelerate())
  
  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }
  })

  const token = await sign({id:user.id}, c.env.JWT_SECRET)

  return c.json({jwt: token})
})

app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    }
  })

  if(!user)
  {
    c.status(403);
    return c.json({error: "user not found"})
  }

  const jwt = await sign({id:user.id}, c.env.JWT_SECRET)
  return c.json({jwt})
})

// app.post('/api/v1/blog', (c) => {
// })

// app.put('/api/v1/blog', (c) => {
// })

// app.get('/api/v1/blog/:id', (c) => {
// })


export default app
