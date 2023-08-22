interface Props {
  // children: number,
  subs: Array<{
    nick: string
    subMonths: number
    avatar: string
    description?: string
  }>
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
