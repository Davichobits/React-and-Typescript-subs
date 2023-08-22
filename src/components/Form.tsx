export const Form = () => {
  const handleSubmit = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nick" placeholder="nick" />
      <input type="text" name="subMonths" placeholder="subMonths" />
      <input type="text" name="avatar" placeholder="avatar" />
      <input type="text" name="description" placeholder="description" />
      <input type="submit" value='Save new sub'/>
    </form>
  )
}
