// import prisma from "../prisma/client"

async function getAll() {
  //return prisma.user.findMany();
  return Promise.resolve([]);
}

async function getById(id) {
  //return prisma.user.findUnique({ where: { id } })
  return Promise.resolve({ userId: id });
}

async function create(data) {
  //return prisma.user.create({ data })
  return Promise.resolve({ user: "OK" });
}

module.exports = { getAll, getById, create };
