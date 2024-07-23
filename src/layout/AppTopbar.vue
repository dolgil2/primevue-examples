<script setup lang="ts">
import { ref, Ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';
import { useMenuStore } from '@/store/store';
import Button from 'primevue/button';
import { MenuItem } from '@/interfaces';
import { campMenu, mediaMenu, workMenu } from '@/store/preset';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();
const menuStore = useMenuStore();

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

// const onTopBarMenuButton = () => {
//     topbarMenuActive.value = !topbarMenuActive.value;
// };

const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value,
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event: Event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event: Event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(
        sidebarEl.isSameNode(event.target) ||
        sidebarEl.contains(event.target) ||
        topbarEl.isSameNode(event.target) ||
        topbarEl.contains(event.target)
    );
};
const newItems: Ref<MenuItem[]> = ref([]);
const printLabel = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.innerText == '업무') {
        newItems.value = workMenu;
    } else if (target.innerText == '캠페인') {
        newItems.value = campMenu;
    } else {
        newItems.value = mediaMenu;
    }
    menuStore.setSideMenu(newItems.value);
    console.log(target.innerText);
};
const isSideHidden = ref(false);
const toggleIcon = () => {
    isSideHidden.value = !isSideHidden.value;
};

const handleDoubleEvent = () => {
    toggleIcon();
    onMenuToggle();
};
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img :src="logoUrl" alt="logo" />
            <span>AWRP</span>
        </router-link>

        <button
            class="layout-menu-button layout-topbar-button"
            @click="handleDoubleEvent"
        >
            <i v-if="isSideHidden" class="pi pi-angle-double-left"></i>
            <i v-else class="pi pi-angle-double-right"></i>
        </button>
        <Button label="업무" plain text @click="printLabel" />
        <Button label="캠페인" plain text @click="printLabel" />
        <Button label="미디어" plain text @click="printLabel" />
        <Button label="보고서" plain text @click="printLabel" />

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button
                @click="onTopBarMenuButton()"
                class="p-link layout-topbar-button"
            >
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button>
            <button
                @click="onTopBarMenuButton()"
                class="p-link layout-topbar-button"
            >
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
            <button
                @click="onSettingsClick()"
                class="p-link layout-topbar-button"
            >
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
