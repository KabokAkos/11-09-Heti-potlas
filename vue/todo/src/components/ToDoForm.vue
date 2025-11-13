<template>
    <form @submit.prevent="store.save()">
        <input type="text" v-model="store.task" placeholder="Feladat">
        <input type="date" v-model="store.deadline">
        <button>Rögzít</button>
    </form>
</template>

<script setup>
import { useToDoStore } from '@/stores/todo';
const store = useToDoStore();
</script>