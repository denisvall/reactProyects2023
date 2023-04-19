import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
  const formatUser = (userName) => `@${userName}`;

  // Objetos con propiedades para el componente
  const propsCard1 = {
    isFollowing: true,
    userName: "lordVader",
    name: "Lord DV-Sith 2do",
  };

  const propsCard2 = { isFollowing: true, userName: "lordVader" };

  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        formatUserName={formatUser}
        name="Lord DV-Sith"
        userName="lordVader"
        avatar="darthvader"
      ></TwitterFollowCard>

      <TwitterFollowCard
        isFollowing={false}
        formatUserName={formatUser}
        name="Pablo Hernandez"
        userName="pheralb"
        avatar="pheralb"
      ></TwitterFollowCard>

      <TwitterFollowCard
        isFollowing
        formatUserName={formatUser}
        name="Miguel Ángel Durán"
        userName="midudev"
        avatar="midudev"
      ></TwitterFollowCard>

      <TwitterFollowCard
        {...propsCard1} // se pasa objeto con propiedades que serán mapeadas al componente
        formatUserName={formatUser}
        avatar="darthvader"
      ></TwitterFollowCard>
    </section>
  );
}
