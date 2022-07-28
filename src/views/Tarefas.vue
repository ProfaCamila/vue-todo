<template>
    <div>
        <v-list flat subheader>
          
            <v-list-item-group v-model="settings" multiple active-class="">
              <Tarefa></Tarefa> <!--Terceiro passo para utilizar um componente (Utilizar a sua TAG no html)-->
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
    }
}
</script>
