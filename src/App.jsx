import './App.scss';
import { Navigation } from './components/Layout/Navigation/Navigation';
import { Footer } from './Components/Layout/Footer/Footer';
import { Header } from './Components/Partial/Header/Header.jsx';
import { Section } from './Components/Partial/Section/Section.jsx';

function TeaserSection() {
  return (
    <section id="teaser-section">
      <article>
        <p>“Alle er vi en del af problemet såvel som af løsningen, og vores medvirken er helt nødvendig, hvis det skal lykkes at få knækket kurven for udslippet af drivhusgasser. Effekten af indsatsen afhænger af, hvor mange der trækker i den rigtige retning.”</p>
      </article>
    </section>
  )
}

const infoArr = [
  {h2: "Hvad er CO2?", h3: "CO2 er en gasart der findes naturligt i Jordens atmosfære.", text: "CO2, findes naturligt i atmosfæren. Livet, er afhængigt af CO2 da det regulerer temperaturen på Jorden. CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved opnåes en balance i CO2 'regnskabet'. Afbrænding f.eks. af fossile brændstoffer, udleder CO2. Jordens skove og verdenshavene er den største 'producent' af den ilt, der er nødvendig, for liv på Jorden, som vi kender det. Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag!", img: 'Icon-CO2.png', url: "/co2", color: "#896a5f"},
  {h2: "Klima og miljø?", h3: "Kort om klimaet og miljøet?", text: "Klima og miljø hænger sammen. Klimaforandringer påvirker miljøet og omvendt. Miljøet kan betragtes som en organisme, og er det vi baserer vores liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en dominoeffekt, der påvirker alle dele i miljøet. Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele kloden, med ændringer i temperatur og nedbør som følge. Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre og infrastruktur, men også biodiversiteten som planter insekter mm. Din adfærd påvirker klimaet i størrer eller mindre grad.", img: 'Icon-Climate.png', url: "/climate", color: "#6b879b"},
  {h2: "Hvordan kan jeg bidrage?", h3: "Hvordan belaster du miljøet mindst muligt i dagligdagen?", text: "Dit forbrug overordnet herunder din produktion af affald, bidrager til udledning af CO2. Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over dit valg i dagligdagen. Din bolig og den måde du har indrettet dig påvirker miljøet. Jordens skove og verdenshavene er den største 'producent' af den ilt, der er nødvendig, for liv på Jorden, som vi kender det. Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag! Du kan påvirke CO2 balancen, både ved at ændre små ting i din hverdag, eller ved aktivt deltage i kampen for et bedre miljø.", img: 'Icon-Checklist.png', url: "/checklist", color: "#969a72"},
  {h2: "Deltag i arrangement", h3: "Deltag i eet af vores arrangementer og gør en forskel!", text: "“Combing” (”at fjerne affald”, f.eks. beachcombing: , rense stranden for affald og elementer der ikke hører hjemme her). Invester en dag med familien i naturen og sammen med andre. Tilmeld dig eet arrangement i dit område. Tag ansvar hjælp dit nærområde og os alle sammen generelt. Mød nye mennesker omkring en fælles opgave. Tag famillien med på en dag for naturen og vores fremtid. Tilmeld dig eet af vore arrangementer, eller modtag information om Klimatossen! Hent mere information på siden “Tilmeld Dig”.", img: 'Icon-Arrangement.png', url: "/arrangement", color: "#caa79e"}
]

function App() {
  const darkMode = false;

  return (
    <div>
      <Header />
      <Navigation darkMode={darkMode}/>
      <TeaserSection />
      {infoArr.map((info, index, array) => {
        return <InfoSection key={info.img} info={info} />
      })}
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

