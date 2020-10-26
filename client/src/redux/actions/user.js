import { openNotification } from "utils/helpers";
import { userApi } from "utils/api";

const Actions = {
    setUserData: (data) => ({
        type: "USER:SET_DATA",
        payload: data,
    }),
    fetchUserData: () => (dispatch) => {
        userApi.getMe().then(({ data }) => {
            dispatch(Actions.setUserData(data));
        });
    },
    fetchUserLogin: (postData) => (dispatch) => {
        return userApi.signIn(postData).then(({ data }) => {
            const { status, token } = data;
            if (status === "error") {
                openNotification({
                    title: "Ошибка при авторизации",
                    text: "Неверный логин или пароль.",
                    type: "error",
                });
            } else {
                openNotification({
                    title: "Отлично!",
                    text: "Авторизация успешна.",
                    type: "success",
                });
                window.axios.defaults.headers.common["token"] = token;
                window.localStorage["token"] = token;
                dispatch(Actions.fetchUserData());
            }
            return data;
        });
    },
    fetchUserRegister: (postData) => (dispatch) => {
        return userApi.signUp(postData).then(({ data }) => {
            console.log(data);
            return data;
        });
    },
};

export default Actions;
