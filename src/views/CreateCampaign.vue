<script setup lang="ts">
import { ref, Ref } from 'vue';
import { Country } from '@/interfaces';

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
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>캠페인 등록</h5>
                <div class="field">
                    <label for="name1">Name</label>
                    <InputText id="name1" type="text" />
                </div>
                <div class="field">
                    <label for="email1">Email</label>
                    <InputText id="email1" type="text" />
                </div>
                <div class="field">
                    <label for="age1">Age</label>
                    <InputText id="age1" type="text" />
                </div>
            </div>

            <div class="card p-fluid">
                <h5>Vertical Grid</h5>
                <div class="formgrid grid">
                    <div class="field col">
                        <label for="name2">Name</label>
                        <InputText id="name2" type="text" />
                    </div>
                    <div class="field col">
                        <label for="email2">Email</label>
                        <InputText id="email2" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Horizontal</h5>
                <div class="field grid">
                    <label for="name3" class="col-12 mb-2 md:col-2 md:mb-0"
                        >Name</label
                    >
                    <div class="col-12 md:col-10">
                        <InputText id="name3" type="text" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="email3" class="col-12 mb-2 md:col-2 md:mb-0"
                        >Email</label
                    >
                    <div class="col-12 md:col-10">
                        <InputText id="email3" type="text" />
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Inline</h5>
                <div class="formgroup-inline">
                    <div class="field">
                        <label for="firstname1" class="p-sr-only"
                            >Firstname</label
                        >
                        <InputText
                            id="firstname1"
                            type="text"
                            placeholder="Firstname"
                        />
                    </div>
                    <div class="field">
                        <label for="lastname1" class="p-sr-only"
                            >Lastname</label
                        >
                        <InputText
                            id="lastname1"
                            type="text"
                            placeholder="Lastname"
                        />
                    </div>
                    <Button label="Submit"></Button>
                </div>
            </div>

            <div class="card">
                <h5>Help Text</h5>
                <div class="field p-fluid">
                    <label for="username">Username</label>
                    <InputText id="username" type="text" />
                    <small>Enter your username to reset your password.</small>
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="card">
                <h5>Advanced</h5>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label for="firstname2">Firstname</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="lastname2">Lastname</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <div class="field col-12">
                        <label for="address">Address</label>
                        <Textarea id="address" rows="4" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="state">State</label>
                        <Dropdown
                            id="state"
                            v-model="dropdownItem"
                            :options="dropdownItems"
                            optionLabel="name"
                            placeholder="Select One"
                        ></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="zip">Zip</label>
                        <InputText id="zip" type="text" />
                    </div>
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
