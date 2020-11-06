import { Commit } from 'vuex'
import * as types from '../../utils/actions-types'
import { Login } from "../../api/user";
import { useRouter } from "vue-router";
interface State {
    token: string
}
const router = useRouter()
const login = {
    state: {
        token: ''
    },
    mutations: {
        [types.LOGIN_ACTION](state: State, payload: any) {
            state.token = payload
            localStorage.setItem('token',payload)
            // router.push("/");
        }
    },
    actions: {
        [types.LOGIN_ACTION](context: { commit: Commit }, payload: any) {
            Login(payload).then((res) => {
              if (res.code === 200) {
                context.commit(types.LOGIN_ACTION, res.data.token)
              }
            });
        }
    }
}
export default login