 export const openModal = (modal) => {
    modal = document.getElementById('auth-modal')
    const layout = document.createElement('div')
    modal.classList.add('d-block')
    layout.classList.add('modal-backdrop')
    layout.classList.add('fade')
    document.body.append(layout)
    // document.body.insertAdjacentHTML('beforeend', `
    //     <div class="modal-backdrop fade"></div>
    // `)
    // modal.classList.add('d-block')

    setTimeout(() => {
        // const layout = document.querySelector('.modal-backdrop')
        layout.classList.add('show')
        modal.classList.add('show')
    }, 100)
}
export const closeModal = (modal) => {
    const layout = document.querySelector('.modal-backdrop')
    modal.classList.remove('show')
    layout && layout.classList.remove('show')
    

   setTimeout(() => {
    modal.classList.remove('d-block')
    layout && layout.remove()
   }, 500)
}