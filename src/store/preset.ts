import { Company, MenuItem, Person, Media } from '@/interfaces';

export const exampleMenu: MenuItem[] = [
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', route: '/' }],
    },
    {
        label: 'UI Components',
        items: [
            {
                label: 'Form Layout',
                icon: 'pi pi-fw pi-id-card',
                route: '/uikit/formlayout',
            },
            {
                label: 'Input',
                icon: 'pi pi-fw pi-check-square',
                route: '/uikit/input',
            },
            {
                label: 'Float Label',
                icon: 'pi pi-fw pi-bookmark',
                route: '/uikit/floatlabel',
            },
            {
                label: 'Invalid State',
                icon: 'pi pi-fw pi-exclamation-circle',
                route: '/uikit/invalidstate',
            },
            {
                label: 'Button',
                icon: 'pi pi-fw pi-mobile',
                route: '/uikit/button',
                class: 'rotated-icon',
            },
            {
                label: 'Table',
                icon: 'pi pi-fw pi-table',
                route: '/uikit/table',
            },
            { label: 'List', icon: 'pi pi-fw pi-list', route: '/uikit/list' },
            {
                label: 'Tree',
                icon: 'pi pi-fw pi-share-alt',
                route: '/uikit/tree',
            },
            {
                label: 'Panel',
                icon: 'pi pi-fw pi-tablet',
                route: '/uikit/panel',
            },
            {
                label: 'Overlay',
                icon: 'pi pi-fw pi-clone',
                route: '/uikit/overlay',
            },
            {
                label: 'Media',
                icon: 'pi pi-fw pi-image',
                route: '/uikit/media',
            },
            {
                label: 'Menu',
                icon: 'pi pi-fw pi-bars',
                route: '/uikit/menu',
                preventExact: true,
            },
            {
                label: 'Message',
                icon: 'pi pi-fw pi-comment',
                route: '/uikit/message',
            },
            { label: 'File', icon: 'pi pi-fw pi-file', route: '/uikit/file' },
            {
                label: 'Chart',
                icon: 'pi pi-fw pi-chart-bar',
                route: '/uikit/charts',
            },
            {
                label: 'Misc',
                icon: 'pi pi-fw pi-circle',
                route: '/uikit/misc',
            },
        ],
    },
    {
        label: 'Prime Blocks',
        items: [
            {
                label: 'Free Blocks',
                icon: 'pi pi-fw pi-eye',
                route: '/blocks',
                badge: 'NEW',
            },
            {
                label: 'All Blocks',
                icon: 'pi pi-fw pi-globe',
                url: 'https://www.primefaces.org/primeblocks-vue',
                target: '_blank',
            },
        ],
    },
    {
        label: 'Utilities',
        items: [
            {
                label: 'PrimeIcons',
                icon: 'pi pi-fw pi-prime',
                route: '/utilities/icons',
            },
            {
                label: 'PrimeFlex',
                icon: 'pi pi-fw pi-desktop',
                url: 'https://www.primefaces.org/primeflex/',
                target: '_blank',
            },
        ],
    },
    {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        route: '/pages',
        items: [
            {
                label: 'Landing',
                icon: 'pi pi-fw pi-globe',
                route: '/landing',
            },
            {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        route: '/auth/login',
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        route: '/auth/error',
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        route: '/auth/access',
                    },
                ],
            },
            {
                label: 'Crud',
                icon: 'pi pi-fw pi-pencil',
                route: '/pages/crud',
            },
            {
                label: 'Timeline',
                icon: 'pi pi-fw pi-calendar',
                route: '/pages/timeline',
            },
            {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                route: '/pages/notfound',
            },
            {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                route: '/pages/empty',
            },
        ],
    },
    {
        label: 'Hierarchy',
        items: [
            {
                label: 'Submenu 1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 1.1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1.1',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Submenu 1.1.2',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Submenu 1.1.3',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                        ],
                    },
                    {
                        label: 'Submenu 1.2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.2.1',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Submenu 2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1.1',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Submenu 2.1.2',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                        ],
                    },
                    {
                        label: 'Submenu 2.2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.2.1',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: 'Get Started',
        items: [
            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-question',
                route: '/documentation',
            },
            {
                label: 'Figma',
                url: 'https://www.dropbox.com/scl/fi/bhfwymnk8wu0g5530ceas/sakai-2023.fig?rlkey=u0c8n6xgn44db9t4zkd1brr3l&dl=0',
                icon: 'pi pi-fw pi-pencil',
                target: '_blank',
            },
            {
                label: 'View Source',
                icon: 'pi pi-fw pi-search',
                url: 'https://github.com/primefaces/sakai-vue',
                target: '_blank',
            },
            {
                label: 'Nuxt Version',
                url: 'https://github.com/primefaces/sakai-nuxt',
                icon: 'pi pi-fw pi-star',
            },
        ],
    },
];

export const workMenu: MenuItem[] = [
    {
        label: '캠페인관리',
        items: [
            {
                label: '캠페인등록',
                icon: 'pi pi-fw pi-bolt',
                route: '/campaign/campcreate',
            },
            { label: '담당캠페인', icon: 'pi pi-fw pi-heart', route: '/' },
            { label: '소속캠페인', icon: 'pi pi-fw pi-warehouse', route: '/' },
            { label: '참조캠페인', icon: 'pi pi-fw pi-tag', route: '/' },
            {
                label: '모든캠페인',
                icon: 'pi pi-fw pi-objects-column',
                route: '/',
            },
        ],
    },
    {
        label: '보고서관리',
        items: [
            {
                label: '모든보고서',
                icon: 'pi pi-fw pi-objects-column',
                route: '/',
            },
            { label: '이번달보고서', icon: 'pi pi-fw pi-heart', route: '/' },
        ],
    },
    {
        label: '매출입관리',
        items: [
            {
                label: '모든매출입',
                icon: 'pi pi-fw pi-objects-column',
                route: '/',
            },
            { label: '이번달청구', icon: 'pi pi-fw pi-heart', route: '/' },
        ],
    },
];

export const campMenu: MenuItem[] = [
    {
        label: '캠페인',
        items: [
            {
                label: '요약',
                icon: 'pi pi-fw pi-chart-pie',
                route: '/campaign/campsummary',
            },
            {
                label: '캠페인 목록',
                icon: 'pi pi-fw pi-list',
                route: '/campaign/camptable',
            },
        ],
    },
    {
        label: '거래처',
        items: [
            {
                label: '고객사목록',
                icon: 'pi pi-fw pi-users',
                route: '/campaign/company',
            },
            {
                label: '고객목록',
                icon: 'pi pi-fw pi-user',
                route: '/campaign/client',
            },
        ],
    },
];

export const mediaMenu: MenuItem[] = [
    {
        label: '미디어',
        items: [
            { label: '운영현황', icon: 'pi pi-fw pi-chart-bar', route: '/' },
            { label: '요약 및 통계', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },
    {
        label: '공항',
        items: [
            { label: '김포공항', icon: 'pi pi-fw pi-chart-line', route: '/' },
            { label: '제주공항', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '광주공항', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },

    {
        label: '디지털',
        items: [
            { label: '야립D', icon: 'pi pi-fw pi-chart-line', route: '/' },
            { label: '파노라마', icon: 'pi pi-fw pi-chart-line', route: '/' },
            { label: '스크린', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '헬로로데오', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '헬로명동', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '지디아', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '동대문APM', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '소피텔', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '성수234', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '오르페오', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '코네스트', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '국호빌딩', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '인스파이어', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },
    {
        label: '프린트',
        items: [
            { label: '야립', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '사운즈한남', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '나인원한남', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '이태원178', icon: 'pi pi-fw pi-chart-line', route: '/' },
            { label: '금호타운', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '금하초경', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '성광빌딩', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '신한상가', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '더플라자', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '대양빌딩', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '버스', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },
    {
        label: 'KT',
        items: [
            { label: '가로변쉘터', icon: 'pi pi-fw pi-chart-line', route: '/' },
            { label: '디지털쉘터', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '타운보드', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '신분당선D', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '신분당선', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },
    {
        label: '현대퓨쳐넷',
        items: [
            { label: '현대백화점천호', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '현대백화점삼성', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '디지털갤러리', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '더현대서울', icon: 'pi pi-fw pi-list', route: '/' },
            { label: '한섬빌딩', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },
    {
        label: '관리메뉴',
        items: [
            { label: '요약', icon: 'pi pi-fw pi-chart-line', route: '/' },
            { label: '미디어 목록', icon: 'pi pi-fw pi-list', route: '/' },
        ],
    },
];

export const companyList: Company[] = [
    {
        id: 1,
        name: '삼성전자',
        regNo: '123-45-67890',
        repName: '이재용',
        address: '서울특별시 강남구 서초대로 74길 11',
        createdAt: new Date('2021-01-01T10:00:00Z'),
        updatedAt: new Date('2023-01-01T10:00:00Z'),
        bankAccount: '123-456-789',
        isMediaCom: false,
    },
    {
        id: 2,
        name: 'LG화학',
        regNo: '987-65-43210',
        repName: '신학철',
        address: '서울특별시 영등포구 여의대로 128',
        createdAt: new Date('2022-02-02T11:00:00Z'),
        updatedAt: new Date('2023-02-02T11:00:00Z'),
        isMediaCom: false,
    },
    {
        id: 3,
        name: '네이버',
        regNo: '456-12-34567',
        repName: '한성숙',
        address: '경기도 성남시 분당구 불정로 6',
        createdAt: new Date('2020-03-03T12:00:00Z'),
        updatedAt: new Date('2023-03-03T12:00:00Z'),
        bankAccount: '789-123-456',
        isMediaCom: true,
    },
    {
        id: 4,
        name: '카카오',
        regNo: '321-54-98765',
        repName: '여민수',
        address: '제주특별자치도 제주시 첨단로 242',
        createdAt: new Date('2019-04-04T13:00:00Z'),
        updatedAt: new Date('2023-04-04T13:00:00Z'),
        bankAccount: '654-321-987',
        isMediaCom: true,
    },
    {
        id: 5,
        name: 'SK텔레콤',
        regNo: '789-01-23456',
        repName: '박정호',
        address: '서울특별시 중구 을지로 65',
        createdAt: new Date('2018-05-05T14:00:00Z'),
        updatedAt: new Date('2023-05-05T14:00:00Z'),
        bankAccount: '321-654-098',
        isMediaCom: false,
    },
];
export const personList: Person[] = [
    {
        id: 1,
        companyId: 1,
        name: '김철수',
        team: '개발팀',
        position: '팀장',
        email: 'cheolsu@example.com',
        phone: '010-1234-5678',
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date('2021-01-01T10:00:00Z'),
        updatedAt: new Date('2023-01-01T10:00:00Z'),
    },
    {
        id: 2,
        companyId: 1,
        name: '이영희',
        team: '마케팅팀',
        position: '사원',
        email: 'younghee@example.com',
        phone: '010-2345-6789',
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date('2021-02-01T10:00:00Z'),
        updatedAt: new Date('2023-02-01T10:00:00Z'),
    },
    {
        id: 3,
        companyId: 1,
        name: '박지훈',
        team: '영업팀',
        position: '과장',
        email: 'jihun@example.com',
        phone: '010-3456-7890',
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date('2021-03-01T10:00:00Z'),
        updatedAt: new Date('2023-03-01T10:00:00Z'),
    },
    {
        id: 4,
        companyId: 1,
        name: '최민수',
        team: '재무팀',
        position: '대리',
        email: 'minsu@example.com',
        phone: '010-4567-8901',
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date('2021-04-01T10:00:00Z'),
        updatedAt: new Date('2023-04-01T10:00:00Z'),
    },
    {
        id: 5,
        companyId: 1,
        name: '정지혜',
        team: '기획팀',
        position: '사원',
        email: 'jihye@example.com',
        phone: '010-5678-9012',
        createdBy: 1,
        updatedBy: 1,
        createdAt: new Date('2021-05-01T10:00:00Z'),
        updatedAt: new Date('2023-05-01T10:00:00Z'),
    },
];

export const mediaList: Media[] = [
    { id: 1, name: '178', price: 50000000 },
    { id: 2, name: '파노라마', price: 10000000 },
    { id: 3, name: '스크린', price: 10000000 },
    { id: 4, name: '헬로명동', price: 10000000 },
    { id: 5, name: '헬로로데오', price: 80000000 },
    { id: 6, name: '제주공항', price: 50000000 },
    { id: 7, name: '김포공항', price: 50000000 },
    { id: 8, name: '광주공항', price: 25000000 },
    { id: 9, name: '야립', price: 15000000 },
    { id: 10, name: '버스쉘터', price: 3000000 },
    { id: 11, name: '지디아', price: 10000000 },
];
