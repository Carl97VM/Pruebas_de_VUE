<template>
  <h2>{{ setTitle }}</h2>
  
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p data-testid="counter">{{ counter }}</p>

  <button v-on:click="subir">+1</button>
  <button @click="bajar">-1</button>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required: true
            validator(value){
                return value >= 100
            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods:{
        // se realiza varias veces segun sea necesitado
        getSquareValue() {
            console.log('getSquareValue');
            return this.counter * this.counter
        },
        subir(){
            this.counter++
        },
        bajar(){
            this.counter--
        }
    },
    computed: { 
        //se ejecuta una sola ves, se almacena en cache
        squareCounter() {
            // console.log('computed squareCounter');
            // return this.counter ? this.counter * this.counter : this.counter=1 
            return this.counter * this.counter
        },
        setTitle() {
            return this.title || 'Counter'
        }
    },
}
</script>

<style>
button{
    background-color: aqua;
    border-radius: 5px;
    color: white;
    cursor:  pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition:  0.3s ease-in-out;
}
button:hover{
    background-color: antiquewhite;
    transition: 0.5s ease-in-out;
}
</style>