import HomepageScreen from "../components/screens/HomepageScreen";

interface Screen {
    title: string;
    iconPath: string;
    component: () => JSX.Element;
}

export const screens: Screen[] = [
    // TODO: Alterar componentes
    {
        title: "Página Inicial",
        iconPath: "assets/icons/home.svg",
        component: HomepageScreen,
    },
    {
        title: "Configurações",
        iconPath: "assets/icons/settings.svg",
        component: HomepageScreen,
    },
    {
        title: "CPU",
        iconPath: "assets/icons/cpu.svg",
        component: HomepageScreen,
    },
    {
        title: "GPU",
        iconPath: "assets/icons/gpu.svg",
        component: HomepageScreen,
    },
    {
        title: "RAM",
        iconPath: "assets/icons/ram.svg",
        component: HomepageScreen,
    },
    {
        title: "Disco Rígido",
        iconPath: "assets/icons/hdd.svg",
        component: HomepageScreen,
    },
    {
        title: "Ventoinha",
        iconPath: "assets/icons/fan.svg",
        component: HomepageScreen,
    },
];
