<script setup lang="ts">
import { ref } from 'vue';
import Menu from 'primevue/menu';
import { MenuItem } from '@/interfaces';

const props = defineProps<{
    model: Array<MenuItem>;
}>();
</script>

<template>
    <div class="flex justify-center">
        <Menu :model="props.model">
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
    </div>
</template>
