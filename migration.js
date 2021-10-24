const createTeachers = `
    CREATE TABLE IF NOT EXISTS "Teachers"(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50),
        email VARCHAR(50) NOT NULL,
        gender VARCHAR(10)
    )
`;

pool   
    .query(createTeachers)
    .then((data) => {
        console.log(data, "succes");
    })
    .catch((err) => {
        console.log(err, "error");
    });