interface UserInterface{

}

type UserState={
    user : UserInterface
}

type UserAction={
    type: String,
    user: UserInterface
}

type DispatchType = (args: UserAction)=> UserAction