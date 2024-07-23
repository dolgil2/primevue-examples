export interface MenuItem {
    label: string;
    icon?: string;
    to?: string;
    url?: string;
    target?: string;
    items?: MenuItem[];
    separator?: boolean | null;
    class?: string;
    preventExact?: boolean;
    expanded?: boolean;
}
