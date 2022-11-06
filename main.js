let pageNumber
let imagePerPage = 4
let btn

const dataWork = 
{
    async getData()
    {
        const { gallery, pagination } = UI.loadSelector()
        gallery.innerHTML = ""
        const response = await fetch("database/db.json")
        const data = await response.json()
        // console.log(data)
        for (let i=(pageNumber*imagePerPage); i<(pageNumber+1)*imagePerPage; i++)
        {
            let showImage = `
                <div class="card bg-light">
                <img src="${data.images[i].img}" class="card-img-top my-3">
            `
            // <div class="card-body">
            //         <h5 class="card-title">${data.images[i].name}</h5>
            //         <h6>${data.images[i].email}</h6>
            //     </div>
            gallery.insertAdjacentHTML("afterbegin", showImage)
        }
    }
}

const UI = {
    loadSelector()
    {
        const gallery = document.querySelector(".row")
        const pagination = document.querySelector(".pages")
        return {
            gallery, pagination
        }

    },
    buttonInit()
    {
        const {gallery, pagination} = this.loadSelector()
        for (let i = 0; i< imagePerPage; i++)
        {
            const span =  document.createElement("span")
            span.innerHTML = i+1
            window.onload = (evt) =>{
                pageNumber = 0
                dataWork.getData()
            }
            span.addEventListener("click", (evt) =>{
                pageNumber = i
                dataWork.getData()
            })
            pagination.append(span)
        }
    },
    windowLoader(){}
}

UI.buttonInit()
UI.windowLoader()