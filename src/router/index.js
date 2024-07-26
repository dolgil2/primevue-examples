import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
// import AppLayout from '@/layout/AppLayout_bp.vue';
import HomeView from '../views/HomeView.vue';
import CampaignTable from '../views/CampaignTable.vue';

const router = createRouter({
    // history: createWebHistory(import.meta.env.Base_URL),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomeView,
                },
                {
                    path: '/campaign/camptable',
                    name: 'campaign table',
                    component: () => import('@/views/CampaignTable.vue'),
                },
                {
                    path: '/campaign/campsummary',
                    name: 'campaign summary',
                    component: () => import('@/views/CampaignSummary.vue'),
                },
                {
                    path: '/campaign/campcreate',
                    name: 'campaign create',
                    component: () => import('@/views/CreateCampaign.vue'),
                },
                {
                    path: '/campaign/company',
                    name: 'company table',
                    component: () => import('@/views/CompanyTable.vue'),
                },
                {
                    path: '/campaign/client',
                    name: 'client table',
                    component: () => import('@/views/ClientTable.vue'),
                },
            ],
        },
    ],
});

export default router;
