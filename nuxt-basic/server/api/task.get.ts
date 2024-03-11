import { PrismaClient } from "@prisma/client"

// export default defineEventHandler(async(event) => {
//   const prisma = new PrismaClient();
//   const method = event.node.req.method;

//   if(method === 'GET') {
//     const tasks = await prisma.task.findMany();
//     return tasks
//   }
//   if(method === 'POST') {
//     const body = await readBody(event)
//     const newTask = await prisma.task.create({
//       data: {
//         task: body.task,
//         completed: false
//       }
//     })
//     return newTask
//   }
// })

export default defineEventHandler(async(event) => {
  const prisma = new PrismaClient();
  const tasks = await prisma.task.findMany();
  return tasks
})