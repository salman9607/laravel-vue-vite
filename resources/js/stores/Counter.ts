import { defineStore } from "pinia"
// import products from "../data/products.json"

export const useCounter = defineStore("main", {
    // state: () => {
    //     return {
    //         counter: 0,
    //         name: "Erik"
    //     }
    // },
    state: () => ({
        counter: 0,
        name: "Erik",
        products: []
    }),
    getters: {
        // doubleCount: state => {
        //     return state.counter * 2;
        // }
        doubleCount() {
            return this.counter * 2;
        }
    },
    actions: {
        reset() {
            this.counter = 0;
        },
        addOne() {
            this.counter++;
        },
        async fill(){
            this.products = (await import("../data/products.json")).default;
        }
    }
});