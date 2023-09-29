import HomepageScreen from "../components/screens/HomepageScreen";


interface Screen {
    title: string; // Título na tela
    subtitle?: string; // Subtítulo na tela
    navBarTitle: string; // Título na NavBar
    navBarIcon: string; // Endereço do ícone na NavBar
    component: () => JSX.Element; // Componente React da tela
}

export const screens: Screen[] = [
    // TODO: Alterar componentes das telas
    {
        title: "Bem-vindo",
        navBarTitle: "Início",
        navBarIcon: "assets/icons/home.svg",
        component: HomepageScreen
    },
    {
        title: "Configurações",
        navBarTitle: "Configurações",
        navBarIcon: "assets/icons/settings.svg",
        component: HomepageScreen
    },
    {
        title: "Processador",
        subtitle: "Unidade Central de Processamento (CPU)",
        navBarTitle: "CPU",
        navBarIcon: "assets/icons/cpu.svg",
        component: HomepageScreen
    },
    {
        title: "Placa de Vídeo",
        subtitle: "Unidade de Processamento Gráfico (GPU)",
        navBarTitle: "GPU",
        navBarIcon: "assets/icons/gpu.svg",
        component: HomepageScreen
    },
    {
        title: "Memória RAM",
        subtitle: "Memória de Acesso Aleatório (RAM)",
        navBarTitle: "RAM",
        navBarIcon: "assets/icons/ram.svg",
        component: HomepageScreen
    },
    {
        title: "Disco Rígido",
        subtitle: "Disco Rígido (HDD)",
        navBarTitle: "HDD",
        navBarIcon: "assets/icons/hdd.svg",
        component: HomepageScreen
    },
    {
        title: "Ventoinha",
        navBarTitle: "Ventoinha",
        navBarIcon: "assets/icons/fan.svg",
        component: HomepageScreen
    },
]