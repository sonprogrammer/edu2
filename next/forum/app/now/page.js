export default function Now() {
  return (
    <div>
      <h1>now : </h1>
      <form action="/api/date" method="GET">
        <button>button</button>
      </form>
    </div>
  )
}
