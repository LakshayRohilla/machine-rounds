const MoneyMolApiData = () => {
    const data = [
        {
            user_id: 123,
            name: "Krishna",
            role: "admin",
            city: "Delhi",
        },
        {
            user_id: 123,
            name: "Krishna",
            role: "guest",
            city: "Delhi",
        },
        {
            user_id: 124,
            name: "Krishna A",
            role: "admin",
            city: "Delhi",
        },
        {
            user_id: 125,
            name: "Krishna B",
            role: "guest",
            city: "Mumbai",
        },
        {
            user_id: 126,
            name: "Krishna C",
            role: "admin",
            city: "Jaipur",
        },
        {
            user_id: 127,
            name: "Krishna  D",
            role: "guest",
            city: "Kolkata",
        },
    ];

    console.log(data);

    // output : city , admin, guest
    let reqData = new Map();

    for (let row of data) {
        if (!reqData.has(row.city)) {
            reqData.set(row.city, { "city": row.city, "guest": row.role == 'guest' ? 1 : 0, "admin": row.role == "admin" ? 1 : 0 })
        } else {
            let obj = reqData.get(row.city);
            row.role == 'guest' && (obj.guest += 1);
            row.role == 'admin' && (obj.admin += 1);
            reqData.set(row.city, obj);
        }
    }
    console.log([...reqData.values()]);
    const finalData = [...reqData.values()];

    return (
        <div style={{alignContent: 'center', display:'flex', justifyContent:'center', flexDirection:'column'}}>
        <p style={{fontWeight:'bolder'}}>Money Mul Object Question</p>
        <table style={{ border: "1px solid" }}>
          <tbody>
            <tr>
              <th>City</th>
              <th>Admin</th>
              <th>Guest</th>
            </tr>
            {finalData.map((elem) => {
              return (
                <tr>
                  <td>{elem.city}</td>
                  <td>{elem.admin}</td>
                  <td>{elem.guest}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

}

export default MoneyMolApiData;