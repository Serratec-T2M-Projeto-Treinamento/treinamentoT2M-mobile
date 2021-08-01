import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaDeColaboradores from '../pages/listaColaboradores';
import InformacoesColaboradores from '../pages/informacoesColaboradores';
import Cadastro from '../pages/cadastro';
import Projetos from '../pages/projetos';
import Formacoes from '../pages/formacoes';
import Certificacoes from  '../pages/certificacao';
import Treinamentos from '../pages/treinamentos';
import HistoricoProfissional from '../pages/historicoProfissional';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Lista de Colaboradores' component={ListaDeColaboradores} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Informações Colaboradores' component={InformacoesColaboradores} />
            <Drawer.Screen name='Treinamentos' component={Treinamentos}/>
            <Drawer.Screen name='Certificações' component={Certificacoes}/>
            <Drawer.Screen name='Formações' component={Formacoes} />
            <Drawer.Screen name='Projetos' component={Projetos} />
            {/* <Drawer.Screen name='Histórico Profissional' component={HistoricoProfissional}/> */}
            <Drawer.Screen name='Sair' component={Login} options={{gestureEnabled:false}}/>
            {/* options={{drawerLabel: () => null}} />  */}
        </Drawer.Navigator>
    );
};












