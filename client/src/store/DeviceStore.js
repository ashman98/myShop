import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Телевизор'},
            {id: 2, name: 'Ноутбук'},
            {id: 3, name: 'Смартфон'},
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Xiaomi'},
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 1000, rating: 5, img: 'https://www.iphones.ru/wp-content/uploads/2021/09/iPhone-12-1024x576.jpg'},
            {id: 2, name: 'Iphone 13', price: 2000, rating: 4, img: 'https://www.iphones.ru/wp-content/uploads/2021/09/iPhone-13-1024x576.jpg'},
            {id: 3, name: 'Iphone 14', price: 3000, rating: 5, img: 'https://www.iphones.ru/wp-content/uploads/2021/09/iPhone-14-1024x576.jpg'},
        ]
        makeAutoObservable(this); //автоматизированное обновление mobx будет следить за изменениями
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}