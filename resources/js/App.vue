<script type="application/javascript">
import { storeToRefs, mapActions } from "pinia"
import { useCounter } from "@/stores/Counter"

export default {
  setup() {
    const store = useCounter()
    store.fill();
    const { counter, name, doubleCount } = storeToRefs(store)

    // const { addOne } = mapActions(useCounter, ["addOne"])

    const { addOne, reset, products } = store

    function add(value){
        // store.$patch({
        //     counter: counter.value + value
        // })
        store.$patch((state)=>{state.counter +=  value})
    }

    // function reset()
    // {
    //     store.counter = 0;
    // }

    function clear(){
        store.$state = { counter: 132, name: "Salman" }
    }

    return {
      // you can return the whole store instance to use it in the template
      counter,
      store,
      add,
      reset,
      clear,
      doubleCount,
      name,
      products,
    //   addOne,
    }
  },
}
</script>

<template>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5" v-for="product in products">
        <li >{{product.name}}</li>
        <li >{{product.image}}</li>
        <li >{{product.price}}</li>
    </ul>

    <h1>Hello World {{name}}</h1>
    <h4>{{counter}}</h4>
    <h4>{{doubleCount}}</h4>
    <!-- <button @click="store.addOne">click me</button> -->
    <button @click="add(15)">click me</button><br><br>
    <button @click="reset">reset me</button>
    <button @click="clear">Clear Fields</button>
</template>  
