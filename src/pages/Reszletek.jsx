import { useParams } from 'react-router-dom'

function Reszletek() {
  const { id } = useParams()

  const receptek = [
    { id: '1', nev: 'Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...' },
    { id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Pirítsd meg a hagymát...' },
    { id: '3', nev: 'Sushi tál', kateg: 'Japán', leiras: 'Használj friss halat...' }
  ]

  const recept = receptek.find(r => r.id === id)

  if (!recept) {
    return <NotFound />
  }


  return (
    <div className="container mt-4">
      <h2>{recept.nev}</h2>
      <h4>Kategória: {recept.kateg}</h4>
      <p>{recept.leiras}</p>
    </div>
  )
}

export default Reszletek
