import React from 'react';
import { Container,TreinArea, TreinView, TreinText, DadosView, DadosText, MensagemArea, MensagemView, MensagemText, Titulo, TreinScroll } from './styles';
import MenuIcon from '../../components/icon';

export default function Treinamentos({ route }) {
    if (route.params) {

        const { colaborador } = route.params

        return (
            <Container>
                <TreinScroll>
                    <MenuIcon />
                    <Titulo>Treinamentos:</Titulo>
                    {colaborador.setColabsTrns.map((p, i) => {
                        return (
                            <TreinArea key={i}>
                                <TreinView>
                                    <TreinText>Nome: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.nome}</DadosText>
                                </DadosView>
                                <TreinView>
                                    <TreinText>Descrição: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.descricao}</DadosText>
                                </DadosView>
                                <TreinView>
                                    <TreinText>Caga Horária: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.cargaHoraria} Hora(s)</DadosText>
                                </DadosView>
                                <TreinView>
                                    <TreinText>Instituição: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.instituicao}</DadosText>
                                </DadosView>
                            </TreinArea>
                        )
                    })}
                </TreinScroll>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Nenhuma informação encontrada,</MensagemText>
                        <MensagemText>escolha um colaborador primeiro para ver seus treinamentos.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}