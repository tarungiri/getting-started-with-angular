import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IUser } from './user';

export class UserData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let users: IUser[] = [
            {
                'id': 1,
                'FirstName': 'Tarun',
                'LastName': 'Giri',
                'Email': 'tarungoswami12@gmail.com',
                'PhoneNumber': '9650058181',
                'Password':"user@123",
                'Sex': "Male"              
            }
        ];
        return { users };
    }
}
