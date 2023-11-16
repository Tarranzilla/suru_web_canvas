import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center, AccumulativeShadows, RandomizedLight, Effects, SpotLight, Stage } from "@react-three/drei";
import { Suru } from "./components/Suru";
import { Sur } from "./components/Sur";
import { Sururu } from "./components/Sururu";

function App() {
  return (
    <>
      <h1 className="SURU_Title">SURU'BA</h1>
      <h2 className="SURU_Subtitle">Sistema Utilitário Recombinante Universal</h2>

      <Canvas shadows camera={{position: [0, 0, 1.5], fov: 35}} gl={{ antialias: true, preserveDrawingBuffer: true }}>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Effects importanceSampling={true} />

        <group position={[0, -.35, 0]}>
            <Center top>
              <Suru />
              <Sur x={0}/>
              <Sur x={-.075}/>
              <Sur x={-.15}/>
              <Sur x={.075}/>
              <Sur x={.15}/>
              <Sururu />
            </Center>
        </group>
        <Environment preset="warehouse" background blur={1} />
      </Canvas>


      <div className="Main_Container Left_Main_Container">
        <div className="Container_Header Contexto_Container_Header">
            <h2>contexto</h2>
        </div>
        <div className="Main_Text_Container Contexto_Text_Container">
          <div className="Container_Wrapper Contexto_Container_Wrapper">
              <p>
                Objetos possuem embutidas em suas origens e funcionalidades
                Cargas Culturais - que tem o potencial de influenciar os
                costumes, pensamentos e padrões de consumo de quem os
                utiliza, desde o início dos tempos muitos objetos e seus
                processos de fabricação tem sido a causa de uniões ou
                desuniões entre pessoas e entre a humanidade e a natureza.
              </p>
              <p>
                Em uma comunidade plural e sustentável - Coviver deve ser um
                aspecto cultural primordial para que esta possa prosperar
                tanto consigo quanto com o sistema total onde está inserida, ou
                seja o sistema do Planeta Terra - que recentemente vem se
                transformando em um gigantesco lixão devido à nossas
                imprudencias projetuais com práticas de obsolescência que
                seriam criminosas em qualquer sociedade ambientalmente
                racional.
              </p>
              <p>
                Partindo destes pressupostos - Oferecemos uma alternativa
                ao modelo de consumo que nos é imposto, empoderando gente
                para projetar e produzir os artefatos de seu próprio cotidiano.
              </p>
              <p>
                O SURU é uma tecnologia para produção descentralizada de
                objetos modulares, altamente recombinantes e aptos a compor
                objetos do dia-a-dia.
              </p>
              <p>
                Com este projeto exploramos novas relações de uso, maneiras
                de se ocupar espaços e novas materias-primas que tragam
                reflexões e práticas que questionam a maneira que nos
                relacionamos com a natureza, um com os outros e com a nossa
                cultura material.
              </p>
              <p>
                Assim como obras de arte que podem trazer à superficie as 
                reflexões mais profundas, atribuímos ao SURU o papel de ser
                um projeto de Design Crítico e Funcional, que leva o Observador
                e Consumidor à ir além de seu papel ordinário, em direção à
                interação, à intervenção e à modificação do projeto "original".
              </p>
              <p>
                Saber Coviver nada mais é do que saber-se conectar de
                maneiras construtivas com os ecossistemas que nos cercam e
                este projeto é uma investida à esta mesma direção.
              </p>
          </div>
        </div>
      </div>
        

      <div className="Main_Container Right_Main_Container">
        <div className="Container_Header Proposta_Container_Header">
            <h2>proposta</h2>
        </div>
        <div className="Main_Text_Container Proposta_Text_Container">

          <div className="Container_Wrapper Proposta_Container_Wrapper">
            <p>
              Buscamos um diálogo projetual e um esfumaçamento dos limites
              entre usuários e projetistas que estimula uma lógica de
              consumo alternativa, autopoiética, antropofágica, simbiótica e
              parasita através do upcycling, design aberto e livre e produção
              descentralizada.
            </p>

            <p>
              A diversidade de objetos que pode ser gerada pela
              recombinação das peças abrange casos de aplicação nas mais
              diversas situações, como em residências, coworkings, eventos,
              espaços de lazer ou instituições de ensino.
            </p>

            <p>
              Em poucas palavras, trata-se de uma variedade de peças que
              podem ser encaixadas para gerar objetos complexos, tais como
              móveis. Nosso crescente catálogo de configurações oferece
              instruções para montagem de objetos como mesas, balcões,
              cadeiras e estantes.
            </p>
            <p>
              Para avançar no desenvolvimento de produtos que utilizem
              materiais mais sustentáveis estamos em conjunto com a
              startup REWAVE Plastic Lab desenvolvendo peças e objetos
              feitos de Painéis de Plástico Reciclado.
            </p>
            <p>
              Além do sistema de móveis modulares, propõe-se uma máquina
              fresadora CNC também modular e aberta para a produção de
              módulos SURU em ambientes pequenos visando a
              infraestruturação inicial de um sistema produto-serviço de
              fabricação descentralizada.
            </p>
            <p>
              A intenção é contrapor a obsolescência programada como é
              hoje, estimulando a subjetividade do uso, o compartilhamento
              de objetos e espaços o direito ao reparo e a fabricação sob
              demanda.
            </p>
            <p>
              Uma indústria local descentralizada evita com que os meios de
              produção se tornem monopólios — empoderando pequenos espaços de 
              manufatura, garantindo acesso a valores mais justos e criando um 
              ambiente frutífero para uma variabilidade maior de produtos e idéias.
            </p>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App

/*
<Environment preset="dawn" background blur={1} />


*/
