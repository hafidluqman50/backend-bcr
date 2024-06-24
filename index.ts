import 'dotenv/config'
import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  "@Controllers": `${__dirname}/app/Http/Controllers`,
  "@Repositories": `${__dirname}/app/Http/Repositories`,
  "@Services": `${__dirname}/app/Http/Services`,
  "@Middlewares": `${__dirname}/app/Http/Middlewares`,
  "@Requests": `${__dirname}/app/Http/Requests`,
  "@DTOs": `${__dirname}/app/DTOs`,
  "@Interfaces": `${__dirname}/app/Interfaces`,
  "@Models": `${__dirname}/app/Models`,
  "@Exceptions": `${__dirname}/app/Exceptions`,
  "@routes": `${__dirname}/routes`,
  "@config": `${__dirname}/config`
})

import '@routes/app'

console.log(`
  |       API ENDPOINT      | METHOD |        DESCRIPTION        |
  |-------------------------|--------|---------------------------|
  |--------------------------- CARS -----------------------------|
  | /api/cars               |   GET  | Get All Data Cars         |
  | /api/cars/:id           |   GET  | Get By Id Data Cars       |
  | /api/cars/              |  POST  | Post Data Cars            |
  | /api/cars/:id           |   PUT  | Update Data Cars By Id    |
  | /api/cars/:id           | DELETE | Delete Data Cars By Id    |
  | /api/cars/list-available|   GET  | Get List Available Cars   |
  | /api/cars/log-activity  |   GET  | Get Log Activity Cars     |
  |--------------------------- AUTH -----------------------------|
  | /api/super-admin/login  |  POST  | Login Super Admin         |
  | /api/admin/login        |  POST  | Login Admin               |
  | /api/member/register    |  POST  | Register Member           |
  | /api/member/login       |  POST  | Login Post Login          |
  | /api/current-user       |   GET  | Get Current User By Token |
  |--------------------------- USERS ----------------------------|
  | /api/user-admin         |  GET   | Get All User Admin        |
  | /api/user-admin         | POST   | Create User Admin         |
  | /api/user-admin/:id     | GET    | Get User Admin By Id      |
  | /api/user-admin/:id     | PUT    | Update User Admin By Id   |
  | /api/user-admin/:id     | DELETE | Delete User Admin By Id   |
`)