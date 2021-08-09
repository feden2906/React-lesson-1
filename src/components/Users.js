export function Users({
                          pid,
                          pname,
                          pusername,
                          pemail,
                          pstreet,
                          psuite,
                          pcity,
                          pzipcode,
                          plat,
                          plng,
                          pphone,
                          pwebsite,
                          hname,
                          pcatchPhrase,
                          pbs
                      }) {
    return (
        <div className={'allUsers'}>
            <div>
                <p>{pid} name - {pname} username - {pusername}</p>
                <p>email - {pemail}</p>
                <div>
                    <p>address: {pstreet} street, suite - {psuite}, city - {pcity}, zipcode - {pzipcode}</p>
                    <div>
                        <p>geo: {plat} - {plng}</p>
                    </div>
                </div>
                <p>phone - {pphone}</p>
                <p>website - {pwebsite}</p>
                <div>
                    <p>company: name-{hname}, catchPhrase-{pcatchPhrase}, bs-{pbs}</p>
                </div>
            </div>
        </div>
    )
}