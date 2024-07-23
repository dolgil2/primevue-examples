<script setup>
import { ref, computed } from 'vue';
import { useMenuStore } from '@/store/store';

const menuStore = useMenuStore();
const test = computed(() => menuStore.menuItems);
</script>

<template>
    <h1 class="myfont">{{ test }}</h1>
    <div></div>
</template>
