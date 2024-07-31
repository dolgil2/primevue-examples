<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import { Media, MediaInList } from '@/interfaces';
import { useDataStore } from '@/store/store';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import BillTable from '@/components/BillTable.vue';
import { mediaList } from '@/store/preset';

const dataStore = useDataStore();
const toast = useToast();

const medias: Ref<Array<Media>> = ref(mediaList);

const mediaInList: Ref<Array<MediaInList>> = ref([]);

const addMediaOnList = () => {
    mediaInList.value.push({
        id: mediaInList.value.length + 1,
        media: 0,
        detail: '',
        startDate: new Date().toISOString().slice(0, 10),
        endDate: new Date(new Date().setMonth(new Date().getMonth() + 1))
            .toISOString()
            .slice(0, 10),
    });
};

const onCellEditComplete = (event: any) => {
    let { data, newValue, field } = event;
    if (field === 'startDate' || field === 'endDate') {
        if (isDate(newValue)) {
            data[field] = new Date(newValue).toISOString().slice(0, 10);
        } else {
            event.preventDefault();
        }
    } else {
        if (String(newValue).trim().length > 0) {
            data[field] = newValue;
        } else {
            event.preventDefault();
        }
    }
};

const isDate = (val: any): boolean => {
    // 문자열로 변환
    let str = String(val);

    // 공백 제거
    str = str.trim();

    // 빈 문자열인지 확인
    if (!str) {
        return false;
    }

    // Date 객체로 변환
    const date = new Date(str);

    // 유효한 날짜인지 확인
    return date instanceof Date && !isNaN(date.getTime());
};
const columns = ref([
    { field: 'id', header: '번호' },
    { field: 'media', header: '매체' },
    { field: 'detail', header: '상세' },
    { field: 'startDate', header: '시작일' },
    { field: 'endDate', header: '종료일' },
]);

const formatDate = (value: any) => {
    if (!(value instanceof Date)) {
        value = new Date(value);
    }
    return value.toLocaleDateString('kr-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

const getMediaName = (id: number): string => {
    const media = medias.value.find((media) => media.id === id);
    return media ? media.name : '';
};
const removeMedia = (media: MediaInList) => {
    const index = mediaInList.value.findIndex((item) => item.id === media.id);
    if (index !== -1) {
        mediaInList.value.splice(index, 1);
        toast.add({
            severity: 'info',
            summary: '삭제됨',
            detail: '매체가 삭제되었습니다.',
            life: 3000,
        });
    }
};

const endDateDefault = ref(
    new Date(new Date().setMonth(new Date().getMonth() + 1))
        .toISOString()
        .slice(0, 10)
);
const startDateDefault = ref(new Date().toISOString().slice(0, 10));
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
                        <InputText
                            id="name2"
                            type="date"
                            v-model="startDateDefault"
                        />
                    </div>
                    <div class="field col">
                        <label for="email2">종료일</label>
                        <InputText
                            id="email2"
                            type="date"
                            v-model="endDateDefault"
                        />
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
                <h5>매체</h5>
                <div class="p-fluid">
                    <div
                        class="formgrid grid flex flex-auto items-center flexCenter"
                    >
                        <div class="col-12">
                            <Button
                                icon="pi pi-plus"
                                class="w-full"
                                @click="addMediaOnList"
                            />
                        </div>
                    </div>
                    <!-- <div><Button label="매체추가" /></div> -->
                </div>
                <div>
                    <DataTable
                        :value="mediaInList"
                        editMode="cell"
                        @cell-edit-complete="onCellEditComplete"
                        :pt="{
                            table: { style: 'min-width: 30rem' },
                            column: {
                                bodycell: ({ state }) => ({
                                    class: [
                                        { 'pt-0 pb-0': state['d_editing'] },
                                    ],
                                }),
                            },
                        }"
                    >
                        <Column
                            v-for="col of columns"
                            :key="col.field"
                            :field="col.field"
                            :header="col.header"
                            style="width: 20%"
                        >
                            <template #body="{ data, field }">
                                {{
                                    field === 'startDate'
                                        ? formatDate(data[field])
                                        : field === 'endDate'
                                          ? formatDate(data[field])
                                          : field === 'media'
                                            ? getMediaName(data[field])
                                            : data[field]
                                }}
                            </template>
                            <template #editor="{ data, field }">
                                <template
                                    v-if="
                                        field === 'startDate' ||
                                        field === 'endDate'
                                    "
                                >
                                    <InputText
                                        v-model="data[field]"
                                        type="date"
                                    />
                                </template>
                                <template v-else-if="field === 'media'">
                                    <Select
                                        v-model="data[field]"
                                        :options="medias"
                                        optionLabel="name"
                                        optionValue="id"
                                    />
                                </template>
                                <template v-else-if="field === 'id'">
                                    {{ data[field] }}
                                </template>
                                <template v-else>
                                    <InputText
                                        v-model="data[field]"
                                        autofocus
                                    />
                                </template>
                            </template>
                        </Column>
                        <Column header="삭제" style="width: 10%">
                            <template #body="{ data }">
                                <Button
                                    icon="pi pi-trash"
                                    class="p-button-danger"
                                    @click="removeMedia(data)"
                                />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
            <BillTable title="매출" />
            <BillTable title="매입" />
            <div class="p-fluid formgrid grid">
                <div class="field col-12">
                    <label for="address">memo</label>
                    <Textarea class="w-full" id="address" rows="4" />
                </div>
            </div>
        </div>
        <Toast ref="toast" />
    </div>
</template>
