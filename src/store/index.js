import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tarefas: [
            { id: 1, titulo: "Ir ao mercado", concluido: true }, //essa informação será mandada para o componente Tarefa
            { id: 2, titulo: "Estudar", concluido: true },
            { id: 3, titulo: "Lavar a louça", concluido: false }
        ]
    },
    getters: {
    },
    mutations: { //único método capaz de modificar objetos do state
        addTarefa(state, titulo) { //toda mutation deve receber no mínimo um parâmetro (pelo menos a state)
            if (titulo) {
                state.tarefas.push({
                    id: new Date().getTime(), //poderia ser colocado qualquer outro ID único aqui
                    titulo: titulo,
                    concluido: false
                })               
            }
        },
        removeTarefa(state, id) {
            state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id); //filtra todas as tarefas com id diferente do passado como parâmetro e popula novamente o vetor. OBS: poderia ser feito de outra forma!
        }
    },
    actions: {
    },
    modules: {
    }
})
