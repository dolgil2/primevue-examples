<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { useDataStore } from '@/store/store';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { FilterMatchMode } from '@primevue/core/api';
import { Person, Company } from '@/interfaces';
import { useToast } from 'primevue/usetoast';

// Pinia 스토어 사용
const dataStore = useDataStore();
dataStore.setPersons();
dataStore.setCompanies();
const persons = computed(() => dataStore.persons);

const toast = useToast();
const showDialog = ref(false);
const addPersonDialog = ref(false);
const selectedPerson: Ref<Person | undefined> = ref();
const selectedCompany: Ref<Company | undefined> = ref();

const companies = computed(() => dataStore.companies);
const newPerson = ref({
    id: 1,
    companyId: 1,
    name: '',
    team: '',
    position: '',
    email: '',
    phone: '',
    createdBy: 1,
    updatedBy: 1,
    createdAt: Date,
    updatedAt: Date,
});
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // 'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
});
const onRowSelect = (event: any) => {
    selectedPerson.value = { ...event.data };
    showDialog.value = true;
};
// const updatePerson = () => {
//     if (selectedPerson.value) {
//         dataStore.updatePerson(selectedPerson.value);
//         showDialog.value = false;
//     }
// };

const formatDate = (value: any) => {
    return value.toLocaleDateString('kr-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

const dt = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};
const openNew = () => {
    console.log('abc');
    submitted.value = false;
    addPersonDialog.value = true;
};

const submitted = ref(false);
const hideDialog = () => {
    addPersonDialog.value = false;
    submitted.value = false;
};

const addPerson = () => {
    newPerson.value.id = 1;
    newPerson.value.createdAt = new Date();
    newPerson.value.updatedAt = new Date();
    newPerson.value.companyId = 1;
    newPerson.value.createdBy = 1;
    newPerson.value.updatedBy = 1;

    dataStore.addPerson(newPerson.value);

    submitted.value = true;
    toast.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Created',
        life: 3000,
    });
    addPersonDialog.value = false;
    newPerson.value = {
        id: 1,
        companyId: 1,
        name: '',
        team: '',
        position: '',
        email: '',
        phone: '',
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
<template>
    <div class="card">
        <DataTable
            :selection="selectedPerson"
            :filters="filters"
            :value="persons"
            ref="dt"
            :dataKey="id"
            selectionMode="single"
            @rowSelect="onRowSelect"
            responsiveLayout="scroll"
        >
            <template #header>
                <div class="flex items-center full-width headerFlexBetween">
                    <div class="pi">
                        <h5>고객 목록</h5>
                    </div>
                    <div class="pi flex">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText
                                v-model="filters['global'].value"
                                placeholder="Keyword Search"
                            />
                        </IconField>
                        <Button
                            icon="pi pi-download"
                            @click="exportCSV($event)"
                            rounded
                            raised
                            class="ml-2"
                        />
                        <Button
                            icon="pi pi-plus"
                            severity="success"
                            class="ml-2 mr-2"
                            @click="openNew"
                            rounded
                            raise
                        />
                        <Button
                            icon="pi pi-refresh"
                            rounded
                            raised
                            class="mr-2"
                        />
                    </div>
                </div>
            </template>
            <Column field="id" header="ID"></Column>
            <!-- <Column field="companyId" header="Company ID"></Column> -->
            <Column field="name" header="Name"></Column>
            <Column field="team" header="Team"></Column>
            <Column field="position" header="Position"></Column>
            <Column field="email" header="Email">
                <template #body="{ data }">
                    {{ data.email }}
                </template>
            </Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="createdAt" header="Created At">
                <template #body="{ data }">
                    {{ formatDate(data.createdAt) }}
                </template>
            </Column>
            <Column field="updatedAt" header="Updated At">
                <template #body="{ data }">
                    {{ formatDate(data.createdAt) }}
                </template>
            </Column>
        </DataTable>

        <Dialog
            v-model:visible="addPersonDialog"
            :style="{ width: '450px' }"
            header="고객정보입력"
            :modal="true"
        >
            <div class="flex">
                <Select
                    v-model="selectedCompany"
                    :options="companies"
                    filter
                    optionLabel="name"
                    placeholder="회사명"
                    class="w-full md:w-56"
                >
                    <template #option="slotProps">
                        <div class="flex items-center">
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Select>
                <div>
                    <Button
                        icon="pi pi-plus"
                        severity="success"
                        class="ml-2"
                        @click="openNew"
                        raise
                    />
                </div>
            </div>
            <div class="flex flex-col gap-6">
                <!-- <label for="name" class="block font-bold mb-3">Name</label> -->
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-user"></i>
                    </InputGroupAddon>
                    <InputText
                        id="name"
                        v-model.trim="newPerson.name"
                        required="true"
                        autofocus
                        :invalid="submitted && !newPerson.name"
                        fluid
                        placeholder="이름"
                    />
                    <small
                        v-if="submitted && !newPerson.name"
                        class="text-red-500"
                        >Name is required.</small
                    >
                </InputGroup>
            </div>
            <div>
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-id-card"></i>
                    </InputGroupAddon>
                    <InputText
                        id="position"
                        v-model.trim="newPerson.position"
                        :invalid="submitted && !newPerson.position"
                        fluid
                        placeholder="호칭"
                    />
                </InputGroup>
            </div>
            <div>
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-at"></i>
                    </InputGroupAddon>
                    <InputText
                        id="email"
                        v-model.trim="newPerson.email"
                        required="true"
                        :invalid="submitted && !newPerson.email"
                        fluid
                        placeholder="example@domain.com"
                    />
                </InputGroup>
            </div>
            <div>
                <InputGroup>
                    <InputGroupAddon>
                        <i class="pi pi-mobile"></i>
                    </InputGroupAddon>
                    <InputMask
                        id="phone"
                        v-model.trim="newPerson.phone"
                        mask="010-9999-9999"
                        placeholder="010-0000-0000"
                        required="true"
                        :invalid="submitted && !newPerson.phone"
                        fluid
                    />
                </InputGroup>
            </div>
            <!-- <div>
                    <label for="inventoryStatus" class="block font-bold mb-3"
                        >Inventory Status</label
                    >
                    <Select
                        id="inventoryStatus"
                        v-model="product.inventoryStatus"
                        :options="statuses"
                        optionLabel="label"
                        placeholder="Select a Status"
                        fluid
                    ></Select>
                </div> -->

            <div>
                {{ selectedCompany }}
            </div>

            <template #footer>
                <Button
                    label="Cancel"
                    icon="pi pi-times"
                    text
                    @click="hideDialog"
                />
                <Button label="Save" icon="pi pi-check" @click="addPerson" />
            </template>
        </Dialog>
    </div>
</template>
