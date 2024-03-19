export default function Write() {
  return (
    <div>
      <h4>write</h4>
      <form action="/api/test" method="POST">
        <button type="submit">button</button>
      </form>
    </div>
  )
}
