export class User {
    constructor({
        id, 
        email, 
        password,
        displayname,
        photoUrl,
        createdAt,
        updatedAt
    }){
        this.id = id
        this.email = email
        this.password = password
        this.displayname = displayname || ''
        this.photoUrl = photoUrl || ''
        this.createdAt = createdAt || new Date()
        this.updatedAt = new Date()
    }
}