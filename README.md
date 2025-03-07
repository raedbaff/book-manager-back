# 📚 Book Management API (Backend)

- This is the backend for the Full Stack Engineering Test, built with NestJS, GraphQL, and SQLite. It provides authentication via Auth0 and allows admins to manage books through a GraphQL API.

## 🚀 Features

- 🔐 Authentication & Authorization using Auth0
- 📖 CRUD Operations (Create, Read, Update, Delete) for books
- 🏗 GraphQL API with Apollo Server
- 🛢 SQLite Database (Stored in a file)
- 🎯 NestJS with TypeScript

## 🛠️ Tech Stack

- NestJS – Backend framework
- GraphQL (Apollo Server) – API communication
- Prisma – ORM for SQLite
- Passport.js – Authentication middleware
- Auth0 – Authentication & Authorization
- TypeScript – Type safety

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone <repo_url>
cd backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run database migrations
```bash
npx prisma migrate dev --name init
```

### 5️⃣ Start the development server
```bash
npm run start:dev
```

### ⚡ Usage

### 🔌 GraphQL Playground

After starting the server, go to:

- http://localhost:3000/graphql

#### you can send queries like :

```graphql
query {
  findAllBooks {
    id
    name
    description
  }
}
```

## 🔐 Authentication & Authorization

- This API uses Auth0 for authentication.
- To access protected endpoints, include a valid Auth0 JWT token in your request headers:

```json
{
  "Authorization": "Bearer YOUR_ACCESS_TOKEN"
}
```
