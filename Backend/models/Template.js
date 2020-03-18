const db = require('../database/index.js')


getTemplateById = async (template_id) => {
    try {
        const temp = await db.one(`SELECT * FROM template WHERE template_id = $1`, [template_id])
        console.log(`Template response`, temp)
        return temp
    } catch (error) {
        console.log(error)
    }
}

// addNewTemplate = async (image, img_name) => {

//     try {
//         const insertQuery = `INSERT INTO template (image, img_name) 
//         VALUES($1, $2) RETURNING *`
//         let response = await db.any(insertQuery, [image, img_name])
//         return response;
//     } catch (error) {
//         console.log(error)
//     }
// }

addNewTemplate = async (image, img_name) => {
    try {
        const insertQuery = `INSERT INTO template (image, img_name) 
        VALUES($1, $2) RETURNING *`
        let response = await db.any(insertQuery, [image, img_name])
        return response;
    } catch (error) {
        console.log(error)
    }
}

getAll = async () => {
    return await db.any(`SELECT * FROM template`)
}


// editTemplate = async () => {

// }

module.exports = {
    getTemplateById,
    addNewTemplate,
    getAll
};
