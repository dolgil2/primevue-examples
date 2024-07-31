<script setup lang="ts">
import { ref, Ref, defineProps } from 'vue';
import { Media } from '@/interfaces';
import { companyList, mediaList } from '@/store/preset';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toast from 'primevue/toast';
import Tag from 'primevue/tag';

const props = defineProps<{ title: string }>();

const subject = ref(props.title);

const medias: Ref<Array<Media>> = ref(mediaList);

const toast = useToast();

const columns = ref([
    { field: 'id', header: '번호' },
    { field: 'media', header: '매체' },
    { field: 'detail', header: '상세' },
    { field: 'issueTo', header: '청구처' },
    { field: 'isSale', header: '구분' },
    { field: 'issueMonth', header: '청구년월' },
    { field: 'round', header: '회차' },
    { field: 'totalRound', header: '전체회차' },
    { field: 'price', header: '청구금액' },
]);

const rows = ref([
    {
        id: 1,
        media: 1,
        detail: '디테일 1',
        issueTo: 1,
        isSale: true,
        issueMonth: '2023-01',
        round: 1,
        totalRound: 12,
        price: 1000000,
    },
    {
        id: 2,
        media: 2,
        detail: '디테일 2',
        issueTo: 2,
        isSale: false,
        issueMonth: '2023-02',
        round: 2,
        totalRound: 12,
        price: 2000000,
    },
    {
        id: 3,
        media: 3,
        detail: '디테일 3',
        issueTo: 3,
        isSale: true,
        issueMonth: '2023-03',
        round: 3,
        totalRound: 12,
        price: 3000000,
    },
    {
        id: 4,
        media: 4,
        detail: '디테일 4',
        issueTo: 4,
        isSale: false,
        issueMonth: '2023-04',
        round: 4,
        totalRound: 12,
        price: 4000000,
    },
    {
        id: 5,
        media: 5,
        detail: '디테일 5',
        issueTo: 5,
        isSale: true,
        issueMonth: '2023-05',
        round: 5,
        totalRound: 12,
        price: 5000000,
    },
    {
        id: 6,
        media: 6,
        detail: '디테일 6',
        issueTo: 5,
        isSale: false,
        issueMonth: '2023-06',
        round: 6,
        totalRound: 12,
        price: 6000000,
    },
    {
        id: 7,
        media: 7,
        detail: '디테일 7',
        issueTo: 4,
        isSale: true,
        issueMonth: '2023-07',
        round: 7,
        totalRound: 12,
        price: 7000000,
    },
    {
        id: 8,
        media: 8,
        detail: '디테일 8',
        issueTo: 3,
        isSale: false,
        issueMonth: '2023-08',
        round: 8,
        totalRound: 12,
        price: 8000000,
    },
    {
        id: 9,
        media: 9,
        detail: '디테일 9',
        issueTo: 2,
        isSale: true,
        issueMonth: '2023-09',
        round: 9,
        totalRound: 12,
        price: 9000000,
    },
    {
        id: 10,
        media: 10,
        detail: '디테일 10',
        issueTo: 3,
        isSale: false,
        issueMonth: '2023-10',
        round: 10,
        totalRound: 12,
        price: 10000000,
    },
]);

const companies = ref(companyList);
const getMediaName = (id: number): string => {
    const media = medias.value.find((media) => media.id === id);
    return media ? media.name : '';
};
const getCompanyName = (id: number): string => {
    const company = companies.value.find((comp) => comp.id === id);
    return company ? company.name : '';
};
const getSaleOrBuying = (isSale: boolean): string => {
    return isSale ? '매출' : '매입';
};
const getSeverity = (isSale: boolean) => {
    switch (isSale) {
        case true:
            return 'success';
        case false:
            return 'danger';
    }
};

const removeBill = (aRow: any) => {
    const index = rows.value.findIndex((item) => item.id === aRow.id);
    if (index !== -1) {
        rows.value.splice(index, 1);
        toast.add({
            severity: 'info',
            summary: '삭제됨',
            detail: '청구서가 삭제되었습니다.',
            life: 3000,
        });
    }
};
const formatCurrency = (value: any) => {
    return new Intl.NumberFormat('kr-KR', {
        style: 'currency',
        currency: 'KRW',
    }).format(value);
};

const onCellEditComplete = (event: any) => {
    let { data, newValue, field } = event;
    if (String(newValue).trim().length > 0) {
        data[field] = newValue;
    } else {
        event.preventDefault();
    }
};
</script>

<template>
    <div class="card">
        <h5>{{ subject }}</h5>
        <div>
            <DataTable
                :value="rows"
                editMode="cell"
                @cell-edit-complete="onCellEditComplete"
                :pt="{
                    table: { style: 'min-width: 50rem' },
                    column: {
                        bodycell: ({ state }) => ({
                            class: [{ 'pt-0 pb-0': state['d_editing'] }],
                        }),
                    },
                }"
            >
                <Column
                    v-for="col of columns"
                    :key="col.field"
                    :field="col.field"
                    :header="col.header"
                    style="width: 10%"
                >
                    <template #body="{ data, field }">
                        {{
                            field === 'media'
                                ? getMediaName(data[field])
                                : field === 'price'
                                  ? formatCurrency(data[field])
                                  : field === 'issueTo'
                                    ? getCompanyName(data[field])
                                    : data[field]
                        }}
                    </template>
                    <template #editor="{ data, field }">
                        <template v-if="field === 'price'">
                            <InputNumber
                                v-model="data[field]"
                                mode="currency"
                                currency="KRW"
                                locale="kr-KR"
                                autofocus
                                fluid
                            />
                        </template>
                        <template v-else-if="field === 'issueTo'">
                            <Select
                                v-model="data[field]"
                                :options="companies"
                                optionLabel="name"
                                optionValue="id"
                            />
                        </template>
                        <template v-else-if="field === 'isSale'">
                            <Tag
                                :value="getSaleOrBuying(data[field])"
                                :severity="getSeverity(data[field])"
                            />
                        </template>
                        <template v-else>
                            {{ data[field] }}
                        </template>
                    </template>
                </Column>
                <Column header="삭제" style="width: 10%">
                    <template #body="{ data }">
                        <Button
                            icon="pi pi-trash"
                            class="p-button-danger"
                            @click="removeBill(data)"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>
        <Toast ref="toast" />
    </div>
</template>
