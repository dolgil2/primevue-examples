interface MenuItem {
    label: string;
    icon?: string;
    route?: string;
    to?: string;
    url?: string;
    target?: string;
    items?: MenuItem[];
    separator?: boolean | null;
    class?: string;
    preventExact?: boolean;
    expanded?: boolean;
    badge?: string;
    type?: string;
}
interface Country {
    name: string;
    code: string;
}

interface Company {
    id?: number;
    name: string;
    regNo: string;
    repName?: string;
    address?: string;
    createdAt: Date;
    updatedAt: Date;
    bankAccount?: string;
    isMediaCom: boolean;
    createdBy?: number;
    updatedBy?: number;
}

interface Person {
    id?: number;
    companyId: number;
    name: string;
    team?: string;
    position?: string;
    email?: string;
    phone?: string;
    createdBy?: number;
    updatedBy?: number;
    createdAt: Date;
    updatedAt: Date;
}

export type { MenuItem, Country, Company, Person };
