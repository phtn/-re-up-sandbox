# @re-up/sandbox

install:

```bash
bun i @re-up/sandbox
```

usage:

```ts
import {condish} from '@re-up/sandbox'

function App(){

  const {loading, data} = useFetch()

  const ConditionalComponent = useCallback(() => {
    const options = condish(<Loading/>, <Viewer {...data}/>)
    return <>{options.get(loading)}<>
  }, [loading, data])


  return <ConditionalComponent />
}
```
