import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface User {
    username: string,
    firstname: string,
    lastname: string
}

async function insertUser(userDetails:User) {
    const res = await prisma.user.create({
        data: userDetails
    })
    console.log(res);
}

insertUser({
    username: "random",
    firstname: "random",
    lastname: "random"
})
