const db = require('../db')

class UserController {
    async createUser(req, res) {
        try {
            const {firstname, lastname, email, age} = req.body;
            const users = await db.query(
                `INSERT INTO users (firstname, lastname, email, age) values ($1, $2, $3, $4) RETURNING *`,
                [firstname, lastname, email, age])
            res.json(users.rows[0])
        } catch (e) {
            res.json('Произошла ошибка создание пользователя. Текст ошибки: ' + e.message)
        }
    }

    async getUsers(req, res) {
        try {
            const users = await db.query('SELECT * FROM users')
            res.json(users.rows);
        } catch(e) {
            res.json('Ошибка получение пользователей ' + e.message)
        }
    }

    async getUser(req, res) {
        try {
            const id_user = req.params.id;
            const user = await db.query('SELECT * FROM users WHERE id = $1', [id_user])
            res.json(user.rows[0]);
        } catch(e) {
            res.json('Ошибка получение пользователя ' + e)
        }
    }

    async updateUser(req, res) {
        try {
            const {id, firstname, lastname, email, age} = req.body;
            const user = await db.query(
                'update users set firstname = $1, lastname = $2, email = $3, age = $4 where id = $5 returning *',
                [firstname, lastname, email, age, id]
            )
            res.json(user.rows[0]);
        } catch (e) {
            res.json('Ошибка изменения пользователя ' + e)
        }
    }

    async deleteUser(req, res) {
        try {
            const id_user = req.params.id;
            const user = await db.query('delete from users where id = $1 returning *', [id_user])
            res.json(user.rows[0])
        } catch(e) {
            res.json('Ошибка удаление пользователя из базы данных' + e)
        }
    }
}

module.exports = new UserController();