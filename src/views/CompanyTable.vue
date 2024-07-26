<template>
    <div>
        <DataTable
            :selection="selectedCompany"
            :filters="filters"
            :value="companies"
            :dataKey="id"
            responsiveLayout="scroll"
            selectionMode="single"
            @rowSelect="onRowSelect"
            class="card"
        >
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <h5>고객사 목록</h5>

                    <IconField>
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText
                            v-model="filters['global'].value"
                            placeholder="Keyword Search"
                        />
                    </IconField>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="id" header="ID" :sortable="true"></Column>
            <Column field="name" header="Name" :sortable="true">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        v-model="filterModel.value"
                        type="text"
                        @input="filterCallback()"
                        placeholder="Search by name"
                    />
                </template>
            </Column>
            <Column field="regNo" header="Registration Number"></Column>
            <Column field="repName" header="Representative"> </Column>
            <Column field="address" header="Address"></Column>

            <Column field="bankAccount" header="Bank Account"></Column>
            <Column field="isMediaCom" header="Is Media Company">
                <template #body="{ data }">
                    {{ formatMediaCom(data.isMediaCom) }}
                    <!-- {{ data.isMediaCom ? 'yes' : 'no' }} -->
                    <!-- {{ data.isMediaCom }} -->
                </template>
            </Column>
            <Column field="createdAt" header="Created At">
                <template #body="{ data }">
                    {{ formatDate(data.createdAt) }}
                </template>
            </Column>
            <Column field="updatedAt" header="Updated At">
                <template #body="{ data }">
                    {{ formatDate(data.updatedAt) }}
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="showDialog" modal header="Company Details">
            <div v-if="selectedCompany">
                <div class="p-fluid">
                    <div class="p-field">
                        <label fo="id">ID</label>
                        <InputText
                            id="id"
                            v-model="selectedCompany.id"
                            disabled
                        />
                    </div>
                </div>
                <div class="p-field">
                    <label for="name">Name</label>
                    <InputText id="name" v-model="selectedCompany.name" />
                </div>
                <div class="p-field">
                    <label for="regNo">Registration Number</label>
                    <InputText id="regNo" v-model="selectedCompany.regNo" />
                </div>
                <div class="p-field">
                    <label for="repName">Representative</label>
                    <InputText id="repName" v-model="selectedCompany.repName" />
                </div>
                <div class="p-field">
                    <label for="address">Address</label>
                    <InputText id="address" v-model="selectedCompany.address" />
                </div>
                <div class="p-field">
                    <label for="createdAt">Created At</label>
                    <DatePicker
                        id="createdAt"
                        v-model="selectedCompany.createdAt"
                        dateFormat="yy-mm-dd"
                        showIcon
                    />
                </div>
                <div class="p-field">
                    <label for="updatedAt">Updated At</label>
                    <Calendar
                        id="updatedAt"
                        v-model="selectedCompany.updatedAt"
                        dateFormat="yy-mm-dd"
                        showIcon
                    />
                </div>
                <div class="p-field">
                    <label for="bankAccount">Bank Account</label>
                    <InputText
                        id="bankAccount"
                        v-model="selectedCompany.bankAccount"
                    />
                </div>
                <div class="p-field">
                    <label for="isMediaCom">Is Media Company</label>
                    <p>{{ selectedCompany.isMediaCom }}</p>
                    <!-- <SelectButton
                        id="isMediaCom"
                        v-model="selectedCompany.isMediaCom"
                        :options="mediaOptions"
                        optionLabel="label"
                    /> -->
                </div>
                <Button
                    label="Update"
                    icon="pi pi-check"
                    @click="updateCompany"
                />
            </div>
        </Dialog>
    </div>
    <div>
        <Button
            label="checker"
            icon="pi pi-check"
            @click="updateDesignedCompany"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { useDataStore } from '@/store/store';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import { Company } from '@/interfaces';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
// import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import { FilterMatchMode } from '@primevue/core/api';

const dataStore = useDataStore();
dataStore.setCompanies();
const companies = computed(() => dataStore.companies);

const showDialog = ref(false);
const selectedCompany: Ref<Company | undefined> = ref();

const mediaOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
];
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // 'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const onRowSelect = (event: any) => {
    selectedCompany.value = { ...event.data };
    showDialog.value = true;
};

const updateCompany = () => {
    if (selectedCompany.value) {
        dataStore.updateCompany(selectedCompany.value);
        showDialog.value = false;
    }
};
const updateDesignedCompany = () => {
    const designedCompany = {
        id: 1,
        name: '예스',
        regNo: '123-45-67890',
        repName: '박재영',
        address: '서울특별시 강남구 서초대로 74길 11',
        createdAt: new Date('2021-01-01T10:00:00Z'),
        updatedAt: new Date('2023-01-01T10:00:00Z'),
        bankAccount: '123-456-789',
        isMediaCom: true,
    };

    dataStore.updateCompany(designedCompany);
};

const formatDate = (value: any) => {
    return value.toLocaleDateString('kr-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};
const formatMediaCom = (rowData: any) => {
    return rowData.isMediaCom ? 'Yes' : 'No';
};
</script>

<style scoped>
/* Add your styles here */
</style>
