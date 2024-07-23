import { defineStore } from 'pinia';
import { ref, Ref, computed } from 'vue';
import { MenuItem } from '../interfaces';
import { workMenu, campMenu, mediaMenu, exampleMenu } from './preset';

export const useMenuStore = defineStore('menu', () => {
    // const menuItems: Ref<Array<MenuItem>> = ref(exampleMenu);
    const menuItems = ref<MenuItem[]>(exampleMenu);

    const setSideMenu = (newItems: MenuItem[]) => {
        menuItems.value = newItems;
        console.log('msg from store', newItems);
    };

    // const getSideMenu = computed(() => menuItems);

    return { menuItems, setSideMenu };
});
