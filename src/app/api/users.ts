export class Users {
    public users;

    public getUsers(){
        return this.users = [
            {
                "user_id":"1",
                "user_name":"Bob",
                "user_email":"bob@gmail.com",
                "user_role":"Admin"
            },
            {
                "user_id":"2",
                "user_name":"Harry",
                "user_email":"harry@gmail.com",
                "user_role":"User"
            },
            {
                "user_id":"3",
                "user_name":"Cheery",
                "user_email":"cherry@gmail.com",
                "user_role":"User"
            },
            {
                "user_id":"4",
                "user_name":"Lorry",
                "user_email":"lorry@gmail.com",
                "user_role":"User"
            },
            {
                "user_id":"5",
                "user_name":"Jerry",
                "user_email":"jerry@gmail.com",
                "user_role":"User"
            }
        ];
    }
}
