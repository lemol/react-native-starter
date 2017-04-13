// @flow

import { createAction, NavigationActions } from '../utils'
import * as authService from '../services/auth'

type State = {
  fetching: boolean,
  login: boolean
}

type LoginAction = {
  
}

export default {
  namespace: 'app',
  state: {
    fetching: false,
    login: false,
  },
  reducers: {
    loginStart(state: State, { payload }: any): State {
      return { ...state, ...payload }
    },
    loginEnd(state: State, { payload }: any): State {
      return { ...payload }
    },
  },
  effects: {
    * login({ payload }: any, { call, put }: any): any {
      yield put(
        createAction('loginStart')({
          fetching: true,
        }),
      )
      const login = yield call(authService.login, payload)
      if (login) {
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          }),
        )
      }
      yield put(
        createAction('loginEnd')({
          login,
          fetching: false,
        }),
      )
    },
  },
}
