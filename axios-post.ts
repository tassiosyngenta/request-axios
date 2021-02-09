import { Endpoints } from './endpoints';
import RequestService from './request-service';

type User = { id: number, name: string }

async function postUser(params: User) {
  await RequestService.post<void, User>(Endpoints.requestUsers, params);
}

async function getUserById(id: number) {
  const url = Endpoints.requestUserById.replace('{user_id}',id.toString())
  const user = await RequestService.get<User>(url as Endpoints);

  console.log("++++++++ GET USER ++++++++")
  console.log("Axios response", user[0])
  console.log("++++++++ GET USER ++++++++")
}

postUser({ id: 7, name: 'Exp 7'})
getUserById(7);
