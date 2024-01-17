import data from'../data/data.json'

export const pedirDataId = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((elem) => elem.id === id)

        if(item) {
            resolve(item)
        }else{
            reject({
                Error: 'No existe el item'
            })
        }
    })

}
export const pedirInfo = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

