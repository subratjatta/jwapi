var fs = require('fs');
const path = require("path");
const { param } = require('../routes/link');


const demo =async (req, res) => {

    res.status(200).send("hii from server")
}

const getLink = async (req,res) => {
    try {

        let id = req.params.id
        console.log("id : ",id)

        let data = fs.readFileSync(path.resolve(__dirname, '../data.json'))

        console.log("data : ", JSON.parse(data))

        data = JSON.parse(data)

        let specificData = data.data.filter((iterator) => {
            return iterator.id == id
        })

        console.log("specificData : ",specificData)

        res.status(200).send({
            result : specificData
        })
    } catch (error) {
        console.log("error : ",error)
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {
    demo: demo,
    getLink : getLink
}