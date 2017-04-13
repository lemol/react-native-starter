export type State = {
  fetching: boolean,
  login: boolean
}

export type Login = {
  username: string,
  password: string
}

export type Action<T> = {
  type: string,
  payload: T
}
