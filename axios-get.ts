import { Endpoints } from './endpoints';
import RequestService from './request-service';

type User = { id: number, name: string }

async function getUsers() {
  const users = await RequestService.get<User[]>(Endpoints.requestUsers);
  console.log("Axios response", users);
  console.table(users);
}

async function getUserById(id: number) {
  const url = Endpoints.requestUserById.replace('{user_id}',id.toString())
  const user = await RequestService.get<User>(url as Endpoints);

  console.log("Axios response", user[0])
}

getUsers()
getUserById(1);
