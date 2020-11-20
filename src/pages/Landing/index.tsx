import React from 'react';
import {
  FiChevronsDown,
  FiShare2,
  FiUser,
  FiDollarSign,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from 'react-icons/fi';
import ScrollableAnchor from 'react-scrollable-anchor';
import logo from '../../assets/logo.svg';
import adaptability from '../../assets/adaptability.jpg';
import collaboration from '../../assets/collaboration.jpg';
import creative from '../../assets/creative.jpg';
import intelligence from '../../assets/intelligence.jpg';
import Persuasion from '../../assets/Persuasion.jpg';
import network from '../../assets/network.jpg';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Main,
  Content,
  CardContainer,
  Card,
  CardContainer2,
  Footer,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="logo">
          <img src={logo} alt="network" />
        </div>
        <div className="group">
          <a href="#what">Definição</a>
          <a href="#why">Motivação</a>
          <a href="#softskill">Soft Skills</a>
          <a href="#tips">Dicas</a>
        </div>
      </Header>
      <Main>
        <div className="container">
          <span className="frase">NetWork vale mais que dinheiro.</span>
          <span className="autor"> ~ Raiam Santos</span>
          <div className="flecha">
            <FiChevronsDown size={50} />
          </div>
        </div>
      </Main>
      <Content>
        <ScrollableAnchor id="what">
          <div className="section">
            <Title>A rede de contatos</Title>

            <div>
              <div className="network-group">
                <img src={network} alt="" />
                <p>
                  Ao pé da letra networking significa estabelecer conexão com
                  alguém, criar uma rede de contatos. O networking exige certa
                  aptidão social, ou seja, boa capacidade de se relacionar com
                  pessoas.
                  <br />
                  <br /> Uma pesquisa realizada aqui no Brasil demonstrou que
                  70% das pessoas que deixam empregos se recolocam no mercado
                  por meio do networking. Dito isso, a sua rede relacionamento
                  pode contribuir muito mais para sua carreira que você imagina.
                  As pessoas que você conhece e se conecta ao longo do tempo
                  podem representar soluções, conhecimento e consequentemente
                  transformação para sua carreira. <br />
                  <br />
                  Portanto, existem grandes chances de elas te ensinarem alguma
                  coisa que vai fazer você poupar dinheiro ou tempo, por
                  exemplo. Além disso, algumas delas podem ter tido problemas no
                  passado que você pode também vir a ter e elas podem evitar que
                  você tenha que enfrentar todo o caminho para resolver.
                </p>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id="why">
          <div className="section">
            <Title>Porque fazer network?</Title>
            <CardContainer>
              <Card>
                <FiShare2 size={90} />
                <span>CONEXÃO</span>
                <p>
                  Ter conexões com pessoas influentes de qualquer lugar do
                  mundo.
                </p>
              </Card>
              <Card id="subir">
                <FiUser size={90} />
                <span>AUTORIDADE </span>
                <p>
                  Ser conhecido como uma autoridade de um determinado assunto.
                </p>
              </Card>
              <Card>
                <FiDollarSign size={90} />
                <span>BUSINESS</span>
                <p>
                  Ter a possibilidade de Estruturar e alavacar sua carreira.
                </p>
              </Card>
            </CardContainer>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="softskill">
          <div className="section">
            <Title>Softs Skills</Title>
            <div className="softskill">
              Segundo pesquisa do Linkedin as principais soft skills procuradas
              por recrutadores em geral são:
            </div>

            <div className="skills">
              <div>
                <SubTitle>Criatividade</SubTitle>
                <p>
                  Para para se conectar com outras pessoas você tem que ser
                  criativos ao ponto de se destacar e ser lembrado por elas.
                </p>
              </div>

              <img src={creative} alt="" />
            </div>
            <div className="skills">
              <img src={Persuasion} alt="" />
              <div>
                <SubTitle>Persuasão</SubTitle>
                <p>
                  Para para convencer outras pessoas você tem autoridade sobre
                  determinado assunto é preciso às vezes usar um pouco da
                  persuasão.
                </p>
              </div>
            </div>
            <div className="skills">
              <div>
                <SubTitle>Colaboração</SubTitle>
                <p>
                  É muito mais simples da conexão ser feita se você estiver
                  tentando colaborar com o seu conhecimento para resolver ou
                  melhorar alguma dificuldade que a pessoa tenha.
                </p>
              </div>
              <img src={collaboration} alt="" />
            </div>
            <div className="skills">
              <img src={adaptability} alt="" />
              <div>
                <SubTitle>Adaptabilidade</SubTitle>
                <p>
                  Muitas vezes em uma conversa precisamos adaptar nossa forma de
                  falar ou palavras ditas para que haja um real entendimento ou
                  conexão entre você e seu ouvinte.
                </p>
              </div>
            </div>
            <div className="skills">
              <div>
                <SubTitle>Inteligência Emocional</SubTitle>
                <p>
                  Na relação entre pessoas ter inteligência emocional é bastante
                  relevante, pois é ela que faz transformar o não do presente no
                  sim do futuro.
                </p>
              </div>
              <img src={intelligence} alt="" />
            </div>
            <div className="softskill">
              Portanto, podemos concluir que o poder de se conectar com as
              pessoas vale mais que qualquer valor monetário.
            </div>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="tips">
          <div className="section">
            <Title>Como fazer networking</Title>
            <CardContainer2>
              <div style={{ gridArea: 'd1' }}>
                <SubTitle>1. Seja Confiante</SubTitle>
              </div>
              <div style={{ gridArea: 'd2' }}>
                <SubTitle>2. Esteja Presente</SubTitle>
              </div>
              <div style={{ gridArea: 'd3' }}>
                <SubTitle>3. Seja Autênico</SubTitle>
              </div>
              <div style={{ gridArea: 'd4' }}>
                <SubTitle>4. Troque redes sociais</SubTitle>
              </div>
              <div style={{ gridArea: 'd5' }}>
                <SubTitle>5. Mantenha o Contato</SubTitle>
              </div>
            </CardContainer2>
          </div>
        </ScrollableAnchor>
      </Content>
      <div className="check">
        <Title>Ainda nao está convencido?</Title>
        <iframe
          title="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ELDwxggKVUs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video"
        />
      </div>

      <Footer>
        <div className="rodape">
          <Title> Ainda tem duvidas?</Title>
          <SubTitle> Entre em contato comigo </SubTitle>
          <div className="group">
            <a href="https://github.com/Gabriel3421">
              <FiGithub size={25} />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-de-souza-a7326a169/">
              <FiLinkedin size={25} />
            </a>
            <a href="https://www.instagram.com/gabrielsouza342/">
              <FiInstagram size={25} />
            </a>
          </div>
          <span>Develop by: Gabriel Souza</span>
        </div>
      </Footer>
    </Container>
  );
};

export default Landing;
