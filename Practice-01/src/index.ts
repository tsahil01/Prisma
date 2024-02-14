import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

interface User  {
    email: string
    password: string
    name?: string

}

async function createUser({email, password, name}:User) {
    const response = await prisma.user.create({
        data: {
            email: email,
            password: password,
            name: name
        }
    })
    console.log(response);
}

// createUser({
//     email: "s@s.a",
//     password: "12345"
// })


interface UpdateUser {
    password: string
    name: string
}

async function updateUser(email: string, {
    password,
    name
}: UpdateUser) {
    const res = await prisma.user.update({
        data: {
            name: name,
            password: password
        },
        where: {
            id: 1
        }
    })
    console.log(res);
}

// updateUser("s@s.a", {
//     password: "s1234",
//     name: "sahil"
// })


async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where: {
            email:username   
        }
    })
    console.log(res);
}

getUser("s@s.a")