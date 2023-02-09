const sql = require("mysql");

let connection;
let cd_db;

async function connectDB() {
    connection = sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root@123',
        database: 'studentdb',
        connectionLimit: 20
    })
    await new Promise((resolve, reject) => {
        connection.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              reject(err)
            }
            resolve();
            console.log('Connected as id/state - ' + connection.threadId + "/" + connection.state);
        });
    }) 
} 

class studentDB{
    static getstudentDBInstance(){
        return cd_db ? cd_db: new studentDB()
    }
    createTuple = async (tableName, columns, values) => {
        try {
            await connectDB();
            const response = await new Promise((resolve, reject) => { 
                const query = `INSERT INTO ${tableName} ${columns} VALUES ${values};`;
                console.log(query, 'query')
                connection.query(query, (err, res) => {
                    if(err) reject(new Error(err.message));
                    resolve(res);
                });
            })
            return response
        } catch (e) {
            throw(e)
        } finally {
            connection.end();
            console.log("Connection close");
        }
    };

    getAllDocuments = async (tableName) => {
        try{
            await connectDB();
            const response = await new Promise((resolve, reject) => {                
                const query = `SELECT * FROM ${tableName};`;     
                connection.query(query, (err, res) => {
                    if(err) reject(new Error(err.message));
                    resolve(res);
                });
            })
            return response
        } catch(e){
            console.log("Error: "+ e)
        } finally{
            connection.end();
            console.log("Connection close");        }
    }

        
    getDocument = async (tableName, field, value) => {
        try{
            await connectDB();
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${tableName} WHERE ${field} = ${value};`;
                connection.query(query, (err, res) => {
                    if(err) reject(new Error(err.message));
                    resolve(res);
                });
            })
            return response
        } catch(e){
            throw(e)
        } finally{
            connection.end();
            console.log("Connection close");        }
    }


    updateDocument = async (tableName, updatedData, id) => {
        try{
            await connectDB();
            const response = await new Promise((resolve, reject) => {
                let query;
                if(tableName === 'student'){
                    query = `UPDATE ${tableName}
                        SET name='${updatedData.name}', image='${updatedData.image}', 
                        className='${updatedData.className}', 
                        age=${updatedData.age}, rollNo=${updatedData.rollNo}, 
                        contactNo='${updatedData.contactNo}'
                        WHERE id = ${id};`;
                } else {
                    query = `UPDATE ${tableName}
                        SET name='${updatedData.name}',  
                        marks=${updatedData.marks}, 
                        total=${updatedData.total}
                        WHERE id = ${id};`;
                }
                connection.query(query, (err, res) => {
                    if(err) reject(new Error(err.message));
                    resolve(res);
                });
            })
            return response
        } catch(e){
            throw(e)
        } finally {
            connection.end();
            console.log("Connection close");        }
    }
    
    deleteDocument = async (tableName, id) => {
        try{
            await connectDB();
            const response = await new Promise((resolve, reject) => {
                const query = `DELETE FROM ${tableName} WHERE id=${id};`;
                connection.query(query, (err, res) => {
                    if(err) reject(new Error(err.message));
                    resolve(res);
                });
            })
            return response
        } catch(e){
            console.log("Error: "+ e)
        } finally{
            connection.end();
            console.log("Connection close");        
        }
    }
}

module.exports = { studentDB }
