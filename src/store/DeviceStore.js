import { makeAutoObservable } from "mobx";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";


export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices= [
            {id: 1, name: 'Iphone 12 pro', price: 30000, rating: '10/10', img: 'https://images.unsplash.com/photo-1620555576588-a7dd6c04c55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80'},
            {id: 2, name: 'Iphone 12 pro', price: 30000, rating: '10/10', img: 'https://images.unsplash.com/photo-1620555576588-a7dd6c04c55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80'},
            {id: 3, name: 'Iphone 12 pro', price: 30000, rating: '10/10', img: 'https://images.unsplash.com/photo-1620555576588-a7dd6c04c55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80'},
            {id: 4, name: 'Iphone 12 pro', price: 30000, rating: '10/10', img: 'https://images.unsplash.com/photo-1620555576588-a7dd6c04c55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}