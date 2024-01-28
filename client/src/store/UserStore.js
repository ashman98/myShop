import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false; //пользователь авторизован _isAuth переменная неизменяемая
        this._user = {};
        makeAutoObservable(this); //автоматизированное обновление mobx будет следить за изменениями
    }

    setIsAuth(bool) { // action функция для изменения переменной _isAuth
        this._isAuth = bool;
    }

    setUser(user) { // action функция для изменения переменной _isAuth
        this.user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {//получение переменной// визивается толкьо в том случае, если переменная будет изменена
        return this._user;
    }
}