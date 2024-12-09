export default function Register() {
  return (
    <div>
      <form action="/api/auth/signup" method="POST">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">register</button>
      </form>
    </div>
  )
}
