<script setup lang="ts">
import { computed } from 'vue';
import { useMenuStore } from '../store/store';

const menuStore = useMenuStore();
const menuItems = computed(() => menuStore.menuItems);
</script>

<template>
    <!-- <app-menu :model="menuItems"></app-menu> -->
    <Menu :model="menuItems" class="layout-menu">
        <template #item="{ item, props }">
            <router-link
                v-if="item.route"
                v-slot="{ href, navigate }"
                :to="item.route"
                custom
            >
                <a
                    v-ripple
                    :href="href"
                    v-bind="props.action"
                    @click="navigate"
                >
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </router-link>
            <a
                v-else
                v-ripple
                :href="item.url"
                :target="item.target"
                v-bind="props.action"
            >
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </template>
    </Menu>

    <!-- <app-side-menu :model="menuItems"></app-side-menu> -->
</template>

<style lang="scss" scoped></style>
