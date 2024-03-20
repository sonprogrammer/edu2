export default function Write() {

  if(session)


  return (
    <div className="p-20">
      <h4>write</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title"/>
        <input name="content" placeholder="content"/>
        <button type="submit">button</button>
      </form>
    </div>
  )
}
