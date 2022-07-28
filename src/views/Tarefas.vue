<template>
    <div>

        <v-col cols="12" sm="6">
            <v-text-field v-model="campoInput" label="Insira uma tarefa" outlined clearable @keyup.enter="addTarefa"></v-text-field>
        </v-col>

        <v-list flat subheader>

            <v-list-item-group multiple active-class="">
                <div v-for="tarefa, index in tarefas" :key="index">
                    <!-- tarefas referencia o objeto tarefas criado em data -->
                    <Tarefa :tarefa="tarefa"></Tarefa>
                    <!--Terceiro passo para utilizar um componente (Utilizar a sua TAG no html). Tarefa é passada por parâmetro para o componente Tarefa-->
                </div>

            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>

import Tarefa from '../components/tarefas/Tarefa.vue'; //Primeiro passo para utilizar um componente (importação)

export default {
    name: 'Home',
    components: {
        Tarefa //Segundo passo para utilizar um componente (informar que ele será usado nesta página)
    },
    data() { //aqui devem ser declarados todos os dados manipulados na tela
        return {
            campoInput: null,
            tarefas: [
                { titulo: "Ir ao mercado", concluido: false }, //essa informação será mandada para o componente Tarefa
                { titulo: "Estudar", concluido: true },
                { titulo: "Lavar a louça", concluido: false }
            ]
        }
    },
    methods: { //aqui devem ser criados todos os métodos 
        addTarefa(){
           if (this.campoInput) {
            this.tarefas.push({
                titulo: this.campoInput,
                concluido: false
            })
            this.campoInput=null;
           }
        }
    }
}
</script>
