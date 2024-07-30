<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import { Country } from '@/interfaces';
import { useDataStore } from '@/store/store';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { Person, Company } from '@/interfaces';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const dataStore = useDataStore();
dataStore.setPersons();
const persons = computed(() => dataStore.persons);
const dropdownItems: Ref<Array<Country>> = ref([
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' },
]);

const dropdownItem = ref(null);

const selectedCountry: Ref<Country | null> = ref(null);
const countries: Ref<Array<Country>> = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
    { name: '한국', code: 'KR' },
]);
const medias: Ref<Array<Country>> = ref([
    { name: '178', code: 'AU' },
    { name: '파노라마', code: 'BR' },
    { name: '스크린', code: 'CN' },
    { name: '헬로명동', code: 'EG' },
    { name: '헬로로데오', code: 'FR' },
    { name: '제주공항', code: 'DE' },
    { name: '김포공항', code: 'IN' },
    { name: '광주공항', code: 'JP' },
    { name: '야립', code: 'ES' },
    { name: '버스쉘터', code: 'US' },
    { name: '지디아', code: 'KR' },
]);
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-7">
            <div class="card p-fluid">
                <h5>캠페인 등록</h5>
                <div class="formgrid grid">
                    <div class="field col-9">
                        <label for="name1">캠페인명</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div class="field col-3">
                        <label for="name1">담당자</label>
                        <InputText id="name1" type="text" disabled />
                    </div>
                </div>
                <div class="field">
                    <label for="name1">광고주</label>
                    <InputText id="name1" type="text" />
                </div>
                <div class="formgrid grid">
                    <div class="field col-6">
                        <label for="name1">거래처 담당자</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div class="field col-6">
                        <label for="name1">대행사</label>
                        <InputText disabled id="name1" type="text" />
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <label for="name2">시작일</label>
                        <InputText id="name2" type="text" />
                    </div>
                    <div class="field col">
                        <label for="email2">종료일</label>
                        <InputText id="email2" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 md:col-5">
            <div class="card p-fluid">
                <div class="grid">
                    <div class="col-6">
                        <h5>편집인원</h5>
                        <div
                            class="formgrid grid flex flex-auto items-center flexCenter"
                        >
                            <div class="field col-3">
                                <label for="name2">이름</label>
                                <InputText id="name2" type="text" />
                            </div>
                            <div class="field col-2">
                                <label for="email2">팀</label>
                                <InputText id="email2" type="text" />
                            </div>

                            <div class="col-1">
                                <Button class="w-full" label="add" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <h5>참조인원</h5>
                        <div
                            class="formgrid grid flex flex-auto items-center flexCenter"
                        >
                            <div class="field col-3">
                                <label for="name2">이름</label>
                                <InputText id="name2" type="text" />
                            </div>
                            <div class="field col-2">
                                <label for="email2">팀</label>
                                <InputText id="email2" type="text" />
                            </div>

                            <div class="col-1">
                                <Button class="w-full" label="add" />
                            </div>
                        </div>
                    </div>
                    <!-- <div><Button label="매체추가" /></div> -->
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="card">
                <h5>Advanced</h5>
                <div class="p-fluid">
                    <h5>매체</h5>
                    <div
                        class="formgrid grid flex flex-auto items-center flexCenter"
                    >
                        <div class="field col-3">
                            <label for="email2">매체명</label>
                            <Select
                                v-model="selectedCountry"
                                :options="medias"
                                filter
                                optionLabel="name"
                                placeholder="Select a media"
                                class="w-full md:w-56"
                            >
                                <template #option="slotProps">
                                    <div class="flex items-center">
                                        <div>{{ slotProps.option.name }}</div>
                                    </div>
                                </template>
                            </Select>
                        </div>
                        <div class="field col-2">
                            <label for="email2">매체상세</label>
                            <Select
                                v-model="selectedCountry"
                                :options="medias"
                                filter
                                optionLabel="name"
                                placeholder="Select a media"
                                class="w-full md:w-56"
                            >
                                <template #option="slotProps">
                                    <div class="flex items-center">
                                        <div>{{ slotProps.option.name }}</div>
                                    </div>
                                </template>
                            </Select>
                        </div>
                        <div class="field col-2">
                            <label for="email2">시작일</label>
                            <InputText Date id="email2" type="date" />
                        </div>
                        <div class="field col-2">
                            <label for="email2">종료일</label>
                            <InputText id="email2" type="date" />
                        </div>
                        <div class="col-3">
                            <Button class="w-full" label="add" />
                        </div>
                    </div>
                    <!-- <div><Button label="매체추가" /></div> -->
                </div>
                <div>
                    <DataTable
                        :value="persons"
                        ref="dt"
                        :dataKey="id"
                        selectionMode="single"
                        responsiveLayout="scroll"
                    >
                        <Column field="id" header="ID"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="team" header="Team"></Column>
                        <Column field="position" header="Position"></Column>
                        <Column field="phone" header="Phone"></Column>
                    </DataTable>
                </div>
            </div>
            <div class="p-fluid formgrid grid">
                <div class="field col-12">
                    <label for="address">memo</label>
                    <Textarea class="w-full" id="address" rows="4" />
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card flex justify-center">
                <Select
                    v-model="selectedCountry"
                    :options="countries"
                    filter
                    optionLabel="name"
                    placeholder="Select a Country"
                    class="w-full md:w-56"
                >
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex items-center">
                            <img
                                :alt="slotProps.value.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
                                style="width: 18px"
                            />
                            <div>{{ slotProps.value.name }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="flex items-center">
                            <img
                                :alt="slotProps.option.label"
                                src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                                style="width: 18px"
                            />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Select>
                <div class="card">{{ selectedCountry?.code }}</div>
            </div>
        </div>
    </div>
</template>
