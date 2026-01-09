export const receptek = [
    { id: '1', nev: 'Bolognai spagetti', kateg: 'Olasz', leiras: 'Főzd ki a tésztát...' },
    { id: '2', nev: 'Gulyásleves', kateg: 'Magyar', leiras: 'Pirítsd meg a hagymát...' },
    { id: '3', nev: 'Sushi tál', kateg: 'Japán', leiras: 'Használj friss halat...' }
  ]
  
  function Receptek() {
    return (
      <div className="container mt-4">
        <h1>Receptek listája</h1>
        {receptek.map(r => (
          <div key={r.id} className="card mb-3">
            <div className="card-body">
              <h5>{r.nev}</h5>
              <p>Kategória: {r.kateg}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default Receptek
  