module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send('hello Elas Ride');
    });
}