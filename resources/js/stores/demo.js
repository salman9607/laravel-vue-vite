import { defineStore } from 'pinia'

//pinia has several stores, differentiate them by assigning an ID to each store
//demo is id in the first parameter of  `defineStore` Methods
//second parameter is an options object, this object where we define states, getters and action.
//you can also decalre the store ID here, using the ID property,
const useDemoStore = defineStore('demo',{
    //id:'demo'
    //The state option should be set using the factory pattern. You can use a full function or an arrow function.  
    //We define two state properties: title and number.

    state(){
        return{
            title: 'pinia Demo Store',
            num: 0,
            visible: true,
        }
    },

    //the getter function recives the state object, which gives us access to state properties of the current store
    
    getters: {
        capTitle(state){
            return state.title.toUpperCase();
        },
        
    },

    //action methods can handle async operations and direct modify state properties which are accessed via  `THIS`.
    // `THIS` in as action method still points to the current store instance.

    action: {
        increment(){
            this.num++
        },
        handleClick (){
            console.log('click')
        }
    }
    
    //defineStore return the getters function that return the instace objects of current store.
    //for a component to access pinia store, just import and invoke the getter function of that store.

})
//To make the getter accessible, we need to export it. We recommend “named export.” We name the getter function “useDemoStore”
export { useDemoStore }