import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    data1: [
        {menu:"Brewed Coffee",hot:"50",iced:"50",blended:"-"},
        {menu:"Espresso",hot:"50",iced:"60",blended:"60"},
        {menu:"Latte",hot:"50",iced:"60",blended:"60"},
        {menu:"Americano",hot:"60",iced:"70",blended:"70"},
        {menu:"Cappuccino",hot:"60",iced:"70",blended:"70"},
        {menu:"Mocha",hot:"60",iced:"70",blended:"70"},
        {menu:"Caramel Macchiato",hot:"60",iced:"70",blended:"70"},
        {menu:"English Breakfast Tea",hot:"50",iced:"-",blended:"-"},
        {menu:"Earl Grey Tea Latte",hot:"60",iced:"-",blended:"-"},
        {menu:"Hojicha Tea Latte",hot:"60",iced:"70",blended:"70"},
        {menu:"Green Tea Latte",hot:"60",iced:"70",blended:"70"},
        {menu:"Lemon Tea",hot:"-",iced:"60",blended:"-"},
        {menu:"Rasberry Black Currant Tae",hot:"-",iced:"60",blended:"-"},
        {menu:"Signature Chocolate",hot:"60",iced:"70",blended:"70"},
        {menu:"White Chocolate Mocha",hot:"60",iced:"70",blended:"70"},
        {menu:"Chocolate Cream",hot:"-",iced:"-",blended:"80"},
        {menu:"Caramel Cream",hot:"-",iced:"-",blended:"80"},
        {menu:"Blue Hawaiian Soda",hot:"-",iced:"50",blended:"-"},
        {menu:"Kiwi Soda",hot:"-",iced:"50",blended:"-"},
        {menu:"Strawberry Soda",hot:"-",iced:"50",blended:"-"},
    ],

    data2:[
      {menu:"Chocolate Chip Cookie",price:"25"},
      {menu:"Makaron",price:"25"},
      {menu:"Toaster Pancake",price:"50"},
      {menu:"Almand Cream Croissant",price:"50"},
      {menu:"Double Cheese Croissant",price:"60"},
      {menu:"Blueberry Cheesecake",price:"50"},
      {menu:"ChocChip Brownie",price:"50"},
      {menu:"Ham Sanwich",price:"50"},
      {menu:"Chocolate Pudding",price:"50"},
    ]

  },

  getters: {
    data1: (state) => state.data1,
    data2: (state) => state.data2,
  },

  mutations: {

  },

  actions: {

  },
  modules: {},
})