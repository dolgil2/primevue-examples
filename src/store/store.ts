import { defineStore } from 'pinia';
import { ref, Ref, computed } from 'vue';
import { Company, MenuItem, Person } from '../interfaces';
import { exampleMenu, companyList, personList } from './preset';

export const useMenuStore = defineStore('menu', () => {
    // const menuItems: Ref<Array<MenuItem>> = ref(exampleMenu);
    const menuItems = ref<MenuItem[]>(exampleMenu);

    const setSideMenu = (newItems: MenuItem[]) => {
        menuItems.value = newItems;
        console.log('===menu has changed===store msg===', newItems);
    };

    // const getSideMenu = computed(() => menuItems);

    return { menuItems, setSideMenu };
});

export const useDataStore = defineStore('data', () => {
    const companies: Ref<Array<Company>> = ref([]);
    const persons: Ref<Array<Person>> = ref([]);

    const setCompanies = () => {
        companies.value = companyList;
        console.log('===axios is needed===store msg===');
    };
    const addCompany = (newCompany: Company) => {
        companies.value.push(newCompany);
        console.log('===axios is needed===store msg===');
    };

    const updateCompany = (updatedCompany: Company) => {
        console.log(updatedCompany);
        const index = companies.value.findIndex(
            (company) => company.id === updatedCompany.id
        );
        if (index !== -1) {
            companies.value[index] = updatedCompany;
        }
        console.log(companies.value);
    };
    const setPersons = () => {
        persons.value = personList;
        console.log('===axios is needed===store msg===');
    };
    const addPerson = (newPerson: Person) => {
        const lastId = persons.value.reduce(
            (maxId, person) => Math.max(maxId, person.id || 0),
            0
        );
        newPerson.id = lastId + 1;

        persons.value.push(newPerson);
        console.log('===axios is needed===store msg===');
        console.log(persons);
    };

    return {
        companies,
        persons,
        setCompanies,
        addCompany,
        setPersons,
        addPerson,
        updateCompany,
    };
});
