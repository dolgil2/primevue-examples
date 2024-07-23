<script setup lang="ts">
import { ref, Ref, defineProps } from 'vue';
import { MenuItem } from '@/interfaces';
import AppMenuItem from '@/layout/AppMenuItem.vue';

const props = defineProps<{
    model: Array<MenuItem>;
}>();
</script>

<template>
    <ul class="layout-menu p-test">
        <template v-for="(item, i) in props.model" :key="item">
            <!-- <app-menu-item :item="item" :index="i"></app-menu-item> -->
            <app-menu-item
                v-if="!item.separator"
                :item="item"
                :index="i"
            ></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li>
            <a
                href="https://www.primefaces.org/primeblocks-vue/#/"
                target="_blank"
            >
                <!-- <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" /> -->
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
