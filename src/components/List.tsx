import { Sub } from "./types"

interface Props {
  // children: number,
  subs: Array<Sub>
}

export const List = ({subs}:Props) => {
  return (
    <ul>
        {
          subs.map(sub =>(
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <div>
                <h4>{`${sub.nick} (${sub.subMonths})`}</h4>
                <p>{`${sub.description?.substring(0,53)}...`}</p>
              </div>
            </li>
          ))
        }
      </ul>
  )
}
