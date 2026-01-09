import { useSearchParams } from 'react-router-dom'
import { receptek } from './Receptek' 

function Kereso() {
  const [searchParams, setSearchParams] = useSearchParams()
  const nev = searchParams.get('nev') || ''

  const szurtReceptek = receptek.filter(r =>
    r.nev.toLowerCase().includes(nev.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const nevInput = formData.get('nev')
    setSearchParams(nevInput ? { nev: nevInput } : {})
  }

  const gotoRecept = (id) => {
    window.location.href = `/receptek/${id}`
  }

  return (
    <div className="container mt-4">
      <h2>Recept kereső</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nev"
          placeholder="Recept név"
          defaultValue={nev}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">Keresés</button>
      </form>

      <ul>
        {szurtReceptek.map(r => (
          <li key={r.id}>
            <button
              className="btn btn-link p-0"
              onClick={() => gotoRecept(r.id)}
            >
              {r.nev}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Kereso
