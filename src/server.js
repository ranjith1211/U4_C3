
const app = require('./index');

const connect = require('./configs/db')

app.listen(5000, async (req, res) => {
    try {
        await connect()
    } catch (error) {
        console.log('error')
    }
    console.log('listeining on 5000')
});
