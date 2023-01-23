function getOffset(currentPage = 1, listPerPage) {
     return (currentPage - 1) * [listPerPage]
   }

function emptyOrRows(rows) {
     if(!rows) {
          return []
     }
     return rows
}

function constructModify(id, user) {
     let query = `UPDATE Users SET `
     let parameters = []
     if(typeof(user.Username) != "undefined") {
          query = query + `Username = ?,`
          parameters.push(user.Username)
     }
     if(typeof(user.Password) != "undefined") {
          query = query + `Password = ?,`
          parameters.push(user.Password)
     }
     if(typeof(user.Email) != "undefined") {
          query = query + `Email = ?,`
          parameters.push(user.Email)
     }
     if(typeof(user.Role) != "undefined") {
          query = query + `Role = ?,`
          parameters.push(user.Role)
     }
     query = query.substring(0, query.length - 1)
     query = query + ` WHERE UserID = ?`
     return [query, parameters]
}

module.exports = {
     getOffset,
     emptyOrRows,
     constructModify
}