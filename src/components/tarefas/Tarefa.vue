<template>
    <div>
        <v-list-item :class="{ 'blue lighten-4': tarefa.concluido }" @click="tarefa.concluido = !tarefa.concluido">
            <template>
                <v-list-item-action>
                    <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content :class="{ 'text-decoration-line-through': tarefa.concluido }">
                    <v-list-item-title> {{ tarefa.titulo }} </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action >
                    <v-btn icon @click.stop="removeTarefa(tarefa.id)">
                        <v-icon color="red darken-1">mdi-delete</v-icon> <!-- mdi é padrão. O delete foi retirado de: https://materialdesignicons.com/-->
                    </v-btn>
                </v-list-item-action>

            </template>

        </v-list-item>
        <v-divider></v-divider>
    </div>
</template>

<script>

export default {
    props: ['tarefa'], //recebe o parâmetro tarefa de TarefasVue.vue
    methods: {
        removeTarefa(id){
            this.$store.commit('removeTarefa', id)
        }
    }
}
</script>

<style>
</style>