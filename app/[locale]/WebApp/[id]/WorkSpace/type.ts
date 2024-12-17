interface event {
  start: number
  end: number
  title: string
}

interface PersonProps {
  Person: Person[]
}

interface Person {
  name: string
  events: event[]
}

interface event {
  start: number
  end: number
  title: string
}

interface TakeAllProps {
  params: string | null
}
