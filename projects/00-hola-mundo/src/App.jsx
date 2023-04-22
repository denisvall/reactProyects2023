import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    uuid: 1,
    userName: "lordVader",
    name: "Lord DV-Sith",
    isFollowing: true,
    avatar: "darthvader",
  },
  {
    uuid: 2,
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false,
    avatar: "pheralb",
  },
  {
    uuid: 3,
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
    avatar: "midudev",
  },
  {
    uuid: 4,
    userName: "lordVader2do",
    name: "Lord DV-Sith 2do",
    isFollowing: false,
    avatar: "darthvader",
  },
];

export function App() {
  const formatUser = (userName) => `@${userName}`;

  // Objetos con propiedades para el componente
  const propsCard1 = {
    isFollowing: true,
    userName: "lordVader",
    name: "Lord DV-Sith 2do",
  };

  const propsCard2 = { initialIsFollowing: true, userName: "lordVader" };

  return (
    <section className="App">
      {
        users.map((user) => {
          const { userName, name, isFollowing, avatar } = user;
          return (
            <TwitterFollowCard
              initialIsFollowing={isFollowing}
              formatUserName={formatUser}
              key={userName}
              name={name}
              userName={userName}
              avatar={avatar}
            >{name}</TwitterFollowCard>
          );
        })

        /* <TwitterFollowCard
        initialIsFollowing
        formatUserName={formatUser}
        name="Lord DV-Sith"
        userName="lordVader"
        avatar="darthvader"
      ></TwitterFollowCard>

      <TwitterFollowCard
        initialIsFollowing={false}
        formatUserName={formatUser}
        name="Pablo Hernandez"
        userName="pheralb"
        avatar="pheralb"
      ></TwitterFollowCard>

      <TwitterFollowCard
        initialIsFollowing
        formatUserName={formatUser}
        name="Miguel Ángel Durán"
        userName="midudev"
        avatar="midudev"
      ></TwitterFollowCard>

      <TwitterFollowCard
        {...propsCard1} // se pasa objeto con propiedades que serán mapeadas al componente
        formatUserName={formatUser}
        avatar="darthvader"
      ></TwitterFollowCard> */
      }
    </section>
  );
}
