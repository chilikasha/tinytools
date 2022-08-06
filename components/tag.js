import { useNextra } from 'nextra-theme-docs'

export default function Tag(props) {
  // const [ theme, setTheme ] = useNextra()
  return <span className="tag">{props.name}</span>
}
